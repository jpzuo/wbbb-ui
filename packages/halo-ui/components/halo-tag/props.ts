import type { HaloCommonProps, HaloSize, HaloType } from '../../src/shared/types'

export interface HaloTagProps extends HaloCommonProps {
  closable?: boolean
  plain?: boolean
  round?: boolean
  size?: HaloSize
  type?: HaloType
}

