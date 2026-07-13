<template>
  <view class="halo-textarea" :class="[customClass, { 'halo-textarea--disabled': disabled, 'halo-textarea--error': error, 'halo-textarea--focus': focused, 'halo-textarea--readonly': readonly }]" :style="customStyle">
    <textarea
      class="halo-textarea__control"
      :auto-height="autoHeight"
      :disabled="disabled || readonly"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :value="modelValue"
      @blur="handleBlur"
      @focus="handleFocus"
      @input="handleInput"
    />
    <text v-if="showCount" class="halo-textarea__count">{{ modelValue.length }}/{{ maxlength }}</text>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { HaloTextareaProps } from './props'

withDefaults(defineProps<HaloTextareaProps>(), {
  autoHeight: false,
  customClass: '',
  customStyle: '',
  disabled: false,
  error: false,
  maxlength: 200,
  modelValue: '',
  placeholder: '',
  readonly: false,
  showCount: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  blur: [event: unknown]
  change: [value: string]
  focus: [event: unknown]
}>()

const focused = ref(false)

function handleInput(event: unknown) {
  const value = (event as { detail?: { value?: string } }).detail?.value ?? ''
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
</script>

<style lang="scss">
@use "./style.scss";
</style>
