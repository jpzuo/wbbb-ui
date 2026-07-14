import type { WbbbCommonProps } from '../../src/shared/types'

export interface WbbbGridProps extends WbbbCommonProps {
  bordered?: boolean
  columns?: number
  gap?: number
}

export interface WbbbGridItemProps extends WbbbCommonProps {
  clickable?: boolean
  icon?: string
  text?: string
}
