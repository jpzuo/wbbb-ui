<template>
  <view class="halo-rate" :class="[customClass, { 'halo-rate--disabled': disabled }]" :style="customStyle">
    <text
      v-for="item in count"
      :key="item"
      class="halo-rate__item"
      :class="{ 'halo-rate__item--active': item <= modelValue }"
      :style="item <= modelValue && color ? `color:${color}` : ''"
      @tap="select(item)"
    >*</text>
  </view>
</template>

<script setup lang="ts">
import type { HaloRateProps } from './props'

const props = withDefaults(defineProps<HaloRateProps>(), {
  color: '',
  count: 5,
  customClass: '',
  customStyle: '',
  disabled: false,
  modelValue: 0
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  change: [value: number]
}>()

function select(value: number) {
  if (props.disabled) {
    return
  }

  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<style lang="scss">
@use "./style.scss";
</style>

