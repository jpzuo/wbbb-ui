import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloDialogProps extends HaloCommonProps {
  cancelText?: string
  confirmText?: string
  content?: string
  modelValue?: boolean
  showCancel?: boolean
  title?: string
}

