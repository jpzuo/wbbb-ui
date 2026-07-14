# Quick Start

Wbbb UI targets uni-app Vue 3 and TypeScript projects. The npm package ships uni-app source that must be compiled by a uni-app/Vite pipeline.

## Install

```bash
npm install wbbb-ui
```

For HBuilderX or DCloud plugin usage, place the package in `uni_modules/wbbb-ui`.

## Full Import

```ts
import WbbbUI from 'wbbb-ui'
import 'wbbb-ui/styles'

app.use(WbbbUI, { locale: 'en-US' })
```

## Locale

```ts
import { setLocale } from 'wbbb-ui/locale'

setLocale('zh-CN')
```

An individual component can override the global language with `locale="zh-CN"`; explicit text props always take precedence.
