import type { WbbbCommonProps, WbbbStatus } from '../../src/shared/types'

export interface WbbbNoticeBarProps extends WbbbCommonProps {
  closeable?: boolean
  color?: string
  text?: string
  type?: WbbbStatus | 'primary'
}
