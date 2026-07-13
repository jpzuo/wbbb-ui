import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const catalog = readFileSync(join(root, 'examples', 'playground', 'src', 'shared', 'component-catalog.ts'), 'utf8')
const demo = readFileSync(join(root, 'examples', 'playground', 'src', 'components', 'component-demo.vue'), 'utf8')
const detail = readFileSync(join(root, 'examples', 'playground', 'src', 'pages', 'component', 'detail.vue'), 'utf8')
const api = readFileSync(join(root, 'examples', 'playground', 'src', 'pages', 'component', 'api.vue'), 'utf8')
const slugs = [...catalog.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1])
const demoSlugs = [...demo.matchAll(/slug === '([^']+)'/g)].map((match) => match[1])
const missingDemo = slugs.filter((slug) => !demoSlugs.includes(slug))
const extras = demoSlugs.filter((slug) => !slugs.includes(slug))

if (slugs.length !== 47 || new Set(slugs).size !== 47) {
  throw new Error(`Playground catalog must contain 47 unique components; found ${slugs.length}.`)
}

if (missingDemo.length || extras.length) {
  throw new Error(`Playground demo contract mismatch. Missing: ${missingDemo.join(', ') || 'none'}; extra: ${extras.join(', ') || 'none'}.`)
}

for (const [name, source, marker] of [
  ['detail page', detail, 'ComponentDemo'],
  ['API page', api, 'componentBySlug']
]) {
  if (!source.includes(marker)) {
    throw new Error(`${name} must consume the shared component registry.`)
  }
}

console.log(`Playground contract passed for ${slugs.length} components.`)
