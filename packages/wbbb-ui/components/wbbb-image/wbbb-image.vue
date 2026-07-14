<template>
  <view class="wbbb-image" :class="[customClass, `wbbb-image--${state}`]" :style="rootStyle">
    <image
      v-if="src && state !== 'error' && state !== 'idle'"
      class="wbbb-image__inner"
      :lazy-load="lazyLoad"
      :mode="mode"
      :src="src"
      @error="handleError"
      @load="handleLoad"
    />
    <view v-if="state === 'loading' && showLoading" class="wbbb-image__fallback wbbb-image__fallback--loading"><wbbb-loading :text="loadingText" vertical /></view>
    <view v-else-if="state === 'error' && showError" class="wbbb-image__fallback wbbb-image__fallback--error"><slot name="error"><wbbb-icon name="warning" :size="34" /><text>{{ errorText }}</text></slot></view>
    <view v-else-if="state === 'idle'" class="wbbb-image__fallback wbbb-image__fallback--idle"><wbbb-icon name="image" :size="34" /><text>暂无图片</text></view>
  </view>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import WbbbIcon from '../wbbb-icon'
import WbbbLoading from '../wbbb-loading'
import { addUnit, toStyleText } from '../../src/shared/utils'
import type { WbbbImageProps } from './props'

const props = withDefaults(defineProps<WbbbImageProps>(), {
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
