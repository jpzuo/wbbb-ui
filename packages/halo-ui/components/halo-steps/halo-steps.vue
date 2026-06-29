<template>
  <view class="halo-steps" :class="[customClass, `halo-steps--${direction}`]" :style="customStyle">
    <view
      v-for="(item, index) in items"
      :key="item.title"
      class="halo-steps__item"
      :class="{ 'halo-steps__item--active': index <= active }"
    >
      <text class="halo-steps__dot">{{ index + 1 }}</text>
      <view class="halo-steps__body">
        <text class="halo-steps__title">{{ item.title }}</text>
        <text v-if="item.description" class="halo-steps__description">{{ item.description }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { HaloStepsProps } from './props'

withDefaults(defineProps<HaloStepsProps>(), {
  active: 0,
  customClass: '',
  customStyle: '',
  direction: 'horizontal',
  items: () => []
})
</script>

<style lang="scss">
@use "./style.scss";
</style>

