import type { WbbbCommonProps, WbbbNumeric } from '../../src/shared/types'

export interface WbbbTextProps extends WbbbCommonProps {
  color?: string
  ellipsis?: boolean
  size?: WbbbNumeric
  type?: 'default' | 'secondary' | 'primary' | 'success' | 'warning' | 'danger'
}

