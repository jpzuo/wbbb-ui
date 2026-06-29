# Halo UI

Halo UI is a uni-app Vue 3 component library. The package root is also compatible with a `uni_modules/halo-ui` layout because every component lives under `components/halo-*`.

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

## Service Import

```ts
import { showToast } from 'halo-ui/services/toast'

showToast('Saved')
```

