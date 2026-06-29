import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloSkeletonProps extends HaloCommonProps {
  animated?: boolean
  avatar?: boolean
  loading?: boolean
  rows?: number
  title?: boolean
}

