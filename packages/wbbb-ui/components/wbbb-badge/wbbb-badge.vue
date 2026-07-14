<template>
  <view class="wbbb-badge" :class="customClass" :style="customStyle">
    <slot />
    <text v-if="visible" class="wbbb-badge__content" :class="[`wbbb-badge__content--${type}`, { 'wbbb-badge__content--dot': dot }]">
      {{ dot ? '' : displayValue }}
    </text>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { WbbbBadgeProps } from './props'

const props = withDefaults(defineProps<WbbbBadgeProps>(), {
  customClass: '',
  customStyle: '',
  dot: false,
  max: 99,
  showZero: false,
  type: 'danger',
  value: ''
})

const visible = computed(() => props.dot || props.showZero || props.value !== '' && props.value !== 0)
const displayValue = computed(() => {
  if (typeof props.value === 'number' && props.value > props.max) {
    return `${props.max}+`
  }

  return props.value
})
</script>

<style lang="scss">
@use "./style.scss";
</style>

