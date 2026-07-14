# API 约定

## Props

- `modelValue` 与 `update:modelValue` 组成双向绑定。
- 所有公开组件均可使用 `customClass` 与 `customStyle`。
- 需要语义色时，`type` 使用 `default`、`primary`、`success`、`warning`、`danger` 或 `info`。
- `size` 使用 `mini`、`small`、`medium` 或 `large`。
- 有默认展示文案的组件支持可选 `locale`。显式文案 Prop 优先于组件 locale、全局 locale 和默认中文。

## 事件

- 用户操作后，`change` 触发归一化后的值。
- 按钮类交互触发 `click`。
- 弹层组件在可见状态变为 false 后触发 `close`。

## 插槽

- 默认插槽承载主要内容。
- 只在稳定区域使用具名插槽，例如 `title`、`left`、`right`、`header` 或 `footer`。

## 平台规则

- 组件内部不得直接使用 DOM API。
- 平台差异必须通过 uni-app API 或条件编译封装。
- H5、App Vue 与小程序端的公开 API 保持一致。
- 仅 H5 的无障碍增强采用语义角色、键盘激活、可见焦点环和减弱动效 CSS，并必须在原生端安全降级。

## 贡献门槛

每个新组件都必须注册到 Playground 目录，导出组件和样式入口，定义 Props，提供真实 Playground 状态，更新生成的 API 文档，并在发布前提供行为测试。

## 原生服务降级

- `showToast`、`showDialog` 与 `showActionSheet` 会委托给对应的 uni-app API。
- `showNotify` 使用原生 toast 降级：`success` 映射为成功图标，`danger` 映射为错误图标，`info` 与 `warning` 不显示图标。需要页面内通知样式时使用 `WbbbNotify`。
- 在应用根部挂载一次 `WbbbOverlayHost`，Toast、Notify、Dialog 与 ActionSheet 服务就会使用 Wbbb UI 视觉层；已有服务签名不变。
