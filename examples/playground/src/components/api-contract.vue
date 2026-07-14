<template>
  <view class="api-contract">
    <view class="api-contract__section">
      <text class="api-contract__title">Props</text>
      <view v-for="prop in api.props" :key="prop.name" class="api-contract__row">
        <view><text class="api-contract__name">{{ prop.name }}</text><text class="api-contract__type">{{ prop.type }}</text><text class="api-contract__description">{{ prop.description }}</text></view>
        <text class="api-contract__default">{{ prop.defaultValue }}</text>
      </view>
      <text v-if="api.modelValue" class="api-contract__hint">v-model: modelValue / update:modelValue</text>
    </view>
    <view class="api-contract__section"><text class="api-contract__title">Events</text><text class="api-contract__list">{{ api.events.length ? api.events.join(' / ') : 'None' }}</text></view>
    <view class="api-contract__section"><text class="api-contract__title">Slots</text><text class="api-contract__list">{{ api.slots.length ? api.slots.join(' / ') : 'None' }}</text></view>
  </view>
</template>

<script setup lang="ts">
import type { WbbbComponentApi } from '../shared/api-metadata'

defineProps<{ api: WbbbComponentApi }>()
</script>

<style lang="scss">
.api-contract { display: flex; flex-direction: column; gap: 24rpx; }.api-contract__section { display: flex; flex-direction: column; gap: 12rpx; }.api-contract__title { color: var(--wbbb-color-text); font-size: 28rpx; font-weight: 700; }.api-contract__row { align-items: center; border-bottom: 1rpx solid var(--wbbb-color-separator); display: flex; justify-content: space-between; gap: 24rpx; padding-bottom: 12rpx; }.api-contract__row > view { min-width: 0; }.api-contract__name, .api-contract__type, .api-contract__description, .api-contract__default, .api-contract__list, .api-contract__hint { display: block; }.api-contract__name { color: var(--wbbb-color-text); font-family: monospace; font-size: 24rpx; }.api-contract__type, .api-contract__description, .api-contract__hint { color: var(--wbbb-color-text-secondary); font-size: 21rpx; margin-top: 4rpx; }.api-contract__description { line-height: 1.45; }.api-contract__default, .api-contract__list { color: var(--wbbb-color-primary); font-family: monospace; font-size: 22rpx; }
</style>
