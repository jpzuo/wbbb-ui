import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloActionSheetAction {
  color?: string
  disabled?: boolean
  name: string
  subname?: string
}

export interface HaloActionSheetProps extends HaloCommonProps {
  actions?: HaloActionSheetAction[]
  cancelText?: string
  modelValue?: boolean
  title?: string
}

