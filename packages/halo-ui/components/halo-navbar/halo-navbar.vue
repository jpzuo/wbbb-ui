<template>
  <view v-if="fixed && placeholder" class="halo-navbar__placeholder" />
  <view class="halo-navbar" :class="classes" :style="customStyle">
    <view class="halo-navbar__inner">
      <view class="halo-navbar__left" @tap="emit('clickLeft')">
        <text v-if="leftArrow" class="halo-navbar__arrow"><</text>
        <slot name="left"><text v-if="leftText">{{ leftText }}</text></slot>
      </view>
      <view class="halo-navbar__title"><slot name="title">{{ title }}</slot></view>
      <view class="halo-navbar__right" @tap="emit('clickRight')">
        <slot name="right"><text v-if="rightText">{{ rightText }}</text></slot>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { HaloNavbarProps } from './props'

const props = withDefaults(defineProps<HaloNavbarProps>(), {
  border: true,
  customClass: '',
  customStyle: '',
  fixed: false,
  leftArrow: false,
  leftText: '',
  placeholder: false,
  rightText: '',
  safeAreaTop: true,
  title: ''
})

const emit = defineEmits<{
  clickLeft: []
  clickRight: []
}>()

const classes = computed(() => [
  props.customClass,
  {
    'halo-navbar--border': props.border,
    'halo-navbar--fixed': props.fixed,
    'halo-navbar--safe': props.safeAreaTop
  }
])
</script>

<style lang="scss">
@use "./style.scss";
</style>

