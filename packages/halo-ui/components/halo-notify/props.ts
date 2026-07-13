import type { HaloCommonProps, HaloType } from '../../src/shared/types'

export interface HaloNotifyProps extends HaloCommonProps {
  duration?: number
  message?: string
  modelValue?: boolean
  type?: Exclude<HaloType, 'default'>
  zIndex?: number
}

