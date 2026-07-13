import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloCollapseItem {
  content?: string
  disabled?: boolean
  name: string | number
  title: string
}

export interface HaloCollapseProps extends HaloCommonProps {
  accordion?: boolean
  animated?: boolean
  items?: HaloCollapseItem[]
  modelValue?: Array<string | number> | string | number
}
