import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const packageRoot = join(process.cwd(), 'packages', 'halo-ui')
const componentsRoot = join(packageRoot, 'components')
const styleIndex = readFileSync(join(packageRoot, 'src', 'styles', 'index.scss'), 'utf8')
const rootIndex = readFileSync(join(packageRoot, 'src', 'index.ts'), 'utf8')
const componentsIndex = readFileSync(join(packageRoot, 'src', 'components.ts'), 'utf8')

const components = readdirSync(componentsRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name.startsWith('halo-'))
  .map((entry) => entry.name)
  .sort()

const missing = []

for (const component of components) {
  const componentDir = join(componentsRoot, component)
  const importName = component.replace(/^halo-/, '')

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

  if (!existsSync(join(componentsRoot, component, 'index.ts'))) {
    missing.push(`halo-ui/components/${importName} entry`)
  }
}

if (rootIndex.includes("styles/index.scss")) {
  missing.push('src/index.ts must not import full styles')
}

if (missing.length > 0) {
  console.error('Export check failed:')
  missing.forEach((item) => console.error(`- ${item}`))
  process.exit(1)
}

console.log(`Export check passed for ${components.length} components.`)

