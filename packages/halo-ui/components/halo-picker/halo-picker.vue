<template>
  <picker
    :disabled="disabled"
    :range="options"
    range-key="label"
    :value="selectedIndex"
    @change="handleChange"
  >
    <view class="halo-picker" :class="[customClass, { 'halo-picker--placeholder': !selectedOption }]" :style="customStyle">
      <text>{{ selectedOption?.label || placeholder }}</text>
      <text class="halo-picker__arrow">></text>
    </view>
  </picker>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { HaloPickerProps } from './props'

const props = withDefaults(defineProps<HaloPickerProps>(), {
  customClass: '',
  customStyle: '',
  disabled: false,
  modelValue: '',
  options: () => [],
  placeholder: 'Please select'
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  change: [value: string | number]
}>()

const selectedIndex = computed(() => Math.max(0, props.options.findIndex((item) => item.value === props.modelValue)))
const selectedOption = computed(() => props.options.find((item) => item.value === props.modelValue))

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

