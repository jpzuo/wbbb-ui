# 设计 Token 与状态规范

Wbbb UI 的视觉决策均由可替换 Token 驱动。组件与 Playground 不应直接写入散落的色值。

## 语义色

| 类型 | 使用场景 | 典型组件 |
| --- | --- | --- |
| primary | 主操作、选中态、链接 | Button、Tabs、Progress |
| success | 完成、成功反馈 | Tag、Notify、Steps |
| warning | 风险提示、需要注意的操作 | NoticeBar、Form 提示 |
| danger | 失败、删除、校验错误 | Input、Upload、Dialog |
| info | 中性说明与辅助反馈 | Text、Timeline、Badge |
| neutral | 容器、分割线、低强调信息 | Card、Cell、Skeleton |

每种语义色同时包含实体色、前景色、浅底、边框、hover 与按下层级；亮色和深色主题均有显式映射。

## 控件状态

- 可操作控件至少区分默认、焦点、按压、选中和禁用。
- 输入类控件额外提供已填写、只读、校验错误和边界值。
- 加载、禁用与只读状态不会触发点击或按压反馈。
- H5 遵循 `prefers-reduced-motion`，减少循环、缩放和大范围位移动效。

## Token 用法

```scss
@use 'wbbb-ui/theme' with (
  $wbbb-color-primary: #0f7c66
);
```

主题通过既有的 `setTheme()` API 切换；不需要为单个组件维护另一套主题逻辑。

> 需要检查全部语义色与状态组合时，请在 Playground 的“设计色板与状态规范”页面验收。
