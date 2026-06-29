import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloUploadFile {
  name?: string
  path: string
  size?: number
}

export interface HaloUploadProps extends HaloCommonProps {
  count?: number
  disabled?: boolean
  modelValue?: HaloUploadFile[]
  text?: string
}

