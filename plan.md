# Halo UI：uni-app 全平台 UI 库规划

## Summary

- 目标：建设一个面向 uni-app Vue3 + TypeScript 的通用业务 UI 库，覆盖 H5、App、微信/支付宝/抖音/百度/QQ/快手等小程序。
- 项目必须支持完整引入和单组件按需引入，不能强制用户安装或打包整套 UI 库。
- 发布形态同时支持 `uni_modules` 和 npm；默认项目名 `halo-ui`，组件标签前缀 `halo-`。

## Milestones

| 阶段 | 范围 | 产出 | 验收标准 |
|------|------|------|----------|
| **v0.1-alpha** | 基础 9 + 布局 9 + Popup + Toast + Dialog | npm 可装、playground H5 可跑 | lint + typecheck + vitest 全通过；H5 playground 可正常浏览所有已实现组件 |
| **v0.1-beta** | 表单全套 + 剩余反馈 + 展示组件 | 完整文档站、微信小程序验证通过 | 文档站所有组件页面可访问；微信小程序真机 Demo 可运行 |
| **v0.1.0** | 全组件 + 真机验收 + CI/CD 发布 | 正式 npm + uni_modules 发布 | CI 全绿；npm publish 成功；uni_modules zip 可在 HBuilderX 中导入使用 |
| **v0.2.0（第二阶段）** | Search、DropdownMenu、Waterfall、VirtualList、QRCode、Signature、Cropper | npm + uni_modules 更新发布 | 新组件全部通过 H5 + 微信小程序验证 |

## Key Changes

- 技术栈：uni-app + Vue3 + TypeScript + Vite，样式使用 SCSS，避免依赖 DOM、浏览器专属 API 和不稳定小程序能力。
- 按需引入：
  - 每个组件独立目录、独立入口、独立样式、独立类型声明。
  - 用户可以只引入 `Button`、`Input`、`Popup` 等单个组件，不需要注册全局插件。
  - npm 包提供 `exports` 子路径，例如 `halo-ui/components/button`、`halo-ui/services/toast`、`halo-ui/styles/button`。
  - `exports` 通配符约定：`./components/*` 映射到 `./components/halo-*/index.ts`，其中 `*` 匹配不含 `halo-` 前缀的组件名（如 `button` → `halo-button`）。`./services/*` 和 `./styles/*` 遵循同样规则。文档和 README 必须明确示例。
  - `uni_modules` 模式为**整包引入**，通过 easycom 实现免注册按需使用（编译器 tree-shaking）；组件内部的相对路径依赖（如 `@use "../../src/styles/tokens.scss"`）决定了不支持物理拆分单个组件目录。
  - npm 模式才支持**物理按需引入**（只引入单组件入口）。
- 样式策略：
  - 主题 token 与组件样式拆分。
  - 组件样式不依赖全量样式包；只允许依赖轻量基础 token、变量和 mixin。
  - 提供完整样式入口，也提供单组件样式入口。
- 组件体系（含子组件标注）：
  - 基础：Button、Icon、Text、Image、Badge、Tag、Avatar、Divider、Loading。
  - 布局：Cell（含 CellGroup）、Grid（含 GridItem）、List、Card、Sticky、SafeArea、Navbar、Tabbar（含 TabbarItem）、Tabs（含 TabPanel）。
  - 表单：Input、Textarea、Radio（含 RadioGroup）、Checkbox（含 CheckboxGroup）、Switch、Picker、DatePicker、Stepper、Slider、Upload、Form、Field。
  - 反馈：Toast、Dialog、Popup、ActionSheet、Notify、Skeleton、Empty、Progress。
  - 展示：NoticeBar、Collapse（含 CollapseItem）、Swiper、Steps（含 StepItem）、Timeline（含 TimelineItem）、CountDown、Rate、Calendar。
  - 第二阶段：Search、DropdownMenu（含 DropdownMenuItem）、Waterfall、VirtualList、QRCode、Signature、Cropper。
  - 子组件放置规范：子组件与主组件放在同一目录下，由同一 `index.ts` 同时导出。例如：
    ```
    components/halo-checkbox/
    ├── halo-checkbox.vue
    ├── halo-checkbox-group.vue
    ├── index.ts              ← export { HaloCheckbox, HaloCheckboxGroup }
    ├── props.ts              ← 包含两者的 props 定义
    └── style.scss
    ```
- 平台策略：
  - v1 以 uni-app Vue3 为主，不做 Vue2 双栈，不把 uni-app x/uvue 作为第一版必达。
  - 所有组件必须在 H5、App Vue、微信小程序通过；其余小程序按组件风险分级验证并标注兼容矩阵。
- 过渡动画策略：
  - 所有 overlay 类组件（Popup、Dialog、ActionSheet、Notify）必须有进入/退出过渡动画。
  - 定义标准过渡名：`halo-fade`（遮罩淡入淡出）、`halo-slide-up`（底部弹出）、`halo-slide-down`（顶部弹出）、`halo-slide-left`（右侧弹出）、`halo-slide-right`（左侧弹出）、`halo-zoom`（中心缩放）。
  - 过渡时长使用 token `$halo-duration-fast` / `$halo-duration-base`，不硬编码。
