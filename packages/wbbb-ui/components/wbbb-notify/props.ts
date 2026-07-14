import type { WbbbCommonProps, WbbbType } from '../../src/shared/types'

export interface WbbbNotifyProps extends WbbbCommonProps {
  duration?: number
  message?: string
  modelValue?: boolean
  type?: Exclude<WbbbType, 'default'>
  zIndex?: number
}

