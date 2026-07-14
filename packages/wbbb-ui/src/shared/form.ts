import type { InjectionKey } from 'vue'
import Schema from 'async-validator'

export type WbbbFormTrigger = 'change' | 'blur' | 'submit'

export interface WbbbFormRule {
  max?: number
  message?: string
  min?: number
  pattern?: RegExp | string
  required?: boolean
  trigger?: WbbbFormTrigger | WbbbFormTrigger[]
  type?: 'string' | 'number' | 'boolean' | 'array' | 'object' | 'email' | 'url'
  validator?: (value: unknown, model?: Record<string, unknown>) => boolean | string | Promise<boolean | string>
  whitespace?: boolean
}

export interface WbbbFieldValidationResult {
  valid: boolean
  message?: string
  prop?: string
}

export interface WbbbFormFieldContext {
  prop?: string
  clearValidate: () => void
  validate: (trigger?: WbbbFormTrigger) => Promise<WbbbFieldValidationResult>
}

export interface WbbbFormContext {
  disabled?: boolean
  labelWidth?: string | number
  model?: Record<string, unknown>
  rules?: Record<string, WbbbFormRule | WbbbFormRule[]>
  addField: (field: WbbbFormFieldContext) => void
  removeField: (field: WbbbFormFieldContext) => void
  validateField: (prop: string, trigger?: WbbbFormTrigger) => Promise<WbbbFieldValidationResult>
}

export const wbbbFormKey: InjectionKey<WbbbFormContext> = Symbol('wbbb-form')

export function normalizeRules(rule?: WbbbFormRule | WbbbFormRule[]) {
  if (!rule) {
    return []
  }

  return Array.isArray(rule) ? rule : [rule]
}

export function isRuleMatched(rule: WbbbFormRule, trigger?: WbbbFormTrigger) {
  if (!trigger || !rule.trigger) {
    return true
  }

  const triggers = Array.isArray(rule.trigger) ? rule.trigger : [rule.trigger]
  return triggers.includes(trigger)
}

export async function validateRules(
  value: unknown,
  rules: WbbbFormRule[],
  trigger?: WbbbFormTrigger,
  model?: Record<string, unknown>
): Promise<WbbbFieldValidationResult> {
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
