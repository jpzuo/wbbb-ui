import { describe, expect, it } from 'vitest'
import { haloCoreIconCodepoints, normalizeHaloIconCode, registerHaloIconFont, resolveHaloCoreIcon, resolveHaloIconFont } from './icons'

describe('Halo icon registry', () => {
  it('keeps the generated Lucide core set constrained to 64 glyphs', () => {
    expect(Object.keys(haloCoreIconCodepoints)).toHaveLength(64)
  })

  it('normalizes hexadecimal and literal custom font glyphs', () => {
    expect(normalizeHaloIconCode('e600')).toBe(String.fromCodePoint(0xe600))
    expect(normalizeHaloIconCode('0xE601')).toBe(String.fromCodePoint(0xe601))
    expect(normalizeHaloIconCode('A')).toBe('A')
    expect(normalizeHaloIconCode('invalid')).toBe('')
  })

  it('resolves legacy aliases and registered font-set glyphs', () => {
    expect(resolveHaloCoreIcon('close')).toBe(resolveHaloCoreIcon('x'))

    registerHaloIconFont({
      fontFamily: 'Business Icons',
      glyphs: { dashboard: 'e600' },
      name: 'business-test'
    })

    expect(resolveHaloIconFont('business-test', 'dashboard')).toEqual({
      fontFamily: 'Business Icons',
      glyph: String.fromCodePoint(0xe600)
    })
  })

  it('replaces a font-set definition when it is registered again', () => {
    registerHaloIconFont({ fontFamily: 'Business Icons', glyphs: { order: 'e601' }, name: 'business-test' })
    expect(resolveHaloIconFont('business-test', 'dashboard')).toBeUndefined()
    expect(resolveHaloIconFont('business-test', 'order')?.glyph).toBe(String.fromCodePoint(0xe601))
  })
})
