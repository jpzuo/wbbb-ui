<template>
  <swiper
    class="halo-swiper"
    :autoplay="autoplay"
    :circular="circular"
    :class="customClass"
    :indicator-dots="indicatorDots"
    :interval="interval"
    :style="customStyle"
    @change="emit('change', $event)"
  >
    <swiper-item v-for="item in items" :key="item.image || item.title" class="halo-swiper__item">
      <image v-if="item.image" class="halo-swiper__image" :src="item.image" mode="aspectFill" />
      <view v-else class="halo-swiper__fallback">{{ item.title }}</view>
    </swiper-item>
    <slot />
  </swiper>
</template>

<script setup lang="ts">
import type { HaloSwiperProps } from './props'

withDefaults(defineProps<HaloSwiperProps>(), {
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

