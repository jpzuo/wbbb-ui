import mitt from 'mitt'
import type { HaloActionSheetOptions } from './action-sheet'
import type { HaloDialogOptions } from './dialog'
import type { HaloNotifyOptions } from './notify'
import type { HaloToastOptions } from './toast'

type OverlayEvents = {
  'action-sheet': { options: HaloActionSheetOptions; resolve: (value: number | undefined) => void }
  dialog: { options: HaloDialogOptions; resolve: (value: boolean) => void }
  notify: HaloNotifyOptions
  toast: HaloToastOptions
}

export const haloOverlayBus = mitt<OverlayEvents>()

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
