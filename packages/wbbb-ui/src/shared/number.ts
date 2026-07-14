import Decimal from 'decimal.js-light'

export function normalizeNumber(value: number, min: number, max: number, step = 0) {
  const decimal = new Decimal(Number.isFinite(value) ? value : min)
  const lower = new Decimal(min)
  const upper = new Decimal(max)
  const bounded = decimal.lessThan(lower) ? lower : decimal.greaterThan(upper) ? upper : decimal

  if (step <= 0) {
    return bounded.toNumber()
  }

  const stepDecimal = new Decimal(step)
  const snapped = bounded.minus(lower).div(stepDecimal).toDecimalPlaces(0).times(stepDecimal).plus(lower)
  return (snapped.lessThan(lower) ? lower : snapped.greaterThan(upper) ? upper : snapped).toNumber()
}

export function addStep(value: number, step: number, direction: 1 | -1, min: number, max: number) {
  return normalizeNumber(new Decimal(value).plus(new Decimal(step).times(direction)).toNumber(), min, max, step)
}
