import type { WbbbCommonProps, WbbbLocaleInput } from '../../src/shared/types'

export interface WbbbDialogProps extends WbbbCommonProps {
  cancelText?: string
  confirmText?: string
  content?: string
  locale?: WbbbLocaleInput
  modelValue?: boolean
  showCancel?: boolean
  title?: string
}
