import type { HaloCommonProps, HaloNumeric } from '../../src/shared/types'

export interface HaloTextProps extends HaloCommonProps {
  color?: string
  ellipsis?: boolean
  size?: HaloNumeric
  type?: 'default' | 'secondary' | 'primary' | 'success' | 'warning' | 'danger'
}

