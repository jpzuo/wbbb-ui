export interface HaloTimer {
  clear: () => void
  start: (callback: () => void, delay: number) => void
}

/** Maintains one cancellable timer for components with delayed transitions. */
export function createTimer(): HaloTimer {
  let timer: ReturnType<typeof setTimeout> | undefined

  function clear() {
    if (timer) {
      clearTimeout(timer)
      timer = undefined
    }
  }

  function start(callback: () => void, delay: number) {
    clear()
    timer = setTimeout(() => {
      timer = undefined
      callback()
    }, delay)
  }

  return { clear, start }
}
