import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloTimelineItem {
  content?: string
  time?: string
  title: string
}

export interface HaloTimelineProps extends HaloCommonProps {
  items?: HaloTimelineItem[]
}

