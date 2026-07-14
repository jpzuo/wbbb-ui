# 快速开始

Wbbb UI 面向 uni-app Vue 3 与 TypeScript 项目。npm 包发布的是可由 uni-app/Vite 编译的源码，不作为 Node.js 运行时依赖直接执行。

## 安装

```bash
npm install wbbb-ui
```

使用 HBuilderX 或 DCloud 插件市场时，将包放到 `uni_modules/wbbb-ui`。

## 全量导入

```ts
import { createSSRApp } from 'vue'
import WbbbUI from 'wbbb-ui'
import 'wbbb-ui/styles'

export function createApp() {
  const app = createSSRApp(App)
  app.use(WbbbUI, { locale: 'zh-CN' })
  return { app }
}
```

## 国际化

```ts
import { setLocale } from 'wbbb-ui/locale'

setLocale('en-US')
```

单组件可通过 `locale="en-US"` 覆盖全局语言；显式传入的文本属性始终优先。
