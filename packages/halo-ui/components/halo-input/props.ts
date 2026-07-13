import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloInputProps extends HaloCommonProps {
  clearable?: boolean
  disabled?: boolean
  error?: boolean
  maxlength?: number
  modelValue?: string | number
  placeholder?: string
  readonly?: boolean
  type?: 'text' | 'number' | 'idcard' | 'digit' | 'safe-password' | 'nickname'
}
