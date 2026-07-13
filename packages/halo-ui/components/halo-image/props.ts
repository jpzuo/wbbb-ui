import type { HaloCommonProps, HaloNumeric } from '../../src/shared/types'

export interface HaloImageProps extends HaloCommonProps {
  errorText?: string
  height?: HaloNumeric
  lazyLoad?: boolean
  mode?: string
  radius?: HaloNumeric
  showError?: boolean
  showLoading?: boolean
  src?: string
  loading?: boolean
  loadingText?: string
  width?: HaloNumeric
}
