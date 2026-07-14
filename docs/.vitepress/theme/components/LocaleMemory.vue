<template><span aria-hidden="true" /></template>

<script setup lang="ts">
import { onMounted } from 'vue'

const localeKey = 'wbbb-doc-locale'

function localeFromPath(path: string) {
  return path === '/en' || path.startsWith('/en/') ? 'en' : 'zh'
}

onMounted(() => {
  const current = localeFromPath(window.location.pathname)
  const remembered = window.localStorage.getItem(localeKey)

  if ((window.location.pathname === '/' || window.location.pathname === '/index.html') && remembered === 'en') {
    window.location.replace(`/en/${window.location.search}${window.location.hash}`)
    return
  }

  window.document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target.closest('a') : null
    const href = target?.getAttribute('href')
    if (!href || href.startsWith('#') || /^(https?:|mailto:)/.test(href)) return
    window.localStorage.setItem(localeKey, localeFromPath(href))
  })

  window.localStorage.setItem(localeKey, current)
})
</script>
