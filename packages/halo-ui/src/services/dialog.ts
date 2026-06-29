export interface HaloDialogOptions {
  title?: string
  content?: string
  confirmText?: string
  cancelText?: string
  showCancel?: boolean
}

export function showDialog(options: HaloDialogOptions | string) {
  return new Promise<boolean>((resolve) => {
    const normalized: HaloDialogOptions = typeof options === 'string' ? { content: options } : options

    uni?.showModal?.({
      cancelText: normalized.cancelText ?? 'Cancel',
      confirmText: normalized.confirmText ?? 'OK',
      content: normalized.content ?? '',
      showCancel: normalized.showCancel ?? true,
      title: normalized.title ?? '',
      success(result: { confirm?: boolean }) {
        resolve(Boolean(result.confirm))
      },
      fail() {
        resolve(false)
      }
    })
  })
}

