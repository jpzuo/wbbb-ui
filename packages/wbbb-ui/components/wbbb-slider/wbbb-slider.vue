<template>
  <slider
    class="wbbb-slider"
    :active-color="activeColor || undefined"
    :class="customClass"
    :disabled="disabled"
    :max="max"
    :min="min"
    :show-value="showValue"
    :step="step"
    :style="customStyle"
    :value="modelValue"
    @change="handleChange"
    @changing="handleChanging"
  />
</template>

<script setup lang="ts">
import { normalizeNumber } from '../../src/shared/number'
import type { WbbbSliderProps } from './props'

const props = withDefaults(defineProps<WbbbSliderProps>(), {
  activeColor: '',
  customClass: '',
  customStyle: '',
  disabled: false,
  max: 100,
  min: 0,
  modelValue: 0,
  showValue: false,
  step: 1
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  change: [value: number]
  changing: [value: number]
}>()

function getValue(event: unknown) {
  const value = Number((event as { detail?: { value?: number } }).detail?.value ?? props.min)
  return normalizeNumber(value, props.min, props.max, props.step)
}

function handleChange(event: unknown) {
  const value = getValue(event)
  emit('update:modelValue', value)
  emit('change', value)
}

function handleChanging(event: unknown) {
  emit('changing', getValue(event))
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
