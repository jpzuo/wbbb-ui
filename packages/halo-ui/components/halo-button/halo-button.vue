<template>
  <button
    class="halo-button"
    :class="classes"
    :disabled="disabled || loading"
    :form-type="formType"
    :open-type="openType"
    :style="customStyle"
    @tap="handleTap"
  >
    <view v-if="loading" class="halo-button__loading" :style="loadingStyle" />
    <halo-icon v-else-if="icon" class="halo-button__icon" :name="icon" :size="iconSize" />
    <text class="halo-button__text"><slot>{{ loading ? loadingText : '' }}</slot></text>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import HaloIcon from '../halo-icon'
import type { HaloButtonProps } from './props'

const props = withDefaults(defineProps<HaloButtonProps>(), {
  block: false,
  customClass: '',
  customStyle: '',
  disabled: false,
  formType: undefined,
  icon: '',
  loading: false,
  loadingText: '',
  openType: '',
  plain: false,
  round: false,
  size: 'medium',
  type: 'default'
})

const emit = defineEmits<{
  click: [event: unknown]
}>()

const classes = computed(() => [
  props.customClass,
  `halo-button--${props.type}`,
  `halo-button--${props.size}`,
  {
    'halo-button--block': props.block,
    'halo-button--disabled': props.disabled,
    'halo-button--loading': props.loading,
    'halo-button--plain': props.plain,
    'halo-button--round': props.round
  }
])

const iconSize = computed(() => (props.size === 'large' ? 34 : props.size === 'mini' ? 22 : 28))
const loadingSize = computed(() => (props.size === 'large' ? 32 : props.size === 'mini' ? 22 : 28))
const loadingStyle = computed(() => `width:${loadingSize.value}rpx;height:${loadingSize.value}rpx`)

function handleTap(event: unknown) {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
