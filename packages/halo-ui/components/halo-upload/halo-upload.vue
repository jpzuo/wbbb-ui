<template>
  <view class="halo-upload" :class="[customClass, { 'halo-upload--disabled': disabled }]" :style="customStyle">
    <view v-for="file in modelValue" :key="file.path" class="halo-upload__item halo-upload__item--success">
      <image class="halo-upload__image" :src="file.path" mode="aspectFill" />
      <view class="halo-upload__remove" role="button" tabindex="0" @keydown="handleKeydown($event, () => remove(file))" @tap="remove(file)"><halo-icon name="close" :size="24" /></view>
    </view>
    <view v-for="file in uploadingFiles" :key="`uploading-${file.path}`" class="halo-upload__item halo-upload__item--uploading" role="button" tabindex="0" @keydown="handleKeydown($event, () => cancel(file))" @tap="cancel(file)">
      <image class="halo-upload__image" :src="file.path" mode="aspectFill" />
      <view class="halo-upload__state"><halo-loading color="var(--halo-color-inverse-foreground)" :size="28" /><text>上传中</text></view>
    </view>
    <view v-for="file in failedFiles" :key="`failed-${file.path}`" class="halo-upload__item halo-upload__item--failed" role="button" tabindex="0" @keydown="handleKeydown($event, () => retry(file))" @tap="retry(file)">
      <image class="halo-upload__image" :src="file.path" mode="aspectFill" />
      <view class="halo-upload__state"><halo-icon name="warning" :size="28" /><text>点击重试</text></view>
    </view>
    <view v-if="modelValue.length < count" class="halo-upload__trigger" :aria-disabled="disabled ? 'true' : 'false'" role="button" :tabindex="disabled ? -1 : 0" @keydown="handleKeydown($event, choose)" @tap="choose">
      <halo-icon class="halo-upload__plus" name="plus" :size="32" />
      <text class="halo-upload__text">{{ text }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import HaloIcon from '../halo-icon'
import HaloLoading from '../halo-loading'
import { isKeyboardActivation, preventKeyboardDefault } from '../../src/shared/keyboard'
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
  afterRead: [files: HaloUploadFile[]]
  change: [value: HaloUploadFile[]]
  error: [error: unknown]
  remove: [file: HaloUploadFile]
}>()

const uploadingFiles = ref<HaloUploadFile[]>([])
const failedFiles = ref<HaloUploadFile[]>([])
const controllers = new Map<string, AbortController>()

onBeforeUnmount(() => controllers.forEach((controller) => controller.abort()))

function choose() {
  if (props.disabled) {
    return
  }

  uni?.chooseImage?.({
    count: Math.max(1, props.count - props.modelValue.length),
    async success(result: { tempFiles?: Array<{ path?: string; size?: number }>; tempFilePaths?: string[] }) {
      const rawFiles: Array<{ path?: string; size?: number }> = result.tempFiles?.length
        ? result.tempFiles
        : result.tempFilePaths?.map((path) => ({ path })) ?? []
      const files = rawFiles
        .map((file) => ({ path: file.path ?? '', size: file.size }))
        .filter((file) => file.path)
      try {
        if (props.beforeRead && !(await props.beforeRead(files))) {
          return
        }

        await uploadFiles(files)
      } catch (error) {
        failedFiles.value = [...failedFiles.value, ...files]
        emit('error', error)
      }
    }
  })
}

async function uploadFiles(files: HaloUploadFile[]) {
  uploadingFiles.value = [...uploadingFiles.value, ...files]
  const activeControllers = files.map((file) => {
    const controller = typeof AbortController === 'undefined' ? undefined : new AbortController()
    if (controller) controllers.set(file.path, controller)
    return controller
  })

  try {
    const uploaded = props.uploader
      ? await Promise.all(files.map((file, index) => props.uploader!(file, { signal: activeControllers[index]?.signal })))
      : files
    const next = [...props.modelValue, ...uploaded.map((file) => ({ ...file, status: 'success' as const }))].slice(0, props.count)
    failedFiles.value = failedFiles.value.filter((file) => !files.some((candidate) => candidate.path === file.path))
    emit('afterRead', uploaded)
    emit('update:modelValue', next)
    emit('change', next)
  } catch (error) {
    if (activeControllers.some((controller) => controller?.signal.aborted)) {
      return
    }

    failedFiles.value = [...failedFiles.value.filter((file) => !files.some((candidate) => candidate.path === file.path)), ...files.map((file) => ({ ...file, status: 'failed' as const }))]
    emit('error', error)
  } finally {
    files.forEach((file, index) => {
      if (controllers.get(file.path) === activeControllers[index]) {
        controllers.delete(file.path)
      }
    })
    uploadingFiles.value = uploadingFiles.value.filter((file) => !files.some((candidate) => candidate.path === file.path))
  }
}

function retry(file: HaloUploadFile) {
  if (!props.disabled) {
    controllers.get(file.path)?.abort()
    void uploadFiles([file])
  }
}

function remove(file: HaloUploadFile) {
  cancel(file)
  failedFiles.value = failedFiles.value.filter((item) => item.path !== file.path)
  const next = props.modelValue.filter((item) => item.path !== file.path)
  emit('remove', file)
  emit('update:modelValue', next)
  emit('change', next)
}

function cancel(file: HaloUploadFile) {
  controllers.get(file.path)?.abort()
  controllers.delete(file.path)
  uploadingFiles.value = uploadingFiles.value.filter((item) => item.path !== file.path)
}

function handleKeydown(event: unknown, action: () => void) {
  if (!props.disabled && isKeyboardActivation(event)) {
    preventKeyboardDefault(event)
    action()
  }
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
