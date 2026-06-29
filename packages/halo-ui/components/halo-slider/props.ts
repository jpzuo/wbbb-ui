import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloSliderProps extends HaloCommonProps {
  activeColor?: string
  disabled?: boolean
  max?: number
  min?: number
  modelValue?: number
  showValue?: boolean
  step?: number
}

