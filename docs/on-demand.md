# 按需导入

按需导入不会自动引入全量组件样式。每个组件都有独立的组件入口和样式入口。

```vue
<script setup lang="ts">
import { WbbbInput } from 'wbbb-ui/components/input'
import 'wbbb-ui/styles/input'
</script>

<template><WbbbInput placeholder="请输入内容" /></template>
```

服务组件也可独立导入：`wbbb-ui/services/toast`、`wbbb-ui/services/dialog`、`wbbb-ui/services/notify` 与 `wbbb-ui/services/action-sheet`。
