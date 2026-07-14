<template>
  <view v-if="display" ref="root" class="wbbb-dialog-root" :class="[customClass, { 'wbbb-dialog-root--leave': leaving }]" role="dialog" aria-modal="true" tabindex="-1">
    <view class="wbbb-dialog-root__overlay" :class="leaving ? 'wbbb-fade-leave' : 'wbbb-fade-enter'" @tap="close" />
    <view class="wbbb-dialog" :class="leaving ? 'wbbb-dialog-zoom-leave' : 'wbbb-dialog-zoom-enter'" :style="customStyle">
      <view v-if="title" class="wbbb-dialog__title">{{ title }}</view>
      <view class="wbbb-dialog__content"><slot>{{ content }}</slot></view>
      <view class="wbbb-dialog__actions">
        <button v-if="showCancel" class="wbbb-dialog__button wbbb-dialog__button--cancel" @tap="cancel">
          {{ cancelLabel }}
        </button>
        <button class="wbbb-dialog__button wbbb-dialog__button--confirm" @tap="confirm">{{ confirmLabel }}</button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useOverlayAccessibility } from '../../src/shared/overlay-accessibility'
import { createTimer } from '../../src/shared/timer'
import { useWbbbLocale } from '../../src/locale'
import type { WbbbDialogProps } from './props'

const props = withDefaults(defineProps<WbbbDialogProps>(), {
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
const messages = useWbbbLocale(() => props.locale)
const cancelLabel = computed(() => props.cancelText ?? messages.value.dialogCancel)
const confirmLabel = computed(() => props.confirmText ?? messages.value.dialogConfirm)

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
