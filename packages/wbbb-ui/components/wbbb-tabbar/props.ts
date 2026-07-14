import type { WbbbCommonProps } from '../../src/shared/types'
import type { InjectionKey } from 'vue'

export interface WbbbTabbarItem {
  badge?: number | string
  dot?: boolean
  icon?: string
  name: string | number
  text: string
}

export interface WbbbTabbarProps extends WbbbCommonProps {
  activeColor?: string
  fixed?: boolean
  inactiveColor?: string
  items?: WbbbTabbarItem[]
  modelValue?: string | number
  safeAreaInsetBottom?: boolean
  zIndex?: number
}

export interface WbbbTabbarItemProps extends WbbbCommonProps, WbbbTabbarItem {}

export interface WbbbTabbarContext {
  activeColor?: string
  inactiveColor?: string
  modelValue?: string | number
  select: (item: WbbbTabbarItem) => void
}

export const wbbbTabbarKey: InjectionKey<WbbbTabbarContext> = Symbol('wbbb-tabbar')
