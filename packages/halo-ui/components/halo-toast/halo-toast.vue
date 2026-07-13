<template>
  <view v-if="display" class="halo-toast" :class="[customClass, leaving ? 'halo-fade-leave' : 'halo-fade-enter']" :style="rootStyle">
    <view class="halo-toast__box" :class="leaving ? 'halo-zoom-leave' : 'halo-zoom-enter'">
      <view v-if="icon === 'loading'" class="halo-toast__loading" />
      <halo-icon v-else-if="icon !== 'none'" class="halo-toast__icon" :name="icon === 'success' ? 'check' : 'close'" :size="40" />
      <text class="halo-toast__message"><slot>{{ message }}</slot></text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import HaloIcon from '../halo-icon'
import { createTimer } from '../../src/shared/timer'
import { toStyleText } from '../../src/shared/utils'
import type { HaloToastProps } from './props'

const props = withDefaults(defineProps<HaloToastProps>(), {
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
