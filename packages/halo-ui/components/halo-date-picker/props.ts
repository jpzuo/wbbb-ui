import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloDatePickerProps extends HaloCommonProps {
  disabled?: boolean
  end?: string
  fields?: 'day' | 'month' | 'year'
  locale?: 'en' | 'zh-cn'
  modelValue?: string
  placeholder?: string
  start?: string
}
