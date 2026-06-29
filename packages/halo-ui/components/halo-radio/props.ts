import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloRadioOption {
  disabled?: boolean
  label: string
  value: string | number
}

export interface HaloRadioProps extends HaloCommonProps {
  disabled?: boolean
  modelValue?: string | number
  options?: HaloRadioOption[]
}

