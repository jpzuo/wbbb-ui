import { existsSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const h5Only = process.argv.includes('--h5-only')
const limits = {
  h5Css: 450 * 1024,
  h5Js: 1536 * 1024,
  h5Media: 768 * 1024,
  package: 300 * 1024,
  packageFiles: 300
}

function files(directory) {
  if (!existsSync(directory)) return []
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? files(path) : [path]
  })
}

function total(paths) {
  return paths.reduce((sum, path) => sum + statSync(path).size, 0)
}

function assertBudget(label, paths, limit) {
  const size = total(paths)
  const largest = [...paths].sort((left, right) => statSync(right).size - statSync(left).size).slice(0, 3)
  console.log(`${label}: ${(size / 1024).toFixed(1)} KiB / ${(limit / 1024).toFixed(0)} KiB`)
  largest.forEach((path) => console.log(`  ${(statSync(path).size / 1024).toFixed(1)} KiB ${relative(root, path)}`))
  if (size > limit) {
    throw new Error(`${label} exceeded its budget.`)
  }
}

if (!h5Only) {
  const packageFiles = [
    ...files(join(root, 'packages', 'wbbb-ui', 'dist')),
    ...['README.md', 'CHANGELOG.md', 'LICENSE', 'package.json'].map((file) => join(root, 'packages', 'wbbb-ui', file)).filter(existsSync)
  ]
  assertBudget('npm publish payload', packageFiles, limits.package)
  console.log(`npm publish files: ${packageFiles.length} / ${limits.packageFiles}`)
  if (packageFiles.length > limits.packageFiles) {
    throw new Error('npm publish payload exceeded its file-count budget.')
  }
}

const h5Root = join(root, 'examples', 'playground', 'dist', 'build', 'h5')
if (existsSync(h5Root)) {
  const h5Files = files(h5Root)
  assertBudget('H5 JavaScript', h5Files.filter((path) => path.endsWith('.js')), limits.h5Js)
  assertBudget('H5 CSS', h5Files.filter((path) => path.endsWith('.css')), limits.h5Css)
  assertBudget('H5 media', h5Files.filter((path) => /\.(png|jpe?g|webp|gif|svg)$/i.test(path)), limits.h5Media)
} else if (h5Only) {
  throw new Error('H5 output is required for the H5 budget check.')
}
