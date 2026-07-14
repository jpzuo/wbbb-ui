import type { WbbbCommonProps } from '../../src/shared/types'

export interface WbbbToastProps extends WbbbCommonProps {
  duration?: number
  icon?: 'success' | 'error' | 'loading' | 'none'
  message?: string
  modelValue?: boolean
  zIndex?: number
}

