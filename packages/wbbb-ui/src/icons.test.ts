import { describe, expect, it } from 'vitest'
import { wbbbCoreIconCodepoints, normalizeWbbbIconCode, registerWbbbIconFont, resolveWbbbCoreIcon, resolveWbbbIconFont } from './icons'

describe('Wbbb icon registry', () => {
  it('keeps the generated Lucide core set constrained to 64 glyphs', () => {
    expect(Object.keys(wbbbCoreIconCodepoints)).toHaveLength(64)
  })

  it('normalizes hexadecimal and literal custom font glyphs', () => {
    expect(normalizeWbbbIconCode('e600')).toBe(String.fromCodePoint(0xe600))
    expect(normalizeWbbbIconCode('0xE601')).toBe(String.fromCodePoint(0xe601))
    expect(normalizeWbbbIconCode('A')).toBe('A')
    expect(normalizeWbbbIconCode('invalid')).toBe('')
  })

  it('resolves legacy aliases and registered font-set glyphs', () => {
    expect(resolveWbbbCoreIcon('close')).toBe(resolveWbbbCoreIcon('x'))

    registerWbbbIconFont({
      fontFamily: 'Business Icons',
      glyphs: { dashboard: 'e600' },
      name: 'business-test'
    })

    expect(resolveWbbbIconFont('business-test', 'dashboard')).toEqual({
      fontFamily: 'Business Icons',
      glyph: String.fromCodePoint(0xe600)
    })
  })

  it('replaces a font-set definition when it is registered again', () => {
    registerWbbbIconFont({ fontFamily: 'Business Icons', glyphs: { order: 'e601' }, name: 'business-test' })
    expect(resolveWbbbIconFont('business-test', 'dashboard')).toBeUndefined()
    expect(resolveWbbbIconFont('business-test', 'order')?.glyph).toBe(String.fromCodePoint(0xe601))
  })
})
