import { wbbbOverlayBus, hasOverlayHost } from './overlay'
import { getLocaleMessages } from '../locale'
import type { WbbbLocaleInput } from '../shared/types'

export interface WbbbActionSheetOptions {
  itemList: string[]
  itemColor?: string
  cancelText?: string
  locale?: WbbbLocaleInput
}

export function showActionSheet(options: WbbbActionSheetOptions) {
  return new Promise<number | undefined>((resolve) => {
    const resolved: WbbbActionSheetOptions = {
      ...options,
      cancelText: options.cancelText ?? getLocaleMessages(options.locale).actionSheetCancel
    }
    if (hasOverlayHost()) {
      wbbbOverlayBus.emit('action-sheet', { options: resolved, resolve })
      return
    }
    uni?.showActionSheet?.({
      itemColor: resolved.itemColor,
      itemList: resolved.itemList,
      success(result: { tapIndex?: number }) {
        resolve(result.tapIndex)
      },
      fail() {
        resolve(undefined)
      }
    })
  })
}
