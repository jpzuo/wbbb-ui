import { describe, expect, it } from 'vitest'
import { getOptionByIndex, getOptionsByIndex } from './selection'

describe('selection helpers', () => {
  const options = [
    { label: 'Number one', value: 1 },
    { label: 'String one', value: '1' },
    { label: 'Two', value: 2 }
  ]

  it('restores the original value by native option index', () => {
    expect(getOptionByIndex(options, '0')?.value).toBe(1)
    expect(getOptionByIndex(options, '1')?.value).toBe('1')
  })

  it('drops invalid native indexes', () => {
    expect(getOptionsByIndex(options, ['2', 'invalid', '5']).map((option) => option.value)).toEqual([2])
  })
})
