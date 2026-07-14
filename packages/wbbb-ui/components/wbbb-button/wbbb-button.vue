<template>
  <button
    class="wbbb-button"
    :class="classes"
    :disabled="disabled || loading"
    :form-type="formType"
    :open-type="openType"
    :style="customStyle"
    @tap="handleTap"
  >
    <view v-if="loading" class="wbbb-button__loading" :style="loadingStyle" />
    <wbbb-icon v-else-if="icon" class="wbbb-button__icon" :name="icon" :size="iconSize" />
    <text class="wbbb-button__text"><slot>{{ loading ? loadingText : '' }}</slot></text>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import WbbbIcon from '../wbbb-icon'
import type { WbbbButtonProps } from './props'

const props = withDefaults(defineProps<WbbbButtonProps>(), {
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
  `wbbb-button--${props.type}`,
  `wbbb-button--${props.size}`,
  {
    'wbbb-button--block': props.block,
    'wbbb-button--disabled': props.disabled,
    'wbbb-button--loading': props.loading,
    'wbbb-button--plain': props.plain,
    'wbbb-button--round': props.round
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
