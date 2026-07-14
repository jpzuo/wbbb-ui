<template>
  <view class="wbbb-input" :class="[customClass, { 'wbbb-input--disabled': disabled, 'wbbb-input--error': error, 'wbbb-input--focus': focused, 'wbbb-input--readonly': readonly }]" :style="customStyle">
    <input
      class="wbbb-input__control"
      :disabled="disabled || readonly"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      @blur="handleBlur"
      @confirm="emit('confirm', $event)"
      @focus="handleFocus"
      @input="handleInput"
    />
    <wbbb-icon v-if="clearable && modelValue && !disabled && !readonly" class="wbbb-input__clear" name="close" :size="24" @tap="clear" />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WbbbIcon from '../wbbb-icon'
import type { WbbbInputProps } from './props'

withDefaults(defineProps<WbbbInputProps>(), {
  clearable: false,
  customClass: '',
  customStyle: '',
  disabled: false,
  error: false,
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

const focused = ref(false)

function getEventValue(event: unknown) {
  return (event as { detail?: { value?: string } }).detail?.value ?? ''
}

function handleInput(event: unknown) {
  const value = getEventValue(event)
  emit('update:modelValue', value)
  emit('change', value)
}

function handleFocus(event: unknown) {
  focused.value = true
  emit('focus', event)
}

function handleBlur(event: unknown) {
  focused.value = false
  emit('blur', event)
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
