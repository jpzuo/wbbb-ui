<template>
  <image
    v-if="src"
    class="halo-icon halo-icon--image"
    :class="customClass"
    :src="src"
    :style="mergedStyle"
    mode="aspectFit"
  />
  <text v-else class="halo-icon" :class="customClass" :style="mergedStyle">{{ glyph }}</text>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { addUnit, toStyleText } from '../../src/shared/utils'
import type { HaloIconProps } from './props'

const props = withDefaults(defineProps<HaloIconProps>(), {
  color: '',
  customClass: '',
  customStyle: '',
  name: '',
  size: 32,
  src: ''
})

const glyphMap: Record<string, string> = {
  back: '<',
  check: 'check',
  close: 'x',
  down: 'v',
  info: 'i',
  left: '<',
  minus: '-',
  plus: '+',
  right: '>',
  search: 'search',
  up: '^',
  warning: '!'
}

const glyph = computed(() => glyphMap[props.name] ?? props.name)

const mergedStyle = computed(() => {
  const size = addUnit(props.size)

  return [
    size ? `font-size:${size};width:${size};height:${size}` : '',
    props.color ? `color:${props.color}` : '',
    toStyleText(props.customStyle)
  ]
    .filter(Boolean)
    .join(';')
})
</script>

<style lang="scss">
@use "./style.scss";
</style>

