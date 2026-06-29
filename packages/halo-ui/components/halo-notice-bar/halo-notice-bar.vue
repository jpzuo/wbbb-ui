<template>
  <view v-if="visible" class="halo-notice-bar" :class="customClass" :style="mergedStyle">
    <text class="halo-notice-bar__icon">!</text>
    <text class="halo-notice-bar__text"><slot>{{ text }}</slot></text>
    <text v-if="closeable" class="halo-notice-bar__close" @tap="close">x</text>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { toStyleText } from '../../src/shared/utils'
import type { HaloNoticeBarProps } from './props'

const props = withDefaults(defineProps<HaloNoticeBarProps>(), {
  closeable: false,
  color: '',
  customClass: '',
  customStyle: '',
  text: ''
})

const emit = defineEmits<{ close: [] }>()
const visible = ref(true)
const mergedStyle = computed(() => [props.color ? `color:${props.color}` : '', toStyleText(props.customStyle)].filter(Boolean).join(';'))

function close() {
  visible.value = false
  emit('close')
}
</script>

<style lang="scss">
@use "./style.scss";
</style>

