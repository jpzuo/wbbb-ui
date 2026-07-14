import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const catalogPath = join(root, 'examples', 'playground', 'src', 'shared', 'component-catalog.ts')
const catalog = readFileSync(catalogPath, 'utf8')
const components = [...catalog.matchAll(/\{ category: '([^']+)', description: '([^']*)', name: '([^']+)', slug: '([^']+)' \}/g)]
  .map(([, category, description, name, slug]) => ({ category, description, name, slug }))
const requiredFiles = [
  'docs/index.md',
  'docs/design.md',
  'docs/services.md',
  'docs/changelog.md',
  'docs/deployment.md',
  'docs/.vitepress/config.ts',
  'docs/.vitepress/theme/index.ts',
  'docs/.vitepress/theme/components/ComponentDoc.vue'
]
const missing = requiredFiles.filter((path) => !existsSync(join(root, path)))

if (components.length !== 47 || new Set(components.map((component) => component.slug)).size !== 47) {
  missing.push(`component manifest must contain 47 unique entries; found ${components.length}`)
}

for (const component of components) {
  const page = join(root, 'docs', 'components', `${component.slug}.md`)
  const expected = `<ComponentDoc slug="${component.slug}" section="api" />`
  if (!existsSync(page) || !readFileSync(page, 'utf8').includes(expected)) {
    missing.push(`component document for ${component.slug}`)
  }
}

if (missing.length) {
  console.error(`Documentation contract failed. Missing: ${missing.join(', ')}`)
  process.exit(1)
}

console.log(`Documentation contract passed for ${components.length} components.`)
