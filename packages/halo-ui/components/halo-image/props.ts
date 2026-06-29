import type { HaloCommonProps, HaloNumeric } from '../../src/shared/types'

export interface HaloImageProps extends HaloCommonProps {
  height?: HaloNumeric
  lazyLoad?: boolean
  mode?: string
  radius?: HaloNumeric
  src?: string
  width?: HaloNumeric
}

