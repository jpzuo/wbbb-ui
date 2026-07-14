import type { WbbbCommonProps, WbbbDirection } from '../../src/shared/types'

export interface WbbbStepItem {
  description?: string
  icon?: string
  status?: 'error' | 'finish' | 'process' | 'wait'
  title: string
}

export interface WbbbStepsProps extends WbbbCommonProps {
  active?: number
  direction?: WbbbDirection
  items?: WbbbStepItem[]
}
