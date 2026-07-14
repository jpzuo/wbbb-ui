# Services and Overlay Host

Toast, Notify, Dialog, and ActionSheet can be called independently from full component installation.

```ts
import { showToast } from 'wbbb-ui/services/toast'

showToast('Saved successfully')
```

Mount one host near the application root to use the Wbbb UI visual layer:

```vue
<template>
  <App />
  <wbbb-overlay-host />
</template>
```

Without a host, service APIs fall back to the equivalent uni-app native capability.
