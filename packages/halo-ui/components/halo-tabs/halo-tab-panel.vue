<template>
  <view v-if="visible" class="halo-tab-panel" :class="customClass" :style="customStyle">
    <slot />
  </view>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { haloTabsKey, type HaloTabPanelProps } from './props'

const props = withDefaults(defineProps<HaloTabPanelProps>(), {
  customClass: '',
  customStyle: '',
  disabled: false,
  title: ''
})

const tabs = inject(haloTabsKey, undefined)
const visible = computed(() => tabs?.modelValue === props.name)
</script>

<style lang="scss">
@use "./style.scss";
</style>
