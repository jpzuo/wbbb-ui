<template>
  <view class="halo-collapse" :class="customClass" :style="customStyle">
    <view v-for="item in items" :key="item.name" class="halo-collapse__item">
      <view class="halo-collapse__header" :class="{ 'halo-collapse__header--disabled': item.disabled }" @tap="toggle(item)">
        <text>{{ item.title }}</text>
        <text>{{ isActive(item.name) ? '^' : 'v' }}</text>
      </view>
      <view v-if="isActive(item.name)" class="halo-collapse__content">
        <slot :item="item">{{ item.content }}</slot>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { HaloCollapseItem, HaloCollapseProps } from './props'

const props = withDefaults(defineProps<HaloCollapseProps>(), {
  accordion: false,
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
</script>

<style lang="scss">
@use "./style.scss";
</style>

