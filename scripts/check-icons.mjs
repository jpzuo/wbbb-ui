import { existsSync, readFileSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const iconsRoot = join(root, 'packages', 'wbbb-ui', 'src', 'icons')
const manifestPath = join(iconsRoot, 'manifest.ts')
const ttfPath = join(iconsRoot, 'wbbb-icons.ttf')
const woffPath = join(iconsRoot, 'wbbb-icons.woff')

for (const path of [manifestPath, ttfPath, woffPath]) {
  if (!existsSync(path)) {
    throw new Error(`Missing generated Wbbb icon asset: ${path}`)
  }
}

const manifest = readFileSync(manifestPath, 'utf8')
const match = manifest.match(/wbbbCoreIcons = (\[[\s\S]*?\]) as const/)
const icons = match ? JSON.parse(match[1]) : []
if (icons.length !== 64) {
  throw new Error(`Wbbb core icon manifest must contain 64 icons, received ${icons.length}.`)
}

const ttfSize = statSync(ttfPath).size
if (ttfSize > 60 * 1024) {
  throw new Error(`Wbbb core TTF exceeds the 60 KiB mini-program budget: ${ttfSize} bytes.`)
}

console.log(`Wbbb icon check passed: ${icons.length} icons, ${(ttfSize / 1024).toFixed(1)} KiB TTF.`)
