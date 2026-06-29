import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloCalendarProps extends HaloCommonProps {
  firstDayOfWeek?: 0 | 1
  modelValue?: string
  month?: string
}

