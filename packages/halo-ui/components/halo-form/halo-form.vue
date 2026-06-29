<template>
  <view class="halo-form" :class="customClass" :style="customStyle"><slot /></view>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { haloFormKey, type HaloFieldValidationResult, type HaloFormFieldContext } from '../../src/shared/form'
import type { HaloFormProps } from './props'

const props = withDefaults(defineProps<HaloFormProps>(), {
  customClass: '',
  customStyle: '',
  disabled: false,
  labelWidth: 160,
  model: () => ({}),
  rules: () => ({})
})

const fields = new Set<HaloFormFieldContext>()

function addField(field: HaloFormFieldContext) {
  fields.add(field)
}

function removeField(field: HaloFormFieldContext) {
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

provide(haloFormKey, {
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
  validateField: (prop: string, trigger?: 'change' | 'blur' | 'submit') => Promise<HaloFieldValidationResult>
}>({
  clearValidate,
  validate,
  validateField
})
</script>

<style lang="scss">
@use "./style.scss";
</style>

