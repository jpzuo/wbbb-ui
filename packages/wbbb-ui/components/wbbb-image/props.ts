import type { WbbbCommonProps, WbbbNumeric } from '../../src/shared/types'

export interface WbbbImageProps extends WbbbCommonProps {
  errorText?: string
  height?: WbbbNumeric
  lazyLoad?: boolean
  mode?: string
  radius?: WbbbNumeric
  showError?: boolean
  showLoading?: boolean
  src?: string
  loading?: boolean
  loadingText?: string
  width?: WbbbNumeric
}
