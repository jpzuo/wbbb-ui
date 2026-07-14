import { afterEach, describe, expect, it } from 'vitest'
import { hasOverlayHost, registerOverlayHost } from './overlay'

describe('overlay host registry', () => {
  afterEach(() => {
    while (hasOverlayHost()) {
      unregisters.pop()?.()
    }
  })

  const unregisters: Array<() => void> = []

  it('tracks mounted overlay hosts', () => {
    expect(hasOverlayHost()).toBe(false)
    const unregister = registerOverlayHost()
    unregisters.push(unregister)
    expect(hasOverlayHost()).toBe(true)
    unregister()
    unregisters.pop()
    expect(hasOverlayHost()).toBe(false)
  })
})
