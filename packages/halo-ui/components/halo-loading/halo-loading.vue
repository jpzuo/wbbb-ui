<template>
  <view
    class="halo-loading"
    :class="[customClass, { 'halo-loading--vertical': vertical }]"
    :style="customStyle"
  >
    <view class="halo-loading__spinner" :style="spinnerStyle" />
    <text v-if="text" class="halo-loading__text">{{ text }}</text>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { addUnit, toStyleText } from '../../src/shared/utils'
import type { HaloLoadingProps } from './props'

const props = withDefaults(defineProps<HaloLoadingProps>(), {
  color: '',
  customClass: '',
  customStyle: '',
  size: 32,
  text: '',
  vertical: false
})

const spinnerStyle = computed(() => {
  const size = addUnit(props.size)
  return [
    size ? `width:${size};height:${size}` : '',
    props.color ? `border-color:${props.color};border-right-color:transparent` : '',
    toStyleText(props.customStyle)
  ]
    .filter(Boolean)
    .join(';')
})
</script>

<style lang="scss">
@use "./style.scss";
</style>

