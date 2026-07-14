import type { WbbbCommonProps } from '../../src/shared/types'

export interface WbbbTextareaProps extends WbbbCommonProps {
  autoHeight?: boolean
  disabled?: boolean
  error?: boolean
  maxlength?: number
  modelValue?: string
  placeholder?: string
  readonly?: boolean
  showCount?: boolean
}
