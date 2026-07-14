import type { WbbbCommonProps } from '../../src/shared/types'

export interface WbbbCellProps extends WbbbCommonProps {
  border?: boolean
  clickable?: boolean
  icon?: string
  label?: string
  required?: boolean
  title?: string
  value?: string
}

export interface WbbbCellGroupProps extends WbbbCommonProps {
  border?: boolean
  inset?: boolean
  title?: string
}
