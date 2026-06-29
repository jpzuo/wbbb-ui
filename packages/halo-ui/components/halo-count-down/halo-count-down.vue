<template>
  <text class="halo-count-down" :class="customClass" :style="customStyle">{{ displayText }}</text>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { HaloCountDownProps } from './props'

const props = withDefaults(defineProps<HaloCountDownProps>(), {
  autoStart: true,
  customClass: '',
  customStyle: '',
  format: 'HH:mm:ss',
  time: 0
})

const emit = defineEmits<{
  change: [value: number]
  finish: []
}>()

const remaining = ref(props.time)
let timer: ReturnType<typeof setInterval> | undefined

const displayText = computed(() => {
  const total = Math.max(0, remaining.value)
  const seconds = Math.floor(total / 1000)
  const hour = Math.floor(seconds / 3600)
  const minute = Math.floor((seconds % 3600) / 60)
  const second = seconds % 60

  return props.format
    .replace('HH', pad(hour))
    .replace('mm', pad(minute))
    .replace('ss', pad(second))
})

watch(() => props.time, (value) => {
  remaining.value = value
  if (props.autoStart) {
    start()
  }
})

onMounted(() => {
  if (props.autoStart) {
    start()
  }
})

onBeforeUnmount(stop)

function pad(value: number) {
  return String(value).padStart(2, '0')
}

function start() {
  stop()
  timer = setInterval(() => {
    remaining.value = Math.max(0, remaining.value - 1000)
    emit('change', remaining.value)

    if (remaining.value <= 0) {
      stop()
      emit('finish')
    }
  }, 1000)
}

function stop() {
  if (timer) {
    clearInterval(timer)
    timer = undefined
  }
}

function reset() {
  remaining.value = props.time
}

defineExpose({ reset, start, stop })
</script>

<style lang="scss">
@use "./style.scss";
</style>

