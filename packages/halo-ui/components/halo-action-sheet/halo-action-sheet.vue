<template>
  <halo-popup :model-value="modelValue" placement="bottom" @update:model-value="close">
    <view class="halo-action-sheet" :class="customClass" :style="customStyle">
      <view v-if="title" class="halo-action-sheet__title">{{ title }}</view>
      <button
        v-for="(action, index) in actions"
        :key="action.name"
        class="halo-action-sheet__item"
        :class="{ 'halo-action-sheet__item--disabled': action.disabled }"
        :disabled="action.disabled"
        :style="action.color ? `color:${action.color}` : ''"
        @tap="select(action, index)"
      >
        <text class="halo-action-sheet__name">{{ action.name }}</text>
        <text v-if="action.subname" class="halo-action-sheet__subname">{{ action.subname }}</text>
      </button>
      <button v-if="cancelText" class="halo-action-sheet__cancel" @tap="close">{{ cancelText }}</button>
    </view>
  </halo-popup>
</template>

<script setup lang="ts">
import HaloPopup from '../halo-popup/halo-popup.vue'
import type { HaloActionSheetAction, HaloActionSheetProps } from './props'

withDefaults(defineProps<HaloActionSheetProps>(), {
  actions: () => [],
  cancelText: 'Cancel',
  customClass: '',
  customStyle: '',
  modelValue: false,
  title: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  cancel: []
  close: []
  select: [action: HaloActionSheetAction, index: number]
}>()

function close() {
  emit('update:modelValue', false)
  emit('close')
}

function select(action: HaloActionSheetAction, index: number) {
  if (action.disabled) {
    return
  }

  emit('select', action, index)
  close()
}
</script>

<style lang="scss">
@use "./style.scss";
</style>

