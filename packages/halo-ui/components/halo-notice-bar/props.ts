import type { HaloCommonProps, HaloStatus } from '../../src/shared/types'

export interface HaloNoticeBarProps extends HaloCommonProps {
  closeable?: boolean
  color?: string
  text?: string
  type?: HaloStatus | 'primary'
}
