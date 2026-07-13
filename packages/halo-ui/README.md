# Halo UI

Halo UI is a uni-app Vue 3 component library. The package root is also compatible with a `uni_modules/halo-ui` layout because every component lives under `components/halo-*`.

The npm package publishes ESM entry modules and TypeScript declarations under `dist/`, while retaining Vue SFC, SCSS, and static component sources for the uni-app/Vite pipeline. Install it in a uni-app Vue 3 project; direct Node.js rendering imports are not supported because components require a Vue SFC compiler.

## Full Import

```ts
import HaloUI from 'halo-ui'
import 'halo-ui/styles'

app.use(HaloUI)
```

## Single Component Import

```ts
import { HaloButton } from 'halo-ui/components/button'
import 'halo-ui/styles/button'
```

Root exports do not import the full stylesheet. Styles are explicit so bundlers and mini-program builds do not pull the whole UI library by accident.

The npm package exposes wildcard subpaths: `halo-ui/components/button` resolves to the matching ESM and declaration entry under `dist/components/halo-button/`; `halo-ui/styles/button` resolves to `components/halo-button/style.scss`.

The release gate packs the package into an isolated consumer project and verifies full installation, on-demand component imports, service imports, explicit styles, type declarations, and an H5 build.

## Service Import

```ts
import { showToast } from 'halo-ui/services/toast'

showToast('Saved')
```
