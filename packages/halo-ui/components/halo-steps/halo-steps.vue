<template>
  <view class="halo-steps" :class="[customClass, `halo-steps--${direction}`]" :style="customStyle">
    <view v-for="(item, index) in items" :key="item.title" class="halo-steps__item" :class="[`halo-steps__item--${statusOf(item, index)}`, { 'halo-steps__item--last': index === items.length - 1 }]">
      <view class="halo-steps__rail"><view class="halo-steps__node"><halo-icon v-if="item.icon || statusOf(item, index) === 'finish'" :name="item.icon || 'check'" :size="20" /><text v-else>{{ index + 1 }}</text></view><view class="halo-steps__connector" /></view>
      <view class="halo-steps__body"><text class="halo-steps__title">{{ item.title }}</text><text v-if="item.description" class="halo-steps__description">{{ item.description }}</text></view>
    </view>
  </view>
</template>

<script setup lang="ts">
import HaloIcon from '../halo-icon'
import type { HaloStepItem, HaloStepsProps } from './props'
const props = withDefaults(defineProps<HaloStepsProps>(), { active: 0, customClass: '', customStyle: '', direction: 'horizontal', items: () => [] })
function statusOf(item: HaloStepItem, index: number) { return item.status ?? (index < props.active ? 'finish' : index === props.active ? 'process' : 'wait') }
</script>

<style lang="scss">@use "./style.scss";</style>
