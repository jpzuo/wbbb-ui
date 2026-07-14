export type WbbbTheme = 'light' | 'dark'

let currentTheme: WbbbTheme = 'light'

export function setTheme(theme: WbbbTheme) {
  currentTheme = theme

  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme)
    document.body?.setAttribute('data-theme', theme)
  }
}

export function getTheme() {
  return currentTheme
}
