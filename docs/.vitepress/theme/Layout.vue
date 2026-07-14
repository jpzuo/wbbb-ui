<template>
  <DefaultTheme.Layout>
    <template #layout-top><LocaleMemory /></template>
  </DefaultTheme.Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import LocaleMemory from './components/LocaleMemory.vue'
</script>
