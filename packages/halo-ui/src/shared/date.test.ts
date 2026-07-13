import { describe, expect, it } from 'vitest'
import { formatCountDown, formatDate, getDate, getMonth, getWeekdays } from './date'

describe('date helpers', () => {
  it('parses strict dates and formats calendar values', () => {
    expect(formatDate(getDate('2026-07-11')!)).toBe('2026-07-11')
    expect(getDate('2026-13-11')).toBeUndefined()
    expect(getMonth('2026-02').daysInMonth()).toBe(28)
  })

  it('formats durations and localized weekdays', () => {
    expect(formatCountDown(3_661_000, 'HH:mm:ss')).toBe('01:01:01')
    expect(getWeekdays('zh-cn', 1)).toHaveLength(7)
  })
})
