import { describe, expect, it } from 'vitest'
import { normalizeRules, validateRules } from './form'

describe('form validation', () => {
  it('normalizes single and multiple rules', () => {
    const rule = { required: true }

    expect(normalizeRules(rule)).toEqual([rule])
    expect(normalizeRules([rule])).toEqual([rule])
    expect(normalizeRules()).toEqual([])
  })

  it('validates required values', async () => {
    await expect(validateRules('', [{ required: true, message: 'Required' }])).resolves.toEqual({
      message: 'Required',
      valid: false
    })

    await expect(validateRules('ok', [{ required: true }])).resolves.toEqual({
      valid: true
    })
  })

  it('supports async validators and trigger filtering', async () => {
    const result = await validateRules(
      'taken',
      [
        {
          trigger: 'blur',
          validator: async (value) => value !== 'taken' || 'Already used'
        }
      ],
      'blur'
    )

    expect(result).toEqual({ message: 'Already used', valid: false })
    await expect(validateRules('taken', [{ trigger: 'change', validator: () => false }], 'blur')).resolves.toEqual({
      valid: true
    })
  })

  it('supports async-validator compatible built-in rules', async () => {
    await expect(validateRules('no', [{ min: 3, message: 'Too short', type: 'string' }])).resolves.toEqual({
      message: 'Too short',
      valid: false
    })

    await expect(validateRules('halo@example.com', [{ type: 'email' }])).resolves.toEqual({ valid: true })
  })
})
