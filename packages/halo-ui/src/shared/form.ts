import type { InjectionKey } from 'vue'
import Schema from 'async-validator'

export type HaloFormTrigger = 'change' | 'blur' | 'submit'

export interface HaloFormRule {
  max?: number
  message?: string
  min?: number
  pattern?: RegExp | string
  required?: boolean
  trigger?: HaloFormTrigger | HaloFormTrigger[]
  type?: 'string' | 'number' | 'boolean' | 'array' | 'object' | 'email' | 'url'
  validator?: (value: unknown, model?: Record<string, unknown>) => boolean | string | Promise<boolean | string>
  whitespace?: boolean
}

export interface HaloFieldValidationResult {
  valid: boolean
  message?: string
  prop?: string
}

export interface HaloFormFieldContext {
  prop?: string
  clearValidate: () => void
  validate: (trigger?: HaloFormTrigger) => Promise<HaloFieldValidationResult>
}

export interface HaloFormContext {
  disabled?: boolean
  labelWidth?: string | number
  model?: Record<string, unknown>
  rules?: Record<string, HaloFormRule | HaloFormRule[]>
  addField: (field: HaloFormFieldContext) => void
  removeField: (field: HaloFormFieldContext) => void
  validateField: (prop: string, trigger?: HaloFormTrigger) => Promise<HaloFieldValidationResult>
}

export const haloFormKey: InjectionKey<HaloFormContext> = Symbol('halo-form')

export function normalizeRules(rule?: HaloFormRule | HaloFormRule[]) {
  if (!rule) {
    return []
  }

  return Array.isArray(rule) ? rule : [rule]
}

export function isRuleMatched(rule: HaloFormRule, trigger?: HaloFormTrigger) {
  if (!trigger || !rule.trigger) {
    return true
  }

  const triggers = Array.isArray(rule.trigger) ? rule.trigger : [rule.trigger]
  return triggers.includes(trigger)
}

export async function validateRules(
  value: unknown,
  rules: HaloFormRule[],
  trigger?: HaloFormTrigger,
  model?: Record<string, unknown>
): Promise<HaloFieldValidationResult> {
  const matchedRules = rules.filter((rule) => isRuleMatched(rule, trigger))
  if (matchedRules.length === 0) {
    return { valid: true }
  }

  const descriptor = {
    value: matchedRules.map((rule) => ({
      max: rule.max,
      message: rule.message,
      min: rule.min,
      pattern: rule.pattern,
      required: rule.required,
      type: rule.type,
      whitespace: rule.whitespace,
      validator: undefined
    }))
  }

  try {
    await new Schema(descriptor).validate({ value })
  } catch (error) {
    const message = (error as { errors?: Array<{ message?: string }> }).errors?.[0]?.message
    return { valid: false, message: message ?? 'Invalid value' }
  }

  for (const rule of matchedRules) {
    if (!rule.validator) {
      continue
    }

    const result = await rule.validator(value, model)
    if (result !== true) {
      return { valid: false, message: typeof result === 'string' ? result : rule.message ?? 'Invalid value' }
    }
  }

  return { valid: true }
}
