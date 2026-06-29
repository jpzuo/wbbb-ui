<template>
  <view class="halo-safe-area" :class="classes" :style="customStyle"><slot /></view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { HaloSafeAreaProps } from './props'

const props = withDefaults(defineProps<HaloSafeAreaProps>(), {
  bottom: true,
  customClass: '',
  customStyle: '',
  top: false
})

const classes = computed(() => [
  props.customClass,
  {
    'halo-safe-area--bottom': props.bottom,
    'halo-safe-area--top': props.top
  }
])
</script>

<style lang="scss">
@use "./style.scss";
</style>

