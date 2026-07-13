<template>
  <view
    class="halo-tabbar__item"
    :class="[customClass, { 'halo-tabbar__item--active': active }]"
    :style="itemStyle"
    :aria-selected="active ? 'true' : 'false'"
    role="tab"
    :tabindex="active ? 0 : -1"
    @keydown="handleKeydown"
    @tap="select"
  >
    <view class="halo-tabbar__icon-wrap">
      <halo-icon v-if="icon" class="halo-tabbar__icon" :name="icon" :size="32" />
      <text v-if="dot || badge" class="halo-tabbar__badge" :class="{ 'halo-tabbar__badge--dot': dot }">
        {{ dot ? '' : badge }}
      </text>
    </view>
    <text class="halo-tabbar__text">{{ text }}</text>
  </view>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import HaloIcon from '../halo-icon'
import { isKeyboardActivation, preventKeyboardDefault } from '../../src/shared/keyboard'
import { toStyleText } from '../../src/shared/utils'
import { haloTabbarKey, type HaloTabbarItemProps } from './props'

const props = withDefaults(defineProps<HaloTabbarItemProps>(), {
  badge: '',
  customClass: '',
  customStyle: '',
  dot: false,
  icon: '',
  text: ''
})

const tabbar = inject(haloTabbarKey, undefined)
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
