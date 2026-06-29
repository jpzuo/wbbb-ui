<template>
  <view class="halo-stepper" :class="[customClass, { 'halo-stepper--disabled': disabled }]" :style="customStyle">
    <button class="halo-stepper__button" :disabled="disabled || modelValue <= min" @tap="change(modelValue - step)">-</button>
    <input class="halo-stepper__input" :disabled="disabled" type="number" :value="modelValue" @input="handleInput" />
    <button class="halo-stepper__button" :disabled="disabled || modelValue >= max" @tap="change(modelValue + step)">+</button>
  </view>
</template>

<script setup lang="ts">
import { clamp } from '../../src/shared/utils'
import type { HaloStepperProps } from './props'

const props = withDefaults(defineProps<HaloStepperProps>(), {
  customClass: '',
  customStyle: '',
  disabled: false,
  max: Number.MAX_SAFE_INTEGER,
  min: 0,
  modelValue: 0,
  step: 1
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  change: [value: number]
}>()

function change(next: number) {
  const value = clamp(next, props.min, props.max)
  emit('update:modelValue', value)
  emit('change', value)
}

function handleInput(event: unknown) {
  const raw = (event as { detail?: { value?: string } }).detail?.value ?? ''
  change(Number(raw))
}
</script>

<style lang="scss">
@use "./style.scss";
</style>

