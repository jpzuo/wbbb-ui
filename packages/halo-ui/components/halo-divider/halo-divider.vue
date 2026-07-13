<template>
  <view class="halo-divider" :class="classes" :style="customStyle">
    <text class="halo-divider__text"><slot /></text>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { HaloDividerProps } from './props'

const props = withDefaults(defineProps<HaloDividerProps>(), {
  customClass: '',
  customStyle: '',
  dashed: false,
  direction: 'horizontal',
  textPosition: 'center'
})

const classes = computed(() => [
  props.customClass,
  `halo-divider--${props.direction}`,
  `halo-divider--text-${props.textPosition}`,
  { 'halo-divider--dashed': props.dashed }
])
</script>

<style lang="scss">
@use "./style.scss";
</style>
