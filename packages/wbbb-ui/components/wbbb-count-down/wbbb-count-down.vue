<template>
  <text class="wbbb-count-down" :class="customClass" :style="customStyle">{{ displayText }}</text>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { formatCountDown } from '../../src/shared/date'
import type { WbbbCountDownProps } from './props'

const props = withDefaults(defineProps<WbbbCountDownProps>(), {
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
  return formatCountDown(remaining.value, props.format)
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
