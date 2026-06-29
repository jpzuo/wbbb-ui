<template>
  <view class="halo-input" :class="[customClass, { 'halo-input--disabled': disabled }]" :style="customStyle">
    <input
      class="halo-input__control"
      :disabled="disabled || readonly"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      @blur="emit('blur', $event)"
      @confirm="emit('confirm', $event)"
      @focus="emit('focus', $event)"
      @input="handleInput"
    />
    <text v-if="clearable && modelValue && !disabled && !readonly" class="halo-input__clear" @tap="clear">x</text>
  </view>
</template>

<script setup lang="ts">
import type { HaloInputProps } from './props'

withDefaults(defineProps<HaloInputProps>(), {
  clearable: false,
  customClass: '',
  customStyle: '',
  disabled: false,
  maxlength: 140,
  modelValue: '',
  placeholder: '',
  readonly: false,
  type: 'text'
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  blur: [event: unknown]
  change: [value: string]
  clear: []
  confirm: [event: unknown]
  focus: [event: unknown]
}>()

function getEventValue(event: unknown) {
  return (event as { detail?: { value?: string } }).detail?.value ?? ''
}

function handleInput(event: unknown) {
  const value = getEventValue(event)
  emit('update:modelValue', value)
  emit('change', value)
}

function clear() {
  emit('update:modelValue', '')
  emit('change', '')
  emit('clear')
}
</script>

<style lang="scss">
@use "./style.scss";
</style>

