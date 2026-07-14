<template>
  <view class="wbbb-cell-group-wrap" :class="customClass" :style="customStyle">
    <text v-if="title" class="wbbb-cell-group__title">{{ title }}</text>
    <view class="wbbb-cell-group" :class="{ 'wbbb-cell-group--border': border, 'wbbb-cell-group--inset': inset }">
      <slot />
    </view>
  </view>
</template>

<script setup lang="ts">
import type { WbbbCellGroupProps } from './props'

withDefaults(defineProps<WbbbCellGroupProps>(), {
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