- 服务类组件分层策略：
  - **轻量版（v0.1-alpha）**：直接包装 uni API（`uni.showToast`、`uni.showModal` 等），零成本，适合简单场景。
  - **自定义版（v0.1-beta）**：基于 Popup + 自绘 UI 实现 `showHaloToast`、`showHaloDialog`、`showHaloNotify`，支持完整样式定制、自定义图标、富文本内容、队列管理。
  - 两层 API 并存，用户按需选用。

## Implementation Plan

- 项目基础：
  - 初始化 monorepo：`packages/halo-ui`、`examples/playground`、`docs`。
  - 配置 TypeScript、ESLint、Stylelint、Vitest、构建脚本、发布脚本和变更日志。
  - 建立组件生成模板，一次生成组件源码、样式、类型、demo、文档和测试：
    - 生成脚本需覆盖：`index.ts`、`component.vue`、`props.ts`、`style.scss`、`__tests__/component.test.ts`、对应 playground demo 页面模板、对应 docs/ 文档模板。
    - 生成后自动追加到 `src/components.ts`、`src/styles/index.scss`。
- 模块设计：
  - 每个组件输出独立入口：组件本体、props 类型、事件类型、样式入口。
  - 根入口只做聚合导出，不产生强制全量副作用。
  - `package.json` 配置子路径导出和 tree-shaking，样式文件通过明确入口引入。
- 设计系统：
  - 定义完整 token 集（tokens.scss）：
    - 颜色：primary、success、warning、danger、info、text、text-secondary、**text-disabled**、border、bg、surface、**primary-light**（plain 态/hover 态背景）。
    - 间距：xs、sm、md、lg、**xl**。
    - 字号：xs、sm、md、lg、**xl**（标题字号）。
    - 圆角：sm、md、lg、**full**（胶囊按钮/圆形头像，值为 `9999rpx`）。
    - 阴影：**shadow-sm**、**shadow-md**、**shadow-lg**（卡片/弹层阴影）。
    - 层级：**z-index-overlay**（800）、z-index-popup（900）、**z-index-dialog**（1000）、z-index-toast（1100）。
    - 动效时长：duration-fast、duration-base。
    - 表单高度：**height-sm**、**height-md**、**height-lg**。
  - 建立完整 mixin 集（mixins.scss）：
    - 已有：`halo-font`、`halo-hairline`（需扩展支持 top/left/right）、`halo-disabled`、`halo-tap-active`、`halo-safe-bottom`。
    - 新增：**`halo-ellipsis($lines: 1)`**（单行/多行文本截断）、**`halo-skeleton-shine`**（骨架屏闪光动画）、**`halo-dark-override`**（暗色模式辅助 mixin，在 `[data-theme="dark"]` 下覆写变量）。
  - 确定组件 API 命名规范、事件规范、插槽规范和错误提示规范。
- 核心组件：
  - 优先实现基础、布局、表单、反馈四类高频组件。
  - 复合组件需同步实现子组件（如 CheckboxGroup、RadioGroup、CellGroup、GridItem、TabPanel、CollapseItem、StepItem、TimelineItem、TabbarItem）。
  - 表单组件统一接入 `halo-form`，支持校验、错误展示、异步校验和受控/非受控写法。
  - 表单校验内置规则扩展：
    - 已有：`required`、自定义 `validator`。
    - 新增：`min`（最小值/最小长度）、`max`（最大值/最大长度）、`pattern`（正则匹配）、`type`（预设格式：`email`、`phone`、`url`、`number`）。
  - Toast、Dialog、Notify 等服务类组件提供独立函数入口，不能依赖全局安装。
- 暗色模式：
  - 通过 CSS 自定义属性 + `[data-theme="dark"]` 选择器覆盖 token 变量。
  - 在 `tokens.scss` 中定义暗色变量集：
    ```scss
    page[data-theme="dark"],
    :root[data-theme="dark"] {
      --halo-color-text: #e5e7eb;
      --halo-color-text-secondary: #9ca3af;
      --halo-color-text-disabled: #6b7280;
      --halo-color-bg: #1a1a2e;
      --halo-color-surface: #25253a;
      --halo-color-border: #374151;
      // ...其余颜色 token 的暗色覆盖
    }
    ```
  - 提供 `setTheme('light' | 'dark')` 工具函数，操作根元素的 `data-theme` 属性。
  - v0.1.0 暗色模式为基础支持（颜色 token 覆盖）；v0.2.0 进一步优化各组件暗色细节。
- 无障碍 (a11y)：
  - 所有可交互元素需要 `aria-label` 或可读文本。
  - Popup/Dialog 需要焦点陷阱 (focus-trap) 和 `aria-modal`（H5 端）。
  - 表单控件需要关联 `aria-invalid` / `aria-describedby`（H5 端）。
  - 小程序端受限于平台能力，a11y 属性仅在支持的平台生效，不影响不支持的平台。
  - 在 API Conventions 文档中补充 a11y 规范章节。
