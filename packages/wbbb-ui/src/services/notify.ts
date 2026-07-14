import { wbbbOverlayBus, hasOverlayHost } from './overlay'
import { showToast } from './toast'

export interface WbbbNotifyOptions {
  message: string
  type?: 'info' | 'success' | 'warning' | 'danger'
  duration?: number
}

export function showNotify(options: WbbbNotifyOptions | string) {
  const normalized: WbbbNotifyOptions = typeof options === 'string' ? { message: options } : options

  if (hasOverlayHost()) {
    wbbbOverlayBus.emit('notify', normalized)
    return
  }

  showToast({
    duration: normalized.duration ?? 2200,
    icon: normalized.type === 'success' ? 'success' : normalized.type === 'danger' ? 'error' : 'none',
    title: normalized.message
  })
}
