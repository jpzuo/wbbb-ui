import mitt from 'mitt'
import type { WbbbActionSheetOptions } from './action-sheet'
import type { WbbbDialogOptions } from './dialog'
import type { WbbbNotifyOptions } from './notify'
import type { WbbbToastOptions } from './toast'

type OverlayEvents = {
  'action-sheet': { options: WbbbActionSheetOptions; resolve: (value: number | undefined) => void }
  dialog: { options: WbbbDialogOptions; resolve: (value: boolean) => void }
  notify: WbbbNotifyOptions
  toast: WbbbToastOptions
}

export const wbbbOverlayBus = mitt<OverlayEvents>()

let hostCount = 0

export function registerOverlayHost() {
  hostCount += 1

  return () => {
    hostCount = Math.max(0, hostCount - 1)
  }
}

export function hasOverlayHost() {
  return hostCount > 0
}
