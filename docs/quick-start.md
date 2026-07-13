# Quick Start

Halo UI targets uni-app Vue 3 + TypeScript projects.

The npm package distributes uni-app source files. It must be consumed by a uni-app/Vite compilation pipeline and is not a direct Node.js runtime dependency.

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

To use the library-managed Toast, Notify, Dialog, and ActionSheet service visuals, place one host near the application root:

```vue
<template>
  <App />
  <halo-overlay-host />
</template>
```

Services fall back to the corresponding uni-app native API when no host is mounted.

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

## uni_modules Usage

Copy or publish `packages/halo-ui` as `uni_modules/halo-ui`. The package uses `components/halo-*` directories, so uni-app easycom can discover components without importing the whole library.

## Verification

```bash
npm run check:exports
npm run typecheck
npm run test
npm run lint:styles
npm run build
```

Run H5/App/mini-program builds from `examples/playground` when dependencies are installed.
