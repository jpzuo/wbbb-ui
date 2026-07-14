import type { WbbbCommonProps } from '../../src/shared/types'

export interface WbbbCollapseItem {
  content?: string
  disabled?: boolean
  name: string | number
  title: string
}

export interface WbbbCollapseProps extends WbbbCommonProps {
  accordion?: boolean
  animated?: boolean
  items?: WbbbCollapseItem[]
  modelValue?: Array<string | number> | string | number
}
