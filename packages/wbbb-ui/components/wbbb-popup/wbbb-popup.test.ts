import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import WbbbPopup from './wbbb-popup.vue'

describe('WbbbPopup accessibility', () => {
  it('requests close on Escape', async () => {
    const wrapper = mount(WbbbPopup, { attachTo: document.body, props: { modelValue: true } })
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false])
    wrapper.unmount()
  })

  it('keeps keyboard focus inside a visible overlay', async () => {
    const wrapper = mount(WbbbPopup, {
      attachTo: document.body,
      props: { modelValue: true },
      slots: { default: '<button class="first">First</button><button class="last">Last</button>' }
    })
    const first = wrapper.find('.first').element as HTMLButtonElement
    const last = wrapper.find('.last').element as HTMLButtonElement
    last.focus()
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab' }))
    expect(document.activeElement).toBe(first)
    wrapper.unmount()
  })
})
