<template>
  <text class="wbbb-text" :class="classes" :style="mergedStyle"><slot /></text>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { addUnit, toStyleText } from '../../src/shared/utils'
import type { WbbbTextProps } from './props'

const props = withDefaults(defineProps<WbbbTextProps>(), {
  color: '',
  customClass: '',
  customStyle: '',
  ellipsis: false,
  size: '',
  type: 'default'
})

const classes = computed(() => [
  props.customClass,
  `wbbb-text--${props.type}`,
  { 'wbbb-text--ellipsis': props.ellipsis }
])

const mergedStyle = computed(() => [
  props.color ? `color:${props.color}` : '',
  props.size ? `font-size:${addUnit(props.size)}` : '',
  toStyleText(props.customStyle)
].filter(Boolean).join(';'))
</script>

<style lang="scss">
@use "./style.scss";
</style>

