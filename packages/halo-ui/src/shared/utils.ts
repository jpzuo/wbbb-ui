import type { HaloStyleValue } from './types'

export function createNamespace(name: string) {
  const block = `halo-${name}`

  return {
    name: block,
    cls(element?: string, modifiers?: Array<string | false | undefined>) {
      const base = element ? `${block}__${element}` : block
      const modifierClasses = (modifiers ?? [])
        .filter(Boolean)
        .map((modifier) => `${base}--${modifier}`)

      return [base, ...modifierClasses]
    }
  }
}

export function addUnit(value?: string | number, unit = 'rpx') {
  if (value === undefined || value === null || value === '') {
    return undefined
  }

  if (typeof value === 'number') {
    return `${value}${unit}`
  }

  return /^\d+(\.\d+)?$/.test(value) ? `${value}${unit}` : value
}

export function toStyleText(style?: HaloStyleValue) {
  if (!style) {
    return ''
  }

  if (typeof style === 'string') {
    return style
  }

  return Object.entries(style)
    .map(([key, value]) => `${toKebabCase(key)}:${value}`)
    .join(';')
}

export function toKebabCase(value: string) {
  return value.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export function isPromise<T = unknown>(value: unknown): value is Promise<T> {
  return Boolean(value && typeof (value as Promise<T>).then === 'function')
}

