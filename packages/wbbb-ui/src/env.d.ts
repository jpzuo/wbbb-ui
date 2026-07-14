declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}

declare const uni:
  | {
      showToast?: (options: Record<string, unknown>) => void
      hideToast?: () => void
      showModal?: (options: Record<string, unknown>) => void
      showActionSheet?: (options: Record<string, unknown>) => void
      chooseImage?: (options: Record<string, unknown>) => void
      navigateBack?: (options?: Record<string, unknown>) => void
      navigateTo?: (options: Record<string, unknown>) => void
    }
  | undefined
