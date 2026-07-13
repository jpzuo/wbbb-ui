import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, rmdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const source = join(root, 'packages', 'halo-ui')
const lock = join(root, 'examples', 'playground', '.halo-ui-sync.lock')
const targets = [
  join(root, 'examples', 'playground', 'uni_modules', 'halo-ui'),
  join(root, 'examples', 'playground', 'src', 'uni_modules', 'halo-ui')
]

const startedAt = Date.now()
while (true) {
  try {
    mkdirSync(lock)
    break
  } catch (error) {
    if (error?.code !== 'EEXIST' || Date.now() - startedAt > 60_000) {
      throw error
    }

    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 100)
  }
}

try {
  for (const target of targets) {
    if (existsSync(target)) {
      rmSync(target, { force: true, maxRetries: 3, recursive: true, retryDelay: 100 })
    }

    mkdirSync(target, { recursive: true })

    for (const name of ['components', 'src', 'package.json', 'README.md', 'CHANGELOG.md', 'LICENSE']) {
      cpSync(join(source, name), join(target, name), { recursive: true })
    }

    const packageJsonPath = join(target, 'package.json')
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'))
    packageJson.style = './src/styles/index.scss'
    packageJson.exports['./styles'] = './src/styles/index.scss'
    packageJson.exports['./styles/*'] = './components/halo-*/style.scss'
    // uni-app injects a package's ./theme export into every SFC style block.
    // The Playground loads tokens once from its application root instead.
    packageJson.exports['./theme'] = './src/styles/theme.scss'
    Object.keys(packageJson.exports)
      .filter((key) => key.startsWith('./styles/') && key !== './styles/*')
      .forEach((key) => {
        packageJson.exports[key] = `./components/halo-${key.slice('./styles/'.length)}/style.scss`
      })
    writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`)

    const stylesRoot = join(target, 'components')
    const stripTokenImports = (directory) => {
      for (const entry of readdirSync(directory, { withFileTypes: true })) {
        const path = join(directory, entry.name)
        if (entry.isDirectory()) {
          stripTokenImports(path)
        } else if (entry.name.endsWith('.scss')) {
          writeFileSync(path, readFileSync(path, 'utf8').replace('@use "../../src/styles/tokens.scss";\n', ''))
        }
      }
    }
    stripTokenImports(stylesRoot)
    const motionPath = join(target, 'src', 'styles', 'motion.scss')
    writeFileSync(motionPath, readFileSync(motionPath, 'utf8').replace('@use "./tokens.scss";\n', ''))
    writeFileSync(join(target, 'src', 'styles', 'index.scss'), '@use "./tokens.scss";\n')
    writeFileSync(join(target, 'src', 'styles', 'theme.scss'), '// Playground tokens are loaded from the application root.\n')

    console.log(`Synced playground uni_modules package at ${target}`)
  }
} finally {
  rmdirSync(lock)
}
