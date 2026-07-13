<template>
  <view
    class="halo-grid-item"
    :class="[customClass, { 'halo-grid-item--clickable': clickable }]"
    :style="customStyle"
    :role="clickable ? 'button' : undefined"
    :tabindex="clickable ? 0 : undefined"
    @keydown="handleKeydown"
    @tap="handleClick"
  >
    <slot>
      <halo-icon v-if="icon" class="halo-grid-item__icon" :name="icon" :size="32" />
      <text v-if="text" class="halo-grid-item__text">{{ text }}</text>
    </slot>
  </view>
</template>

<script setup lang="ts">
import HaloIcon from '../halo-icon'
import { isKeyboardActivation, preventKeyboardDefault } from '../../src/shared/keyboard'
import type { HaloGridItemProps } from './props'

const props = withDefaults(defineProps<HaloGridItemProps>(), {
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
