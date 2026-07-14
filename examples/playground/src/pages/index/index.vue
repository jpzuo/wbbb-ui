<template>
  <view class="home" :data-theme="theme">
    <wbbb-overlay-host />
    <view class="hero">
      <view class="hero__nav">
        <view class="brand"><image class="brand__mark" src="/static/wbbb-ui-logo.png" mode="aspectFit" /><text>Wbbb UI</text></view>
        <wbbb-button plain round size="small" @click="toggleTheme">{{ theme === 'light' ? '深色' : '浅色' }}</wbbb-button>
      </view>
      <view class="hero__copy">
        <text class="eyebrow">UNI-APP DESIGN SYSTEM</text>
        <text class="hero__title">清晰、克制，</text>
        <text class="hero__title">为真实产品而生。</text>
        <text class="hero__description">47 个跨端组件，覆盖 H5、App 与小程序的日常产品交互。</text>
      </view>
      <view class="hero__actions">
        <wbbb-button data-testid="open-catalog" round type="primary" icon="check" @click="openCatalog">浏览 47 个组件</wbbb-button>
        <wbbb-button round plain icon="info" @click="showNotify({ message: '已接入完整组件目录', type: 'success' })">查看更新</wbbb-button>
      </view>
      <view class="hero__metrics"><view v-for="item in metrics" :key="item.label"><text class="metric__value">{{ item.value }}</text><text class="metric__label">{{ item.label }}</text></view></view>
    </view>

    <view class="content">
      <view class="section-heading"><text>完整组件目录</text><text>按类别浏览、操作并验证全部 47 个组件。</text></view>
      <view class="design-entry" @tap="openTokens"><view><text>设计色板与状态规范</text><text>查看成功、警告、危险、信息、禁用与加载状态。</text></view><wbbb-icon name="right" :size="28" /></view>
      <view class="category-grid">
        <view v-for="category in categories" :key="category.key" class="category-card" @tap="openCatalog(category.key)">
          <text class="category-card__count">{{ category.count }}</text>
          <text class="category-card__name">{{ category.name }}</text>
          <text class="category-card__description">{{ category.description }}</text>
        </view>
      </view>

      <view class="section-heading"><text>精选样板</text><text>这是视觉与交互基线，不代替完整目录。</text></view>
      <wbbb-card shadow class="sample-card">
        <view class="sample-card__header"><text>项目进展</text><wbbb-tag type="success" round>正常</wbbb-tag></view>
        <wbbb-progress :percentage="72.4" status="success" />
        <view class="sample-card__footer"><wbbb-stepper v-model="estimate" :step="0.25" :max="8" /><wbbb-button size="small" type="primary" @click="showToast('已保存')">保存</wbbb-button></view>
      </wbbb-card>
      <wbbb-card class="sample-card" bordered>
        <wbbb-tabs v-model="activeTab" :items="tabs"><WbbbTabPanel name="overview"><wbbb-list :items="tasks" /></WbbbTabPanel><WbbbTabPanel name="activity"><wbbb-timeline :items="timelineItems" /></WbbbTabPanel></wbbb-tabs>
      </wbbb-card>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { showNotify, showToast } from '../../uni_modules/wbbb-ui/src/services'
import { WbbbTabPanel } from '../../uni_modules/wbbb-ui/components/wbbb-tabs'
import { categoryMeta, componentsByCategory } from '../../shared/component-catalog'

const theme = ref<'light' | 'dark'>('light')
const estimate = ref(2.5)
const activeTab = ref('overview')
const metrics = [{ label: '可用组件', value: '47' }, { label: '支持终端', value: '4+' }, { label: '设计主题', value: '02' }]
const tabs = [{ name: 'overview', title: '概览' }, { name: 'activity', title: '动态', badge: 2 }]
const tasks = [{ label: '今日 · 10:30', title: '设计系统评审', value: '进行中' }, { label: '明日 · 14:00', title: '跨端体验走查', value: '待开始' }]
const timelineItems = [{ content: '完整组件目录已建立', time: '刚刚', title: '验收基线更新' }, { content: 'H5 与小程序构建完成', time: '今天', title: '跨端能力升级' }]
const categories = computed(() => (Object.keys(categoryMeta) as Array<keyof typeof categoryMeta>).map((key) => ({ count: componentsByCategory(key).length, description: categoryMeta[key].description, key, name: categoryMeta[key].name })))

