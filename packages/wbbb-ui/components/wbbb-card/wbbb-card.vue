<template>
  <view class="wbbb-card" :class="[customClass, { 'wbbb-card--bordered': bordered, 'wbbb-card--shadow': shadow }]" :style="customStyle">
    <view v-if="title || extra" class="wbbb-card__header">
      <slot name="header">
        <text class="wbbb-card__title">{{ title }}</text>
        <text v-if="extra" class="wbbb-card__extra">{{ extra }}</text>
      </slot>
    </view>
    <view class="wbbb-card__body"><slot /></view>
    <view class="wbbb-card__footer"><slot name="footer" /></view>
  </view>
</template>

<script setup lang="ts">
import type { WbbbCardProps } from './props'

withDefaults(defineProps<WbbbCardProps>(), {
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
