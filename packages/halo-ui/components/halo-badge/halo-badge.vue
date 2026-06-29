<template>
  <view class="halo-badge" :class="customClass" :style="customStyle">
    <slot />
    <text v-if="visible" class="halo-badge__content" :class="[`halo-badge__content--${type}`, { 'halo-badge__content--dot': dot }]">
      {{ dot ? '' : displayValue }}
    </text>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { HaloBadgeProps } from './props'

const props = withDefaults(defineProps<HaloBadgeProps>(), {
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

