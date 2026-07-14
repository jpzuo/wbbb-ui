import type { WbbbCommonProps, WbbbNumeric } from '../../src/shared/types'
import type { WbbbFormRule } from '../../src/shared/form'

export interface WbbbFieldProps extends WbbbCommonProps {
  label?: string
  labelWidth?: WbbbNumeric
  prop?: string
  required?: boolean
  rules?: WbbbFormRule | WbbbFormRule[]
  value?: unknown
}

