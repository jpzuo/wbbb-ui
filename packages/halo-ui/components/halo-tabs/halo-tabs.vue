<template>
  <scroll-view
    class="halo-tabs"
    :class="[customClass, { 'halo-tabs--scrollable': scrollable }]"
    :scroll-x="scrollable"
    :style="customStyle"
  >
    <view class="halo-tabs__list">
      <view
        v-for="item in items"
        :key="item.name"
        class="halo-tabs__item"
        :class="{ 'halo-tabs__item--active': item.name === modelValue, 'halo-tabs__item--disabled': item.disabled }"
        @tap="select(item)"
      >
        <text class="halo-tabs__title" :style="item.name === modelValue && activeColor ? `color:${activeColor}` : ''">
          {{ item.title }}
        </text>
        <text v-if="item.badge" class="halo-tabs__badge">{{ item.badge }}</text>
      </view>
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import type { HaloTabItem, HaloTabsProps } from './props'

const props = withDefaults(defineProps<HaloTabsProps>(), {
  activeColor: '',
  customClass: '',
  customStyle: '',
  items: () => [],
  modelValue: '',
  scrollable: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  change: [value: string | number, item: HaloTabItem]
}>()

function select(item: HaloTabItem) {
  if (item.disabled) {
    return
  }

  emit('update:modelValue', item.name)
  emit('change', item.name, item)
}
</script>

<style lang="scss">
@use "./style.scss";
</style>

