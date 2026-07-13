<template>
  <view class="catalog">
    <halo-navbar title="组件目录" left-arrow left-text="首页" @click-left="goHome" />
    <view class="catalog__hero"><text>47 个组件</text><text>按类别浏览所有可用组件与交互示例。</text></view>
    <view class="catalog__filters"><halo-tag v-for="item in filters" :key="item.key" :type="activeCategory === item.key ? 'primary' : 'default'" round @click="activeCategory = item.key">{{ item.name }} {{ item.count }}</halo-tag></view>
    <view v-for="group in visibleGroups" :key="group.key" class="catalog__group">
      <view class="catalog__group-heading"><text>{{ group.name }}</text><text>{{ group.description }}</text></view>
      <view class="catalog__list"><view v-for="component in group.components" :key="component.slug" class="catalog-item" @tap="openDetail(component.slug)"><view><text class="catalog-item__name">{{ component.name }}</text><text class="catalog-item__description">{{ component.description }}</text></view><halo-icon name="right" color="var(--halo-color-text-secondary)" /></view></view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { categoryMeta, componentsByCategory, type ComponentCategory } from '../../shared/component-catalog'

const activeCategory = ref<'all' | ComponentCategory>('all')
const filters = computed(() => [{ count: 47, key: 'all' as const, name: '全部' }, ...(Object.keys(categoryMeta) as ComponentCategory[]).map((key) => ({ count: componentsByCategory(key).length, key, name: categoryMeta[key].name }))])
const visibleGroups = computed(() => (Object.keys(categoryMeta) as ComponentCategory[]).filter((key) => activeCategory.value === 'all' || activeCategory.value === key).map((key) => ({ components: componentsByCategory(key), description: categoryMeta[key].description, key, name: categoryMeta[key].name })))

onLoad((query) => { if (typeof query.category === 'string' && query.category in categoryMeta) activeCategory.value = query.category as ComponentCategory })
function goHome() { uni.navigateBack() }
function openDetail(slug: string) { uni.navigateTo({ url: `/pages/component/detail?name=${slug}` }) }
</script>

<style lang="scss">
.catalog { background: var(--halo-color-bg); min-height: 100vh; padding-bottom: 48rpx; }.catalog__hero { background: var(--halo-color-surface); padding: 38rpx 32rpx; }.catalog__hero text { display: block; }.catalog__hero text:first-child { color: var(--halo-color-text); font-size: 40rpx; font-weight: 700; }.catalog__hero text:last-child { color: var(--halo-color-text-secondary); font-size: 24rpx; margin-top: 10rpx; }.catalog__filters { display: flex; flex-wrap: wrap; gap: 14rpx; padding: 24rpx; }.catalog__group { padding: 12rpx 24rpx 28rpx; }.catalog__group-heading { margin-bottom: 16rpx; }.catalog__group-heading text { display: block; }.catalog__group-heading text:first-child { color: var(--halo-color-text); font-size: 30rpx; font-weight: 700; }.catalog__group-heading text:last-child { color: var(--halo-color-text-secondary); font-size: 22rpx; margin-top: 6rpx; }.catalog__list { background: var(--halo-color-surface); border-radius: var(--halo-radius-lg); box-shadow: var(--halo-shadow-sm); overflow: hidden; }.catalog-item { align-items: center; border-bottom: 1rpx solid var(--halo-color-border); display: flex; gap: 20rpx; justify-content: space-between; padding: 24rpx; }.catalog-item:last-child { border-bottom: 0; }.catalog-item__name, .catalog-item__description { display: block; }.catalog-item__name { color: var(--halo-color-text); font-size: 27rpx; font-weight: 700; }.catalog-item__description { color: var(--halo-color-text-secondary); font-size: 22rpx; margin-top: 7rpx; }
</style>
