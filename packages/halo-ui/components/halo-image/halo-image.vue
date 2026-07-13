<template>
  <view class="halo-image" :class="[customClass, `halo-image--${state}`]" :style="rootStyle">
    <image
      v-if="src && state !== 'error' && state !== 'idle'"
      class="halo-image__inner"
      :lazy-load="lazyLoad"
      :mode="mode"
      :src="src"
      @error="handleError"
      @load="handleLoad"
    />
    <view v-if="state === 'loading' && showLoading" class="halo-image__fallback halo-image__fallback--loading"><halo-loading :text="loadingText" vertical /></view>
    <view v-else-if="state === 'error' && showError" class="halo-image__fallback halo-image__fallback--error"><slot name="error"><halo-icon name="warning" :size="34" /><text>{{ errorText }}</text></slot></view>
    <view v-else-if="state === 'idle'" class="halo-image__fallback halo-image__fallback--idle"><halo-icon name="image" :size="34" /><text>暂无图片</text></view>
  </view>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import HaloIcon from '../halo-icon'
import HaloLoading from '../halo-loading'
import { addUnit, toStyleText } from '../../src/shared/utils'
import type { HaloImageProps } from './props'

const props = withDefaults(defineProps<HaloImageProps>(), {
  customClass: '',
  customStyle: '',
  errorText: '图片加载失败',
  height: '',
  lazyLoad: true,
  mode: 'aspectFill',
  radius: 0,
  showError: true,
  showLoading: true,
  src: '',
  loading: false,
  loadingText: '加载中',
  width: '100%'
})

const emit = defineEmits<{
  error: [event: unknown]
  load: [event: unknown]
}>()

const failed = ref(false)
const loaded = ref(false)
const state = computed(() => props.loading || (props.src && !loaded.value && !failed.value) ? 'loading' : failed.value ? 'error' : props.src ? 'loaded' : 'idle')

watch(() => props.src, () => {
  failed.value = false
  loaded.value = false
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

function handleLoad(event: unknown) {
  loaded.value = true
  emit('load', event)
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
