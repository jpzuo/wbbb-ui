import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const rawName = process.argv[2]

if (!rawName) {
  console.error('Usage: npm run generate:component -- component-name')
  process.exit(1)
}

const kebab = rawName
  .replace(/^halo-/, '')
  .replace(/[A-Z]/g, (value) => `-${value.toLowerCase()}`)
  .replace(/^-/, '')
const dirName = `halo-${kebab}`
const pascal = `Halo${kebab.split('-').map((part) => part[0].toUpperCase() + part.slice(1)).join('')}`
const packageRoot = join(process.cwd(), 'packages', 'halo-ui')
const componentDir = join(packageRoot, 'components', dirName)

if (existsSync(componentDir)) {
  console.error(`${dirName} already exists.`)
  process.exit(1)
}

mkdirSync(componentDir, { recursive: true })

writeFileSync(
  join(componentDir, 'props.ts'),
  `import type { HaloCommonProps } from '../../src/shared/types'\n\nexport interface ${pascal}Props extends HaloCommonProps {}\n`
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
  `@use "../../src/styles/tokens.scss";\n\n.${dirName} {\n  color: var(--halo-color-text);\n  font-family: var(--halo-font-family);\n}\n`
)

appendOnce(join(packageRoot, 'src', 'components.ts'), `export * from '../components/${dirName}'\n`)
appendOnce(join(packageRoot, 'src', 'styles', 'index.scss'), `@use "../../components/${dirName}/style.scss";\n`)

console.log(`Created ${dirName}. Add it to src/installer.ts when it should be included in full app.use installation.`)

function appendOnce(file, line) {
  const content = readFileSync(file, 'utf8')

  if (!content.includes(line)) {
    writeFileSync(file, `${content.trimEnd()}\n${line}`)
  }
}

