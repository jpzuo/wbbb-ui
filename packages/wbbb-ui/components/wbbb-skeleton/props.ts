import type { WbbbCommonProps } from '../../src/shared/types'

export interface WbbbSkeletonProps extends WbbbCommonProps {
  animated?: boolean
  avatar?: boolean
  loading?: boolean
  rows?: number
  title?: boolean
}

