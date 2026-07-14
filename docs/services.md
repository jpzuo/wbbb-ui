# 服务组件与 Overlay Host

Toast、Notify、Dialog 与 ActionSheet 可以独立调用，不依赖全量组件安装。

```ts
import { showToast } from 'halo-ui/services/toast'

showToast('保存成功')
```

## 挂载 Overlay Host

在应用根部挂载一个 Host，使服务组件使用 Halo UI 的统一遮罩、层级、队列和动效。

```vue
<template>
  <App />
  <halo-overlay-host />
</template>
```

没有挂载 Host 时，服务 API 会回退到对应的 uni-app 原生能力，以保持跨端可用。

## 服务列表

| 服务 | 导入路径 | 用途 |
| --- | --- | --- |
| Toast | `halo-ui/services/toast` | 短消息与操作结果 |
| Notify | `halo-ui/services/notify` | 页面顶部通知 |
| Dialog | `halo-ui/services/dialog` | 确认、取消与结果回传 |
| ActionSheet | `halo-ui/services/action-sheet` | 多项操作选择 |

服务 API 的队列、Esc/遮罩关闭策略与无 Host 降级，请在对应组件页及 Playground 中验证。
