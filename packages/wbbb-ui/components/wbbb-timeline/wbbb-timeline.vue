<template>
  <view class="wbbb-timeline" :class="customClass" :style="customStyle">
    <view v-for="item in items" :key="item.title" class="wbbb-timeline__item" :class="`wbbb-timeline__item--${item.status || 'default'}`">
      <view class="wbbb-timeline__rail"><view class="wbbb-timeline__dot" :style="item.color ? `background:${item.color}` : ''"><wbbb-icon v-if="item.icon" :name="item.icon" :size="16" /></view><view class="wbbb-timeline__line" /></view>
      <view class="wbbb-timeline__body">
        <text class="wbbb-timeline__title">{{ item.title }}</text>
        <text v-if="item.time" class="wbbb-timeline__time">{{ item.time }}</text>
        <text v-if="item.content" class="wbbb-timeline__content">{{ item.content }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import WbbbIcon from '../wbbb-icon'
import type { WbbbTimelineProps } from './props'

withDefaults(defineProps<WbbbTimelineProps>(), {
  customClass: '',
  customStyle: '',
  items: () => []
})
</script>

<style lang="scss">
@use "./style.scss";
</style>
