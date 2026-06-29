<template>
  <view class="halo-avatar" :class="[customClass, { 'halo-avatar--round': round }]" :style="mergedStyle">
    <image v-if="src" class="halo-avatar__image" :src="src" mode="aspectFill" />
    <text v-else class="halo-avatar__text"><slot>{{ alt }}</slot></text>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { addUnit, toStyleText } from '../../src/shared/utils'
import type { HaloAvatarProps } from './props'

const props = withDefaults(defineProps<HaloAvatarProps>(), {
  alt: '',
  customClass: '',
  customStyle: '',
  round: true,
  size: 80,
  src: ''
})

const mergedStyle = computed(() => {
  const size = addUnit(props.size)

  return [size ? `width:${size};height:${size}` : '', toStyleText(props.customStyle)].filter(Boolean).join(';')
})
</script>

<style lang="scss">
@use "./style.scss";
</style>

