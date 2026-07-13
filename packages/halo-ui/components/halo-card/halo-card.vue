<template>
  <view class="halo-card" :class="[customClass, { 'halo-card--bordered': bordered, 'halo-card--shadow': shadow }]" :style="customStyle">
    <view v-if="title || extra" class="halo-card__header">
      <slot name="header">
        <text class="halo-card__title">{{ title }}</text>
        <text v-if="extra" class="halo-card__extra">{{ extra }}</text>
      </slot>
    </view>
    <view class="halo-card__body"><slot /></view>
    <view class="halo-card__footer"><slot name="footer" /></view>
  </view>
</template>

<script setup lang="ts">
import type { HaloCardProps } from './props'

withDefaults(defineProps<HaloCardProps>(), {
  bordered: true,
  customClass: '',
  customStyle: '',
  extra: '',
  shadow: false,
  title: ''
})
</script>

<style lang="scss">
@use "./style.scss";
</style>
