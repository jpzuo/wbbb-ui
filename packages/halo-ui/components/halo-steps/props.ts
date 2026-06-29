import type { HaloCommonProps, HaloDirection } from '../../src/shared/types'

export interface HaloStepItem {
  description?: string
  title: string
}

export interface HaloStepsProps extends HaloCommonProps {
  active?: number
  direction?: HaloDirection
  items?: HaloStepItem[]
}

