import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import WbbbCell from './wbbb-cell.vue'

describe('WbbbCell accessibility', () => {
  it('emits click for keyboard activation only when clickable', async () => {
    const wrapper = mount(WbbbCell, { props: { clickable: true, title: 'Item' } })
    await wrapper.trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('click')).toHaveLength(1)

    const passive = mount(WbbbCell, { props: { title: 'Static' } })
    await passive.trigger('keydown', { key: 'Enter' })
    expect(passive.emitted('click')).toBeUndefined()
  })
})
