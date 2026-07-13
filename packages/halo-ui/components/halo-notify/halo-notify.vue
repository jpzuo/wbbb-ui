<template>
  <view v-if="visible" class="halo-notify" :class="[customClass, `halo-notify--${type}`]" :style="rootStyle">
    <text class="halo-notify__message"><slot>{{ message }}</slot></text>
  </view>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { createTimer } from '../../src/shared/timer'
import { toStyleText } from '../../src/shared/utils'
import type { HaloNotifyProps } from './props'

const props = withDefaults(defineProps<HaloNotifyProps>(), {
  customClass: '',
  customStyle: '',
  duration: 2200,
  message: '',
  modelValue: false,
  type: 'info',
  zIndex: 1000
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
}>()

const visible = ref(props.modelValue)
const timer = createTimer()

const rootStyle = computed(() => [`z-index:${props.zIndex}`, toStyleText(props.customStyle)].filter(Boolean).join(';'))

watch(() => props.modelValue, (value) => {
  timer.clear()
  visible.value = value

  if (value && props.duration > 0) {
    timer.start(close, props.duration)
  }
}, { immediate: true })

onBeforeUnmount(timer.clear)

function close() {
  timer.clear()
  visible.value = false
  emit('update:modelValue', false)
  emit('close')
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
