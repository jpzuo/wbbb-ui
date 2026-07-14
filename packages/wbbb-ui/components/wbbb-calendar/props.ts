import type { WbbbCommonProps, WbbbLocaleInput } from '../../src/shared/types'

export interface WbbbCalendarProps extends WbbbCommonProps {
  disabledDates?: string[]
  firstDayOfWeek?: 0 | 1
  locale?: WbbbLocaleInput
  maxDate?: string
  minDate?: string
  modelValue?: string
  month?: string
}
