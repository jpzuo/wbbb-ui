<template>
  <view v-if="visible" class="wbbb-tab-panel" :class="customClass" :style="customStyle">
    <slot />
  </view>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { wbbbTabsKey, type WbbbTabPanelProps } from './props'

const props = withDefaults(defineProps<WbbbTabPanelProps>(), {
  customClass: '',
  customStyle: '',
  disabled: false,
  title: ''
})

const tabs = inject(wbbbTabsKey, undefined)
const visible = computed(() => tabs?.modelValue === props.name)
</script>

<style lang="scss">
@use "./style.scss";
</style>
