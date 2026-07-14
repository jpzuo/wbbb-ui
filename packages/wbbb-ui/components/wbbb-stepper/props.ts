import type { WbbbCommonProps } from '../../src/shared/types'

export interface WbbbStepperProps extends WbbbCommonProps {
  disabled?: boolean
  max?: number
  min?: number
  modelValue?: number
  step?: number
}

