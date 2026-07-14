import { nextTick, onBeforeUnmount, onMounted, watch, type Ref } from 'vue'
type FocusTarget = HTMLElement | { $el?: HTMLElement } | null

function resolveElement(target: FocusTarget) {
  return target instanceof HTMLElement ? target : target?.$el ?? null
}

/** H5-only overlay keyboard support. Mini-program runtimes never access the DOM. */
export function useOverlayAccessibility(isOpen: () => boolean, close: () => void, root: Ref<FocusTarget>) {
  let previousFocus: HTMLElement | null = null

  function onKeydown(event: KeyboardEvent) {
    if (isOpen() && event.key === 'Escape') {
      event.preventDefault()
      close()
      return
    }

    if (!isOpen() || event.key !== 'Tab') {
      return
    }

    const container = resolveElement(root.value)
    const focusable = container?.querySelectorAll<HTMLElement>('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')
    if (!container || !focusable?.length) {
      return
    }

    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  onMounted(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener('keydown', onKeydown)
    }
  })

  watch(isOpen, async (open) => {
    if (typeof document === 'undefined') {
      return
    }

    if (open) {
      previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
      await nextTick()
      resolveElement(root.value)?.focus?.()
      return
    }

    previousFocus?.focus?.()
    previousFocus = null
  })

  onBeforeUnmount(() => {
    if (typeof document !== 'undefined') {
      document.removeEventListener('keydown', onKeydown)
    }
  })
}
