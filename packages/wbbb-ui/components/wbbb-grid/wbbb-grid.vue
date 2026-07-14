<template>
  <view class="wbbb-grid" :class="[customClass, { 'wbbb-grid--bordered': bordered }]" :style="gridStyle">
    <slot />
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { toStyleText } from '../../src/shared/utils'
import type { WbbbGridProps } from './props'

const props = withDefaults(defineProps<WbbbGridProps>(), {
  bordered: false,
  columns: 4,
  customClass: '',
  customStyle: '',
  gap: 16
})

const gridStyle = computed(() => [
  `grid-template-columns:repeat(${props.columns}, minmax(0, 1fr))`,
  `gap:${props.bordered ? 1 : props.gap}rpx`,
  toStyleText(props.customStyle)
].filter(Boolean).join(';'))
</script>

<style lang="scss">
@use "./style.scss";
</style>