function toggleTheme() { theme.value = theme.value === 'light' ? 'dark' : 'light' }
function openCatalog(category?: string) { uni.navigateTo({ url: `/pages/catalog/index${category ? `?category=${category}` : ''}` }) }
function openTokens() { uni.navigateTo({ url: '/pages/tokens/index' }) }
</script>

<style lang="scss">
.home { background: var(--wbbb-color-bg); min-height: 100vh; padding-bottom: 48rpx; }
.hero { background: var(--wbbb-color-brand-surface); box-sizing: border-box; color: var(--wbbb-color-inverse-foreground); padding: 44rpx 32rpx 54rpx; }
.hero__nav, .brand, .hero__actions, .hero__metrics, .sample-card__header, .sample-card__footer { align-items: center; display: flex; }
.hero__nav, .sample-card__header, .sample-card__footer { justify-content: space-between; }
.brand { font-size: 28rpx; font-weight: 700; gap: 14rpx; }
.brand__mark { background: var(--wbbb-color-surface); border: 1rpx solid var(--wbbb-color-brand-border); border-radius: 12rpx; height: 54rpx; object-fit: contain; width: 54rpx; }.hero__copy { margin-top: 78rpx; }.eyebrow { font-size: 20rpx; font-weight: 700; letter-spacing: 2rpx; opacity: .72; }.hero__title { display: block; font-size: 52rpx; font-weight: 700; line-height: 1.25; }.hero__description { display: block; font-size: 26rpx; line-height: 1.65; margin-top: 22rpx; opacity: .8; }.hero__actions { gap: 16rpx; margin-top: 38rpx; }.hero__actions .wbbb-button--default { border-color: var(--wbbb-color-brand-border); color: var(--wbbb-color-inverse-foreground); }.hero__metrics { border-top: 1rpx solid var(--wbbb-color-brand-separator); justify-content: space-between; margin-top: 52rpx; padding-top: 24rpx; }.metric__value, .metric__label { display: block; }.metric__value { font-size: 30rpx; font-weight: 700; }.metric__label { font-size: 20rpx; margin-top: 5rpx; opacity: .68; }
.content { padding: 0 24rpx; }.section-heading { padding: 46rpx 8rpx 20rpx; }.section-heading text { display: block; }.section-heading text:first-child { color: var(--wbbb-color-text); font-size: 36rpx; font-weight: 700; }.section-heading text:last-child { color: var(--wbbb-color-text-secondary); font-size: 24rpx; margin-top: 8rpx; }
.design-entry { align-items: center; background: var(--wbbb-color-primary-soft); border: 1rpx solid var(--wbbb-color-primary-border); border-radius: var(--wbbb-radius-lg); color: var(--wbbb-color-primary); display: flex; justify-content: space-between; padding: 24rpx; }.design-entry text { display: block; }.design-entry text:first-child { font-size: 28rpx; font-weight: 700; }.design-entry text:last-child { color: var(--wbbb-color-text-secondary); font-size: 22rpx; margin-top: 8rpx; }
.category-grid { display: grid; gap: 16rpx; grid-template-columns: repeat(2, minmax(0, 1fr)); }.category-card { background: var(--wbbb-color-surface); border-radius: var(--wbbb-radius-lg); box-shadow: var(--wbbb-shadow-sm); min-height: 176rpx; padding: 24rpx; }.category-card__count, .category-card__name, .category-card__description { display: block; }.category-card__count { color: var(--wbbb-color-primary); font-size: 38rpx; font-weight: 700; }.category-card__name { color: var(--wbbb-color-text); font-size: 28rpx; font-weight: 700; margin-top: 4rpx; }.category-card__description { color: var(--wbbb-color-text-secondary); font-size: 21rpx; line-height: 1.5; margin-top: 8rpx; }
.sample-card { margin-top: 16rpx; padding: 26rpx; }.sample-card__header { color: var(--wbbb-color-text); font-size: 28rpx; font-weight: 700; margin-bottom: 24rpx; }.sample-card__footer { margin-top: 24rpx; }
</style>
