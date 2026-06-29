<template>
  <view v-if="modelValue" class="halo-popup" :class="customClass" :style="rootStyle">
    <view class="halo-popup__overlay" @tap="handleOverlayTap" />
    <view class="halo-popup__content" :class="contentClasses" :style="contentStyle">
      <slot />
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { HaloPopupProps } from './props'

const props = withDefaults(defineProps<HaloPopupProps>(), {
  closeOnClickOverlay: true,
  customClass: '',
  customStyle: '',
  modelValue: false,
  placement: 'center',
  round: false,
  zIndex: 900
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
  open: []
}>()

const rootStyle = computed(() => `z-index:${props.zIndex}`)
const contentClasses = computed(() => [
  `halo-popup__content--${props.placement}`,
  { 'halo-popup__content--round': props.round }
])
const contentStyle = computed(() => (typeof props.customStyle === 'string' ? props.customStyle : ''))

function handleOverlayTap() {
  if (props.closeOnClickOverlay) {
    emit('update:modelValue', false)
    emit('close')
  }
}
</script>

<style lang="scss">
@use "./style.scss";
</style>

