export type HaloType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'

export type HaloSize = 'mini' | 'small' | 'medium' | 'large'

export type HaloAlign = 'left' | 'center' | 'right'

export type HaloDirection = 'horizontal' | 'vertical'

export type HaloPlacement = 'top' | 'right' | 'bottom' | 'left' | 'center'

export type HaloStatus = 'default' | 'success' | 'warning' | 'danger' | 'info'

export type HaloNumeric = number | string

export type HaloStyleValue = string | Record<string, string | number>

export interface HaloCommonProps {
  customClass?: string
  customStyle?: HaloStyleValue
}

