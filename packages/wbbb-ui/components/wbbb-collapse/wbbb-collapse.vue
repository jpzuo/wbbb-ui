<template>
  <view class="wbbb-collapse" :class="customClass" :style="customStyle">
    <view v-for="item in items" :key="item.name" class="wbbb-collapse__item">
      <view
        class="wbbb-collapse__header"
        :data-testid="`collapse-${item.name}`"
        :class="{ 'wbbb-collapse__header--disabled': item.disabled }"
        :aria-disabled="item.disabled ? 'true' : 'false'"
        :aria-expanded="isActive(item.name) ? 'true' : 'false'"
        role="button"
        :tabindex="item.disabled ? -1 : 0"
        @keydown="handleKeydown($event, item)"
        @tap="toggle(item)"
      >
        <text>{{ item.title }}</text>
        <view class="wbbb-collapse__arrow" :class="{ 'wbbb-collapse__arrow--active': isActive(item.name) }"><wbbb-icon name="down" :size="30" /></view>
      </view>
      <view class="wbbb-collapse__content-wrap" :class="{ 'wbbb-collapse__content-wrap--active': isActive(item.name), 'wbbb-collapse__content-wrap--animated': animated }">
        <view class="wbbb-collapse__content"><slot :item="item">{{ item.content }}</slot></view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import WbbbIcon from '../wbbb-icon'
import { isKeyboardActivation, preventKeyboardDefault } from '../../src/shared/keyboard'
import type { WbbbCollapseItem, WbbbCollapseProps } from './props'

const props = withDefaults(defineProps<WbbbCollapseProps>(), {
  accordion: false,
  animated: true,
  customClass: '',
  customStyle: '',
  items: () => [],
  modelValue: () => []
})

const emit = defineEmits<{
  'update:modelValue': [value: Array<string | number> | string | number]
  change: [value: Array<string | number> | string | number]
}>()

function values() {
  return Array.isArray(props.modelValue) ? props.modelValue : props.modelValue !== '' ? [props.modelValue] : []
}

function isActive(name: string | number) {
  return values().includes(name)
}

function toggle(item: WbbbCollapseItem) {
  if (item.disabled) {
    return
  }

  let next: Array<string | number> | string | number
  if (props.accordion) {
    next = isActive(item.name) ? '' : item.name
  } else {
    next = isActive(item.name) ? values().filter((value) => value !== item.name) : [...values(), item.name]
  }

  emit('update:modelValue', next)
  emit('change', next)
}

function handleKeydown(event: unknown, item: WbbbCollapseItem) {
  if (!item.disabled && isKeyboardActivation(event)) {
    preventKeyboardDefault(event)
    toggle(item)
  }
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
