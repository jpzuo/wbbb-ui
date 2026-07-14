import type { WbbbCommonProps } from '../../src/shared/types'
import type { InjectionKey } from 'vue'

export interface WbbbTabItem {
  badge?: number | string
  disabled?: boolean
  name: string | number
  title: string
}

export interface WbbbTabsProps extends WbbbCommonProps {
  activeColor?: string
  items?: WbbbTabItem[]
  modelValue?: string | number
  scrollable?: boolean
}

export interface WbbbTabPanelProps extends WbbbCommonProps {
  disabled?: boolean
  name: string | number
  title?: string
}

export interface WbbbTabsContext {
  activeColor?: string
  modelValue?: string | number
  select: (item: WbbbTabItem) => void
}

export const wbbbTabsKey: InjectionKey<WbbbTabsContext> = Symbol('wbbb-tabs')
