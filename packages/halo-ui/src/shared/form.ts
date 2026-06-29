import type { InjectionKey } from 'vue'
import { isPromise } from './utils'

export type HaloFormTrigger = 'change' | 'blur' | 'submit'

export interface HaloFormRule {
  message?: string
  required?: boolean
  trigger?: HaloFormTrigger | HaloFormTrigger[]
  validator?: (value: unknown, model?: Record<string, unknown>) => boolean | string | Promise<boolean | string>
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
  for (const rule of rules) {
    if (!isRuleMatched(rule, trigger)) {
      continue
    }

    if (rule.required && (value === undefined || value === null || value === '')) {
      return { valid: false, message: rule.message ?? 'This field is required' }
    }

    if (rule.validator) {
      const result = rule.validator(value, model)
      const resolved = isPromise<boolean | string>(result) ? await result : result

      if (resolved !== true) {
        return {
          valid: false,
          message: typeof resolved === 'string' ? resolved : rule.message ?? 'Invalid value'
        }
      }
    }
  }

  return { valid: true }
}

