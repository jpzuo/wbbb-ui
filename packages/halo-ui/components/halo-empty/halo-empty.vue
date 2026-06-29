<template>
  <view class="halo-empty" :class="customClass" :style="customStyle">
    <image v-if="image" class="halo-empty__image" :src="image" :style="imageStyle" mode="aspectFit" />
    <view v-else class="halo-empty__placeholder" :style="imageStyle">
      <text class="halo-empty__placeholder-line" />
    </view>
    <text class="halo-empty__description">{{ description }}</text>
    <view v-if="$slots.default" class="halo-empty__action"><slot /></view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { addUnit } from '../../src/shared/utils'
import type { HaloEmptyProps } from './props'

const props = withDefaults(defineProps<HaloEmptyProps>(), {
  customClass: '',
  customStyle: '',
  description: 'No data',
  image: '',
  imageSize: 160
})

const imageStyle = computed(() => {
  const size = addUnit(props.imageSize)
  return size ? `width:${size};height:${size}` : ''
})
</script>

<style lang="scss">
@use "./style.scss";
</style>

