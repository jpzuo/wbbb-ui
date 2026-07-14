<template>
  <view class="wbbb-list" :class="[customClass, { 'wbbb-list--border': border }]" :style="customStyle">
    <slot>
      <view
        v-for="(item, index) in items"
        :key="item.title"
        class="wbbb-list__item"
        :class="{ 'wbbb-list__item--disabled': item.disabled }"
        :aria-disabled="item.disabled ? 'true' : 'false'"
        role="button"
        :tabindex="item.disabled ? -1 : 0"
        @keydown="handleKeydown($event, item, index)"
        @tap="select(item, index)"
      >
        <view class="wbbb-list__main">
          <text class="wbbb-list__title">{{ item.title }}</text>
          <text v-if="item.label" class="wbbb-list__label">{{ item.label }}</text>
        </view>
        <text v-if="item.value" class="wbbb-list__value">{{ item.value }}</text>
      </view>
    </slot>
  </view>
</template>

<script setup lang="ts">
import { isKeyboardActivation, preventKeyboardDefault } from '../../src/shared/keyboard'
import type { WbbbListItem, WbbbListProps } from './props'

withDefaults(defineProps<WbbbListProps>(), {
  border: true,
  customClass: '',
  customStyle: '',
  items: () => []
})

const emit = defineEmits<{
  select: [item: WbbbListItem, index: number]
}>()

function select(item: WbbbListItem, index: number) {
  if (!item.disabled) {
    emit('select', item, index)
  }
}

function handleKeydown(event: unknown, item: WbbbListItem, index: number) {
  if (!item.disabled && isKeyboardActivation(event)) {
    preventKeyboardDefault(event)
    select(item, index)
  }
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
