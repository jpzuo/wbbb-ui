import type { WbbbCommonProps, WbbbNumeric } from '../../src/shared/types'

export interface WbbbIconProps extends WbbbCommonProps {
  code?: string
  color?: string
  fontFamily?: string
  fontSet?: string
  name?: string
  size?: WbbbNumeric
  src?: string
}
