import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloListItem {
  disabled?: boolean
  label?: string
  title: string
  value?: string
}

export interface HaloListProps extends HaloCommonProps {
  border?: boolean
  items?: HaloListItem[]
}

