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
    <view class="wbbb-date-picker" :class="[customClass, { 'wbbb-date-picker--placeholder': !modelValue }]" :style="customStyle">
      <text>{{ modelValue || placeholderText }}</text>
      <wbbb-icon class="wbbb-date-picker__arrow" name="right" :size="26" />
    </view>
  </picker>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import WbbbIcon from '../wbbb-icon'
import { useWbbbLocale } from '../../src/locale'
import type { WbbbDatePickerProps } from './props'

const props = withDefaults(defineProps<WbbbDatePickerProps>(), {
  customClass: '',
  customStyle: '',
  disabled: false,
  end: '',
  fields: 'day',
  modelValue: '',
  start: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  change: [value: string]
}>()

const messages = useWbbbLocale(() => props.locale)
const placeholderText = computed(() => props.placeholder ?? messages.value.datePickerPlaceholder)

function handleChange(event: unknown) {
  const value = (event as { detail?: { value?: string } }).detail?.value ?? ''
  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
