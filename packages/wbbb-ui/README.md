# Wbbb UI

[简体中文](#简体中文) | [English](#english)

## 简体中文

Wbbb UI 是 uni-app Vue 3 组件库。每个组件都位于 `components/wbbb-*`，因此包根目录同时兼容 `uni_modules/wbbb-ui` 目录结构。

npm 包在 `dist/` 发布 ESM 入口与 TypeScript 声明，同时保留 uni-app/Vite 编译所需的 Vue SFC、SCSS 与静态资源。请在 uni-app Vue 3 项目中使用；组件需要 Vue SFC 编译器，不支持直接在 Node.js 中渲染导入。

### 全量导入

```ts
import WbbbUI from 'wbbb-ui'
import 'wbbb-ui/styles'

app.use(WbbbUI, { locale: 'zh-CN' })
```

### 单组件导入

```ts
import { WbbbButton } from 'wbbb-ui/components/button'
import 'wbbb-ui/styles/button'
```

### 语言

默认语言为中文。安装器、全局 API 和相关组件支持 `zh-CN`、`en-US`，并兼容旧的 `zh-cn`、`en` 输入：

```ts
import { setLocale } from 'wbbb-ui/locale'

setLocale('en-US')
```

### 服务 API

```ts
import { showToast } from 'wbbb-ui/services/toast'

showToast('保存成功')
```

根入口不会自动引入完整样式。样式入口显式导入，避免打包器与小程序构建误引入整个组件库。`wbbb-ui/components/button` 会解析到 `dist/components/wbbb-button/` 中对应的 ESM 与声明；`wbbb-ui/styles/button` 会解析到 `components/wbbb-button/style.scss`。

发布前会将包安装到隔离的消费者项目，验证全量安装、按需组件、服务 API、显式样式、类型声明与 H5 构建。

## English

Wbbb UI is a uni-app Vue 3 component library. Every component lives under `components/wbbb-*`, so the package root is also compatible with a `uni_modules/wbbb-ui` layout.

The npm package publishes ESM entry modules and TypeScript declarations in `dist/`, while retaining Vue SFC, SCSS, and static sources required by the uni-app/Vite pipeline. Use it in a uni-app Vue 3 project; direct Node.js rendering imports are unsupported because components require a Vue SFC compiler.

### Full Import

```ts
import WbbbUI from 'wbbb-ui'
import 'wbbb-ui/styles'

app.use(WbbbUI, { locale: 'en-US' })
```

### On-demand Component Import

```ts
import { WbbbButton } from 'wbbb-ui/components/button'
import 'wbbb-ui/styles/button'
```

### Locale

The default locale is Simplified Chinese. The installer, global API, and supported components accept `zh-CN` and `en-US`, while `zh-cn` and `en` remain compatible inputs:

```ts
import { setLocale } from 'wbbb-ui/locale'

setLocale('zh-CN')
```

### Service API

```ts
import { showToast } from 'wbbb-ui/services/toast'

showToast('Saved')
```

Root exports do not import the full stylesheet. Explicit style imports prevent bundlers and Mini Program builds from including the entire UI library accidentally. `wbbb-ui/components/button` resolves to the ESM and declaration entry in `dist/components/wbbb-button/`; `wbbb-ui/styles/button` resolves to `components/wbbb-button/style.scss`.

Before publishing, the release gate installs the package in an isolated consumer project and verifies full installation, on-demand components, service APIs, explicit styles, declarations, and an H5 build.
