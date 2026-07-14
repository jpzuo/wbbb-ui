# 迁移与兼容

Wbbb UI 是一次破坏性品牌迁移，不提供旧包名、旧组件标签、旧导出或旧 Token 的运行时兼容层。升级时请在应用代码中一次性完成下列替换。

| 旧名称 | 新名称 |
| --- | --- |
| `halo-ui` | `wbbb-ui` |
| `HaloUI` | `WbbbUI` |
| `HaloButton` | `WbbbButton` |
| `<halo-button>` | `<wbbb-button>` |
| `--halo-*` | `--wbbb-*` |
| `HALO_*` | `WBBB_*` |

```ts
import WbbbUI from 'wbbb-ui'

app.use(WbbbUI, { locale: 'en-US' })
```

既有 `locale="zh-cn"` 与 `locale="en"` 的日期组件写法保持有效。显式传入的 `placeholder`、`description`、`text`、`cancelText` 与 `confirmText` 不会被 locale 覆盖。

这次迁移不会保留旧导入路径的别名。请在升级前完成全局替换，并同步更新样式覆盖、测试选择器、文档链接及插件市场配置。
