import type { WbbbCommonProps } from '../../src/shared/types'

export interface WbbbInputProps extends WbbbCommonProps {
  clearable?: boolean
  disabled?: boolean
  error?: boolean
  maxlength?: number
  modelValue?: string | number
  placeholder?: string
  readonly?: boolean
  type?: 'text' | 'number' | 'idcard' | 'digit' | 'safe-password' | 'nickname'
}
