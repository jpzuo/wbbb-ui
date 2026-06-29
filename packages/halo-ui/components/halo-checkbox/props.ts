import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloCheckboxOption {
  disabled?: boolean
  label: string
  value: string | number
}

export interface HaloCheckboxProps extends HaloCommonProps {
  disabled?: boolean
  modelValue?: Array<string | number>
  options?: HaloCheckboxOption[]
}

