import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const rawName = process.argv[2]

if (!rawName) {
  console.error('Usage: npm run generate:component -- component-name')
  process.exit(1)
}

const kebab = rawName
  .replace(/^wbbb-/, '')
  .replace(/[A-Z]/g, (value) => `-${value.toLowerCase()}`)
  .replace(/^-/, '')

if (!/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(kebab)) {
  console.error('Component name must be kebab-case, for example: button or date-picker.')
  process.exit(1)
}

const dirName = `wbbb-${kebab}`
const pascal = `Wbbb${kebab.split('-').map((part) => part[0].toUpperCase() + part.slice(1)).join('')}`
const workspaceRoot = process.cwd()
const packageRoot = join(workspaceRoot, 'packages', 'wbbb-ui')
const componentDir = join(packageRoot, 'components', dirName)
const docsDir = join(workspaceRoot, 'docs', 'components')
const playgroundPageDir = join(workspaceRoot, 'examples', 'playground', 'src', 'pages', kebab)
const testDir = join(componentDir, '__tests__')

if (existsSync(componentDir)) {
  console.error(`${dirName} already exists.`)
  process.exit(1)
}

mkdirSync(componentDir, { recursive: true })
mkdirSync(docsDir, { recursive: true })
mkdirSync(playgroundPageDir, { recursive: true })
mkdirSync(testDir, { recursive: true })

writeFileSync(
  join(componentDir, 'props.ts'),
  `import type { WbbbCommonProps } from '../../src/shared/types'\n\nexport interface ${pascal}Props extends WbbbCommonProps {}\n`
)

writeFileSync(
  join(componentDir, 'index.ts'),
  `import ${pascal} from './${dirName}.vue'\n\nexport { ${pascal} }\nexport default ${pascal}\nexport type * from './props'\n`
)

writeFileSync(
  join(componentDir, `${dirName}.vue`),
  `<template>\n  <view class="${dirName}" :class="customClass" :style="customStyle"><slot /></view>\n</template>\n\n<script setup lang="ts">\nimport type { ${pascal}Props } from './props'\n\nwithDefaults(defineProps<${pascal}Props>(), {\n  customClass: '',\n  customStyle: ''\n})\n</script>\n\n<style lang="scss">\n@use "./style.scss";\n</style>\n`
)

writeFileSync(
  join(componentDir, 'style.scss'),
  `@use "../../src/styles/tokens.scss";\n\n.${dirName} {\n  color: var(--wbbb-color-text);\n  font-family: var(--wbbb-font-family);\n}\n`
)

writeFileSync(
  join(testDir, `${kebab}.test.ts`),
  `import { existsSync } from 'node:fs'\nimport { dirname, join } from 'node:path'\nimport { fileURLToPath } from 'node:url'\nimport { describe, expect, it } from 'vitest'\n\nconst currentDir = dirname(fileURLToPath(import.meta.url))\n\ndescribe('${pascal}', () => {\n  it('keeps the component contract files in place', () => {\n    expect(existsSync(join(currentDir, '..', '${dirName}.vue'))).toBe(true)\n    expect(existsSync(join(currentDir, '..', 'props.ts'))).toBe(true)\n    expect(existsSync(join(currentDir, '..', 'style.scss'))).toBe(true)\n  })\n})\n`
)

writeFileSync(
  join(docsDir, `${kebab}.md`),
  `# ${pascal}\n\n## Full Import\n\n\`\`\`ts\nimport WbbbUI from 'wbbb-ui'\nimport 'wbbb-ui/styles'\n\napp.use(WbbbUI)\n\`\`\`\n\n## On-Demand Import\n\n\`\`\`ts\nimport { ${pascal} } from 'wbbb-ui/components/${kebab}'\nimport 'wbbb-ui/styles/${kebab}'\n\`\`\`\n\n## Basic Usage\n\n\`\`\`vue\n<template>\n  <${dirName}>${pascal}</${dirName}>\n</template>\n\`\`\`\n\n## Props\n\n| Name | Type | Default | Description |\n| --- | --- | --- | --- |\n| customClass | string | '' | Extra class name. |\n| customStyle | string | '' | Inline style text. |\n`
)

writeFileSync(
  join(playgroundPageDir, 'index.vue'),
  `<template>\n  <view class="page">\n    <wbbb-navbar title="${pascal}" />\n    <view class="section">\n      <${dirName}>${pascal}</${dirName}>\n    </view>\n  </view>\n</template>\n\n<style lang="scss">\n.page {\n  box-sizing: border-box;\n  min-height: 100vh;\n  padding: 24rpx;\n}\n\n.section {\n  background: #fff;\n  border-radius: 16rpx;\n  padding: 24rpx;\n}\n</style>\n`
)

appendOnce(join(packageRoot, 'src', 'components.ts'), `export * from '../components/${dirName}'\n`)
appendOnce(
  join(packageRoot, 'src', 'styles', 'index.scss'),
  `@use "../../components/${dirName}/style.scss" as ${dirName.replace(/-/g, '_')};\n`
)
addInstallerEntry(join(packageRoot, 'src', 'installer.ts'), dirName, pascal)
addPackageExports(join(packageRoot, 'package.json'), kebab, dirName)
addPlaygroundPage(join(workspaceRoot, 'examples', 'playground', 'src', 'pages.json'), kebab, pascal)

console.log(`Created ${dirName} with source, style, test, docs, playground demo, package exports, and installer entry.`)

function appendOnce(file, line) {
  const content = readFileSync(file, 'utf8')

  if (!content.includes(line)) {
    writeFileSync(file, `${content.trimEnd()}\n${line}`)
  }
}

function addInstallerEntry(file, dirName, pascal) {
  const importLine = `import ${pascal} from '../components/${dirName}'`
  const entryLine = `  ['${pascal}', ${pascal}]`
  let content = readFileSync(file, 'utf8')

  if (!content.includes(importLine)) {
    const lines = content.split('\n')
    const lastImportIndex = lines.reduce((last, line, index) => line.startsWith('import ') ? index : last, -1)

    lines.splice(lastImportIndex + 1, 0, importLine)
    content = lines.join('\n')
  }

  if (!content.includes(entryLine)) {
    const nextContent = content.replace(/\n\]\n\nexport function install/, `,\n${entryLine}\n]\n\nexport function install`)

    if (nextContent === content) {
      throw new Error('Unable to locate componentEntries in src/installer.ts.')
    }

    content = nextContent
  }

  writeFileSync(file, content)
}

function addPackageExports(file, kebab, dirName) {
  const packageJson = JSON.parse(readFileSync(file, 'utf8'))

  packageJson.exports ??= {}
  packageJson.exports[`./components/${kebab}`] = {
    types: `./dist/components/${dirName}/index.d.ts`,
    import: `./dist/components/${dirName}/index.js`
  }
  packageJson.exports[`./styles/${kebab}`] = `./components/${dirName}/style.scss`

  writeJson(file, packageJson)
}

function addPlaygroundPage(file, kebab, pascal) {
  const pagesJson = JSON.parse(readFileSync(file, 'utf8'))
  const path = `pages/${kebab}/index`

  pagesJson.pages ??= []

  if (!pagesJson.pages.some((page) => page.path === path)) {
    pagesJson.pages.push({
      path,
      style: {
        navigationBarTitleText: pascal
      }
    })
  }

  writeJson(file, pagesJson)
}

function writeJson(file, value) {
  writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`)
}
