import type { WbbbCommonProps, WbbbType } from '../../src/shared/types'

export interface WbbbBadgeProps extends WbbbCommonProps {
  dot?: boolean
  max?: number
  showZero?: boolean
  type?: WbbbType
  value?: number | string
}

