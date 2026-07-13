<template>
  <view class="halo-collapse" :class="customClass" :style="customStyle">
    <view v-for="item in items" :key="item.name" class="halo-collapse__item">
      <view
        class="halo-collapse__header"
        :data-testid="`collapse-${item.name}`"
        :class="{ 'halo-collapse__header--disabled': item.disabled }"
        :aria-disabled="item.disabled ? 'true' : 'false'"
        :aria-expanded="isActive(item.name) ? 'true' : 'false'"
        role="button"
        :tabindex="item.disabled ? -1 : 0"
        @keydown="handleKeydown($event, item)"
        @tap="toggle(item)"
      >
        <text>{{ item.title }}</text>
        <view class="halo-collapse__arrow" :class="{ 'halo-collapse__arrow--active': isActive(item.name) }"><halo-icon name="down" :size="30" /></view>
      </view>
      <view class="halo-collapse__content-wrap" :class="{ 'halo-collapse__content-wrap--active': isActive(item.name), 'halo-collapse__content-wrap--animated': animated }">
        <view class="halo-collapse__content"><slot :item="item">{{ item.content }}</slot></view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import HaloIcon from '../halo-icon'
import { isKeyboardActivation, preventKeyboardDefault } from '../../src/shared/keyboard'
import type { HaloCollapseItem, HaloCollapseProps } from './props'

const props = withDefaults(defineProps<HaloCollapseProps>(), {
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

function toggle(item: HaloCollapseItem) {
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

function handleKeydown(event: unknown, item: HaloCollapseItem) {
  if (!item.disabled && isKeyboardActivation(event)) {
    preventKeyboardDefault(event)
    toggle(item)
  }
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
