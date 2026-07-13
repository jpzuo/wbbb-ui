<template>
  <view class="halo-avatar" :class="[customClass, { 'halo-avatar--round': round }]" :style="mergedStyle">
    <image v-if="src && !failed" class="halo-avatar__image" :src="src" mode="aspectFill" @error="handleError" @load="emit('load', $event)" />
    <halo-icon v-else-if="!alt" name="user" :size="size" />
    <text v-else class="halo-avatar__text"><slot>{{ alt }}</slot></text>
  </view>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import HaloIcon from '../halo-icon'
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
const emit = defineEmits<{ error: [event: unknown]; load: [event: unknown] }>()
const failed = ref(false)
watch(() => props.src, () => { failed.value = false })

const mergedStyle = computed(() => {
  const size = addUnit(props.size)

  return [size ? `width:${size};height:${size}` : '', toStyleText(props.customStyle)].filter(Boolean).join(';')
})

function handleError(event: unknown) { failed.value = true; emit('error', event) }
</script>

<style lang="scss">
@use "./style.scss";
</style>
