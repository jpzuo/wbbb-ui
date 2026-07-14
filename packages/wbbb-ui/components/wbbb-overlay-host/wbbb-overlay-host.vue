<template>
  <view class="wbbb-overlay-host" :class="customClass" :style="customStyle">
    <wbbb-toast
      v-if="toast.visible"
      :key="toast.key"
      v-model="toast.visible"
      :duration="toast.duration"
      :icon="toast.icon"
      :message="toast.message"
    />
    <wbbb-notify
      v-if="notify.visible"
      :key="notify.key"
      v-model="notify.visible"
      :duration="notify.duration"
      :message="notify.message"
      :type="notify.type"
    />
    <wbbb-dialog
      v-model="dialog.visible"
      :cancel-text="dialogCancelText"
      :confirm-text="dialogConfirmText"
      :content="dialog.content"
      :show-cancel="dialog.showCancel"
      :title="dialog.title"
      @cancel="finishDialog(false)"
      @close="finishDialog(false)"
      @confirm="finishDialog(true)"
    />
    <wbbb-action-sheet
      v-model="actionSheet.visible"
      :actions="actionSheet.actions"
      :cancel-text="actionSheetCancelText"
      @close="finishActionSheet()"
      @select="handleActionSelect"
    />
  </view>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive } from 'vue'
import WbbbActionSheet from '../wbbb-action-sheet'
import WbbbDialog from '../wbbb-dialog'
import WbbbNotify from '../wbbb-notify'
import WbbbToast from '../wbbb-toast'
import { wbbbOverlayBus, registerOverlayHost } from '../../src/services/overlay'
import { useWbbbLocale } from '../../src/locale'
import type { WbbbOverlayHostProps } from './props'

withDefaults(defineProps<WbbbOverlayHostProps>(), {
  customClass: '',
  customStyle: ''
})

const toast = reactive({ duration: 1800, icon: 'none' as 'success' | 'error' | 'loading' | 'none', key: 0, message: '', visible: false })
const notify = reactive({ duration: 2200, key: 0, message: '', type: 'info' as 'info' | 'success' | 'warning' | 'danger', visible: false })
const dialog = reactive({ cancelText: '', confirmText: '', content: '', showCancel: true, title: '', visible: false })
const actionSheet = reactive({ actions: [] as Array<{ color?: string; disabled?: boolean; name: string; subname?: string }>, cancelText: '', visible: false })
const messages = useWbbbLocale()
const dialogCancelText = computed(() => dialog.cancelText || messages.value.dialogCancel)
const dialogConfirmText = computed(() => dialog.confirmText || messages.value.dialogConfirm)
const actionSheetCancelText = computed(() => actionSheet.cancelText || messages.value.actionSheetCancel)

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
  dialog.cancelText = request.options.cancelText ?? ''
  dialog.confirmText = request.options.confirmText ?? ''
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

function showActionSheet(request: { options: { cancelText?: string; itemColor?: string; itemList: string[] }; resolve: (value: number | undefined) => void }) {
  actionSheetResolver?.(undefined)
  actionSheet.actions = request.options.itemList.map((name) => ({ color: request.options.itemColor, name }))
  actionSheet.cancelText = request.options.cancelText ?? ''
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
  wbbbOverlayBus.on('toast', showToast)
  wbbbOverlayBus.on('notify', showNotify)
  wbbbOverlayBus.on('dialog', showDialog)
  wbbbOverlayBus.on('action-sheet', showActionSheet)
})

onBeforeUnmount(() => {
  unregister?.()
  wbbbOverlayBus.off('toast', showToast)
  wbbbOverlayBus.off('notify', showNotify)
  wbbbOverlayBus.off('dialog', showDialog)
  wbbbOverlayBus.off('action-sheet', showActionSheet)
  finishDialog(false)
  finishActionSheet()
})
</script>

<style lang="scss">
@use "./style.scss";
</style>
