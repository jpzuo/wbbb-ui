<template>
  <view
    class="wbbb-loading"
    :class="[customClass, { 'wbbb-loading--vertical': vertical }]"
    :style="customStyle"
  >
    <view class="wbbb-loading__spinner" :style="spinnerStyle" />
    <text v-if="text" class="wbbb-loading__text">{{ text }}</text>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { addUnit, toStyleText } from '../../src/shared/utils'
import type { WbbbLoadingProps } from './props'

const props = withDefaults(defineProps<WbbbLoadingProps>(), {
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

