import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloCellProps extends HaloCommonProps {
  border?: boolean
  clickable?: boolean
  icon?: string
  label?: string
  required?: boolean
  title?: string
  value?: string
}

