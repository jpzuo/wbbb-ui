# 主题定制

主题 Token 位于 `packages/wbbb-ui/src/styles/tokens.scss`。颜色、间距、圆角、阴影、字体与动效均通过 Token 管理。

```scss
@use 'wbbb-ui/theme' with (
  $wbbb-color-primary: #0f7c66
);
```

使用既有 `setTheme('light' | 'dark')` 切换亮暗主题。组件样式不应直接写入散落的色值。
