# On-demand Imports

On-demand imports do not include all component styles. Every component provides independent component and style entries.

```vue
<script setup lang="ts">
import { WbbbInput } from 'wbbb-ui/components/input'
import 'wbbb-ui/styles/input'
</script>

<template><WbbbInput placeholder="Enter text" /></template>
```

Service components are also independently available through `wbbb-ui/services/toast`, `dialog`, `notify`, and `action-sheet`.
