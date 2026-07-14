<template>
  <view class="wbbb-field" :class="[customClass, { 'wbbb-field--error': errorMessage }]" :style="customStyle">
    <view class="wbbb-field__label" :style="labelStyle">
      <text v-if="required" class="wbbb-field__required">*</text>
      <text>{{ label }}</text>
    </view>
    <view class="wbbb-field__body">
      <slot />
      <text v-if="errorMessage" class="wbbb-field__error">{{ errorMessage }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue'
import { addUnit } from '../../src/shared/utils'
import { wbbbFormKey, normalizeRules, validateRules } from '../../src/shared/form'
import type { WbbbFieldProps } from './props'

const props = withDefaults(defineProps<WbbbFieldProps>(), {
  customClass: '',
  customStyle: '',
  label: '',
  labelWidth: undefined,
  prop: '',
  required: false,
  rules: undefined,
  value: undefined
})

const form = inject(wbbbFormKey, undefined)
const errorMessage = ref('')

const labelStyle = computed(() => {
  const width = props.labelWidth ?? form?.labelWidth
  return width ? `width:${addUnit(width)}` : ''
})

const currentValue = computed(() => {
  if (props.value !== undefined) {
    return props.value
  }

  return props.prop ? form?.model?.[props.prop] : undefined
})

const field = {
  prop: props.prop,
  clearValidate,
  validate
}

function clearValidate() {
  errorMessage.value = ''
}

async function validate(trigger?: 'change' | 'blur' | 'submit') {
  const formRules = props.prop ? form?.rules?.[props.prop] : undefined
  const rules = normalizeRules(props.rules ?? formRules)
  const result = await validateRules(currentValue.value, rules, trigger, form?.model)
  errorMessage.value = result.message ?? ''
  return { ...result, prop: props.prop }
}

onMounted(() => {
  form?.addField(field)
})

onBeforeUnmount(() => {
  form?.removeField(field)
})

defineExpose({ clearValidate, validate })
</script>

<style lang="scss">
@use "./style.scss";
</style>

