<template>
  <view
    class="wbbb-cell"
    :class="classes"
    :style="customStyle"
    :aria-disabled="clickable ? 'false' : undefined"
    :role="clickable ? 'button' : undefined"
    :tabindex="clickable ? 0 : undefined"
    @keydown="handleKeydown"
    @tap="handleClick"
  >
    <wbbb-icon v-if="icon" class="wbbb-cell__icon" :name="icon" :size="28" />
    <view class="wbbb-cell__body">
      <view class="wbbb-cell__main">
        <text v-if="required" class="wbbb-cell__required">*</text>
        <text class="wbbb-cell__title"><slot name="title">{{ title }}</slot></text>
        <text v-if="label" class="wbbb-cell__label">{{ label }}</text>
      </view>
      <view class="wbbb-cell__value"><slot>{{ value }}</slot></view>
    </view>
    <wbbb-icon v-if="clickable" class="wbbb-cell__arrow" name="right" :size="26" />
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import WbbbIcon from '../wbbb-icon'
import { isKeyboardActivation, preventKeyboardDefault } from '../../src/shared/keyboard'
import type { WbbbCellProps } from './props'

const props = withDefaults(defineProps<WbbbCellProps>(), {
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
    'wbbb-cell--border': props.border,
    'wbbb-cell--clickable': props.clickable
  }
])
</script>

<style lang="scss">
@use "./style.scss";
</style>
