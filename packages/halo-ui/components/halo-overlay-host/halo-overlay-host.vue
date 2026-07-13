<template>
  <view class="halo-overlay-host" :class="customClass" :style="customStyle">
    <halo-toast
      v-if="toast.visible"
      :key="toast.key"
      v-model="toast.visible"
      :duration="toast.duration"
      :icon="toast.icon"
      :message="toast.message"
    />
    <halo-notify
      v-if="notify.visible"
      :key="notify.key"
      v-model="notify.visible"
      :duration="notify.duration"
      :message="notify.message"
      :type="notify.type"
    />
    <halo-dialog
      v-model="dialog.visible"
      :cancel-text="dialog.cancelText"
      :confirm-text="dialog.confirmText"
      :content="dialog.content"
      :show-cancel="dialog.showCancel"
      :title="dialog.title"
      @cancel="finishDialog(false)"
      @close="finishDialog(false)"
      @confirm="finishDialog(true)"
    />
    <halo-action-sheet
      v-model="actionSheet.visible"
      :actions="actionSheet.actions"
      :cancel-text="actionSheet.cancelText"
      @close="finishActionSheet()"
      @select="handleActionSelect"
    />
  </view>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive } from 'vue'
import HaloActionSheet from '../halo-action-sheet'
import HaloDialog from '../halo-dialog'
import HaloNotify from '../halo-notify'
import HaloToast from '../halo-toast'
import { haloOverlayBus, registerOverlayHost } from '../../src/services/overlay'
import type { HaloOverlayHostProps } from './props'

withDefaults(defineProps<HaloOverlayHostProps>(), {
  customClass: '',
  customStyle: ''
})

const toast = reactive({ duration: 1800, icon: 'none' as 'success' | 'error' | 'loading' | 'none', key: 0, message: '', visible: false })
const notify = reactive({ duration: 2200, key: 0, message: '', type: 'info' as 'info' | 'success' | 'warning' | 'danger', visible: false })
const dialog = reactive({ cancelText: 'Cancel', confirmText: 'OK', content: '', showCancel: true, title: '', visible: false })
const actionSheet = reactive({ actions: [] as Array<{ color?: string; disabled?: boolean; name: string; subname?: string }>, cancelText: 'Cancel', visible: false })

let unregister: (() => void) | undefined
let dialogResolver: ((value: boolean) => void) | undefined
let actionSheetResolver: ((value: number | undefined) => void) | undefined

function showToast(options: { duration?: number; icon?: 'success' | 'error' | 'loading' | 'none'; title?: string }) {
  toast.visible = false
  toast.duration = options.duration ?? 1800
  toast.icon = options.icon ?? 'none'
  toast.key += 1
  toast.message = options.title ?? ''
  toast.visible = true
}

function showNotify(options: { duration?: number; message: string; type?: 'info' | 'success' | 'warning' | 'danger' }) {
  notify.visible = false
  notify.duration = options.duration ?? 2200
  notify.key += 1
  notify.message = options.message
  notify.type = options.type ?? 'info'
  notify.visible = true
}

function showDialog(request: { options: { cancelText?: string; confirmText?: string; content?: string; showCancel?: boolean; title?: string }; resolve: (value: boolean) => void }) {
  dialogResolver?.(false)
  dialog.cancelText = request.options.cancelText ?? 'Cancel'
  dialog.confirmText = request.options.confirmText ?? 'OK'
  dialog.content = request.options.content ?? ''
  dialog.showCancel = request.options.showCancel ?? true
  dialog.title = request.options.title ?? ''
  dialogResolver = request.resolve
  dialog.visible = true
}

function finishDialog(value: boolean) {
  const resolve = dialogResolver
  dialogResolver = undefined
  dialog.visible = false
  resolve?.(value)
}

function showActionSheet(request: { options: { itemColor?: string; itemList: string[] }; resolve: (value: number | undefined) => void }) {
  actionSheetResolver?.(undefined)
  actionSheet.actions = request.options.itemList.map((name) => ({ color: request.options.itemColor, name }))
  actionSheetResolver = request.resolve
  actionSheet.visible = true
}

function finishActionSheet(value?: number) {
  const resolve = actionSheetResolver
  actionSheetResolver = undefined
  actionSheet.visible = false
  resolve?.(value)
}

function handleActionSelect(_action: unknown, index: number) {
  finishActionSheet(index)
}

onMounted(() => {
  unregister = registerOverlayHost()
  haloOverlayBus.on('toast', showToast)
  haloOverlayBus.on('notify', showNotify)
  haloOverlayBus.on('dialog', showDialog)
  haloOverlayBus.on('action-sheet', showActionSheet)
})

onBeforeUnmount(() => {
  unregister?.()
  haloOverlayBus.off('toast', showToast)
  haloOverlayBus.off('notify', showNotify)
  haloOverlayBus.off('dialog', showDialog)
  haloOverlayBus.off('action-sheet', showActionSheet)
  finishDialog(false)
  finishActionSheet()
})
</script>

<style lang="scss">
@use "./style.scss";
</style>
