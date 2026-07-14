# Migration and Compatibility

Wbbb UI is a breaking brand migration. It does not retain runtime aliases for the previous package name, component tags, exports, or tokens. Update application code in one pass.

| Previous name | New name |
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

Existing date-component values `locale="zh-cn"` and `locale="en"` remain valid. Explicit `placeholder`, `description`, `text`, `cancelText`, and `confirmText` values always take precedence over locale messages.

No old import alias is provided. Update style overrides, test selectors, documentation links, and plugin marketplace configuration together with source imports.
