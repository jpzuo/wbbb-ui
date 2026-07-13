<template>
  <picker
    mode="date"
    :disabled="disabled"
    :end="end"
    :fields="fields"
    :start="start"
    :value="modelValue"
    @change="handleChange"
  >
    <view class="halo-date-picker" :class="[customClass, { 'halo-date-picker--placeholder': !modelValue }]" :style="customStyle">
      <text>{{ modelValue || placeholder }}</text>
      <halo-icon class="halo-date-picker__arrow" name="right" :size="26" />
    </view>
  </picker>
</template>

<script setup lang="ts">
import HaloIcon from '../halo-icon'
import type { HaloDatePickerProps } from './props'

withDefaults(defineProps<HaloDatePickerProps>(), {
  customClass: '',
  customStyle: '',
  disabled: false,
  end: '',
  fields: 'day',
  locale: 'zh-cn',
  modelValue: '',
  placeholder: 'Select date',
  start: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  change: [value: string]
}>()

function handleChange(event: unknown) {
  const value = (event as { detail?: { value?: string } }).detail?.value ?? ''
  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
