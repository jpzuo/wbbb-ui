import type { WbbbCommonProps, WbbbStatus } from '../../src/shared/types'

export interface WbbbTimelineItem {
  color?: string
  content?: string
  icon?: string
  status?: WbbbStatus
  time?: string
  title: string
}

export interface WbbbTimelineProps extends WbbbCommonProps {
  items?: WbbbTimelineItem[]
}
