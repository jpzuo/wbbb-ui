<template>
  <slot v-if="!loading" />
  <view v-else class="halo-skeleton" :class="[customClass, { 'halo-skeleton--animated': animated }]" :style="customStyle">
    <view v-if="avatar" class="halo-skeleton__avatar" />
    <view class="halo-skeleton__content">
      <view v-if="title" class="halo-skeleton__title" />
      <view
        v-for="row in rows"
        :key="row"
        class="halo-skeleton__row"
        :class="{ 'halo-skeleton__row--last': row === rows }"
      />
    </view>
  </view>
</template>

<script setup lang="ts">
import type { HaloSkeletonProps } from './props'

withDefaults(defineProps<HaloSkeletonProps>(), {
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

