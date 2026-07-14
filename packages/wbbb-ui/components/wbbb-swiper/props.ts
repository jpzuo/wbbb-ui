import type { WbbbCommonProps } from '../../src/shared/types'

export interface WbbbSwiperItem {
  image?: string
  title?: string
  url?: string
}

export interface WbbbSwiperProps extends WbbbCommonProps {
  autoplay?: boolean
  circular?: boolean
  indicatorDots?: boolean
  interval?: number
  items?: WbbbSwiperItem[]
}

