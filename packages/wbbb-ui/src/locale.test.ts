import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import WbbbActionSheet from '../components/wbbb-action-sheet/wbbb-action-sheet.vue'
import WbbbDatePicker from '../components/wbbb-date-picker/wbbb-date-picker.vue'
import WbbbDialog from '../components/wbbb-dialog/wbbb-dialog.vue'
import WbbbEmpty from '../components/wbbb-empty/wbbb-empty.vue'
import WbbbPicker from '../components/wbbb-picker/wbbb-picker.vue'
import WbbbUpload from '../components/wbbb-upload/wbbb-upload.vue'
import { install } from './installer'
import { getLocale, getLocaleMessages, normalizeLocale, setLocale } from './locale'
import { showDialog } from './services/dialog'

afterEach(() => {
  setLocale('zh-CN')
  delete (globalThis as { uni?: unknown }).uni
})

describe('Wbbb locale', () => {
  it('normalizes legacy aliases and updates the global locale', () => {
    expect(normalizeLocale('zh-cn')).toBe('zh-CN')
    expect(normalizeLocale('en')).toBe('en-US')
    setLocale('en-US')
    expect(getLocale()).toBe('en-US')
    expect(getLocaleMessages().emptyDescription).toBe('No data')
  })

  it('uses the global locale and allows a component override', async () => {
    setLocale('en-US')
    const english = mount(WbbbEmpty)
    const chinese = mount(WbbbEmpty, { props: { locale: 'zh-CN' } })
    await Promise.all([english.vm.$nextTick(), chinese.vm.$nextTick()])
    expect(english.text()).toContain('No data')
    expect(chinese.text()).toContain('暂无数据')
  })

  it('keeps explicit component text ahead of locale messages', () => {
    setLocale('en-US')
    expect(mount(WbbbPicker, { props: { placeholder: '业务占位' } }).text()).toContain('业务占位')
    expect(mount(WbbbDatePicker, { props: { placeholder: '业务日期' } }).text()).toContain('业务日期')
    expect(mount(WbbbUpload, { props: { text: '业务上传' } }).text()).toContain('业务上传')
  })

  it('localizes direct dialog and action-sheet defaults', () => {
    setLocale('zh-CN')
    expect(mount(WbbbDialog, { props: { modelValue: true } }).text()).toContain('取消')
    expect(mount(WbbbActionSheet, { props: { modelValue: true } }).text()).toContain('取消')
    setLocale('en-US')
    expect(mount(WbbbDialog, { props: { modelValue: true } }).text()).toContain('Cancel')
  })

  it('uses locale defaults for service dialog calls and installer configuration', async () => {
    const showModal = vi.fn((options: { success: (result: { confirm: boolean }) => void }) => options.success({ confirm: true }))
    ;(globalThis as { uni?: unknown }).uni = { showModal }
    await showDialog({ content: 'Continue?', locale: 'en-US' })
    expect(showModal).toHaveBeenCalledWith(expect.objectContaining({ cancelText: 'Cancel', confirmText: 'OK' }))

    install({ component: vi.fn() } as never, { locale: 'en-US' })
    expect(getLocale()).toBe('en-US')
  })
})
