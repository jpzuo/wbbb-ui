<template>
  <view class="halo-list" :class="[customClass, { 'halo-list--border': border }]" :style="customStyle">
    <slot>
      <view
        v-for="(item, index) in items"
        :key="item.title"
        class="halo-list__item"
        :class="{ 'halo-list__item--disabled': item.disabled }"
        :aria-disabled="item.disabled ? 'true' : 'false'"
        role="button"
        :tabindex="item.disabled ? -1 : 0"
        @keydown="handleKeydown($event, item, index)"
        @tap="select(item, index)"
      >
        <view class="halo-list__main">
          <text class="halo-list__title">{{ item.title }}</text>
          <text v-if="item.label" class="halo-list__label">{{ item.label }}</text>
        </view>
        <text v-if="item.value" class="halo-list__value">{{ item.value }}</text>
      </view>
    </slot>
  </view>
</template>

<script setup lang="ts">
import { isKeyboardActivation, preventKeyboardDefault } from '../../src/shared/keyboard'
import type { HaloListItem, HaloListProps } from './props'

withDefaults(defineProps<HaloListProps>(), {
  border: true,
  customClass: '',
  customStyle: '',
  items: () => []
})

const emit = defineEmits<{
  select: [item: HaloListItem, index: number]
}>()

function select(item: HaloListItem, index: number) {
  if (!item.disabled) {
    emit('select', item, index)
  }
}

function handleKeydown(event: unknown, item: HaloListItem, index: number) {
  if (!item.disabled && isKeyboardActivation(event)) {
    preventKeyboardDefault(event)
    select(item, index)
  }
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
