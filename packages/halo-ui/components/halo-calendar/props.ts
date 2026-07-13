import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloCalendarProps extends HaloCommonProps {
  disabledDates?: string[]
  firstDayOfWeek?: 0 | 1
  locale?: 'en' | 'zh-cn'
  maxDate?: string
  minDate?: string
  modelValue?: string
  month?: string
}
