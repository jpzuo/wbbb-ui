import type { HaloCommonProps, HaloDirection } from '../../src/shared/types'

export interface HaloDividerProps extends HaloCommonProps {
  dashed?: boolean
  direction?: HaloDirection
  textPosition?: 'left' | 'center' | 'right'
}

