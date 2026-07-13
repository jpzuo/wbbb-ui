import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloCardProps extends HaloCommonProps {
  bordered?: boolean
  extra?: string
  shadow?: boolean
  title?: string
}

