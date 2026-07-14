import type { WbbbCommonProps, WbbbDirection } from '../../src/shared/types'

export interface WbbbDividerProps extends WbbbCommonProps {
  dashed?: boolean
  direction?: WbbbDirection
  textPosition?: 'left' | 'center' | 'right'
}

