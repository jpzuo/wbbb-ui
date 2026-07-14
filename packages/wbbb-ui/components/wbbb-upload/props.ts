import type { WbbbCommonProps, WbbbLocaleInput } from '../../src/shared/types'

export interface WbbbUploadFile {
  message?: string
  name?: string
  path: string
  size?: number
  status?: 'failed' | 'success' | 'uploading'
}

export interface WbbbUploadProps extends WbbbCommonProps {
  beforeRead?: (files: WbbbUploadFile[]) => boolean | Promise<boolean>
  count?: number
  disabled?: boolean
  locale?: WbbbLocaleInput
  modelValue?: WbbbUploadFile[]
  text?: string
  uploader?: (file: WbbbUploadFile, options?: { signal?: AbortSignal }) => WbbbUploadFile | Promise<WbbbUploadFile>
}
