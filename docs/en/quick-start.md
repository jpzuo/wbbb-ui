# Quick Start

Wbbb UI targets uni-app Vue 3 and TypeScript projects. The npm package ships uni-app source that must be compiled by a uni-app/Vite pipeline.

## Install

```bash
npm install wbbb-ui
```

When installed through npm, `async-validator`, `dayjs`, `decimal.js-light`, and `mitt` are installed automatically as transitive dependencies.

For HBuilderX or DCloud plugin usage, place the package in `uni_modules/wbbb-ui`. Packages produced with `npm run prepare:uni-modules` bundle these runtime dependencies, so the host project does not need to install them again.

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
