import { haloOverlayBus, hasOverlayHost } from './overlay'

export interface HaloToastOptions {
  title?: string
  icon?: 'success' | 'error' | 'loading' | 'none'
  duration?: number
  mask?: boolean
}

export function showToast(options: HaloToastOptions | string) {
  const normalized: HaloToastOptions = typeof options === 'string' ? { title: options, icon: 'none' } : options

  if (hasOverlayHost()) {
    haloOverlayBus.emit('toast', normalized)
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
