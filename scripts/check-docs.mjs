import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const catalogPath = join(root, 'examples', 'playground', 'src', 'shared', 'component-catalog.ts')
const metadataPath = join(root, 'examples', 'playground', 'src', 'shared', 'api-metadata.ts')
const catalog = readFileSync(catalogPath, 'utf8')
const metadata = readFileSync(metadataPath, 'utf8')
const components = [...catalog.matchAll(/\{ category: '([^']+)', description: '([^']*)', enDescription: '([^']*)', name: '([^']+)', slug: '([^']+)', zhName: '([^']+)' \}/g)]
  .map(([, category, description, enDescription, name, slug, zhName]) => ({ category, description, enDescription, name, slug, zhName }))
const requiredFiles = [
  'docs/index.md',
  'docs/design.md',
  'docs/services.md',
  'docs/changelog.md',
  'docs/deployment.md',
  'docs/en/index.md',
  'docs/en/design.md',
  'docs/en/services.md',
  'docs/en/changelog.md',
  'docs/en/deployment.md',
  'docs/api-conventions.md',
  'docs/component-roadmap.md',
  'docs/dependency-risks.md',
  'docs/device-verification.md',
  'docs/en/api-conventions.md',
  'docs/en/component-roadmap.md',
  'docs/en/dependency-risks.md',
  'docs/en/device-verification.md',
  'docs/.vitepress/config.ts',
  'docs/.vitepress/theme/index.ts',
  'docs/.vitepress/theme/components/ComponentDoc.vue'
]
const missing = requiredFiles.filter((path) => !existsSync(join(root, path)))

if (components.length !== 47 || new Set(components.map((component) => component.slug)).size !== 47) {
  missing.push(`component manifest must contain 47 unique entries; found ${components.length}`)
}

const propCount = [...metadata.matchAll(/"name": "/g)].length
const propDescriptions = [...metadata.matchAll(/"description": "([^"]*)"/g)].map(([, description]) => description)
if (propCount === 0 || propDescriptions.length !== propCount || propDescriptions.some((description) => !description.trim())) {
  missing.push(`API metadata must provide a non-empty description for every prop; found ${propDescriptions.length}/${propCount}`)
}

for (const component of components) {
  const page = join(root, 'docs', 'components', `${component.slug}.md`)
  const englishPage = join(root, 'docs', 'en', 'components', `${component.slug}.md`)
  const expected = `<ComponentDoc slug="${component.slug}" section="api" />`
  if (!component.zhName || !component.enDescription) {
    missing.push(`bilingual metadata for ${component.slug}`)
  }
  if (!existsSync(page) || !readFileSync(page, 'utf8').includes(expected)) {
    missing.push(`Chinese component document for ${component.slug}`)
  }
  if (!existsSync(englishPage) || !readFileSync(englishPage, 'utf8').includes(expected)) {
    missing.push(`English component document for ${component.slug}`)
  }
}

if (missing.length) {
  console.error(`Documentation contract failed. Missing: ${missing.join(', ')}`)
  process.exit(1)
}

console.log(`Bilingual documentation contract passed for ${components.length * 2} component pages.`)
