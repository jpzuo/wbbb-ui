# 更新日志 / Changelog

## 未发布 / Unreleased

### 中文

- Radio 与 Checkbox 选择结果保留原始 number 与 string 值。
- 修复 Toast、Notify 的首次自动关闭与卸载清理，以及 Dialog、Popup 的清理问题。
- 新增源码包元数据、许可证与发布期校验。
- 新增亮暗主题 Token、产品化组件样式与 H5 视觉回归基线。
- 新增 Day.js 日期工具、async-validator 表单规则、精确小数步进与可选 WbbbOverlayHost 服务层。
- 新增 locale 核心：默认中文，支持 `zh-CN`、`en-US`、`zh-cn` 与 `en`，并通过 `wbbb-ui/locale` 导出 `setLocale()`。
- 修复 npm 安装的运行时依赖校验，并将依赖打入 uni_modules 分发包，发布为 `0.1.0-alpha.1`。

### English

- Preserved original numeric and string values in Radio and Checkbox selections.
- Fixed initial auto-close and unmount cleanup for Toast and Notify, and cleanup for Dialog and Popup.
- Added source-package metadata, license, and publish-time validation.
- Added light and dark design tokens, product-oriented component styling, and an H5 visual regression baseline.
- Added dayjs date utilities, async-validator form rules, decimal-safe step controls, and the optional WbbbOverlayHost service layer.
- Added locale core support: default Simplified Chinese, `zh-CN`, `en-US`, `zh-cn`, and `en`, with `setLocale()` exported from `wbbb-ui/locale`.
- Added runtime dependency installation coverage and bundled runtime dependencies in the uni_modules distribution for the `0.1.0-alpha.1` release.

## 0.1.0-alpha.0

### 中文

- 新增 uni-app Vue 3 组件源码布局。
- 新增独立组件入口、样式入口与服务。
- 新增基础主题 Token 与可复用表单校验工具。

### English

- Added uni-app Vue 3 component source layout.
- Added independent component entries, style entries, and services.
- Added foundational theme tokens and reusable form validation utilities.
