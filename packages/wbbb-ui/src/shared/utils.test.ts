import { describe, expect, it } from 'vitest'
import { addUnit, clamp, createNamespace, toStyleText } from './utils'

describe('shared utils', () => {
  it('creates BEM-like class names', () => {
    expect(createNamespace('button').cls(undefined, ['primary', false])).toEqual([
      'wbbb-button',
      'wbbb-button--primary'
    ])
  })

  it('normalizes units', () => {
    expect(addUnit(24)).toBe('24rpx')
    expect(addUnit('1rem')).toBe('1rem')
  })

  it('serializes style objects', () => {
    expect(toStyleText({ fontSize: '24rpx', zIndex: 10 })).toBe('font-size:24rpx;z-index:10')
  })

  it('clamps values', () => {
    expect(clamp(10, 1, 5)).toBe(5)
  })
})

