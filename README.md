# Halo UI

Halo UI is a Vue 3 + TypeScript component library for uni-app. It is designed for H5, App, and mainstream mini-program targets, with first-class support for full imports and single-component imports.

## Packages

- `packages/halo-ui`: component library source, npm package, and uni_modules-compatible package root.
- `examples/playground`: uni-app playground for manual cross-platform verification.
- `docs`: project documentation, usage rules, compatibility matrix, and component roadmap.

## Usage

Full import:

```ts
import HaloUI from 'halo-ui'
import 'halo-ui/styles'

app.use(HaloUI)
```

Single component import:

```ts
import { HaloButton } from 'halo-ui/components/button'
import 'halo-ui/styles/button'
```

Service import:

```ts
import { showToast } from 'halo-ui/services/toast'

showToast('Saved')
```

## Scripts

```bash
npm run generate:component -- button
npm run check:exports
npm run typecheck
npm run build
```

