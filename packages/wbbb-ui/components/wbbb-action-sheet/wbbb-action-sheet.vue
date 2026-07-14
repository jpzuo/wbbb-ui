<template>
  <view v-if="modelValue" ref="root" class="wbbb-action-sheet-root" :class="customClass" role="dialog" aria-modal="true" tabindex="-1">
    <view class="wbbb-action-sheet-root__overlay" @tap="close" />
    <view class="wbbb-action-sheet" :style="customStyle">
      <view v-if="title" class="wbbb-action-sheet__title">{{ title }}</view>
      <button
        v-for="(action, index) in actions"
        :key="action.name"
        class="wbbb-action-sheet__item"
        :class="{ 'wbbb-action-sheet__item--disabled': action.disabled }"
        :disabled="action.disabled"
        :style="action.color ? `color:${action.color}` : ''"
        @tap="select(action, index)"
      >
        <text class="wbbb-action-sheet__name">{{ action.name }}</text>
        <text v-if="action.subname" class="wbbb-action-sheet__subname">{{ action.subname }}</text>
      </button>
      <button v-if="cancelLabel" class="wbbb-action-sheet__cancel" @tap="close">{{ cancelLabel }}</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useOverlayAccessibility } from '../../src/shared/overlay-accessibility'
import { useWbbbLocale } from '../../src/locale'
import type { WbbbActionSheetAction, WbbbActionSheetProps } from './props'

const props = withDefaults(defineProps<WbbbActionSheetProps>(), {
  actions: () => [],
  customClass: '',
  customStyle: '',
  modelValue: false,
  title: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  cancel: []
  close: []
  select: [action: WbbbActionSheetAction, index: number]
}>()

const root = ref<HTMLElement | null>(null)
const messages = useWbbbLocale(() => props.locale)
const cancelLabel = computed(() => props.cancelText ?? messages.value.actionSheetCancel)

useOverlayAccessibility(() => props.modelValue, close, root)

function close() {
  emit('update:modelValue', false)
  emit('close')
}

function select(action: WbbbActionSheetAction, index: number) {
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
