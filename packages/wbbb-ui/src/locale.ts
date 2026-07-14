import { computed, ref } from 'vue'
import type { ComputedRef } from 'vue'
import type { WbbbLocale, WbbbLocaleInput } from './shared/types'

export interface WbbbLocaleMessages {
  actionSheetCancel: string
  datePickerPlaceholder: string
  dialogCancel: string
  dialogConfirm: string
  emptyDescription: string
  pickerPlaceholder: string
  uploadRetry: string
  uploadText: string
  uploadUploading: string
}

export const wbbbLocaleMessages: Readonly<Record<WbbbLocale, WbbbLocaleMessages>> = {
  'en-US': {
    actionSheetCancel: 'Cancel',
    datePickerPlaceholder: 'Select date',
    dialogCancel: 'Cancel',
    dialogConfirm: 'OK',
    emptyDescription: 'No data',
    pickerPlaceholder: 'Please select',
    uploadRetry: 'Tap to retry',
    uploadText: 'Upload',
    uploadUploading: 'Uploading'
  },
  'zh-CN': {
    actionSheetCancel: '取消',
    datePickerPlaceholder: '请选择日期',
    dialogCancel: '取消',
    dialogConfirm: '确定',
    emptyDescription: '暂无数据',
    pickerPlaceholder: '请选择',
    uploadRetry: '点击重试',
    uploadText: '上传',
    uploadUploading: '上传中'
  }
}

const activeLocale = ref<WbbbLocale>('zh-CN')

export function normalizeLocale(locale?: WbbbLocaleInput): WbbbLocale {
  return locale === 'en' || locale === 'en-US' ? 'en-US' : 'zh-CN'
}

export function setLocale(locale: WbbbLocaleInput) {
  activeLocale.value = normalizeLocale(locale)
}

export function getLocale(): WbbbLocale {
  return activeLocale.value
}

export function getLocaleMessages(locale?: WbbbLocaleInput): WbbbLocaleMessages {
  return wbbbLocaleMessages[normalizeLocale(locale ?? activeLocale.value)]
}

export function useWbbbLocale(getOverride?: () => WbbbLocaleInput | undefined): ComputedRef<WbbbLocaleMessages> {
  return computed(() => getLocaleMessages(getOverride?.()))
}
