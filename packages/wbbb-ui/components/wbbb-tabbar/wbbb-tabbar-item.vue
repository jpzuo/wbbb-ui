<template>
  <view
    class="wbbb-tabbar__item"
    :class="[customClass, { 'wbbb-tabbar__item--active': active }]"
    :style="itemStyle"
    :aria-selected="active ? 'true' : 'false'"
    role="tab"
    :tabindex="active ? 0 : -1"
    @keydown="handleKeydown"
    @tap="select"
  >
    <view class="wbbb-tabbar__icon-wrap">
      <wbbb-icon v-if="icon" class="wbbb-tabbar__icon" :name="icon" :size="32" />
      <text v-if="dot || badge" class="wbbb-tabbar__badge" :class="{ 'wbbb-tabbar__badge--dot': dot }">
        {{ dot ? '' : badge }}
      </text>
    </view>
    <text class="wbbb-tabbar__text">{{ text }}</text>
  </view>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import WbbbIcon from '../wbbb-icon'
import { isKeyboardActivation, preventKeyboardDefault } from '../../src/shared/keyboard'
import { toStyleText } from '../../src/shared/utils'
import { wbbbTabbarKey } from './context'
import type { WbbbTabbarItemProps } from './props'

const props = withDefaults(defineProps<WbbbTabbarItemProps>(), {
  badge: '',
  customClass: '',
  customStyle: '',
  dot: false,
  icon: '',
  text: ''
})

const tabbar = inject(wbbbTabbarKey, undefined)
const active = computed(() => tabbar?.modelValue === props.name)
const itemStyle = computed(() => [
  `color:${active.value ? tabbar?.activeColor : tabbar?.inactiveColor}`,
  toStyleText(props.customStyle)
].filter(Boolean).join(';'))

function select() {
  tabbar?.select({
    badge: props.badge,
    dot: props.dot,
    icon: props.icon,
    name: props.name,
    text: props.text
  })
}

function handleKeydown(event: unknown) {
  if (isKeyboardActivation(event)) {
    preventKeyboardDefault(event)
    select()
  }
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
