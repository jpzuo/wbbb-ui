<template>
  <view class="wbbb-stepper" :class="[customClass, { 'wbbb-stepper--disabled': disabled }]" :style="customStyle">
    <button class="wbbb-stepper__button" :disabled="disabled || modelValue <= min" @tap="decrease">
      <wbbb-icon name="minus" :size="26" />
    </button>
    <input class="wbbb-stepper__input" :disabled="disabled" type="number" :value="modelValue" @input="handleInput" />
    <button class="wbbb-stepper__button" :disabled="disabled || modelValue >= max" @tap="increase">
      <wbbb-icon name="plus" :size="26" />
    </button>
  </view>
</template>

<script setup lang="ts">
import WbbbIcon from '../wbbb-icon'
import { addStep, normalizeNumber } from '../../src/shared/number'
import type { WbbbStepperProps } from './props'

const props = withDefaults(defineProps<WbbbStepperProps>(), {
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
  const value = normalizeNumber(next, props.min, props.max, props.step)
  emit('update:modelValue', value)
  emit('change', value)
}

function decrease() {
  change(addStep(props.modelValue, props.step, -1, props.min, props.max))
}

function increase() {
  change(addStep(props.modelValue, props.step, 1, props.min, props.max))
}

function handleInput(event: unknown) {
  const raw = (event as { detail?: { value?: string } }).detail?.value ?? ''
  if (raw) {
    change(Number(raw))
  }
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
