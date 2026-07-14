export type WbbbType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'

export type WbbbSize = 'mini' | 'small' | 'medium' | 'large'

export type WbbbAlign = 'left' | 'center' | 'right'

export type WbbbDirection = 'horizontal' | 'vertical'

export type WbbbPlacement = 'top' | 'right' | 'bottom' | 'left' | 'center'

export type WbbbStatus = 'default' | 'success' | 'warning' | 'danger' | 'info'

export type WbbbNumeric = number | string

export type WbbbLocale = 'zh-CN' | 'en-US'

export type WbbbLocaleInput = WbbbLocale | 'zh-cn' | 'en'

export type WbbbStyleValue = string | Record<string, string | number>

export interface WbbbCommonProps {
  customClass?: string
  customStyle?: WbbbStyleValue
}
