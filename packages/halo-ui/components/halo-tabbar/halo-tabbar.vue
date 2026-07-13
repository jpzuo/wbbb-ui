<template>
  <view v-if="fixed" class="halo-tabbar__placeholder" />
  <view class="halo-tabbar" :class="classes" :style="rootStyle" role="tablist">
    <view
      v-for="item in items"
      :key="item.name"
      class="halo-tabbar__item"
      :class="{ 'halo-tabbar__item--active': item.name === modelValue }"
      :style="item.name === modelValue ? `color:${activeColor}` : `color:${inactiveColor}`"
      :aria-selected="item.name === modelValue ? 'true' : 'false'"
      role="tab"
      :tabindex="item.name === modelValue ? 0 : -1"
      @keydown="handleKeydown($event, item)"
      @tap="select(item)"
    >
      <view class="halo-tabbar__icon-wrap">
        <halo-icon v-if="item.icon" class="halo-tabbar__icon" :name="item.icon" :size="32" />
        <text v-if="item.dot || item.badge" class="halo-tabbar__badge" :class="{ 'halo-tabbar__badge--dot': item.dot }">
          {{ item.dot ? '' : item.badge }}
        </text>
      </view>
      <text class="halo-tabbar__text">{{ item.text }}</text>
    </view>
    <slot />
  </view>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
import { isKeyboardActivation, preventKeyboardDefault } from '../../src/shared/keyboard'
import { toStyleText } from '../../src/shared/utils'
import { haloTabbarKey, type HaloTabbarItem, type HaloTabbarProps } from './props'

const props = withDefaults(defineProps<HaloTabbarProps>(), {
  activeColor: 'var(--halo-color-primary)',
  customClass: '',
  customStyle: '',
  fixed: true,
  inactiveColor: 'var(--halo-color-text-secondary)',
  items: () => [],
  modelValue: '',
  safeAreaInsetBottom: true,
  zIndex: 800
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  change: [value: string | number, item: HaloTabbarItem]
}>()

const classes = computed(() => [
  props.customClass,
  {
    'halo-tabbar--fixed': props.fixed,
    'halo-tabbar--safe': props.safeAreaInsetBottom
  }
])

const rootStyle = computed(() => [`z-index:${props.zIndex}`, toStyleText(props.customStyle)].filter(Boolean).join(';'))

function select(item: HaloTabbarItem) {
  emit('update:modelValue', item.name)
  emit('change', item.name, item)
}

function handleKeydown(event: unknown, item: HaloTabbarItem) {
  if (isKeyboardActivation(event)) {
    preventKeyboardDefault(event)
    select(item)
  }
}

provide(haloTabbarKey, {
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
