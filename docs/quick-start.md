# Quick Start

Halo UI targets uni-app Vue 3 + TypeScript projects.

## Install

```bash
npm install halo-ui
```

For HBuilderX or DCloud plugin usage, place the package under `uni_modules/halo-ui`. The package root already contains `components/halo-*` folders for easycom discovery.

## Full Import

```ts
import { createSSRApp } from 'vue'
import HaloUI from 'halo-ui'
import 'halo-ui/styles'

export function createApp() {
  const app = createSSRApp(App)
  app.use(HaloUI)
  return { app }
}
```

## Single Component Import

```vue
<script setup lang="ts">
import { HaloButton } from 'halo-ui/components/button'
import 'halo-ui/styles/button'
</script>

<template>
  <HaloButton type="primary">Submit</HaloButton>
</template>
```

