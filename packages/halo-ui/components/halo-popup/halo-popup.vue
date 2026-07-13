<template>
  <view v-if="display" ref="root" class="halo-popup" :class="[customClass, { 'halo-popup--leave': leaving }]" :style="rootStyle" role="dialog" aria-modal="true" tabindex="-1">
    <view class="halo-popup__overlay" :class="overlayClass" @tap="handleOverlayTap" />
    <view class="halo-popup__content" :class="contentClasses" :style="contentStyle">
      <slot />
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useOverlayAccessibility } from '../../src/shared/overlay-accessibility'
import { createTimer } from '../../src/shared/timer'
import { toStyleText } from '../../src/shared/utils'
import type { HaloPopupProps } from './props'

const props = withDefaults(defineProps<HaloPopupProps>(), {
  closeOnClickOverlay: true,
  customClass: '',
  customStyle: '',
  modelValue: false,
  placement: 'center',
  round: false,
  zIndex: 900
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
  open: []
}>()

const display = ref(props.modelValue)
const leaving = ref(false)
const timer = createTimer()
const root = ref<HTMLElement | null>(null)

const rootStyle = computed(() => `z-index:${props.zIndex}`)
const transitionName = computed(() => {
  const names = {
    bottom: 'halo-slide-up',
    center: 'halo-zoom',
    left: 'halo-slide-right',
    right: 'halo-slide-left',
    top: 'halo-slide-down'
  }

  return names[props.placement]
})
const overlayClass = computed(() => (leaving.value ? 'halo-fade-leave' : 'halo-fade-enter'))
const contentClasses = computed(() => [
  `halo-popup__content--${props.placement}`,
  `${transitionName.value}-${leaving.value ? 'leave' : 'enter'}`,
  { 'halo-popup__content--round': props.round }
])
const contentStyle = computed(() => toStyleText(props.customStyle))

watch(() => props.modelValue, (value) => {
  timer.clear()

  if (value) {
    display.value = true
    leaving.value = false
    emit('open')
    return
  }

  if (display.value) {
    leaving.value = true
    timer.start(() => {
      display.value = false
      leaving.value = false
      emit('close')
    }, 220)
  }
}, { immediate: true })

onBeforeUnmount(timer.clear)

useOverlayAccessibility(() => display.value, requestClose, root)

function handleOverlayTap() {
  if (props.closeOnClickOverlay) {
    requestClose()
  }
}

function requestClose() {
  emit('update:modelValue', false)
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
