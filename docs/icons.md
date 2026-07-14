# 图标

Wbbb UI 发布 64 个 Lucide 核心图标的本地字体子集，运行时不依赖完整图标库，适合小程序主包限制。

## 内置图标

```vue
<wbbb-icon name="search" :size="32" color="var(--wbbb-color-primary)" />
```

兼容 `left`、`back`、`right`、`up`、`down`、`close`、`warning` 与 `default` 等旧名称。

## 图片与 Iconfont

```vue
<wbbb-icon src="/static/brand-mark.png" :size="40" />
<wbbb-icon font-family="business-icons" code="e600" />
<wbbb-icon font-set="business" name="dashboard" />
```

通过 `registerWbbbIconFont()` 注册长期使用的业务 Iconfont。图标来源优先级为 `src` → `fontFamily + code` → `fontSet + name` → 内置 `name`。
