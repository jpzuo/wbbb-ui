<template>
  <view class="wbbb-tag" :class="classes" :style="customStyle" :role="interactive ? 'button' : undefined" :tabindex="interactive ? 0 : undefined" @keydown="handleKeydown" @tap="handleClick">
    <text class="wbbb-tag__text"><slot /></text>
    <wbbb-icon v-if="closable" class="wbbb-tag__close" name="close" :size="22" @tap.stop="emit('close')" />
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import WbbbIcon from '../wbbb-icon'
import { isKeyboardActivation, preventKeyboardDefault } from '../../src/shared/keyboard'
import type { WbbbTagProps } from './props'

const props = withDefaults(defineProps<WbbbTagProps>(), {
  clickable: false,
  closable: false,
  customClass: '',
  customStyle: '',
  plain: false,
  round: false,
  size: 'medium',
  type: 'default'
})

const emit = defineEmits<{
  click: []
  close: []
}>()

const classes = computed(() => [
  props.customClass,
  `wbbb-tag--${props.type}`,
  `wbbb-tag--${props.size}`,
  {
    'wbbb-tag--plain': props.plain,
    'wbbb-tag--round': props.round
  }
])

const interactive = computed(() => props.clickable || props.closable)

function handleClick() {
  emit('click')
}

function handleKeydown(event: unknown) {
  if (interactive.value && isKeyboardActivation(event)) {
    preventKeyboardDefault(event)
    emit('click')
  }
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
