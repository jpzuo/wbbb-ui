import { execFileSync } from 'node:child_process'
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, unlinkSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const packageRoot = join(root, 'packages', 'halo-ui')
const output = join(packageRoot, 'dist')

execFileSync(process.execPath, [join(root, 'scripts', 'generate-icons.mjs')], { cwd: root, stdio: 'inherit' })

rmSync(output, { force: true, recursive: true })
mkdirSync(output, { recursive: true })

execFileSync(process.execPath, [join(root, 'node_modules', 'vue-tsc', 'bin', 'vue-tsc.js'), '-p', 'tsconfig.build.json'], {
  cwd: packageRoot,
  stdio: 'inherit'
})

execFileSync(process.execPath, [join(root, 'node_modules', 'typescript', 'bin', 'tsc'), '-p', 'tsconfig.runtime.json'], {
  cwd: packageRoot,
  stdio: 'inherit'
})

for (const name of ['components', 'src']) {
  const source = join(packageRoot, name)
  const target = join(output, name)

  if (existsSync(source)) {
    cpSync(source, target, {
      filter: (path) => {
        if (!/\.[^./\\]+$/.test(path)) {
          return true
        }

        return /\.(vue|scss|png|jpe?g|webp|gif|svg|ttf|woff2?|woff)$/i.test(path)
      },
      recursive: true
    })
  }
}

function visit(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) {
      visit(path)
      continue
    }

    if (entry.name === 'props.js' || entry.name.endsWith('.vue.d.ts')) {
      unlinkSync(path)
    }
  }
}

visit(output)

// Each component entry references a shared Vue module declaration instead of
// shipping one generated declaration beside every SFC.
writeFileSync(join(output, 'vue.d.ts'), "declare module '*.vue' {\n  import type { DefineComponent } from 'vue'\n  const component: DefineComponent\n  export default component\n}\n")

function addVueReference(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) {
      addVueReference(path)
      continue
    }

    if (entry.name !== 'index.d.ts' || !path.includes(`${join('dist', 'components')}`)) {
      continue
    }

    const relativeVueTypes = '../../vue.d.ts'
    const source = readFileSync(path, 'utf8')
    writeFileSync(path, `/// <reference path="${relativeVueTypes}" />\n${source}`)
  }
}

addVueReference(join(output, 'components'))

console.log('Built Halo UI ESM source distribution and declarations.')
