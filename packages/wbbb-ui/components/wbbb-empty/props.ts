import type { WbbbCommonProps, WbbbLocaleInput, WbbbNumeric } from '../../src/shared/types'

export interface WbbbEmptyProps extends WbbbCommonProps {
  description?: string
  image?: string
  imageSize?: WbbbNumeric
  locale?: WbbbLocaleInput
}
