<template>
  <view class="wbbb-progress" :class="customClass" :style="customStyle">
    <view class="wbbb-progress__track" :style="trackStyle">
      <view class="wbbb-progress__bar" :class="`wbbb-progress__bar--${status}`" :style="barStyle" />
    </view>
    <text v-if="showText" class="wbbb-progress__text">{{ normalized }}%</text>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { clamp } from '../../src/shared/utils'
import type { WbbbProgressProps } from './props'

const props = withDefaults(defineProps<WbbbProgressProps>(), {
  color: '',
  customClass: '',
  customStyle: '',
  percentage: 0,
  showText: true,
  status: 'default',
  strokeWidth: 12
})

const normalized = computed(() => clamp(props.percentage, 0, 100))
const trackStyle = computed(() => `height:${props.strokeWidth}rpx;border-radius:${props.strokeWidth}rpx`)
const barStyle = computed(() => [
  `width:${normalized.value}%`,
  `height:${props.strokeWidth}rpx`,
  `border-radius:${props.strokeWidth}rpx`,
  props.color ? `background:${props.color}` : ''
].filter(Boolean).join(';'))
</script>

<style lang="scss">
@use "./style.scss";
</style>

