import { wbbbCoreIconCodepoints, wbbbCoreIcons, wbbbIconAliases, type WbbbCoreIconName } from './icons/manifest'

export interface WbbbIconFontDefinition {
  fontFamily: string
  glyphs: Record<string, string>
  name: string
}

interface ResolvedWbbbIconFont {
  fontFamily: string
  glyph: string
}

const iconFonts = new Map<string, WbbbIconFontDefinition>()

export { wbbbCoreIconCodepoints, wbbbCoreIcons, wbbbIconAliases }
export type { WbbbCoreIconName }

export function normalizeWbbbIconCode(code: string) {
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

export function registerWbbbIconFont(definition: WbbbIconFontDefinition) {
  const name = definition.name.trim()
  const fontFamily = definition.fontFamily.trim()
  if (!name || !fontFamily) {
    throw new Error('Wbbb icon font registration requires both name and fontFamily.')
  }

  const glyphs = Object.fromEntries(Object.entries(definition.glyphs)
    .map(([key, value]) => [key.trim(), normalizeWbbbIconCode(value)])
    .filter(([key, value]) => Boolean(key && value)))
  iconFonts.set(name, { fontFamily, glyphs, name })
}

export function resolveWbbbIconFont(fontSet: string, name: string): ResolvedWbbbIconFont | undefined {
  const definition = iconFonts.get(fontSet)
  const glyph = definition?.glyphs[name]
  return definition && glyph ? { fontFamily: definition.fontFamily, glyph } : undefined
}

export function resolveWbbbCoreIcon(name: string) {
  const canonical = wbbbIconAliases[name as keyof typeof wbbbIconAliases] ?? name
  const codePoint = wbbbCoreIconCodepoints[canonical as WbbbCoreIconName] ?? wbbbCoreIconCodepoints['circle-help']
  return String.fromCodePoint(codePoint)
}
