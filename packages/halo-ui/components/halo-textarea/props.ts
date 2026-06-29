import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloTextareaProps extends HaloCommonProps {
  autoHeight?: boolean
  disabled?: boolean
  maxlength?: number
  modelValue?: string
  placeholder?: string
  showCount?: boolean
}

