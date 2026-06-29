<template>
  <switch
    class="halo-switch"
    :class="customClass"
    :checked="modelValue"
    :color="activeColor || undefined"
    :disabled="disabled"
    :style="customStyle"
    @change="handleChange"
  />
</template>

<script setup lang="ts">
import type { HaloSwitchProps } from './props'

withDefaults(defineProps<HaloSwitchProps>(), {
  activeColor: '',
  customClass: '',
  customStyle: '',
  disabled: false,
  modelValue: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  change: [value: boolean]
}>()

function handleChange(event: unknown) {
  const value = Boolean((event as { detail?: { value?: boolean } }).detail?.value)
  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<style lang="scss">
@use "./style.scss";
</style>

