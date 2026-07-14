<template>
  <view
    class="wbbb-grid-item"
    :class="[customClass, { 'wbbb-grid-item--clickable': clickable }]"
    :style="customStyle"
    :role="clickable ? 'button' : undefined"
    :tabindex="clickable ? 0 : undefined"
    @keydown="handleKeydown"
    @tap="handleClick"
  >
    <slot>
      <wbbb-icon v-if="icon" class="wbbb-grid-item__icon" :name="icon" :size="32" />
      <text v-if="text" class="wbbb-grid-item__text">{{ text }}</text>
    </slot>
  </view>
</template>

<script setup lang="ts">
import WbbbIcon from '../wbbb-icon'
import { isKeyboardActivation, preventKeyboardDefault } from '../../src/shared/keyboard'
import type { WbbbGridItemProps } from './props'

const props = withDefaults(defineProps<WbbbGridItemProps>(), {
  clickable: false,
  customClass: '',
  customStyle: '',
  icon: '',
  text: ''
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
</script>

<style lang="scss">
@use "./style.scss";
</style>
