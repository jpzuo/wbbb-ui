import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloToastProps extends HaloCommonProps {
  duration?: number
  icon?: 'success' | 'error' | 'loading' | 'none'
  message?: string
  modelValue?: boolean
  zIndex?: number
}

