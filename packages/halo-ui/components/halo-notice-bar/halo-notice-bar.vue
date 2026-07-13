<template>
  <view v-if="visible" class="halo-notice-bar" :class="[customClass, `halo-notice-bar--${type}`]" :style="mergedStyle">
    <halo-icon class="halo-notice-bar__icon" name="warning" :size="24" />
    <text class="halo-notice-bar__text"><slot>{{ text }}</slot></text>
    <view v-if="closeable" class="halo-notice-bar__close" role="button" tabindex="0" @keydown="handleKeydown" @tap="close"><halo-icon name="close" :size="24" /></view>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import HaloIcon from '../halo-icon'
import { isKeyboardActivation, preventKeyboardDefault } from '../../src/shared/keyboard'
import { toStyleText } from '../../src/shared/utils'
import type { HaloNoticeBarProps } from './props'

const props = withDefaults(defineProps<HaloNoticeBarProps>(), {
  closeable: false,
  color: '',
  customClass: '',
  customStyle: '',
  text: '',
  type: 'warning'
})

const emit = defineEmits<{ close: [] }>()
const visible = ref(true)
const mergedStyle = computed(() => [props.color ? `color:${props.color}` : '', toStyleText(props.customStyle)].filter(Boolean).join(';'))

function close() {
  visible.value = false
  emit('close')
}

function handleKeydown(event: unknown) {
  if (isKeyboardActivation(event)) {
    preventKeyboardDefault(event)
    close()
  }
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
