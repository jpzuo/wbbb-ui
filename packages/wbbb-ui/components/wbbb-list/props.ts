import type { WbbbCommonProps } from '../../src/shared/types'

export interface WbbbListItem {
  disabled?: boolean
  label?: string
  title: string
  value?: string
}

export interface WbbbListProps extends WbbbCommonProps {
  border?: boolean
  items?: WbbbListItem[]
}

