import { describe, expect, it } from 'vitest'
import { isKeyboardActivation, preventKeyboardDefault } from './keyboard'

describe('keyboard activation', () => {
  it('accepts Enter and Space without treating unrelated keys as actions', () => {
    expect(isKeyboardActivation({ key: 'Enter' })).toBe(true)
    expect(isKeyboardActivation({ key: ' ' })).toBe(true)
    expect(isKeyboardActivation({ key: 'Escape' })).toBe(false)
  })

  it('does not require DOM events to prevent a keyboard default', () => {
    let prevented = false
    preventKeyboardDefault({ preventDefault: () => { prevented = true } })
    expect(prevented).toBe(true)
  })
})
