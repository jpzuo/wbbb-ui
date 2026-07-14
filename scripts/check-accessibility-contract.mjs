import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const tokens = readFileSync(join(root, 'packages', 'wbbb-ui', 'src', 'styles', 'tokens.scss'), 'utf8')
const keyboard = readFileSync(join(root, 'packages', 'wbbb-ui', 'src', 'shared', 'keyboard.ts'), 'utf8')
const interactiveComponents = [
  ['wbbb-cell', 'wbbb-cell.vue'],
  ['wbbb-grid', 'wbbb-grid-item.vue'],
  ['wbbb-collapse', 'wbbb-collapse.vue'],
  ['wbbb-list', 'wbbb-list.vue'],
  ['wbbb-rate', 'wbbb-rate.vue'],
  ['wbbb-tabs', 'wbbb-tabs.vue'],
  ['wbbb-navbar', 'wbbb-navbar.vue'],
  ['wbbb-notice-bar', 'wbbb-notice-bar.vue'],
  ['wbbb-upload', 'wbbb-upload.vue'],
  ['wbbb-tabbar', 'wbbb-tabbar.vue'],
  ['wbbb-tabbar', 'wbbb-tabbar-item.vue'],
  ['wbbb-popup', 'wbbb-popup.vue', 'useOverlayAccessibility'],
  ['wbbb-action-sheet', 'wbbb-action-sheet.vue', 'useOverlayAccessibility']
]

if (!tokens.includes('@media (prefers-reduced-motion: reduce)')) {
  throw new Error('A reduced-motion token override is required.')
}

if (!keyboard.includes("key === 'Enter'") || !keyboard.includes("key === ' '")) {
  throw new Error('Keyboard activation must support Enter and Space.')
}

for (const [directory, file, activationMarker = '@keydown='] of interactiveComponents) {
  const source = readFileSync(join(root, 'packages', 'wbbb-ui', 'components', directory, file), 'utf8')
  if (!source.includes('role=') || !source.includes(activationMarker)) {
    throw new Error(`${directory}/${file} must declare role and keyboard activation.`)
  }
}

console.log(`Accessibility contract passed for ${interactiveComponents.length} interactive component implementations.`)
