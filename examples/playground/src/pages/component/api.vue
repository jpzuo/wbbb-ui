<template>
  <view class="api-page">
    <wbbb-navbar :title="`${component.name} API`" left-arrow left-text="详情" @click-left="goBack" />
    <view class="api-page__intro"><wbbb-tag type="primary" round>{{ categoryMeta[component.category].name }}</wbbb-tag><text>{{ component.description }}</text></view>
    <view class="api-page__section"><text class="api-page__title">状态与交互</text><wbbb-card><view class="api-page__states"><wbbb-tag v-for="state in component.requiredStates" :key="state" type="info" plain>{{ state }}</wbbb-tag></view><text class="api-page__hint">现有组件名、导入路径、v-model 与服务 API 保持兼容；新增状态能力均为可选 props。</text></wbbb-card></view>
    <view class="api-page__section"><text class="api-page__title">按需导入</text><view class="api-page__code"><text>import { Wbbb{{ component.name }} } from '{{ importPath(component) }}'</text><text>import 'wbbb-ui/styles/{{ component.slug }}'</text></view><wbbb-button block plain type="primary" @click="copyImport">复制导入路径</wbbb-button></view>
    <view class="api-page__section"><text class="api-page__title">跨端提示</text><wbbb-card><text class="api-page__hint">H5、App 与小程序均使用此组件入口。完整属性与事件请以仓库内 docs/components.md 为准。</text></wbbb-card></view>
    <view class="api-page__section"><wbbb-card><api-contract :api="api" /></wbbb-card></view>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import ApiContract from '../../components/api-contract.vue'
import { componentApiMetadata } from '../../shared/api-metadata'
import { categoryMeta, componentBySlug, importPath, playgroundComponents } from '../../shared/component-catalog'
import { applyThemeFromRoute } from '../../shared/playground-theme'
import { showToast } from '../../uni_modules/wbbb-ui/src/services'

const slug = ref('button')
const component = computed(() => componentBySlug[slug.value] ?? playgroundComponents[0])
const api = computed(() => componentApiMetadata[component.value.slug])

onLoad((query) => {
  applyThemeFromRoute(query.theme)
  if (typeof query.name === 'string' && componentBySlug[query.name]) slug.value = query.name
})
function goBack() { uni.navigateBack() }
function copyImport() {
  uni.setClipboardData({ data: importPath(component.value) })
  showToast('导入路径已复制')
}
</script>

<style lang="scss">
.api-page { background: var(--wbbb-color-bg); min-height: 100vh; padding-bottom: 52rpx; }.api-page__intro { background: var(--wbbb-color-surface); color: var(--wbbb-color-text-secondary); display: flex; flex-direction: column; font-size: 25rpx; gap: 16rpx; line-height: 1.6; padding: 36rpx 32rpx; }.api-page__section { padding: 32rpx 24rpx 0; }.api-page__title { color: var(--wbbb-color-text); display: block; font-size: 30rpx; font-weight: 700; margin-bottom: 16rpx; }.api-page__section .wbbb-card { padding: 28rpx; }.api-page__states { display: flex; flex-wrap: wrap; gap: 12rpx; }.api-page__hint { color: var(--wbbb-color-text-secondary); display: block; font-size: 23rpx; line-height: 1.65; margin-top: 20rpx; }.api-page__code { background: var(--wbbb-color-code-surface); border-radius: var(--wbbb-radius-md); display: flex; flex-direction: column; gap: 12rpx; margin-bottom: 18rpx; padding: 22rpx; }.api-page__code text { color: var(--wbbb-color-code-text); font-family: monospace; font-size: 22rpx; white-space: nowrap; }
</style>
