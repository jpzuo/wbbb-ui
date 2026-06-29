import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloSwiperItem {
  image?: string
  title?: string
  url?: string
}

export interface HaloSwiperProps extends HaloCommonProps {
  autoplay?: boolean
  circular?: boolean
  indicatorDots?: boolean
  interval?: number
  items?: HaloSwiperItem[]
}

