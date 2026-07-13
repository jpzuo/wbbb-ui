import type { HaloCommonProps, HaloStatus } from '../../src/shared/types'

export interface HaloTimelineItem {
  color?: string
  content?: string
  icon?: string
  status?: HaloStatus
  time?: string
  title: string
}

export interface HaloTimelineProps extends HaloCommonProps {
  items?: HaloTimelineItem[]
}
