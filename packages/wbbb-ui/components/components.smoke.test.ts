import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

const modules = import.meta.glob('./wbbb-*/index.ts', { eager: true }) as Record<string, { default: unknown }>
const entries = Object.entries(modules)

describe('public component smoke contracts', () => {
  it('discovers all 47 component entry points', () => {
    expect(entries).toHaveLength(47)
  })

  it.each(entries.map(([path, module]) => [path, module.default] as const))('mounts %s with defaults and unmounts cleanly', (_path, component) => {
    const wrapper = mount(component as never)
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })
})
