import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloNavbarProps extends HaloCommonProps {
  border?: boolean
  fixed?: boolean
  leftArrow?: boolean
  leftText?: string
  placeholder?: boolean
  rightText?: string
  safeAreaTop?: boolean
  title?: string
}

