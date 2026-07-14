<template>
  <view class="wbbb-divider" :class="classes" :style="customStyle">
    <text class="wbbb-divider__text"><slot /></text>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { WbbbDividerProps } from './props'

const props = withDefaults(defineProps<WbbbDividerProps>(), {
  customClass: '',
  customStyle: '',
  dashed: false,
  direction: 'horizontal',
  textPosition: 'center'
})

const classes = computed(() => [
  props.customClass,
  `wbbb-divider--${props.direction}`,
  `wbbb-divider--text-${props.textPosition}`,
  { 'wbbb-divider--dashed': props.dashed }
])
</script>

<style lang="scss">
@use "./style.scss";
</style>
