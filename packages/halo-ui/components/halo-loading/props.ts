import type { HaloCommonProps, HaloNumeric } from '../../src/shared/types'

export interface HaloLoadingProps extends HaloCommonProps {
  color?: string
  size?: HaloNumeric
  text?: string
  vertical?: boolean
}

