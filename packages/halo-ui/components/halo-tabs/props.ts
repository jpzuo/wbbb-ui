import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloTabItem {
  badge?: number | string
  disabled?: boolean
  name: string | number
  title: string
}

export interface HaloTabsProps extends HaloCommonProps {
  activeColor?: string
  items?: HaloTabItem[]
  modelValue?: string | number
  scrollable?: boolean
}

