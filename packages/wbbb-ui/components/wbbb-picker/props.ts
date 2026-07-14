import type { WbbbCommonProps, WbbbLocaleInput } from '../../src/shared/types'

export interface WbbbPickerOption {
  label: string
  value: string | number
}

export interface WbbbPickerProps extends WbbbCommonProps {
  disabled?: boolean
  locale?: WbbbLocaleInput
  modelValue?: string | number
  options?: WbbbPickerOption[]
  placeholder?: string
}
