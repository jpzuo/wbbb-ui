<template>
  <view class="halo-timeline" :class="customClass" :style="customStyle">
    <view v-for="item in items" :key="item.title" class="halo-timeline__item" :class="`halo-timeline__item--${item.status || 'default'}`">
      <view class="halo-timeline__rail"><view class="halo-timeline__dot" :style="item.color ? `background:${item.color}` : ''"><halo-icon v-if="item.icon" :name="item.icon" :size="16" /></view><view class="halo-timeline__line" /></view>
      <view class="halo-timeline__body">
        <text class="halo-timeline__title">{{ item.title }}</text>
        <text v-if="item.time" class="halo-timeline__time">{{ item.time }}</text>
        <text v-if="item.content" class="halo-timeline__content">{{ item.content }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import HaloIcon from '../halo-icon'
import type { HaloTimelineProps } from './props'

withDefaults(defineProps<HaloTimelineProps>(), {
  customClass: '',
  customStyle: '',
  items: () => []
})
</script>

<style lang="scss">
@use "./style.scss";
</style>
