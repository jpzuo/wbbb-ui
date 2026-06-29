import type { HaloCommonProps, HaloPlacement } from '../../src/shared/types'

export interface HaloPopupProps extends HaloCommonProps {
  closeOnClickOverlay?: boolean
  modelValue?: boolean
  placement?: HaloPlacement
  round?: boolean
  zIndex?: number
}

