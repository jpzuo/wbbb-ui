import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { basename, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const packageRoot = join(root, 'packages', 'wbbb-ui')
const componentsRoot = join(packageRoot, 'components')
const packageJson = JSON.parse(readFileSync(join(packageRoot, 'package.json'), 'utf8'))
const styleIndex = readFileSync(join(packageRoot, 'src', 'styles', 'index.scss'), 'utf8')
const rootIndex = readFileSync(join(packageRoot, 'src', 'index.ts'), 'utf8')
const componentsIndex = readFileSync(join(packageRoot, 'src', 'components.ts'), 'utf8')
const installerIndex = readFileSync(join(packageRoot, 'src', 'installer.ts'), 'utf8')
const catalogPath = join(root, 'examples', 'playground', 'src', 'shared', 'component-catalog.ts')

const components = readdirSync(componentsRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name.startsWith('wbbb-'))
  .map((entry) => entry.name)
  .sort()

const missing = []
const expectedComponentExports = {}
const expectedStyleExports = {}

for (const component of components) {
  const componentDir = join(componentsRoot, component)
  const importName = component.replace(/^wbbb-/, '')
  const pascalName = `Wbbb${importName.split('-').map((part) => part[0].toUpperCase() + part.slice(1)).join('')}`
  const componentExportPath = `./components/${importName}`
  const styleExportPath = `./styles/${importName}`

  expectedComponentExports[componentExportPath] = {
    types: `./dist/components/${component}/index.d.ts`,
    import: `./dist/components/${component}/index.js`
  }
  expectedStyleExports[styleExportPath] = `./dist/components/${component}/style.scss`

  for (const file of ['index.ts', `${component}.vue`, 'props.ts', 'style.scss']) {
    if (!existsSync(join(componentDir, file))) {
      missing.push(`${component}/${file}`)
    }
  }

  if (!styleIndex.includes(`../../components/${component}/style.scss`)) {
    missing.push(`src/styles/index.scss import for ${component}`)
  }

  if (!componentsIndex.includes(`../components/${component}`)) {
    missing.push(`src/components.ts export for ${component}`)
  }

  if (!installerIndex.includes(pascalName) || !installerIndex.includes(`from '../components/${component}'`)) {
    missing.push(`src/installer.ts import for ${pascalName}`)
  }

  if (!installerIndex.includes(`['${pascalName}', ${pascalName}]`)) {
    missing.push(`src/installer.ts registration for ${pascalName}`)
  }

  if (!existsSync(join(componentsRoot, component, 'index.ts'))) {
    missing.push(`wbbb-ui/components/${importName} entry`)
  }

  const indexSource = readFileSync(join(componentDir, 'index.ts'), 'utf8')
  const vueFiles = readdirSync(componentDir)
    .filter((file) => file.endsWith('.vue'))
    .map((file) => basename(file, '.vue'))

  for (const fileName of vueFiles) {
    const publicName = `Wbbb${fileName.replace(/^wbbb-/, '').split('-').map((part) => part[0].toUpperCase() + part.slice(1)).join('')}`

    if (!indexSource.includes(publicName)) {
      missing.push(`${component}/index.ts export for ${publicName}`)
    }

    if (!installerIndex.includes(`['${publicName}', ${publicName}]`)) {
      missing.push(`src/installer.ts registration for ${publicName}`)
    }
  }
}

if (rootIndex.includes("styles/index.scss")) {
  missing.push('src/index.ts must not import full styles')
}

if (!packageJson.sideEffects?.includes('**/*.scss')) {
  missing.push('package.json must mark scss files as side effects')
}

if (packageJson.exports?.['./components/*']?.import !== './dist/components/wbbb-*/index.js') {
  missing.push('package.json wildcard export for ./components/*')
}

if (packageJson.exports?.['./services/*']?.import !== './dist/src/services/*.js') {
  missing.push('package.json wildcard export for ./services/*')
}

if (packageJson.exports?.['./styles/*'] !== './dist/components/wbbb-*/style.scss') {
  missing.push('package.json wildcard export for ./styles/*')
}

if (packageJson.exports?.['./icons']?.import !== './dist/src/icons.js') {
  missing.push('package.json export for ./icons')
}

if (packageJson.exports?.['./locale']?.import !== './dist/src/locale.js') {
  missing.push('package.json export for ./locale')
}

for (const [path, target] of Object.entries(expectedComponentExports)) {
  const actual = packageJson.exports?.[path]
  if (actual?.types !== target.types || actual?.import !== target.import) {
    missing.push(`package.json export for ${path}`)
  }
}

for (const [path, target] of Object.entries(expectedStyleExports)) {
  if (packageJson.exports?.[path] !== target) {
    missing.push(`package.json style export for ${path}`)
  }
}

const expectedRootEntries = {
  main: './dist/src/index.js',
  module: './dist/src/index.js',
  types: './dist/src/index.d.ts'
}

for (const [field, value] of Object.entries(expectedRootEntries)) {
  if (packageJson[field] !== value) {
    missing.push(`package.json ${field} must point to ${value}`)
  }
}

if (existsSync(catalogPath)) {
  const catalogSource = readFileSync(catalogPath, 'utf8')
  const catalogSlugs = [...catalogSource.matchAll(/slug:\s*'([^']+)'/g)].map((match) => `wbbb-${match[1]}`).sort()
  const duplicateCatalogEntries = catalogSlugs.filter((entry, index) => catalogSlugs.indexOf(entry) !== index)

  if (catalogSlugs.length !== components.length) {
    missing.push(`Playground catalog count (${catalogSlugs.length}) must match component count (${components.length})`)
  }

  for (const component of components) {
    if (!catalogSlugs.includes(component)) {
      missing.push(`Playground catalog entry for ${component}`)
    }
  }

  if (duplicateCatalogEntries.length > 0) {
    missing.push(`duplicate Playground catalog entries: ${[...new Set(duplicateCatalogEntries)].join(', ')}`)
  }
}

if (missing.length > 0) {
  console.error('Export check failed:')
  missing.forEach((item) => console.error(`- ${item}`))
  process.exit(1)
}

console.log(`Export check passed for ${components.length} components.`)
