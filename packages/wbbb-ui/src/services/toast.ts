import { wbbbOverlayBus, hasOverlayHost } from './overlay'

export interface WbbbToastOptions {
  title?: string
  icon?: 'success' | 'error' | 'loading' | 'none'
  duration?: number
  mask?: boolean
}

export function showToast(options: WbbbToastOptions | string) {
  const normalized: WbbbToastOptions = typeof options === 'string' ? { title: options, icon: 'none' } : options

  if (hasOverlayHost()) {
    wbbbOverlayBus.emit('toast', normalized)
    return
  }

  uni?.showToast?.({
    icon: normalized.icon ?? 'none',
    duration: normalized.duration ?? 1800,
    mask: normalized.mask ?? false,
    title: normalized.title ?? ''
  })
}

export function hideToast() {
  uni?.hideToast?.()
}
