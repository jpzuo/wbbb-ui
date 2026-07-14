import { afterEach, describe, expect, it, vi } from 'vitest'
import { showNotify } from './notify'

describe('showNotify', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('maps native-compatible semantic types to toast icons', () => {
    const showToast = vi.fn()
    vi.stubGlobal('uni', { showToast })

    showNotify({ message: 'Failed', type: 'danger', duration: 500 })

    expect(showToast).toHaveBeenCalledWith({
      duration: 500,
      icon: 'error',
      mask: false,
      title: 'Failed'
    })
  })
})
