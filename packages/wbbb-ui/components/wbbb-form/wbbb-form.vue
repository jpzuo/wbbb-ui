<template>
  <view class="wbbb-form" :class="customClass" :style="customStyle"><slot /></view>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { wbbbFormKey, type WbbbFieldValidationResult, type WbbbFormFieldContext } from '../../src/shared/form'
import type { WbbbFormProps } from './props'

const props = withDefaults(defineProps<WbbbFormProps>(), {
  customClass: '',
  customStyle: '',
  disabled: false,
  labelWidth: 160,
  model: () => ({}),
  rules: () => ({})
})

const fields = new Set<WbbbFormFieldContext>()

function addField(field: WbbbFormFieldContext) {
  fields.add(field)
}

function removeField(field: WbbbFormFieldContext) {
  fields.delete(field)
}

async function validateField(prop: string, trigger?: 'change' | 'blur' | 'submit') {
  const field = [...fields].find((item) => item.prop === prop)
  return field ? field.validate(trigger) : { valid: true, prop }
}

async function validate() {
  const results = await Promise.all([...fields].map((field) => field.validate('submit')))
  return results.every((item) => item.valid)
}

function clearValidate() {
  fields.forEach((field) => field.clearValidate())
}

provide(wbbbFormKey, {
  get disabled() {
    return props.disabled
  },
  get labelWidth() {
    return props.labelWidth
  },
  get model() {
    return props.model
  },
  get rules() {
    return props.rules
  },
  addField,
  removeField,
  validateField
})

defineExpose<{
  clearValidate: () => void
  validate: () => Promise<boolean>
  validateField: (prop: string, trigger?: 'change' | 'blur' | 'submit') => Promise<WbbbFieldValidationResult>
}>({
  clearValidate,
  validate,
  validateField
})
</script>

<style lang="scss">
@use "./style.scss";
</style>

