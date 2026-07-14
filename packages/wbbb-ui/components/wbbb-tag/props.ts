import type { WbbbCommonProps, WbbbSize, WbbbType } from '../../src/shared/types'

export interface WbbbTagProps extends WbbbCommonProps {
  clickable?: boolean
  closable?: boolean
  plain?: boolean
  round?: boolean
  size?: WbbbSize
  type?: WbbbType
}