- 国际化 (i18n) 预留：
  - 提供 `setLocale(messages: Partial<HaloLocaleMessages>)` 机制，允许用户覆盖内部文案。
  - 默认使用中文（`'该字段为必填项'` 等）。
  - 内置消息统一定义在 `src/shared/locale.ts`，组件内部通过 `useLocale()` 取值，不硬编码。
- 构建产物：
  - npm 发布为**源码发布**（`.ts` + `.vue` + `.scss`），用户项目通过 Vite + `@dcloudio/vite-plugin-uni` 编译。这是 uni-app 生态的标准做法，确保条件编译和平台特性正常工作。
  - 文档中明确说明用户构建工具要求：Vite 6+、`@dcloudio/vite-plugin-uni`、`sass`。
  - `uni_modules` 发布为 zip 包，包含源码 + `package.json`（含 `uni_modules` 字段），可直接在 HBuilderX 中导入。
  - `package.json` 的 `main`/`module`/`types` 指向源码入口，`sideEffects` 标记 `.scss` 文件。
- 文档与演示：
  - 每个组件文档必须同时展示完整引入和单组件引入。
  - playground 按组件分类展示，可编译到 H5、App、小程序。
  - 文档站包含快速开始、按需引入、主题定制（含暗色模式切换说明）、平台兼容矩阵、无障碍指南和迁移指南。

## CI/CD

- CI 流水线（每次 PR / push 触发）：
  1. `pnpm install`
  2. `eslint` + `stylelint` → 代码风格检查
  3. `vue-tsc --noEmit` → 类型检查
  4. `vitest run` → 单元测试
  5. `node scripts/check-exports.mjs` → 按需引入完整性校验
  6. H5 构建（`npm run build:h5`）→ 确保 H5 端编译无错
  7. 微信小程序构建（`npm run build:mp-weixin`）→ 确保小程序端编译无错
- 发布流程：
  - 使用 changeset 管理版本和变更日志。
  - `changeset version` → 更新版本号和 CHANGELOG。
  - `npm publish` → 发布到 npm registry。
  - 发布脚本同步打包 `uni_modules` zip 文件。
- PR 合入规范：
  - 必须通过 lint + typecheck + test + check:exports。
  - 新增组件必须附带至少一个基础测试文件和 playground demo 页面。

## Test Plan

- 单元测试（vitest）：
  - 工具函数：`utils.ts` 中所有导出函数。
  - 表单校验：`required`、`min`、`max`、`pattern`、`type`、自定义 `validator`、异步 `validator`、trigger 过滤。
  - props 默认值：每个组件的 `withDefaults` 是否正确。
  - 事件 payload：`click`、`change`、`close`、`update:modelValue` 等事件的参数类型和值。
  - 覆盖率目标：`src/shared/` 目录达到 90% 以上。
- 组件测试：
  - 核心组件渲染、状态切换、插槽、禁用、加载、边界输入。
  - 优先覆盖高风险组件：Button、Form/Field、Popup、Dialog、Tabs、Picker、Upload。
  - 复合组件测试：CheckboxGroup + Checkbox 联动、RadioGroup + Radio 联动、CollapseItem 展开/收起、Tabs + TabPanel 切换。
- 按需引入测试：
  - 单独引入任一组件时，不能打包未使用组件。
  - 单独引入样式时不能依赖全量样式。
  - `check-exports.mjs` 脚本在 CI 中强制执行。
- 跨端构建：至少覆盖 H5、App Vue、微信小程序、支付宝小程序、抖音小程序构建不报错。
- 真机验收：Button、Popup、Picker、Upload、Form、Toast、Tabs、Navbar 等高风险组件必须真机验证。
- 过渡动画验收：Popup、Dialog、ActionSheet、Notify 的进入/退出动画在 H5 和微信小程序上视觉正确。

## Assumptions

- 使用 Vue3 + TypeScript、`uni_modules + npm`、通用业务风格。
- 组件前缀默认 `halo-`，包名默认 `halo-ui`。
- 第一版不承诺 Vue2、uni-app x、nvue 原生组件和复杂原生插件能力。
- "全平台支持"定义为：能在 uni-app 官方主流编译目标中构建和运行；平台专有限制通过兼容矩阵明确标注。
- "单独引入"是 v1 必达能力，不作为后续优化项。
- npm 发布为源码形态，要求用户项目使用 Vite + `@dcloudio/vite-plugin-uni` + `sass` 进行编译。
- `uni_modules` 模式下为整包引入，通过 easycom 实现按需使用，不支持物理拆分单个组件目录。
- 暗色模式 v0.1.0 为基础支持（token 覆盖），v0.2.0 完善组件级暗色细节。
- 无障碍属性在 H5 端完整支持，小程序端受平台限制尽力支持。
- 国际化 v1 提供消息覆盖机制，默认中文，不内置多语言包。
