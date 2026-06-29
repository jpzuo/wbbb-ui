import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloCountDownProps extends HaloCommonProps {
  autoStart?: boolean
  format?: string
  time?: number
}

