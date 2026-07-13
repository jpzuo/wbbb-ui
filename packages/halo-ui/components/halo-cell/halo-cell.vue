<template>
  <view
    class="halo-cell"
    :class="classes"
    :style="customStyle"
    :aria-disabled="clickable ? 'false' : undefined"
    :role="clickable ? 'button' : undefined"
    :tabindex="clickable ? 0 : undefined"
    @keydown="handleKeydown"
    @tap="handleClick"
  >
    <halo-icon v-if="icon" class="halo-cell__icon" :name="icon" :size="28" />
    <view class="halo-cell__body">
      <view class="halo-cell__main">
        <text v-if="required" class="halo-cell__required">*</text>
        <text class="halo-cell__title"><slot name="title">{{ title }}</slot></text>
        <text v-if="label" class="halo-cell__label">{{ label }}</text>
      </view>
      <view class="halo-cell__value"><slot>{{ value }}</slot></view>
    </view>
    <halo-icon v-if="clickable" class="halo-cell__arrow" name="right" :size="26" />
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import HaloIcon from '../halo-icon'
import { isKeyboardActivation, preventKeyboardDefault } from '../../src/shared/keyboard'
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

function handleClick() {
  if (props.clickable) {
    emit('click')
  }
}

function handleKeydown(event: unknown) {
  if (props.clickable && isKeyboardActivation(event)) {
    preventKeyboardDefault(event)
    emit('click')
  }
}

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
