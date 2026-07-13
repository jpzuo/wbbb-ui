<template>
  <view class="api-page">
    <halo-navbar :title="`${component.name} API`" left-arrow left-text="详情" @click-left="goBack" />
    <view class="api-page__intro"><halo-tag type="primary" round>{{ categoryMeta[component.category].name }}</halo-tag><text>{{ component.description }}</text></view>
    <view class="api-page__section"><text class="api-page__title">状态与交互</text><halo-card><view class="api-page__states"><halo-tag v-for="state in component.requiredStates" :key="state" type="info" plain>{{ state }}</halo-tag></view><text class="api-page__hint">现有组件名、导入路径、v-model 与服务 API 保持兼容；新增状态能力均为可选 props。</text></halo-card></view>
    <view class="api-page__section"><text class="api-page__title">按需导入</text><view class="api-page__code"><text>import { Halo{{ component.name }} } from '{{ importPath(component) }}'</text><text>import 'halo-ui/styles/{{ component.slug }}'</text></view><halo-button block plain type="primary" @click="copyImport">复制导入路径</halo-button></view>
    <view class="api-page__section"><text class="api-page__title">跨端提示</text><halo-card><text class="api-page__hint">H5、App 与小程序均使用此组件入口。完整属性与事件请以仓库内 docs/components.md 为准。</text></halo-card></view>
    <view class="api-page__section"><halo-card><api-contract :api="api" /></halo-card></view>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import ApiContract from '../../components/api-contract.vue'
import { componentApiMetadata } from '../../shared/api-metadata'
import { categoryMeta, componentBySlug, importPath, playgroundComponents } from '../../shared/component-catalog'
import { showToast } from '../../uni_modules/halo-ui/src/services'

const slug = ref('button')
const component = computed(() => componentBySlug[slug.value] ?? playgroundComponents[0])
const api = computed(() => componentApiMetadata[component.value.slug])

onLoad((query) => { if (typeof query.name === 'string' && componentBySlug[query.name]) slug.value = query.name })
function goBack() { uni.navigateBack() }
function copyImport() {
  uni.setClipboardData({ data: importPath(component.value) })
  showToast('导入路径已复制')
}
</script>

<style lang="scss">
.api-page { background: var(--halo-color-bg); min-height: 100vh; padding-bottom: 52rpx; }.api-page__intro { background: var(--halo-color-surface); color: var(--halo-color-text-secondary); display: flex; flex-direction: column; font-size: 25rpx; gap: 16rpx; line-height: 1.6; padding: 36rpx 32rpx; }.api-page__section { padding: 32rpx 24rpx 0; }.api-page__title { color: var(--halo-color-text); display: block; font-size: 30rpx; font-weight: 700; margin-bottom: 16rpx; }.api-page__section .halo-card { padding: 28rpx; }.api-page__states { display: flex; flex-wrap: wrap; gap: 12rpx; }.api-page__hint { color: var(--halo-color-text-secondary); display: block; font-size: 23rpx; line-height: 1.65; margin-top: 20rpx; }.api-page__code { background: var(--halo-color-code-surface); border-radius: var(--halo-radius-md); display: flex; flex-direction: column; gap: 12rpx; margin-bottom: 18rpx; padding: 22rpx; }.api-page__code text { color: var(--halo-color-code-text); font-family: monospace; font-size: 22rpx; white-space: nowrap; }
</style>
