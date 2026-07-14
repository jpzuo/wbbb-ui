import type { WbbbCommonProps, WbbbSize, WbbbType } from '../../src/shared/types'

export interface WbbbButtonProps extends WbbbCommonProps {
  block?: boolean
  disabled?: boolean
  formType?: 'submit' | 'reset'
  icon?: string
  loading?: boolean
  loadingText?: string
  openType?: string
  plain?: boolean
  round?: boolean
  size?: WbbbSize
  type?: WbbbType
}

