import type { HaloCommonProps } from '../../src/shared/types'
import type { InjectionKey } from 'vue'

export interface HaloTabbarItem {
  badge?: number | string
  dot?: boolean
  icon?: string
  name: string | number
  text: string
}

export interface HaloTabbarProps extends HaloCommonProps {
  activeColor?: string
  fixed?: boolean
  inactiveColor?: string
  items?: HaloTabbarItem[]
  modelValue?: string | number
  safeAreaInsetBottom?: boolean
  zIndex?: number
}

export interface HaloTabbarItemProps extends HaloCommonProps, HaloTabbarItem {}

export interface HaloTabbarContext {
  activeColor?: string
  inactiveColor?: string
  modelValue?: string | number
  select: (item: HaloTabbarItem) => void
}

export const haloTabbarKey: InjectionKey<HaloTabbarContext> = Symbol('halo-tabbar')
