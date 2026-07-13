import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloGridProps extends HaloCommonProps {
  bordered?: boolean
  columns?: number
  gap?: number
}

export interface HaloGridItemProps extends HaloCommonProps {
  clickable?: boolean
  icon?: string
  text?: string
}
