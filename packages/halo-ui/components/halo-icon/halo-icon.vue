<template>
  <image
    v-if="src"
    class="halo-icon halo-icon--asset"
    :class="customClass"
    :src="src"
    :style="mergedStyle"
    mode="aspectFit"
  />
  <view v-else class="halo-icon" :class="[customClass, `halo-icon--${name || 'default'}`]" :style="mergedStyle"><view class="halo-icon__shape" /></view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { addUnit, toStyleText } from '../../src/shared/utils'
import type { HaloIconProps } from './props'

const props = withDefaults(defineProps<HaloIconProps>(), {
  color: '',
  customClass: '',
  customStyle: '',
  name: '',
  size: 32,
  src: ''
})

const mergedStyle = computed(() => {
  const size = addUnit(props.size)

  return [
    size ? `font-size:${size};width:${size};height:${size}` : '',
    props.color ? `color:${props.color}` : '',
    toStyleText(props.customStyle)
  ]
    .filter(Boolean)
    .join(';')
})
</script>

<style lang="scss">
@use "./style.scss";
</style>
