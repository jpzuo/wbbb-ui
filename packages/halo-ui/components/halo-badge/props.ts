import type { HaloCommonProps, HaloType } from '../../src/shared/types'

export interface HaloBadgeProps extends HaloCommonProps {
  dot?: boolean
  max?: number
  showZero?: boolean
  type?: HaloType
  value?: number | string
}

