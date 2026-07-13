import type { HaloCommonProps, HaloNumeric } from '../../src/shared/types'

export interface HaloIconProps extends HaloCommonProps {
  code?: string
  color?: string
  fontFamily?: string
  fontSet?: string
  name?: string
  size?: HaloNumeric
  src?: string
}
