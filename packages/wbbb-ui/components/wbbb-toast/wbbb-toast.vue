<template>
  <view v-if="display" class="wbbb-toast" :class="[customClass, leaving ? 'wbbb-fade-leave' : 'wbbb-fade-enter']" :style="rootStyle">
    <view class="wbbb-toast__box" :class="leaving ? 'wbbb-zoom-leave' : 'wbbb-zoom-enter'">
      <view v-if="icon === 'loading'" class="wbbb-toast__loading" />
      <wbbb-icon v-else-if="icon !== 'none'" class="wbbb-toast__icon" :name="icon === 'success' ? 'check' : 'close'" :size="40" />
      <text class="wbbb-toast__message"><slot>{{ message }}</slot></text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import WbbbIcon from '../wbbb-icon'
import { createTimer } from '../../src/shared/timer'
import { toStyleText } from '../../src/shared/utils'
import type { WbbbToastProps } from './props'

const props = withDefaults(defineProps<WbbbToastProps>(), {
  customClass: '',
  customStyle: '',
  duration: 1800,
  icon: 'none',
  message: '',
  modelValue: false,
  zIndex: 1100
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
}>()

const display = ref(props.modelValue)
const leaving = ref(false)
const timer = createTimer()

const rootStyle = computed(() => [`z-index:${props.zIndex}`, toStyleText(props.customStyle)].filter(Boolean).join(';'))

watch(() => props.modelValue, (value) => {
  timer.clear()

  if (value && props.duration > 0) {
    display.value = true
    leaving.value = false
    timer.start(close, props.duration)
    return
  }

  if (value) {
    display.value = true
    leaving.value = false
    return
  }

  if (display.value) {
    close()
  }
}, { immediate: true })

onBeforeUnmount(timer.clear)

function close() {
  timer.clear()

  if (!display.value || leaving.value) {
    return
  }

  leaving.value = true
  timer.start(() => {
    display.value = false
    leaving.value = false
    emit('update:modelValue', false)
    emit('close')
  }, 220)
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
