import type { WbbbCommonProps } from '../../src/shared/types'

export interface WbbbRadioOption {
  disabled?: boolean
  label: string
  value: string | number
}

export interface WbbbRadioProps extends WbbbCommonProps {
  disabled?: boolean
  modelValue?: string | number
  options?: WbbbRadioOption[]
}

