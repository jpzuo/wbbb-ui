import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const packageRoot = join(root, 'packages', 'wbbb-ui')
const sandbox = join(root, '.wbbb-ui-consumer-smoke')
const cache = join(root, '.npm-cache')
const packageManager = process.env.npm_execpath

if (!packageManager) {
  throw new Error('npm_execpath is required to run the consumer smoke test.')
}

rmSync(sandbox, { force: true, recursive: true })
mkdirSync(join(sandbox, 'src', 'pages', 'index'), { recursive: true })

function runNpm(args, cwd, quiet = false) {
  return execFileSync(process.execPath, [packageManager, '--cache', cache, ...args], {
    cwd,
    encoding: quiet ? 'utf8' : undefined,
    stdio: quiet ? 'pipe' : 'inherit'
  })
}

try {
  const packOutput = runNpm(['pack', '--json', '--pack-destination', sandbox], packageRoot, true)
  const jsonStart = packOutput.indexOf('[\n')
  if (jsonStart < 0) {
    throw new Error('npm pack did not return JSON output.')
  }
  const archive = JSON.parse(packOutput.slice(jsonStart))[0].filename
  const tarball = join(sandbox, archive)

  if (!existsSync(tarball)) {
    throw new Error(`npm pack did not create ${archive}`)
  }

  writeFileSync(join(sandbox, 'package.json'), `${JSON.stringify({
    name: 'wbbb-ui-consumer-smoke',
    private: true,
    type: 'module',
    dependencies: {
      'wbbb-ui': `file:${tarball.replace(/\\/g, '/')}`
    }
  }, null, 2)}\n`)
  writeFileSync(join(sandbox, 'index.html'), '<!doctype html><html><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head><body><div id="app"></div><script type="module" src="/src/main.ts"></script></body></html>\n')
  writeFileSync(join(sandbox, 'vite.config.ts'), "import uniModule from '@dcloudio/vite-plugin-uni'\nimport { defineConfig } from 'vite'\n\nconst uni = typeof uniModule === 'function' ? uniModule : uniModule.default\n\nexport default defineConfig({ plugins: [uni()] })\n")
  writeFileSync(join(sandbox, 'src', 'manifest.json'), '{"name":"Wbbb UI consumer smoke","appid":"__UNI__WBBB_SMOKE","versionName":"1.0.0","versionCode":"100"}\n')
  writeFileSync(join(sandbox, 'src', 'pages.json'), '{"pages":[{"path":"pages/index/index","style":{"navigationBarTitleText":"Wbbb UI"}}]}\n')
  writeFileSync(join(sandbox, 'src', 'main.ts'), "import { createSSRApp } from 'vue'\nimport App from './App.vue'\n\nexport function createApp() { const app = createSSRApp(App); return { app } }\n")
  writeFileSync(join(sandbox, 'src', 'App.vue'), '<template><slot /></template>\n<style lang="scss">@use "wbbb-ui/styles/button";</style>\n')
  writeFileSync(join(sandbox, 'src', 'pages', 'index', 'index.vue'), '<template><view><wbbb-button type="primary" @click="clicked = true">Consumer {{ clicked ? "ready" : "smoke" }}</wbbb-button></view></template>\n<script setup lang="ts">\nimport { ref } from "vue"\nimport { WbbbButton } from "wbbb-ui/components/button"\nimport { showToast } from "wbbb-ui/services/toast"\nconst clicked = ref(false)\nvoid WbbbButton\nvoid showToast\n</script>\n')

  runNpm(['install', '--ignore-scripts', '--legacy-peer-deps', '--no-package-lock'], sandbox)
  const runtimeDependencies = Object.keys(JSON.parse(readFileSync(join(packageRoot, 'package.json'), 'utf8')).dependencies ?? {})

  for (const dependency of runtimeDependencies) {
    const installed = [
      join(sandbox, 'node_modules', dependency, 'package.json'),
      join(sandbox, 'node_modules', 'wbbb-ui', 'node_modules', dependency, 'package.json')
    ].some(existsSync)

    if (!installed) {
      throw new Error(`Packaged consumer did not install runtime dependency: ${dependency}`)
    }
  }

  const uniCli = join(root, 'node_modules', '@dcloudio', 'vite-plugin-uni', 'bin', 'uni.js')
  for (const target of ['h5', 'app', 'mp-weixin', 'mp-alipay', 'mp-toutiao']) {
    execFileSync(process.execPath, [uniCli, 'build', '-p', target], {
      cwd: sandbox,
      stdio: 'inherit'
    })

    if (!existsSync(join(sandbox, 'dist', 'build', target))) {
      throw new Error(`The packaged consumer did not produce a ${target} build output.`)
    }
  }

  console.log('Packaged consumer smoke test passed for H5, App Vue, WeChat, Alipay, and Douyin.')
} finally {
  rmSync(sandbox, { force: true, recursive: true })
}
