<template>
  <view class="wbbb-empty" :class="customClass" :style="customStyle">
    <image v-if="image" class="wbbb-empty__image" :src="image" :style="imageStyle" mode="aspectFit" />
    <view v-else class="wbbb-empty__placeholder" :style="imageStyle">
      <text class="wbbb-empty__placeholder-line" />
    </view>
    <text class="wbbb-empty__description">{{ descriptionText }}</text>
    <view v-if="$slots.default" class="wbbb-empty__action"><slot /></view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useWbbbLocale } from '../../src/locale'
import { addUnit } from '../../src/shared/utils'
import type { WbbbEmptyProps } from './props'

const props = withDefaults(defineProps<WbbbEmptyProps>(), {
  customClass: '',
  customStyle: '',
  image: '',
  imageSize: 160
})

const imageStyle = computed(() => {
  const size = addUnit(props.imageSize)
  return size ? `width:${size};height:${size}` : ''
})
const messages = useWbbbLocale(() => props.locale)
const descriptionText = computed(() => props.description ?? messages.value.emptyDescription)
</script>

<style lang="scss">
@use "./style.scss";
</style>
