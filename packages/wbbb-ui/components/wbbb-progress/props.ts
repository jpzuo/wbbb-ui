import type { WbbbCommonProps, WbbbStatus } from '../../src/shared/types'

export interface WbbbProgressProps extends WbbbCommonProps {
  color?: string
  percentage?: number
  showText?: boolean
  status?: WbbbStatus
  strokeWidth?: number
}

