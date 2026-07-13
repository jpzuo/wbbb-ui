<template>
  <view class="halo-sticky" :class="customClass" :style="mergedStyle"><slot /></view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { addUnit, toStyleText } from '../../src/shared/utils'
import type { HaloStickyProps } from './props'

const props = withDefaults(defineProps<HaloStickyProps>(), {
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

