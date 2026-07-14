<template>
  <view class="wbbb-sticky" :class="customClass" :style="mergedStyle"><slot /></view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { addUnit, toStyleText } from '../../src/shared/utils'
import type { WbbbStickyProps } from './props'

const props = withDefaults(defineProps<WbbbStickyProps>(), {
  customClass: '',
  customStyle: '',
  offsetTop: 0,
  zIndex: 700
})

const mergedStyle = computed(() => [
  `top:${addUnit(props.offsetTop)}`,
  `z-index:${props.zIndex}`,
  toStyleText(props.customStyle)
].filter(Boolean).join(';'))
</script>

<style lang="scss">
@use "./style.scss";
</style>

