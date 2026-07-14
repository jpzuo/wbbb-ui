# 开发依赖风险

`npm run audit:production` 是发布门槛，不包含开发工具，且必须保持没有 high 与 critical 漏洞。

`npm run audit:development` 会报告仅来自开发依赖的问题，但不会直接阻止发布。当前问题来自锁定的 uni-app alpha 工具链，主要包括 `@dcloudio/uni-cli-shared` 以及传递依赖 `@intlify/*`、`express`、`jpeg-js`、`path-to-regexp` 与 `ws`。

这些工具只用于编译或测试，不会进入 Wbbb UI npm 包。当前 `npm audit` 提议的修复版本超出了兼容的 alpha 依赖图，禁止执行 `npm audit fix --force`。

每次升级 uni-app alpha 时都应复核报告、记录目标 DCloud 版本，并在采用前执行 H5、App Vue、微信、支付宝、抖音、消费者 smoke 与视觉测试。能够消除 high 或 critical 问题的兼容上游版本优先级高于常规依赖维护。
