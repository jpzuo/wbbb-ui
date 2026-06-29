<template>
  <view class="halo-tag" :class="classes" :style="customStyle" @tap="emit('click')">
    <text class="halo-tag__text"><slot /></text>
    <text v-if="closable" class="halo-tag__close" @tap.stop="emit('close')">x</text>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { HaloTagProps } from './props'

const props = withDefaults(defineProps<HaloTagProps>(), {
  closable: false,
  customClass: '',
  customStyle: '',
  plain: false,
  round: false,
  size: 'medium',
  type: 'default'
})

const emit = defineEmits<{
  click: []
  close: []
}>()

const classes = computed(() => [
  props.customClass,
  `halo-tag--${props.type}`,
  `halo-tag--${props.size}`,
  {
    'halo-tag--plain': props.plain,
    'halo-tag--round': props.round
  }
])
</script>

<style lang="scss">
@use "./style.scss";
</style>

