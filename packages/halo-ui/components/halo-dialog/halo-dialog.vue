<template>
  <view v-if="display" ref="root" class="halo-dialog-root" :class="[customClass, { 'halo-dialog-root--leave': leaving }]" role="dialog" aria-modal="true" tabindex="-1">
    <view class="halo-dialog-root__overlay" :class="leaving ? 'halo-fade-leave' : 'halo-fade-enter'" @tap="close" />
    <view class="halo-dialog" :class="leaving ? 'halo-dialog-zoom-leave' : 'halo-dialog-zoom-enter'" :style="customStyle">
      <view v-if="title" class="halo-dialog__title">{{ title }}</view>
      <view class="halo-dialog__content"><slot>{{ content }}</slot></view>
      <view class="halo-dialog__actions">
        <button v-if="showCancel" class="halo-dialog__button halo-dialog__button--cancel" @tap="cancel">
          {{ cancelText }}
        </button>
        <button class="halo-dialog__button halo-dialog__button--confirm" @tap="confirm">{{ confirmText }}</button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'
import { useOverlayAccessibility } from '../../src/shared/overlay-accessibility'
import { createTimer } from '../../src/shared/timer'
import type { HaloDialogProps } from './props'

const props = withDefaults(defineProps<HaloDialogProps>(), {
  cancelText: 'Cancel',
  confirmText: 'OK',
  content: '',
  customClass: '',
  customStyle: '',
  modelValue: false,
  showCancel: true,
  title: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  cancel: []
  close: []
  confirm: []
}>()

const display = ref(props.modelValue)
const leaving = ref(false)
const timer = createTimer()
const root = ref<HTMLElement | null>(null)

watch(() => props.modelValue, (value) => {
  timer.clear()

  if (value) {
    display.value = true
    leaving.value = false
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

useOverlayAccessibility(() => display.value, close, root)

function close() {
  emit('update:modelValue', false)
}

function cancel() {
  emit('cancel')
  close()
}

function confirm() {
  emit('confirm')
  close()
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
