import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const catalogPath = join(root, 'examples', 'playground', 'src', 'shared', 'component-catalog.ts')
const outputPath = join(root, 'docs', 'api.md')
const metadataPath = join(root, 'examples', 'playground', 'src', 'shared', 'api-metadata.ts')
const check = process.argv.includes('--check')
const catalog = readFileSync(catalogPath, 'utf8')
const definitions = [...catalog.matchAll(/\{ category: '([^']+)', description: '([^']*)', name: '([^']+)', slug: '([^']+)' \}/g)]
  .map(([, category, description, name, slug]) => ({ category, description, name, slug }))

function propsFor(slug) {
  const path = join(root, 'packages', 'halo-ui', 'components', `halo-${slug}`, 'props.ts')
  if (!existsSync(path)) return []
  const source = readFileSync(path, 'utf8')
  const body = source.match(/export interface \w+Props[^\{]*\{([\s\S]*?)\n\}/)?.[1] ?? ''

  return [...body.matchAll(/^\s{2}([\w$]+)(\?)?:\s*([^\n]+)$/gm)].map(([, name, optional, type]) => ({
    name,
    required: optional !== '?',
    type: type.trim().replace(/\|/g, '\\|')
  }))
}

function componentSource(slug) {
  const directory = join(root, 'packages', 'halo-ui', 'components', `halo-${slug}`)
  const files = ['halo-' + slug + '.vue']
  const path = files.map((file) => join(directory, file)).find(existsSync)
  return path ? readFileSync(path, 'utf8') : ''
}

function eventsFor(source) {
  const block = source.match(/defineEmits<\{([\s\S]*?)\}>\(\)/)?.[1] ?? ''
  return [...block.matchAll(/^\s*'([^']+)'|^\s*([\w$]+):/gm)].map((match) => match[1] ?? match[2])
}

function slotsFor(source) {
  const slots = new Set()
  for (const match of source.matchAll(/<slot(?:\s+name="([^"]+)")?/g)) {
    slots.add(match[1] ?? 'default')
  }
  return [...slots]
}

function defaultFor(source, prop) {
  const pattern = new RegExp(`(?:^|\\n)\\s*${prop}:\\s*([^,\\n]+)`, 'm')
  return source.match(pattern)?.[1]?.trim() ?? '—'
}

const lines = [
  '# Halo UI API',
  '',
  '> This file is generated from component props and SFC contracts. Run `npm run docs:api` after a public API change.',
  '',
  'All components support `customClass` and `customStyle` through `HaloCommonProps` unless noted otherwise.',
  ''
]
const metadata = {}

for (const component of definitions) {
  const source = componentSource(component.slug)
  const props = propsFor(component.slug)
  const events = eventsFor(source)
  const slots = slotsFor(source)

  metadata[component.slug] = {
    events,
    modelValue: props.some((prop) => prop.name === 'modelValue'),
    props: props.map((prop) => ({
      defaultValue: defaultFor(source, prop.name),
      name: prop.name,
      required: prop.required,
      type: prop.type
    })),
    slots
  }

  lines.push(`## ${component.name}`, '', component.description, '')
  lines.push(`- Category: ${component.category}`, `- Import: \`halo-ui/components/${component.slug}\``, '')
  lines.push('### Props', '', '| Name | Type | Required | Default |', '| --- | --- | --- | --- |')
  if (props.length === 0) {
    lines.push('| — | — | — | — |')
  } else {
    props.forEach((prop) => lines.push(`| ${prop.name} | \`${prop.type}\` | ${prop.required ? 'Yes' : 'No'} | \`${defaultFor(source, prop.name)}\` |`))
  }
  lines.push('', '### Events', '')
  lines.push(events.length ? events.map((event) => `- \`${event}\``).join('\n') : '- None', '', '### Slots', '')
  lines.push(slots.length ? slots.map((slot) => `- \`${slot}\``).join('\n') : '- None', '')
}

const output = `${lines.join('\n')}\n`
const metadataOutput = `export interface HaloApiProp {\n  defaultValue: string\n  name: string\n  required: boolean\n  type: string\n}\n\nexport interface HaloComponentApi {\n  events: readonly string[]\n  modelValue: boolean\n  props: readonly HaloApiProp[]\n  slots: readonly string[]\n}\n\nexport const componentApiMetadata = ${JSON.stringify(metadata, null, 2)} as const satisfies Record<string, HaloComponentApi>\n`
if (check) {
  if (!existsSync(outputPath) || readFileSync(outputPath, 'utf8') !== output || !existsSync(metadataPath) || readFileSync(metadataPath, 'utf8') !== metadataOutput) {
    console.error('Generated API documentation is out of date. Run npm run docs:api.')
    process.exit(1)
  }
} else {
  writeFileSync(outputPath, output)
  writeFileSync(metadataPath, metadataOutput)
  console.log(`Generated API docs for ${definitions.length} components.`)
}
