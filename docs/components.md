# 组件总览

Halo UI 当前提供 47 个组件，按基础、布局、表单、反馈和展示五类组织。每个组件页均包含真实移动端预览、按需导入代码、状态能力和自动生成的 API 表格。

通过左侧导航选择具体组件，或从下面的通用导入方式开始。

Full import registers every component:

```ts
import HaloUI from 'halo-ui'
import 'halo-ui/styles'

app.use(HaloUI)
```

Single component import always follows this shape:

```ts
import { HaloButton } from 'halo-ui/components/button'
import 'halo-ui/styles/button'
```

| Category | Components | Single import paths |
| --- | --- | --- |
| Basic | Button, Icon, Text, Image, Badge, Tag, Avatar, Divider, Loading | `halo-ui/components/button`, `halo-ui/components/icon`, `halo-ui/components/text`, `halo-ui/components/image`, `halo-ui/components/badge`, `halo-ui/components/tag`, `halo-ui/components/avatar`, `halo-ui/components/divider`, `halo-ui/components/loading` |
| Layout | Cell, Grid, List, Card, Sticky, SafeArea, Navbar, Tabbar, Tabs | `halo-ui/components/cell`, `halo-ui/components/grid`, `halo-ui/components/list`, `halo-ui/components/card`, `halo-ui/components/sticky`, `halo-ui/components/safe-area`, `halo-ui/components/navbar`, `halo-ui/components/tabbar`, `halo-ui/components/tabs` |
| Form | Input, Textarea, Radio, Checkbox, Switch, Picker, DatePicker, Stepper, Slider, Upload, Form, Field | `halo-ui/components/input`, `halo-ui/components/textarea`, `halo-ui/components/radio`, `halo-ui/components/checkbox`, `halo-ui/components/switch`, `halo-ui/components/picker`, `halo-ui/components/date-picker`, `halo-ui/components/stepper`, `halo-ui/components/slider`, `halo-ui/components/upload`, `halo-ui/components/form`, `halo-ui/components/field` |
| Feedback | Toast, Dialog, Popup, ActionSheet, Notify, Skeleton, Empty, Progress | `halo-ui/components/toast`, `halo-ui/components/dialog`, `halo-ui/components/popup`, `halo-ui/components/action-sheet`, `halo-ui/components/notify`, `halo-ui/components/skeleton`, `halo-ui/components/empty`, `halo-ui/components/progress` |
| Display | NoticeBar, Collapse, Swiper, Steps, Timeline, CountDown, Rate, Calendar | `halo-ui/components/notice-bar`, `halo-ui/components/collapse`, `halo-ui/components/swiper`, `halo-ui/components/steps`, `halo-ui/components/timeline`, `halo-ui/components/count-down`, `halo-ui/components/rate`, `halo-ui/components/calendar` |

See the [Icon Guide](icons.md) for core Lucide names, image sources, direct iconfont code points, and registered iconfont sets.

The style path mirrors the component path:

```ts
import 'halo-ui/styles/card'
import 'halo-ui/styles/action-sheet'
```

Service APIs are independent of global installation:

```ts
import { showToast } from 'halo-ui/services/toast'
import { showDialog } from 'halo-ui/services/dialog'
```

See [the generated API reference](./api.md) for component props, emitted events, slots, and declared defaults.
