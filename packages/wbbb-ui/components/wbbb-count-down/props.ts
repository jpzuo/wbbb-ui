import type { WbbbCommonProps } from '../../src/shared/types'

export interface WbbbCountDownProps extends WbbbCommonProps {
  autoStart?: boolean
  format?: string
  time?: number
}

