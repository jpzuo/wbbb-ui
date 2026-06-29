import type { HaloCommonProps, HaloNumeric } from '../../src/shared/types'
import type { HaloFormRule } from '../../src/shared/form'

export interface HaloFormProps extends HaloCommonProps {
  disabled?: boolean
  labelWidth?: HaloNumeric
  model?: Record<string, unknown>
  rules?: Record<string, HaloFormRule | HaloFormRule[]>
}

