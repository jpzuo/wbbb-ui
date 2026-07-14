<template>
  <view class="wbbb-steps" :class="[customClass, `wbbb-steps--${direction}`]" :style="customStyle">
    <view v-for="(item, index) in items" :key="item.title" class="wbbb-steps__item" :class="[`wbbb-steps__item--${statusOf(item, index)}`, { 'wbbb-steps__item--last': index === items.length - 1 }]">
      <view class="wbbb-steps__rail"><view class="wbbb-steps__node"><wbbb-icon v-if="item.icon || statusOf(item, index) === 'finish'" :name="item.icon || 'check'" :size="20" /><text v-else>{{ index + 1 }}</text></view><view class="wbbb-steps__connector" /></view>
      <view class="wbbb-steps__body"><text class="wbbb-steps__title">{{ item.title }}</text><text v-if="item.description" class="wbbb-steps__description">{{ item.description }}</text></view>
    </view>
  </view>
</template>

<script setup lang="ts">
import WbbbIcon from '../wbbb-icon'
import type { WbbbStepItem, WbbbStepsProps } from './props'
const props = withDefaults(defineProps<WbbbStepsProps>(), { active: 0, customClass: '', customStyle: '', direction: 'horizontal', items: () => [] })
function statusOf(item: WbbbStepItem, index: number) { return item.status ?? (index < props.active ? 'finish' : index === props.active ? 'process' : 'wait') }
</script>

<style lang="scss">@use "./style.scss";</style>
