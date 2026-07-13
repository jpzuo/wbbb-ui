import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloTextareaProps extends HaloCommonProps {
  autoHeight?: boolean
  disabled?: boolean
  error?: boolean
  maxlength?: number
  modelValue?: string
  placeholder?: string
  readonly?: boolean
  showCount?: boolean
}
