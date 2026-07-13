<template>
  <view class="detail">
    <halo-navbar :title="component.name" left-arrow left-text="目录" @click-left="goBack" />
    <halo-overlay-host />
    <view class="detail__intro"><halo-tag type="primary" round>{{ categoryMeta[component.category].name }}</halo-tag><text class="detail__title">{{ component.name }}</text><text class="detail__description">{{ component.description }}</text></view>
    <view class="detail__section"><text class="detail__section-title">状态矩阵</text><view class="state-matrix"><view v-for="state in component.states" :key="state" class="state-matrix__item" :class="{ 'state-matrix__item--semantic': component.semantic }"><view class="state-matrix__dot" /><text>{{ state }}</text></view></view></view>
    <view class="detail__section"><text class="detail__section-title">可操作示例</text><halo-card shadow><ComponentDemo :slug="component.slug" /></halo-card></view>
    <view class="detail__section"><text class="detail__section-title">按需导入</text><view class="import-code"><text>import { Halo{{ component.name }} } from '{{ importPath(component) }}'</text><text>import 'halo-ui/styles/{{ component.slug }}'</text></view><halo-button block plain type="primary" @click="openDocs">查看 API</halo-button></view>
    <view class="detail__note"><halo-icon name="info" color="var(--halo-color-primary)" /><text>此页覆盖 {{ component.requiredStates.join('、') }}；API 页面提供 Props、事件与跨端提示。</text></view>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import ComponentDemo from '../../components/component-demo.vue'
import { categoryMeta, componentBySlug, importPath, playgroundComponents } from '../../shared/component-catalog'

const slug = ref('button')
const component = computed(() => componentBySlug[slug.value] ?? playgroundComponents[0])

onLoad((query) => { if (typeof query.name === 'string' && componentBySlug[query.name]) slug.value = query.name })
function goBack() { uni.navigateBack() }
function openDocs() {
  uni.navigateTo({ url: `/pages/component/api?name=${component.value.slug}` })
}
</script>

<style lang="scss">
.detail { background: var(--halo-color-bg); min-height: 100vh; padding-bottom: 52rpx; }.detail__intro { background: var(--halo-color-surface); padding: 38rpx 32rpx; }.detail__title, .detail__description { display: block; }.detail__title { color: var(--halo-color-text); font-size: 44rpx; font-weight: 700; margin-top: 16rpx; }.detail__description { color: var(--halo-color-text-secondary); font-size: 25rpx; line-height: 1.6; margin-top: 12rpx; }.detail__section { padding: 32rpx 24rpx 0; }.detail__section-title { color: var(--halo-color-text); display: block; font-size: 30rpx; font-weight: 700; margin-bottom: 16rpx; }.detail__section .halo-card { padding: 28rpx; }.state-matrix { background: var(--halo-color-surface); border: 1rpx solid var(--halo-color-separator); border-radius: var(--halo-radius-lg); display: flex; flex-wrap: wrap; gap: 14rpx; padding: 20rpx; }.state-matrix__item { align-items: center; background: var(--halo-color-neutral-soft); border-radius: var(--halo-radius-full); color: var(--halo-color-text-secondary); display: flex; font-size: 22rpx; gap: 8rpx; padding: 10rpx 14rpx; }.state-matrix__dot { background: var(--halo-color-neutral-solid); border-radius: 50%; height: 12rpx; width: 12rpx; }.state-matrix__item--semantic:nth-child(2) .state-matrix__dot { background: var(--halo-color-primary); }.state-matrix__item--semantic:nth-child(3) .state-matrix__dot { background: var(--halo-color-success); }.state-matrix__item--semantic:nth-child(4) .state-matrix__dot { background: var(--halo-color-warning); }.state-matrix__item--semantic:nth-child(5) .state-matrix__dot { background: var(--halo-color-danger); }.state-matrix__item--semantic:nth-child(6) .state-matrix__dot { background: var(--halo-color-info); }.import-code { background: var(--halo-color-code-surface); border-radius: var(--halo-radius-md); display: flex; flex-direction: column; gap: 12rpx; margin-bottom: 18rpx; overflow-x: scroll; padding: 22rpx; }.import-code text { color: var(--halo-color-code-text); font-family: monospace; font-size: 22rpx; white-space: nowrap; }.detail__note { align-items: flex-start; color: var(--halo-color-text-secondary); display: flex; font-size: 22rpx; gap: 12rpx; line-height: 1.6; padding: 32rpx; }
</style>
