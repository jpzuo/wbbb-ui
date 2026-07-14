import { describe, expect, it } from 'vitest'
import { addStep, normalizeNumber } from './number'

describe('number helpers', () => {
  it('keeps decimal stepping precise', () => {
    expect(addStep(0.2, 0.1, 1, 0, 1)).toBe(0.3)
    expect(normalizeNumber(0.30000000000000004, 0, 1, 0.1)).toBe(0.3)
  })

  it('clamps and snaps values to the valid range', () => {
    expect(normalizeNumber(10, 0, 5, 0.25)).toBe(5)
    expect(normalizeNumber(-2, 0, 5, 0.25)).toBe(0)
  })
})
