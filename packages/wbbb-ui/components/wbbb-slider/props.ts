import type { WbbbCommonProps } from '../../src/shared/types'

export interface WbbbSliderProps extends WbbbCommonProps {
  activeColor?: string
  disabled?: boolean
  max?: number
  min?: number
  modelValue?: number
  showValue?: boolean
  step?: number
}

