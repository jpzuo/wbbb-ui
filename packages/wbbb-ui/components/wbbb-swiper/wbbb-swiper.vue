<template>
  <swiper
    class="wbbb-swiper"
    :autoplay="autoplay"
    :circular="circular"
    :class="customClass"
    :indicator-dots="indicatorDots"
    :interval="interval"
    :style="customStyle"
    @change="emit('change', $event)"
  >
    <swiper-item v-for="item in items" :key="item.image || item.title" class="wbbb-swiper__item">
      <wbbb-image v-if="item.image" class="wbbb-swiper__image" :src="item.image" mode="aspectFill" width="100%" height="100%" />
      <view v-else class="wbbb-swiper__fallback">{{ item.title }}</view>
    </swiper-item>
    <slot />
  </swiper>
</template>

<script setup lang="ts">
import WbbbImage from '../wbbb-image'
import type { WbbbSwiperProps } from './props'

withDefaults(defineProps<WbbbSwiperProps>(), {
  autoplay: false,
  circular: true,
  customClass: '',
  customStyle: '',
  indicatorDots: true,
  interval: 3000,
  items: () => []
})

const emit = defineEmits<{
  change: [event: unknown]
}>()
</script>

<style lang="scss">
@use "./style.scss";
</style>
