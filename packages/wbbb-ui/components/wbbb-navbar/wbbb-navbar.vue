<template>
  <view v-if="fixed && placeholder" class="wbbb-navbar__placeholder" />
  <view class="wbbb-navbar" :class="classes" :style="customStyle">
    <view class="wbbb-navbar__inner">
      <view class="wbbb-navbar__left" :role="leftInteractive ? 'button' : undefined" :tabindex="leftInteractive ? 0 : -1" @keydown="handleKeydown($event, 'left')" @tap="handleTap('left')">
        <text v-if="leftArrow" class="wbbb-navbar__arrow">&lt;</text>
        <slot name="left"><text v-if="leftText">{{ leftText }}</text></slot>
      </view>
      <view class="wbbb-navbar__title"><slot name="title">{{ title }}</slot></view>
      <view class="wbbb-navbar__right" :role="rightInteractive ? 'button' : undefined" :tabindex="rightInteractive ? 0 : -1" @keydown="handleKeydown($event, 'right')" @tap="handleTap('right')">
        <slot name="right"><text v-if="rightText">{{ rightText }}</text></slot>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { isKeyboardActivation, preventKeyboardDefault } from '../../src/shared/keyboard'
import type { WbbbNavbarProps } from './props'

const props = withDefaults(defineProps<WbbbNavbarProps>(), {
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
    'wbbb-navbar--border': props.border,
    'wbbb-navbar--fixed': props.fixed,
    'wbbb-navbar--safe': props.safeAreaTop
  }
])

const leftInteractive = computed(() => props.leftArrow || Boolean(props.leftText))
const rightInteractive = computed(() => Boolean(props.rightText))

function handleTap(side: 'left' | 'right') {
  if (side === 'left' && leftInteractive.value) {
    emit('clickLeft')
  }

  if (side === 'right' && rightInteractive.value) {
    emit('clickRight')
  }
}

function handleKeydown(event: unknown, side: 'left' | 'right') {
  if (isKeyboardActivation(event)) {
    preventKeyboardDefault(event)
    handleTap(side)
  }
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
