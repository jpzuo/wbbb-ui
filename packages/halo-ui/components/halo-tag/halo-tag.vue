<template>
  <view class="halo-tag" :class="classes" :style="customStyle" :role="interactive ? 'button' : undefined" :tabindex="interactive ? 0 : undefined" @keydown="handleKeydown" @tap="handleClick">
    <text class="halo-tag__text"><slot /></text>
    <halo-icon v-if="closable" class="halo-tag__close" name="close" :size="22" @tap.stop="emit('close')" />
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import HaloIcon from '../halo-icon'
import { isKeyboardActivation, preventKeyboardDefault } from '../../src/shared/keyboard'
import type { HaloTagProps } from './props'

const props = withDefaults(defineProps<HaloTagProps>(), {
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
  `halo-tag--${props.type}`,
  `halo-tag--${props.size}`,
  {
    'halo-tag--plain': props.plain,
    'halo-tag--round': props.round
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
