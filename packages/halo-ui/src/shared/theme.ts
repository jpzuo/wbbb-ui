export type HaloTheme = 'light' | 'dark'

let currentTheme: HaloTheme = 'light'

export function setTheme(theme: HaloTheme) {
  currentTheme = theme

  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme)
    document.body?.setAttribute('data-theme', theme)
  }
}

export function getTheme() {
  return currentTheme
}
