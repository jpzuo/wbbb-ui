import type { HaloCommonProps, HaloNumeric } from '../../src/shared/types'

export interface HaloAvatarProps extends HaloCommonProps {
  alt?: string
  round?: boolean
  size?: HaloNumeric
  src?: string
}

