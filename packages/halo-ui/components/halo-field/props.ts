import type { HaloCommonProps, HaloNumeric } from '../../src/shared/types'
import type { HaloFormRule } from '../../src/shared/form'

export interface HaloFieldProps extends HaloCommonProps {
  label?: string
  labelWidth?: HaloNumeric
  prop?: string
  required?: boolean
  rules?: HaloFormRule | HaloFormRule[]
  value?: unknown
}

