import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const source = join(root, 'packages', 'wbbb-ui')
const target = join(root, 'dist', 'uni_modules', 'wbbb-ui')
const sourcePackageJson = JSON.parse(readFileSync(join(source, 'package.json'), 'utf8'))

if (existsSync(target)) {
  rmSync(target, { force: true, recursive: true })
}

mkdirSync(target, { recursive: true })

for (const name of ['components', 'src', 'package.json', 'README.md', 'CHANGELOG.md', 'LICENSE']) {
  cpSync(join(source, name), join(target, name), { recursive: true })
}

for (const dependency of Object.keys(sourcePackageJson.dependencies ?? {})) {
  const dependencySource = join(root, 'node_modules', dependency)

  if (!existsSync(dependencySource)) {
    throw new Error(`Cannot prepare uni_modules package: missing runtime dependency ${dependency}`)
  }

  cpSync(dependencySource, join(target, 'node_modules', dependency), { recursive: true })
}

const packageJsonPath = join(target, 'package.json')
const packageJson = sourcePackageJson
packageJson.style = './src/styles/index.scss'
packageJson.exports['./styles'] = './src/styles/index.scss'
packageJson.exports['./styles/*'] = './components/wbbb-*/style.scss'
packageJson.exports['./theme'] = './src/styles/tokens.scss'
Object.keys(packageJson.exports)
  .filter((key) => key.startsWith('./styles/') && key !== './styles/*')
  .forEach((key) => {
    packageJson.exports[key] = `./components/wbbb-${key.slice('./styles/'.length)}/style.scss`
  })
writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`)

console.log(`Prepared uni_modules package at ${target}`)
