<template>
  <checkbox-group class="halo-checkbox" :class="customClass" :style="customStyle" @change="handleChange">
    <label v-for="(item, index) in options" :key="item.value" class="halo-checkbox__item">
      <checkbox
        class="halo-checkbox__control"
        :checked="modelValue.includes(item.value)"
        :disabled="disabled || item.disabled"
        :value="String(index)"
      />
      <text class="halo-checkbox__label">{{ item.label }}</text>
    </label>
  </checkbox-group>
</template>

<script setup lang="ts">
import { getOptionsByIndex } from '../../src/shared/selection'
import type { HaloCheckboxProps } from './props'

const props = withDefaults(defineProps<HaloCheckboxProps>(), {
  customClass: '',
  customStyle: '',
  disabled: false,
  modelValue: () => [],
  options: () => []
})

const emit = defineEmits<{
  'update:modelValue': [value: Array<string | number>]
  change: [value: Array<string | number>]
}>()

function handleChange(event: unknown) {
  const rawIndexes = (event as { detail?: { value?: string[] } }).detail?.value ?? []
  const values = getOptionsByIndex(props.options, rawIndexes).map((option) => option.value)
  emit('update:modelValue', values)
  emit('change', values)
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
