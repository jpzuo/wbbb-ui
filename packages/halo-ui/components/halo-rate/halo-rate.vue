<template>
  <view class="halo-rate" :class="[customClass, { 'halo-rate--disabled': disabled }]" :style="customStyle">
    <halo-icon
      v-for="item in count"
      :key="item"
      class="halo-rate__item"
      :class="{ 'halo-rate__item--active': item <= modelValue }"
      :aria-checked="item <= modelValue ? 'true' : 'false'"
      :aria-disabled="disabled ? 'true' : 'false'"
      role="radio"
      :tabindex="disabled ? -1 : item === Math.max(1, modelValue) ? 0 : -1"
      name="star"
      :size="34"
      :style="item <= modelValue && color ? `color:${color}` : ''"
      @tap="select(item)"
      @keydown="handleKeydown($event, item)"
    />
  </view>
</template>

<script setup lang="ts">
import HaloIcon from '../halo-icon'
import { isKeyboardActivation, preventKeyboardDefault } from '../../src/shared/keyboard'
import { normalizeNumber } from '../../src/shared/number'
import type { HaloRateProps } from './props'

const props = withDefaults(defineProps<HaloRateProps>(), {
  color: '',
  count: 5,
  customClass: '',
  customStyle: '',
  disabled: false,
  modelValue: 0
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  change: [value: number]
}>()

function select(value: number) {
  if (props.disabled) {
    return
  }

  const normalized = normalizeNumber(value, 0, props.count, 1)
  emit('update:modelValue', normalized)
  emit('change', normalized)
}

function handleKeydown(event: unknown, value: number) {
  if (!props.disabled && isKeyboardActivation(event)) {
    preventKeyboardDefault(event)
    select(value)
  }
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
