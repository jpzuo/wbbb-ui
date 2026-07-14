import type { WbbbCommonProps } from '../../src/shared/types'

export interface WbbbCheckboxOption {
  disabled?: boolean
  label: string
  value: string | number
}

export interface WbbbCheckboxProps extends WbbbCommonProps {
  disabled?: boolean
  modelValue?: Array<string | number>
  options?: WbbbCheckboxOption[]
}

