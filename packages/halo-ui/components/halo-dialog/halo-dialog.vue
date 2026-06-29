<template>
  <halo-popup :model-value="modelValue" placement="center" round :custom-class="customClass" @update:model-value="close">
    <view class="halo-dialog" :style="customStyle">
      <view v-if="title" class="halo-dialog__title">{{ title }}</view>
      <view class="halo-dialog__content"><slot>{{ content }}</slot></view>
      <view class="halo-dialog__actions">
        <button v-if="showCancel" class="halo-dialog__button halo-dialog__button--cancel" @tap="cancel">
          {{ cancelText }}
        </button>
        <button class="halo-dialog__button halo-dialog__button--confirm" @tap="confirm">{{ confirmText }}</button>
      </view>
    </view>
  </halo-popup>
</template>

<script setup lang="ts">
import HaloPopup from '../halo-popup/halo-popup.vue'
import type { HaloDialogProps } from './props'

withDefaults(defineProps<HaloDialogProps>(), {
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

function close() {
  emit('update:modelValue', false)
  emit('close')
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

