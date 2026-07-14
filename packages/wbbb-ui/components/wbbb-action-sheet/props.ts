import type { WbbbCommonProps, WbbbLocaleInput } from '../../src/shared/types'

export interface WbbbActionSheetAction {
  color?: string
  disabled?: boolean
  name: string
  subname?: string
}

export interface WbbbActionSheetProps extends WbbbCommonProps {
  actions?: WbbbActionSheetAction[]
  cancelText?: string
  locale?: WbbbLocaleInput
  modelValue?: boolean
  title?: string
}
