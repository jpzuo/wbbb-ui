import { haloOverlayBus, hasOverlayHost } from './overlay'
import { showToast } from './toast'

export interface HaloNotifyOptions {
  message: string
  type?: 'info' | 'success' | 'warning' | 'danger'
  duration?: number
}

export function showNotify(options: HaloNotifyOptions | string) {
  const normalized: HaloNotifyOptions = typeof options === 'string' ? { message: options } : options

  if (hasOverlayHost()) {
    haloOverlayBus.emit('notify', normalized)
    return
  }

  showToast({
    duration: normalized.duration ?? 2200,
    icon: normalized.type === 'success' ? 'success' : normalized.type === 'danger' ? 'error' : 'none',
    title: normalized.message
  })
}
