<template>
  <view class="halo-cell" :class="classes" :style="customStyle" @tap="emit('click')">
    <halo-icon v-if="icon" class="halo-cell__icon" :name="icon" :size="32" />
    <view class="halo-cell__body">
      <view class="halo-cell__main">
        <text v-if="required" class="halo-cell__required">*</text>
        <text class="halo-cell__title"><slot name="title">{{ title }}</slot></text>
        <text v-if="label" class="halo-cell__label">{{ label }}</text>
      </view>
      <view class="halo-cell__value"><slot>{{ value }}</slot></view>
    </view>
    <text v-if="clickable" class="halo-cell__arrow">></text>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import HaloIcon from '../halo-icon/halo-icon.vue'
import type { HaloCellProps } from './props'

const props = withDefaults(defineProps<HaloCellProps>(), {
  border: true,
  clickable: false,
  customClass: '',
  customStyle: '',
  icon: '',
  label: '',
  required: false,
  title: '',
  value: ''
})

const emit = defineEmits<{
  click: []
}>()

const classes = computed(() => [
  props.customClass,
  {
    'halo-cell--border': props.border,
    'halo-cell--clickable': props.clickable
  }
])
</script>

<style lang="scss">
@use "./style.scss";
</style>

