<template>
  <picker
    :disabled="disabled"
    :range="options"
    range-key="label"
    :value="selectedIndex"
    @change="handleChange"
  >
    <view class="wbbb-picker" :class="[customClass, { 'wbbb-picker--placeholder': !selectedOption }]" :style="customStyle">
      <text>{{ selectedOption?.label || placeholderText }}</text>
      <wbbb-icon class="wbbb-picker__arrow" name="right" :size="26" />
    </view>
  </picker>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import WbbbIcon from '../wbbb-icon'
import { useWbbbLocale } from '../../src/locale'
import type { WbbbPickerProps } from './props'

const props = withDefaults(defineProps<WbbbPickerProps>(), {
  customClass: '',
  customStyle: '',
  disabled: false,
  modelValue: '',
  options: () => []
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  change: [value: string | number]
}>()

const selectedIndex = computed(() => Math.max(0, props.options.findIndex((item) => item.value === props.modelValue)))
const selectedOption = computed(() => props.options.find((item) => item.value === props.modelValue))
const messages = useWbbbLocale(() => props.locale)
const placeholderText = computed(() => props.placeholder ?? messages.value.pickerPlaceholder)

function handleChange(event: unknown) {
  const index = Number((event as { detail?: { value?: number | string } }).detail?.value ?? 0)
  const option = props.options[index]

  if (option) {
    emit('update:modelValue', option.value)
    emit('change', option.value)
  }
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
