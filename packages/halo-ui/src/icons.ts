import { haloCoreIconCodepoints, haloCoreIcons, haloIconAliases, type HaloCoreIconName } from './icons/manifest'

export interface HaloIconFontDefinition {
  fontFamily: string
  glyphs: Record<string, string>
  name: string
}

interface ResolvedHaloIconFont {
  fontFamily: string
  glyph: string
}

const iconFonts = new Map<string, HaloIconFontDefinition>()

export { haloCoreIconCodepoints, haloCoreIcons, haloIconAliases }
export type { HaloCoreIconName }

export function normalizeHaloIconCode(code: string) {
  const value = code.trim()
  if (value.length === 1) {
    return value
  }

  const hexadecimal = value.replace(/^0x/i, '')
  if (!/^[\da-f]{1,6}$/i.test(hexadecimal)) {
    return ''
  }

  const codePoint = Number.parseInt(hexadecimal, 16)
  return codePoint <= 0x10ffff ? String.fromCodePoint(codePoint) : ''
}

export function registerHaloIconFont(definition: HaloIconFontDefinition) {
  const name = definition.name.trim()
  const fontFamily = definition.fontFamily.trim()
  if (!name || !fontFamily) {
    throw new Error('Halo icon font registration requires both name and fontFamily.')
  }

  const glyphs = Object.fromEntries(Object.entries(definition.glyphs)
    .map(([key, value]) => [key.trim(), normalizeHaloIconCode(value)])
    .filter(([key, value]) => Boolean(key && value)))
  iconFonts.set(name, { fontFamily, glyphs, name })
}

export function resolveHaloIconFont(fontSet: string, name: string): ResolvedHaloIconFont | undefined {
  const definition = iconFonts.get(fontSet)
  const glyph = definition?.glyphs[name]
  return definition && glyph ? { fontFamily: definition.fontFamily, glyph } : undefined
}

export function resolveHaloCoreIcon(name: string) {
  const canonical = haloIconAliases[name as keyof typeof haloIconAliases] ?? name
  const codePoint = haloCoreIconCodepoints[canonical as HaloCoreIconName] ?? haloCoreIconCodepoints['circle-help']
  return String.fromCodePoint(codePoint)
}
