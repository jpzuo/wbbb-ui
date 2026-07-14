<template>
  <view v-if="visible" class="wbbb-notice-bar" :class="[customClass, `wbbb-notice-bar--${type}`]" :style="mergedStyle">
    <wbbb-icon class="wbbb-notice-bar__icon" name="warning" :size="24" />
    <text class="wbbb-notice-bar__text"><slot>{{ text }}</slot></text>
    <view v-if="closeable" class="wbbb-notice-bar__close" role="button" tabindex="0" @keydown="handleKeydown" @tap="close"><wbbb-icon name="close" :size="24" /></view>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import WbbbIcon from '../wbbb-icon'
import { isKeyboardActivation, preventKeyboardDefault } from '../../src/shared/keyboard'
import { toStyleText } from '../../src/shared/utils'
import type { WbbbNoticeBarProps } from './props'

const props = withDefaults(defineProps<WbbbNoticeBarProps>(), {
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
