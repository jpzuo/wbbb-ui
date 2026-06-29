import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloPickerOption {
  label: string
  value: string | number
}

export interface HaloPickerProps extends HaloCommonProps {
  disabled?: boolean
  modelValue?: string | number
  options?: HaloPickerOption[]
  placeholder?: string
}

