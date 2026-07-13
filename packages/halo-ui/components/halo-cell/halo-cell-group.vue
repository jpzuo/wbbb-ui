<template>
  <view class="halo-cell-group-wrap" :class="customClass" :style="customStyle">
    <text v-if="title" class="halo-cell-group__title">{{ title }}</text>
    <view class="halo-cell-group" :class="{ 'halo-cell-group--border': border, 'halo-cell-group--inset': inset }">
      <slot />
    </view>
  </view>
</template>

<script setup lang="ts">
import type { HaloCellGroupProps } from './props'

withDefaults(defineProps<HaloCellGroupProps>(), {
  border: true,
  customClass: '',
  customStyle: '',
  inset: false,
  title: ''
})
</script>

<style lang="scss">
@use "./style.scss";
</style>
