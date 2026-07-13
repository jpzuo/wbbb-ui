import { haloOverlayBus, hasOverlayHost } from './overlay'

export interface HaloActionSheetOptions {
  itemList: string[]
  itemColor?: string
}

export function showActionSheet(options: HaloActionSheetOptions) {
  return new Promise<number | undefined>((resolve) => {
    if (hasOverlayHost()) {
      haloOverlayBus.emit('action-sheet', { options, resolve })
      return
    }
    uni?.showActionSheet?.({
      itemColor: options.itemColor,
      itemList: options.itemList,
      success(result: { tapIndex?: number }) {
        resolve(result.tapIndex)
      },
      fail() {
        resolve(undefined)
      }
    })
  })
}
