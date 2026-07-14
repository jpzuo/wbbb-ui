import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const packageRoot = join(root, 'packages', 'wbbb-ui')
const componentsRoot = join(packageRoot, 'components')
const packageJsonPath = join(packageRoot, 'package.json')
const styleIndexPath = join(packageRoot, 'src', 'styles', 'index.scss')
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'))

const components = readdirSync(componentsRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name.startsWith('wbbb-'))
  .map((entry) => entry.name)
  .sort()

const baseExports = {
  '.': {
    types: './dist/src/index.d.ts',
    import: './dist/src/index.js'
  },
  './components': {
    types: './dist/src/components.d.ts',
    import: './dist/src/components.js'
  },
  './components/*': {
    types: './dist/components/wbbb-*/index.d.ts',
    import: './dist/components/wbbb-*/index.js'
  },
  './services': {
    types: './dist/src/services/index.d.ts',
    import: './dist/src/services/index.js'
  },
  './services/*': {
    types: './dist/src/services/*.d.ts',
    import: './dist/src/services/*.js'
  },
  './services/action-sheet': {
    types: './dist/src/services/action-sheet.d.ts',
    import: './dist/src/services/action-sheet.js'
  },
  './services/dialog': {
    types: './dist/src/services/dialog.d.ts',
    import: './dist/src/services/dialog.js'
  },
  './services/notify': {
    types: './dist/src/services/notify.d.ts',
    import: './dist/src/services/notify.js'
  },
  './services/toast': {
    types: './dist/src/services/toast.d.ts',
    import: './dist/src/services/toast.js'
  },
  './icons': {
    types: './dist/src/icons.d.ts',
    import: './dist/src/icons.js'
  },
  './locale': {
    types: './dist/src/locale.d.ts',
    import: './dist/src/locale.js'
  },
  './styles': './dist/src/styles/index.scss',
  './styles/*': './dist/components/wbbb-*/style.scss',
  './theme': './dist/src/styles/tokens.scss'
}

for (const component of components) {
  const importName = component.replace(/^wbbb-/, '')
  baseExports[`./components/${importName}`] = {
    types: `./dist/components/${component}/index.d.ts`,
    import: `./dist/components/${component}/index.js`
  }
  baseExports[`./styles/${importName}`] = `./dist/components/${component}/style.scss`
}

packageJson.exports = baseExports
writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`)
writeFileSync(
  styleIndexPath,
  [
    '@use "./tokens.scss" as tokens;',
    '@use "./mixins.scss" as mixins;',
    ...components.map((component) => `@use "../../components/${component}/style.scss" as ${component.replace(/-/g, "_")};`)
  ].join('\n') + '\n'
)
console.log(`Synced package exports for ${components.length} components.`)
