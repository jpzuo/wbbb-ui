import type { HaloCommonProps } from '../../src/shared/types'

export interface HaloUploadFile {
  message?: string
  name?: string
  path: string
  size?: number
  status?: 'failed' | 'success' | 'uploading'
}

export interface HaloUploadProps extends HaloCommonProps {
  beforeRead?: (files: HaloUploadFile[]) => boolean | Promise<boolean>
  count?: number
  disabled?: boolean
  modelValue?: HaloUploadFile[]
  text?: string
  uploader?: (file: HaloUploadFile, options?: { signal?: AbortSignal }) => HaloUploadFile | Promise<HaloUploadFile>
}
