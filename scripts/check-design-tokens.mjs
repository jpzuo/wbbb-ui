import { readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(fileURLToPath(new URL('..', import.meta.url)))
const targets = [join(root, 'packages', 'halo-ui', 'components'), join(root, 'packages', 'halo-ui', 'src', 'styles'), join(root, 'examples', 'playground', 'src')]
const allowed = new Set([join(root, 'packages', 'halo-ui', 'src', 'styles', 'tokens.scss')])
const rawColor = /#[0-9a-f]{3,8}\b|rgba?\(/i
const errors = []

function visit(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'uni_modules') {
        continue
      }
      visit(path)
      continue
    }

    if (!/\.(scss|vue)$/.test(entry.name) || allowed.has(path)) {
      continue
    }

    readFileSync(path, 'utf8').split(/\r?\n/).forEach((line, index) => {
      if (rawColor.test(line)) {
        errors.push(`${relative(root, path)}:${index + 1} contains a raw color; use a --halo-* token instead`)
      }
    })
  }
}

targets.forEach(visit)

if (errors.length > 0) {
  console.error('Design token check failed:')
  errors.forEach((error) => console.error(`- ${error}`))
  process.exit(1)
}

console.log('Design token check passed.')
