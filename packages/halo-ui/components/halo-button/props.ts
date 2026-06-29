import type { HaloCommonProps, HaloSize, HaloType } from '../../src/shared/types'

export interface HaloButtonProps extends HaloCommonProps {
  block?: boolean
  disabled?: boolean
  formType?: 'submit' | 'reset'
  icon?: string
  loading?: boolean
  loadingText?: string
  openType?: string
  plain?: boolean
  round?: boolean
  size?: HaloSize
  type?: HaloType
}

