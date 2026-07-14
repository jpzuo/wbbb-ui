import type { WbbbCommonProps, WbbbPlacement } from '../../src/shared/types'

export interface WbbbPopupProps extends WbbbCommonProps {
  closeOnClickOverlay?: boolean
  modelValue?: boolean
  placement?: WbbbPlacement
  round?: boolean
  zIndex?: number
}

