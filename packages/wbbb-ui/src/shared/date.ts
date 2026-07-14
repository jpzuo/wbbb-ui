import dayjs, { type Dayjs } from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import duration from 'dayjs/plugin/duration'
import weekday from 'dayjs/plugin/weekday'
import 'dayjs/locale/zh-cn'
import { normalizeLocale } from '../locale'
import type { WbbbLocaleInput } from './types'

dayjs.extend(customParseFormat)
dayjs.extend(duration)
dayjs.extend(weekday)

export const WBBB_DATE_FORMAT = 'YYYY-MM-DD'
export type WbbbDateLocale = WbbbLocaleInput

export function getDate(value?: string, format = WBBB_DATE_FORMAT): Dayjs | undefined {
  if (!value) {
    return undefined
  }

  const parsed = dayjs(value, format, true)
  return parsed.isValid() ? parsed : undefined
}

export function getMonth(value?: string): Dayjs {
  return getDate(value, 'YYYY-MM') ?? dayjs().startOf('month')
}

export function formatDate(value: Dayjs, format = WBBB_DATE_FORMAT) {
  return value.format(format)
}

export function getWeekdays(locale: WbbbDateLocale, firstDayOfWeek: 0 | 1) {
  const weekdays = normalizeLocale(locale) === 'zh-CN'
    ? ['日', '一', '二', '三', '四', '五', '六']
    : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return firstDayOfWeek === 1 ? [...weekdays.slice(1), weekdays[0]] : weekdays
}

export function formatCountDown(milliseconds: number, format: string) {
  const value = dayjs.duration(Math.max(0, milliseconds))
  const totalHours = Math.floor(value.asHours())

  return format
    .replace('HH', String(totalHours).padStart(2, '0'))
    .replace('mm', String(value.minutes()).padStart(2, '0'))
    .replace('ss', String(value.seconds()).padStart(2, '0'))
}
