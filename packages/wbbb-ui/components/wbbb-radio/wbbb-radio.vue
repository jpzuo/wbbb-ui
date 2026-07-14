<template>
  <radio-group class="wbbb-radio" :class="customClass" :style="customStyle" @change="handleChange">
    <label v-for="(item, index) in options" :key="item.value" class="wbbb-radio__item">
      <radio
        class="wbbb-radio__control"
        :checked="modelValue === item.value"
        :disabled="disabled || item.disabled"
        :value="String(index)"
      />
      <text class="wbbb-radio__label">{{ item.label }}</text>
    </label>
  </radio-group>
</template>

<script setup lang="ts">
import { getOptionByIndex } from '../../src/shared/selection'
import type { WbbbRadioProps } from './props'

const props = withDefaults(defineProps<WbbbRadioProps>(), {
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
  const rawIndex = (event as { detail?: { value?: string } }).detail?.value ?? ''
  const option = getOptionByIndex(props.options, rawIndex)

  if (option) {
    emit('update:modelValue', option.value)
    emit('change', option.value)
  }
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
