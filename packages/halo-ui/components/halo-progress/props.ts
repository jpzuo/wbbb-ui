import type { HaloCommonProps, HaloStatus } from '../../src/shared/types'

export interface HaloProgressProps extends HaloCommonProps {
  color?: string
  percentage?: number
  showText?: boolean
  status?: HaloStatus
  strokeWidth?: number
}

