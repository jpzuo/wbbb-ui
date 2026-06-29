<template>
  <view class="halo-textarea" :class="[customClass, { 'halo-textarea--disabled': disabled }]" :style="customStyle">
    <textarea
      class="halo-textarea__control"
      :auto-height="autoHeight"
      :disabled="disabled"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :value="modelValue"
      @blur="emit('blur', $event)"
      @focus="emit('focus', $event)"
      @input="handleInput"
    />
    <text v-if="showCount" class="halo-textarea__count">{{ modelValue.length }}/{{ maxlength }}</text>
  </view>
</template>

<script setup lang="ts">
import type { HaloTextareaProps } from './props'

withDefaults(defineProps<HaloTextareaProps>(), {
  autoHeight: false,
  customClass: '',
  customStyle: '',
  disabled: false,
  maxlength: 200,
  modelValue: '',
  placeholder: '',
  showCount: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  blur: [event: unknown]
  change: [value: string]
  focus: [event: unknown]
}>()

function handleInput(event: unknown) {
  const value = (event as { detail?: { value?: string } }).detail?.value ?? ''
  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<style lang="scss">
@use "./style.scss";
</style>

