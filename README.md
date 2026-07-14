# Wbbb UI

[简体中文](#简体中文) | [English](#english)

## 简体中文

Wbbb UI 是面向 uni-app 的 Vue 3 + TypeScript 跨端组件库，支持 H5、App Vue 与主流小程序。组件库提供全量导入、单组件导入、服务 API，以及中文和英文的运行时默认文案。

### 文档与目录

- `packages/wbbb-ui`：组件库源码、npm 包与 `uni_modules/wbbb-ui` 兼容包根目录。
- `examples/playground`：跨端状态与交互验收用的 uni-app Playground。
- `docs`：VitePress 正式文档站、使用指南、平台支持与 API。

文档站中文使用根路径 `/`，英文使用 `/en/`；Playground 只负责移动端真实交互预览。

```bash
npm run docs:api
npm run docs:dev
npm run docs:build
```

Cloudflare Pages 文档站构建命令为 `npm run docs:api && npm run docs:build`，输出目录为 `docs/.vitepress/dist`。Playground 单独使用 `npm run build -w wbbb-ui && npm run build:h5 -w @wbbb-ui/playground` 构建。

### 使用

全量导入：

```ts
import WbbbUI from 'wbbb-ui'
import 'wbbb-ui/styles'

app.use(WbbbUI, { locale: 'zh-CN' })
```

单组件导入：

```ts
import { WbbbButton } from 'wbbb-ui/components/button'
import 'wbbb-ui/styles/button'
```

运行时切换默认文案：

```ts
import { setLocale } from 'wbbb-ui/locale'

setLocale('en-US')
```

服务 API：

```ts
import { showToast } from 'wbbb-ui/services/toast'

showToast('保存成功')
```

### 常用脚本

```bash
npm run generate:component -- button
npm run check:exports
npm run typecheck
npm run build
```

## English

Wbbb UI is a Vue 3 + TypeScript component library for uni-app, targeting H5, App Vue, and mainstream Mini Program platforms. It supports full and on-demand imports, service APIs, and Chinese/English runtime defaults.

### Repository layout and documentation

- `packages/wbbb-ui`: library source, npm package, and `uni_modules/wbbb-ui`-compatible package root.
- `examples/playground`: uni-app Playground for cross-platform interaction and state verification.
- `docs`: VitePress developer site, guides, platform support, and API reference.

The documentation uses `/` for Simplified Chinese and `/en/` for English. Playground remains the live mobile interaction preview.

```bash
npm run docs:api
npm run docs:dev
npm run docs:build
```

For Cloudflare Pages, build with `npm run docs:api && npm run docs:build` and publish `docs/.vitepress/dist`. Build Playground independently with `npm run build -w wbbb-ui && npm run build:h5 -w @wbbb-ui/playground`.

### Usage

Full import:

```ts
import WbbbUI from 'wbbb-ui'
import 'wbbb-ui/styles'

app.use(WbbbUI, { locale: 'en-US' })
```

On-demand component import:

```ts
import { WbbbButton } from 'wbbb-ui/components/button'
import 'wbbb-ui/styles/button'
```

Switch runtime defaults:

```ts
import { setLocale } from 'wbbb-ui/locale'

setLocale('zh-CN')
```

Service API:

```ts
import { showToast } from 'wbbb-ui/services/toast'

showToast('Saved')
```
