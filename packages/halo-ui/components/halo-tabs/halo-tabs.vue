<template>
  <scroll-view
    class="halo-tabs"
    :class="[customClass, { 'halo-tabs--scrollable': scrollable }]"
    :scroll-x="scrollable"
    :style="customStyle"
  >
    <view class="halo-tabs__list" role="tablist">
      <view
        v-for="item in items"
        :key="item.name"
        class="halo-tabs__item"
        :class="{ 'halo-tabs__item--active': item.name === modelValue, 'halo-tabs__item--disabled': item.disabled }"
        :aria-disabled="item.disabled ? 'true' : 'false'"
        :aria-selected="item.name === modelValue ? 'true' : 'false'"
        role="tab"
        :tabindex="item.disabled ? -1 : item.name === modelValue ? 0 : -1"
        @keydown="handleKeydown($event, item)"
        @tap="select(item)"
      >
        <text class="halo-tabs__title" :style="item.name === modelValue && activeColor ? `color:${activeColor}` : ''">
          {{ item.title }}
        </text>
        <text v-if="item.badge" class="halo-tabs__badge">{{ item.badge }}</text>
      </view>
    </view>
    <slot />
  </scroll-view>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { isKeyboardActivation, preventKeyboardDefault } from '../../src/shared/keyboard'
import { haloTabsKey, type HaloTabItem, type HaloTabsProps } from './props'

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

function handleKeydown(event: unknown, item: HaloTabItem) {
  if (!item.disabled && isKeyboardActivation(event)) {
    preventKeyboardDefault(event)
    select(item)
  }
}

provide(haloTabsKey, {
  get activeColor() {
    return props.activeColor
  },
  get modelValue() {
    return props.modelValue
  },
  select
})
</script>

<style lang="scss">
@use "./style.scss";
</style>
