import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { registerHaloIconFont } from '../../src/icons'
import HaloIcon from './halo-icon.vue'

describe('HaloIcon', () => {
  it('uses an image source before any font-based icon source', () => {
    const wrapper = mount(HaloIcon, { props: { code: 'e600', fontFamily: 'Business Icons', name: 'search', src: '/static/mark.png' } })
    expect(wrapper.classes()).toContain('halo-icon--asset')
    expect(wrapper.attributes('src')).toBe('/static/mark.png')
  })

  it('prefers an explicit custom font glyph over an icon name', () => {
    const wrapper = mount(HaloIcon, { props: { code: 'e600', fontFamily: 'Business Icons', name: 'search' } })
    expect(wrapper.text()).toBe(String.fromCodePoint(0xe600))
    expect(wrapper.attributes('style')).toContain('font-family')
  })

  it('renders a registered icon font by set and semantic name', () => {
    registerHaloIconFont({ fontFamily: 'Business Icons', glyphs: { dashboard: 'e601' }, name: 'component-test' })
    const wrapper = mount(HaloIcon, { props: { fontSet: 'component-test', name: 'dashboard' } })
    expect(wrapper.text()).toBe(String.fromCodePoint(0xe601))
  })

  it('falls back to the core help icon when a font set cannot resolve its name', () => {
    const wrapper = mount(HaloIcon, { props: { fontSet: 'missing', name: 'dashboard' } })
    expect(wrapper.text().length).toBe(1)
  })
})
