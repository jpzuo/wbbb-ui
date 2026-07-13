<template>
  <view v-if="modelValue" ref="root" class="halo-action-sheet-root" :class="customClass" role="dialog" aria-modal="true" tabindex="-1">
    <view class="halo-action-sheet-root__overlay" @tap="close" />
    <view class="halo-action-sheet" :style="customStyle">
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
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useOverlayAccessibility } from '../../src/shared/overlay-accessibility'
import type { HaloActionSheetAction, HaloActionSheetProps } from './props'

const props = withDefaults(defineProps<HaloActionSheetProps>(), {
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

const root = ref<HTMLElement | null>(null)

useOverlayAccessibility(() => props.modelValue, close, root)

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
