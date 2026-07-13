import type { HaloCommonProps } from '../../src/shared/types'
import type { InjectionKey } from 'vue'

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

export interface HaloTabPanelProps extends HaloCommonProps {
  disabled?: boolean
  name: string | number
  title?: string
}

export interface HaloTabsContext {
  activeColor?: string
  modelValue?: string | number
  select: (item: HaloTabItem) => void
}

export const haloTabsKey: InjectionKey<HaloTabsContext> = Symbol('halo-tabs')
