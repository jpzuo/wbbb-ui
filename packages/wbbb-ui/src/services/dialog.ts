import { wbbbOverlayBus, hasOverlayHost } from './overlay'
import { getLocaleMessages } from '../locale'
import type { WbbbLocaleInput } from '../shared/types'

export interface WbbbDialogOptions {
  title?: string
  content?: string
  confirmText?: string
  cancelText?: string
  locale?: WbbbLocaleInput
  showCancel?: boolean
}

export function showDialog(options: WbbbDialogOptions | string) {
  return new Promise<boolean>((resolve) => {
    const normalized: WbbbDialogOptions = typeof options === 'string' ? { content: options } : options
    const messages = getLocaleMessages(normalized.locale)
    const resolved: WbbbDialogOptions = {
      ...normalized,
      cancelText: normalized.cancelText ?? messages.dialogCancel,
      confirmText: normalized.confirmText ?? messages.dialogConfirm
    }

    if (hasOverlayHost()) {
      wbbbOverlayBus.emit('dialog', { options: resolved, resolve })
      return
    }

    uni?.showModal?.({
      cancelText: resolved.cancelText,
      confirmText: resolved.confirmText,
      content: resolved.content ?? '',
      showCancel: resolved.showCancel ?? true,
      title: resolved.title ?? '',
      success(result: { confirm?: boolean }) {
        resolve(Boolean(result.confirm))
      },
      fail() {
        resolve(false)
      }
    })
  })
}
