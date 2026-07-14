<template>
  <view class="wbbb-safe-area" :class="classes" :style="customStyle"><slot /></view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { WbbbSafeAreaProps } from './props'

const props = withDefaults(defineProps<WbbbSafeAreaProps>(), {
  bottom: true,
  customClass: '',
  customStyle: '',
  top: false
})

const classes = computed(() => [
  props.customClass,
  {
    'wbbb-safe-area--bottom': props.bottom,
    'wbbb-safe-area--top': props.top
  }
])
</script>

<style lang="scss">
@use "./style.scss";
</style>

