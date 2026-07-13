import { afterEach, describe, expect, it, vi } from 'vitest'
import { createTimer } from './timer'

describe('timer helper', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('only invokes the most recently scheduled callback', () => {
    vi.useFakeTimers()
    const callback = vi.fn()
    const timer = createTimer()

    timer.start(callback, 100)
    timer.start(callback, 200)
    vi.advanceTimersByTime(100)
    expect(callback).not.toHaveBeenCalled()

    vi.advanceTimersByTime(100)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('cancels a pending callback', () => {
    vi.useFakeTimers()
    const callback = vi.fn()
    const timer = createTimer()

    timer.start(callback, 100)
    timer.clear()
    vi.advanceTimersByTime(100)

    expect(callback).not.toHaveBeenCalled()
  })
})
