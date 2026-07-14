# Icons

Wbbb UI ships a local subset of 64 Lucide core icons. It does not load a full icon library at runtime and remains suitable for Mini Program package budgets.

```vue
<wbbb-icon name="search" :size="32" />
<wbbb-icon src="/static/brand-mark.png" :size="32" />
<wbbb-icon font-family="business-icons" code="e600" />
```

Use `registerWbbbIconFont()` to register long-lived business Iconfont sets. Source precedence is `src` → `fontFamily + code` → `fontSet + name` → core `name`.
