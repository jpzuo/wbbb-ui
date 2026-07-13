import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const tokens = readFileSync(join(root, 'packages', 'halo-ui', 'src', 'styles', 'tokens.scss'), 'utf8')
const keyboard = readFileSync(join(root, 'packages', 'halo-ui', 'src', 'shared', 'keyboard.ts'), 'utf8')
const interactiveComponents = [
  ['halo-cell', 'halo-cell.vue'],
  ['halo-grid', 'halo-grid-item.vue'],
  ['halo-collapse', 'halo-collapse.vue'],
  ['halo-list', 'halo-list.vue'],
  ['halo-rate', 'halo-rate.vue'],
  ['halo-tabs', 'halo-tabs.vue'],
  ['halo-navbar', 'halo-navbar.vue'],
  ['halo-notice-bar', 'halo-notice-bar.vue'],
  ['halo-upload', 'halo-upload.vue'],
  ['halo-tabbar', 'halo-tabbar.vue'],
  ['halo-tabbar', 'halo-tabbar-item.vue'],
  ['halo-popup', 'halo-popup.vue', 'useOverlayAccessibility'],
  ['halo-action-sheet', 'halo-action-sheet.vue', 'useOverlayAccessibility']
]

if (!tokens.includes('@media (prefers-reduced-motion: reduce)')) {
  throw new Error('A reduced-motion token override is required.')
}

if (!keyboard.includes("key === 'Enter'") || !keyboard.includes("key === ' '")) {
  throw new Error('Keyboard activation must support Enter and Space.')
}

for (const [directory, file, activationMarker = '@keydown='] of interactiveComponents) {
  const source = readFileSync(join(root, 'packages', 'halo-ui', 'components', directory, file), 'utf8')
  if (!source.includes('role=') || !source.includes(activationMarker)) {
    throw new Error(`${directory}/${file} must declare role and keyboard activation.`)
  }
}

console.log(`Accessibility contract passed for ${interactiveComponents.length} interactive component implementations.`)
