<template>
  <view class="halo-upload" :class="[customClass, { 'halo-upload--disabled': disabled }]" :style="customStyle">
    <view v-for="file in modelValue" :key="file.path" class="halo-upload__item">
      <image class="halo-upload__image" :src="file.path" mode="aspectFill" />
      <text class="halo-upload__remove" @tap="remove(file)">x</text>
    </view>
    <view v-if="modelValue.length < count" class="halo-upload__trigger" @tap="choose">
      <text class="halo-upload__plus">+</text>
      <text class="halo-upload__text">{{ text }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { HaloUploadFile, HaloUploadProps } from './props'

const props = withDefaults(defineProps<HaloUploadProps>(), {
  count: 9,
  customClass: '',
  customStyle: '',
  disabled: false,
  modelValue: () => [],
  text: 'Upload'
})

const emit = defineEmits<{
  'update:modelValue': [value: HaloUploadFile[]]
  change: [value: HaloUploadFile[]]
  remove: [file: HaloUploadFile]
}>()

function choose() {
  if (props.disabled) {
    return
  }

  uni?.chooseImage?.({
    count: Math.max(1, props.count - props.modelValue.length),
    success(result: { tempFiles?: Array<{ path?: string; size?: number }>; tempFilePaths?: string[] }) {
      const files = (result.tempFiles?.length ? result.tempFiles : result.tempFilePaths?.map((path) => ({ path })) ?? [])
        .map((file) => ({ path: file.path ?? '', size: file.size }))
        .filter((file) => file.path)
      const next = [...props.modelValue, ...files].slice(0, props.count)
      emit('update:modelValue', next)
      emit('change', next)
    }
  })
}

function remove(file: HaloUploadFile) {
  const next = props.modelValue.filter((item) => item.path !== file.path)
  emit('remove', file)
  emit('update:modelValue', next)
  emit('change', next)
}
</script>

<style lang="scss">
@use "./style.scss";
</style>

