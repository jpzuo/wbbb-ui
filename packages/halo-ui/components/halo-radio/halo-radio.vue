<template>
  <radio-group class="halo-radio" :class="customClass" :style="customStyle" @change="handleChange">
    <label v-for="item in options" :key="item.value" class="halo-radio__item">
      <radio
        class="halo-radio__control"
        :checked="modelValue === item.value"
        :disabled="disabled || item.disabled"
        :value="String(item.value)"
      />
      <text class="halo-radio__label">{{ item.label }}</text>
    </label>
  </radio-group>
</template>

<script setup lang="ts">
import type { HaloRadioProps } from './props'

withDefaults(defineProps<HaloRadioProps>(), {
  customClass: '',
  customStyle: '',
  disabled: false,
  modelValue: '',
  options: () => []
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  change: [value: string | number]
}>()

function handleChange(event: unknown) {
  const value = (event as { detail?: { value?: string } }).detail?.value ?? ''
  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<style lang="scss">
@use "./style.scss";
</style>

