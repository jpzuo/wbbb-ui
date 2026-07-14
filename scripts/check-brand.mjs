import { readdirSync, readFileSync } from 'node:fs'
import { dirname, extname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const scanRoots = ['.github', 'docs', 'examples', 'packages', 'scripts']
const rootFiles = ['README.md', 'CHANGELOG.md', 'LICENSE', 'package.json', 'package-lock.json', 'tsconfig.base.json', 'stylelint.config.cjs', 'eslint.config.js', 'playwright.config.ts', 'packages/wbbb-ui/LICENSE']
const textExtensions = new Set(['.cjs', '.css', '.d.ts', '.html', '.js', '.json', '.md', '.mjs', '.scss', '.ts', '.tsx', '.vue', '.yaml', '.yml'])
const ignoredPaths = new Set(['docs/migration.md', 'docs/en/migration.md'])
const legacyName = ['ha', 'lo'].join('')
const legacyPackage = `${legacyName}-ui`
const legacyPascal = `${legacyName.slice(0, 1).toUpperCase()}${legacyName.slice(1)}`
const legacyPatterns = [legacyPackage, legacyPascal, `${legacyName}-`, `--${legacyName}-`, `${legacyName.toUpperCase()}_`]
const errors = []

function visit(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === 'coverage' || entry.name === 'cache') continue
    const path = join(directory, entry.name)
    if (entry.isDirectory()) {
      visit(path)
      continue
    }
    if (!textExtensions.has(extname(entry.name))) continue
    checkFile(path)
  }
}

function checkFile(path) {
  const file = relative(root, path).replaceAll('\\', '/')
  if (ignoredPaths.has(file)) return
  const source = readFileSync(path, 'utf8')
  for (const pattern of legacyPatterns) {
    if (source.includes(pattern)) errors.push(`${file} contains retired brand form: ${pattern}`)
  }
}

for (const directory of scanRoots) visit(join(root, directory))
for (const file of rootFiles) checkFile(join(root, file))

if (errors.length) {
  console.error('Brand check failed:')
  errors.forEach((error) => console.error(`- ${error}`))
  process.exit(1)
}

console.log('Brand check passed.')
