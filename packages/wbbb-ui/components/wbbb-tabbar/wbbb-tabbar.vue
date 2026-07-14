<template>
  <view v-if="fixed" class="wbbb-tabbar__placeholder" />
  <view class="wbbb-tabbar" :class="classes" :style="rootStyle" role="tablist">
    <view
      v-for="item in items"
      :key="item.name"
      class="wbbb-tabbar__item"
      :class="{ 'wbbb-tabbar__item--active': item.name === modelValue }"
      :style="item.name === modelValue ? `color:${activeColor}` : `color:${inactiveColor}`"
      :aria-selected="item.name === modelValue ? 'true' : 'false'"
      role="tab"
      :tabindex="item.name === modelValue ? 0 : -1"
      @keydown="handleKeydown($event, item)"
      @tap="select(item)"
    >
      <view class="wbbb-tabbar__icon-wrap">
        <wbbb-icon v-if="item.icon" class="wbbb-tabbar__icon" :name="item.icon" :size="32" />
        <text v-if="item.dot || item.badge" class="wbbb-tabbar__badge" :class="{ 'wbbb-tabbar__badge--dot': item.dot }">
          {{ item.dot ? '' : item.badge }}
        </text>
      </view>
      <text class="wbbb-tabbar__text">{{ item.text }}</text>
    </view>
    <slot />
  </view>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
import { isKeyboardActivation, preventKeyboardDefault } from '../../src/shared/keyboard'
import { toStyleText } from '../../src/shared/utils'
import { wbbbTabbarKey, type WbbbTabbarItem, type WbbbTabbarProps } from './props'

const props = withDefaults(defineProps<WbbbTabbarProps>(), {
  activeColor: 'var(--wbbb-color-primary)',
  customClass: '',
  customStyle: '',
  fixed: true,
  inactiveColor: 'var(--wbbb-color-text-secondary)',
  items: () => [],
  modelValue: '',
  safeAreaInsetBottom: true,
  zIndex: 800
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  change: [value: string | number, item: WbbbTabbarItem]
}>()

const classes = computed(() => [
  props.customClass,
  {
    'wbbb-tabbar--fixed': props.fixed,
    'wbbb-tabbar--safe': props.safeAreaInsetBottom
  }
])

const rootStyle = computed(() => [`z-index:${props.zIndex}`, toStyleText(props.customStyle)].filter(Boolean).join(';'))

function select(item: WbbbTabbarItem) {
  emit('update:modelValue', item.name)
  emit('change', item.name, item)
}

function handleKeydown(event: unknown, item: WbbbTabbarItem) {
  if (isKeyboardActivation(event)) {
    preventKeyboardDefault(event)
    select(item)
  }
}

provide(wbbbTabbarKey, {
  get activeColor() {
    return props.activeColor
  },
  get inactiveColor() {
    return props.inactiveColor
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
