<template>
  <slot v-if="!loading" />
  <view v-else class="wbbb-skeleton" :class="[customClass, { 'wbbb-skeleton--animated': animated }]" :style="customStyle">
    <view v-if="avatar" class="wbbb-skeleton__avatar" />
    <view class="wbbb-skeleton__content">
      <view v-if="title" class="wbbb-skeleton__title" />
      <view
        v-for="row in rows"
        :key="row"
        class="wbbb-skeleton__row"
        :class="{ 'wbbb-skeleton__row--last': row === rows }"
      />
    </view>
  </view>
</template>

<script setup lang="ts">
import type { WbbbSkeletonProps } from './props'

withDefaults(defineProps<WbbbSkeletonProps>(), {
  animated: true,
  avatar: false,
  customClass: '',
  customStyle: '',
  loading: true,
  rows: 3,
  title: true
})
</script>

<style lang="scss">
@use "./style.scss";
</style>

