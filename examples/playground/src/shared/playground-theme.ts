import { ref } from 'vue'
import { getTheme, setTheme, type WbbbTheme } from '../../uni_modules/wbbb-ui/src/shared/theme'

export const playgroundTheme = ref<WbbbTheme>(getTheme())

export function setPlaygroundTheme(theme: WbbbTheme) {
  playgroundTheme.value = theme
  setTheme(theme)
}

export function applyThemeFromRoute(value: unknown) {
  const theme: WbbbTheme = value === 'dark' ? 'dark' : 'light'
  setPlaygroundTheme(theme)
  return theme
}

export function togglePlaygroundTheme() {
  setPlaygroundTheme(playgroundTheme.value === 'light' ? 'dark' : 'light')
}
