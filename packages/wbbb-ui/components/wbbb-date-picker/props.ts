import type { WbbbCommonProps, WbbbLocaleInput } from '../../src/shared/types'

export interface WbbbDatePickerProps extends WbbbCommonProps {
  disabled?: boolean
  end?: string
  fields?: 'day' | 'month' | 'year'
  locale?: WbbbLocaleInput
  modelValue?: string
  placeholder?: string
  start?: string
}
