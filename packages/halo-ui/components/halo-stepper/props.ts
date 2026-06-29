import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloStepperProps extends HaloCommonProps {
  disabled?: boolean
  max?: number
  min?: number
  modelValue?: number
  step?: number
}

