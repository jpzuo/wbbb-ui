import type { WbbbCommonProps, WbbbNumeric } from '../../src/shared/types'
import type { WbbbFormRule } from '../../src/shared/form'

export interface WbbbFormProps extends WbbbCommonProps {
  disabled?: boolean
  labelWidth?: WbbbNumeric
  model?: Record<string, unknown>
  rules?: Record<string, WbbbFormRule | WbbbFormRule[]>
}

