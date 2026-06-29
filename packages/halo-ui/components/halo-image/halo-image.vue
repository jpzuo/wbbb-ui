<template>
  <view class="halo-image" :class="customClass" :style="rootStyle">
    <image
      v-if="src && !failed"
      class="halo-image__inner"
      :lazy-load="lazyLoad"
      :mode="mode"
      :src="src"
      @error="handleError"
      @load="emit('load', $event)"
    />
    <view v-else class="halo-image__fallback"><slot name="error">image</slot></view>
  </view>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { addUnit, toStyleText } from '../../src/shared/utils'
import type { HaloImageProps } from './props'

const props = withDefaults(defineProps<HaloImageProps>(), {
  customClass: '',
  customStyle: '',
  height: '',
  lazyLoad: true,
  mode: 'aspectFill',
  radius: 0,
  src: '',
  width: '100%'
})

const emit = defineEmits<{
  error: [event: unknown]
  load: [event: unknown]
}>()

const failed = ref(false)

watch(() => props.src, () => {
  failed.value = false
})

const rootStyle = computed(() => [
  props.width ? `width:${addUnit(props.width)}` : '',
  props.height ? `height:${addUnit(props.height)}` : '',
  props.radius ? `border-radius:${addUnit(props.radius)}` : '',
  toStyleText(props.customStyle)
].filter(Boolean).join(';'))

function handleError(event: unknown) {
  failed.value = true
  emit('error', event)
}
</script>

<style lang="scss">
@use "./style.scss";
</style>

