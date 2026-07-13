# Halo UI API

> This file is generated from component props and SFC contracts. Run `npm run docs:api` after a public API change.

All components support `customClass` and `customStyle` through `HaloCommonProps` unless noted otherwise.

## Button

主要操作、禁用与加载反馈

- Category: basic
- Import: `halo-ui/components/button`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| block | `boolean` | No | `false` |
| disabled | `boolean` | No | `false` |
| formType | `'submit' \| 'reset'` | No | `undefined` |
| icon | `string` | No | `''` |
| loading | `boolean` | No | `false` |
| loadingText | `string` | No | `''` |
| openType | `string` | No | `''` |
| plain | `boolean` | No | `false` |
| round | `boolean` | No | `false` |
| size | `HaloSize` | No | `'medium'` |
| type | `HaloType` | No | `'default'` |

### Events

- `click`

### Slots

- `default`

## Icon

受控图标与自定义资源

- Category: basic
- Import: `halo-ui/components/icon`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| code | `string` | No | `''` |
| color | `string` | No | `''` |
| fontFamily | `string` | No | `''` |
| fontSet | `string` | No | `''` |
| name | `string` | No | `''` |
| size | `HaloNumeric` | No | `32` |
| src | `string` | No | `''` |

### Events

- None

### Slots

- None

## Text

语义化文字与省略处理

- Category: basic
- Import: `halo-ui/components/text`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| color | `string` | No | `''` |
| ellipsis | `boolean` | No | `false` |
| size | `HaloNumeric` | No | `''` |
| type | `'default' \| 'secondary' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | No | `'default'` |

### Events

- None

### Slots

- `default`

## Image

图片加载与失败占位

- Category: basic
- Import: `halo-ui/components/image`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| errorText | `string` | No | `'图片加载失败'` |
| height | `HaloNumeric` | No | `''` |
| lazyLoad | `boolean` | No | `true` |
| mode | `string` | No | `'aspectFill'` |
| radius | `HaloNumeric` | No | `0` |
| showError | `boolean` | No | `true` |
| showLoading | `boolean` | No | `true` |
| src | `string` | No | `''` |
| loading | `boolean` | No | `false` |
| loadingText | `string` | No | `'加载中'` |
| width | `HaloNumeric` | No | `'100%'` |

### Events

- `error`
- `load`

### Slots

- `error`

## Badge

数字角标与状态点

- Category: basic
- Import: `halo-ui/components/badge`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| dot | `boolean` | No | `false` |
| max | `number` | No | `99` |
| showZero | `boolean` | No | `false` |
| type | `HaloType` | No | `'danger'` |
| value | `number \| string` | No | `''` |

### Events

- None

### Slots

- `default`

## Tag

轻量状态标签

- Category: basic
- Import: `halo-ui/components/tag`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| clickable | `boolean` | No | `false` |
| closable | `boolean` | No | `false` |
| plain | `boolean` | No | `false` |
| round | `boolean` | No | `false` |
| size | `HaloSize` | No | `'medium'` |
| type | `HaloType` | No | `'default'` |

### Events

- `click`
- `close`

### Slots

- `default`

## Avatar

头像与默认占位

- Category: basic
- Import: `halo-ui/components/avatar`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| alt | `string` | No | `''` |
| round | `boolean` | No | `true` |
| size | `HaloNumeric` | No | `80` |
| src | `string` | No | `''` |

### Events

- `error`

### Slots

- `default`

## Divider

内容分隔与文字说明

- Category: basic
- Import: `halo-ui/components/divider`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| dashed | `boolean` | No | `false` |
| direction | `HaloDirection` | No | `'horizontal'` |
| textPosition | `'left' \| 'center' \| 'right'` | No | `'center'` |

### Events

- None

### Slots

- `default`

## Loading

加载中的过程状态

- Category: basic
- Import: `halo-ui/components/loading`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| color | `string` | No | `''` |
| size | `HaloNumeric` | No | `32` |
| text | `string` | No | `''` |
| vertical | `boolean` | No | `false` |

### Events

- None

### Slots

- None

## Cell

信息行与分组容器

- Category: layout
- Import: `halo-ui/components/cell`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| border | `boolean` | No | `true` |
| clickable | `boolean` | No | `false` |
| icon | `string` | No | `''` |
| label | `string` | No | `''` |
| required | `boolean` | No | `false` |
| title | `string` | No | `''` |
| value | `string` | No | `''` |

### Events

- `click`

### Slots

- `title`
- `default`

## Grid

网格布局与子项

- Category: layout
- Import: `halo-ui/components/grid`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| bordered | `boolean` | No | `false` |
| columns | `number` | No | `4` |
| gap | `number` | No | `16` |

### Events

- None

### Slots

- `default`

## List

可选择的业务列表

- Category: layout
- Import: `halo-ui/components/list`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| border | `boolean` | No | `true` |
| items | `HaloListItem[]` | No | `() => []` |

### Events

- `select`

### Slots

- `default`

## Card

内容卡片与层级容器

- Category: layout
- Import: `halo-ui/components/card`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| bordered | `boolean` | No | `true` |
| extra | `string` | No | `''` |
| shadow | `boolean` | No | `false` |
| title | `string` | No | `''` |

### Events

- None

### Slots

- `header`
- `default`
- `footer`

## Sticky

吸顶内容区

- Category: layout
- Import: `halo-ui/components/sticky`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| offsetTop | `HaloNumeric` | No | `0` |
| zIndex | `number` | No | `700` |

### Events

- None

### Slots

- `default`

## SafeArea

设备安全区适配

- Category: layout
- Import: `halo-ui/components/safe-area`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| bottom | `boolean` | No | `true` |
| top | `boolean` | No | `false` |

### Events

- None

### Slots

- `default`

## Navbar

页面导航栏

- Category: layout
- Import: `halo-ui/components/navbar`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| border | `boolean` | No | `true` |
| fixed | `boolean` | No | `false` |
| leftArrow | `boolean` | No | `false` |
| leftText | `string` | No | `''` |
| placeholder | `boolean` | No | `false` |
| rightText | `string` | No | `''` |
| safeAreaTop | `boolean` | No | `true` |
| title | `string` | No | `''` |

### Events

- `clickLeft`
- `clickRight`

### Slots

- `left`
- `title`
- `right`

## Tabbar

底部应用导航

- Category: layout
- Import: `halo-ui/components/tabbar`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| activeColor | `string` | No | `'var(--halo-color-primary)'` |
| fixed | `boolean` | No | `true` |
| inactiveColor | `string` | No | `'var(--halo-color-text-secondary)'` |
| items | `HaloTabbarItem[]` | No | `() => []` |
| modelValue | `string \| number` | No | `''` |
| safeAreaInsetBottom | `boolean` | No | `true` |
| zIndex | `number` | No | `800` |

### Events

- `update:modelValue`
- `change`

### Slots

- `default`

## Tabs

内容标签切换

- Category: layout
- Import: `halo-ui/components/tabs`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| activeColor | `string` | No | `''` |
| items | `HaloTabItem[]` | No | `() => []` |
| modelValue | `string \| number` | No | `''` |
| scrollable | `boolean` | No | `false` |

### Events

- `update:modelValue`
- `change`

### Slots

- `default`

## Input

单行文本输入

- Category: form
- Import: `halo-ui/components/input`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| clearable | `boolean` | No | `false` |
| disabled | `boolean` | No | `false` |
| error | `boolean` | No | `false` |
| maxlength | `number` | No | `140` |
| modelValue | `string \| number` | No | `''` |
| placeholder | `string` | No | `''` |
| readonly | `boolean` | No | `false` |
| type | `'text' \| 'number' \| 'idcard' \| 'digit' \| 'safe-password' \| 'nickname'` | No | `'text'` |

### Events

- `update:modelValue`
- `blur`
- `change`
- `clear`
- `confirm`
- `focus`

### Slots

- None

## Textarea

多行文本与字数控制

- Category: form
- Import: `halo-ui/components/textarea`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| autoHeight | `boolean` | No | `false` |
| disabled | `boolean` | No | `false` |
| error | `boolean` | No | `false` |
| maxlength | `number` | No | `200` |
| modelValue | `string` | No | `''` |
| placeholder | `string` | No | `''` |
| readonly | `boolean` | No | `false` |
| showCount | `boolean` | No | `false` |

### Events

- `update:modelValue`
- `blur`
- `change`
- `focus`

### Slots

- None

## Checkbox

多项复选

- Category: form
- Import: `halo-ui/components/checkbox`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| disabled | `boolean` | No | `false` |
| modelValue | `Array<string \| number>` | No | `() => []` |
| options | `HaloCheckboxOption[]` | No | `() => []` |

### Events

- `update:modelValue`
- `change`

### Slots

- None

## Radio

单项选择

- Category: form
- Import: `halo-ui/components/radio`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| disabled | `boolean` | No | `false` |
| modelValue | `string \| number` | No | `''` |
| options | `HaloRadioOption[]` | No | `() => []` |

### Events

- `update:modelValue`
- `change`

### Slots

- None

## Switch

布尔开关

- Category: form
- Import: `halo-ui/components/switch`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| activeColor | `string` | No | `''` |
| disabled | `boolean` | No | `false` |
| modelValue | `boolean` | No | `false` |

### Events

- `update:modelValue`
- `change`

### Slots

- None

## Picker

基础选项选择器

- Category: form
- Import: `halo-ui/components/picker`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| disabled | `boolean` | No | `false` |
| modelValue | `string \| number` | No | `''` |
| options | `HaloPickerOption[]` | No | `() => []` |
| placeholder | `string` | No | `'Please select'` |

### Events

- `update:modelValue`
- `change`

### Slots

- None

## DatePicker

日期值选择

- Category: form
- Import: `halo-ui/components/date-picker`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| disabled | `boolean` | No | `false` |
| end | `string` | No | `''` |
| fields | `'day' \| 'month' \| 'year'` | No | `'day'` |
| locale | `'en' \| 'zh-cn'` | No | `'zh-cn'` |
| modelValue | `string` | No | `''` |
| placeholder | `string` | No | `'Select date'` |
| start | `string` | No | `''` |

### Events

- `update:modelValue`
- `change`

### Slots

- None

## Stepper

精确数字步进

- Category: form
- Import: `halo-ui/components/stepper`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| disabled | `boolean` | No | `false` |
| max | `number` | No | `Number.MAX_SAFE_INTEGER` |
| min | `number` | No | `0` |
| modelValue | `number` | No | `0` |
| step | `number` | No | `1` |

### Events

- `update:modelValue`
- `change`

### Slots

- None

## Slider

范围值选择

- Category: form
- Import: `halo-ui/components/slider`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| activeColor | `string` | No | `''` |
| disabled | `boolean` | No | `false` |
| max | `number` | No | `100` |
| min | `number` | No | `0` |
| modelValue | `number` | No | `0` |
| showValue | `boolean` | No | `false` |
| step | `number` | No | `1` |

### Events

- `update:modelValue`
- `change`
- `changing`

### Slots

- None

## Upload

本地选择、上传钩子和失败反馈

- Category: form
- Import: `halo-ui/components/upload`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| beforeRead | `(files: HaloUploadFile[]) => boolean \| Promise<boolean>` | No | `—` |
| count | `number` | No | `9` |
| disabled | `boolean` | No | `false` |
| modelValue | `HaloUploadFile[]` | No | `() => []` |
| text | `string` | No | `'Upload'` |
| uploader | `(file: HaloUploadFile, options?: { signal?: AbortSignal }) => HaloUploadFile \| Promise<HaloUploadFile>` | No | `—` |

### Events

- `update:modelValue`
- `afterRead`
- `change`
- `error`
- `remove`

### Slots

- None

## Form

表单规则与校验

- Category: form
- Import: `halo-ui/components/form`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| disabled | `boolean` | No | `false` |
| labelWidth | `HaloNumeric` | No | `160` |
| model | `Record<string, unknown>` | No | `() => ({})` |
| rules | `Record<string, HaloFormRule \| HaloFormRule[]>` | No | `() => ({})` |

### Events

- None

### Slots

- `default`

## Field

字段标签和错误提示

- Category: form
- Import: `halo-ui/components/field`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| label | `string` | No | `''` |
| labelWidth | `HaloNumeric` | No | `undefined` |
| prop | `string` | No | `''` |
| required | `boolean` | No | `false` |
| rules | `HaloFormRule \| HaloFormRule[]` | No | `undefined` |
| value | `unknown` | No | `undefined` |

### Events

- None

### Slots

- `default`

## Toast

轻量短消息

- Category: feedback
- Import: `halo-ui/components/toast`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| duration | `number` | No | `1800` |
| icon | `'success' \| 'error' \| 'loading' \| 'none'` | No | `'none'` |
| message | `string` | No | `''` |
| modelValue | `boolean` | No | `false` |
| zIndex | `number` | No | `1100` |

### Events

- `update:modelValue`
- `close`

### Slots

- `default`

## Dialog

确认和取消对话框

- Category: feedback
- Import: `halo-ui/components/dialog`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| cancelText | `string` | No | `'Cancel'` |
| confirmText | `string` | No | `'OK'` |
| content | `string` | No | `''` |
| modelValue | `boolean` | No | `false` |
| showCancel | `boolean` | No | `true` |
| title | `string` | No | `''` |

### Events

- `update:modelValue`
- `cancel`
- `close`
- `confirm`

### Slots

- `default`

## Popup

位置弹出层

- Category: feedback
- Import: `halo-ui/components/popup`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| closeOnClickOverlay | `boolean` | No | `true` |
| modelValue | `boolean` | No | `false` |
| placement | `HaloPlacement` | No | `'center'` |
| round | `boolean` | No | `false` |
| zIndex | `number` | No | `900` |

### Events

- `update:modelValue`
- `close`
- `open`

### Slots

- `default`

## ActionSheet

操作项面板

- Category: feedback
- Import: `halo-ui/components/action-sheet`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| actions | `HaloActionSheetAction[]` | No | `() => []` |
| cancelText | `string` | No | `'Cancel'` |
| modelValue | `boolean` | No | `false` |
| title | `string` | No | `''` |

### Events

- `update:modelValue`
- `cancel`
- `close`
- `select`

### Slots

- None

## Notify

页面顶部通知

- Category: feedback
- Import: `halo-ui/components/notify`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| duration | `number` | No | `2200` |
| message | `string` | No | `''` |
| modelValue | `boolean` | No | `false` |
| type | `Exclude<HaloType, 'default'>` | No | `'info'` |
| zIndex | `number` | No | `1000` |

### Events

- `update:modelValue`
- `close`

### Slots

- `default`

## OverlayHost

服务弹层的统一宿主

- Category: feedback
- Import: `halo-ui/components/overlay-host`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| — | — | — | — |

### Events

- None

### Slots

- None

## Skeleton

内容加载骨架

- Category: feedback
- Import: `halo-ui/components/skeleton`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| animated | `boolean` | No | `true` |
| avatar | `boolean` | No | `false` |
| loading | `boolean` | No | `true` |
| rows | `number` | No | `3` |
| title | `boolean` | No | `true` |

### Events

- None

### Slots

- `default`

## Empty

空内容状态

- Category: feedback
- Import: `halo-ui/components/empty`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| description | `string` | No | `'No data'` |
| image | `string` | No | `''` |
| imageSize | `HaloNumeric` | No | `160` |

### Events

- None

### Slots

- `default`

## NoticeBar

重要通知横幅

- Category: display
- Import: `halo-ui/components/notice-bar`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| closeable | `boolean` | No | `false` |
| color | `string` | No | `''` |
| text | `string` | No | `''` |
| type | `HaloStatus \| 'primary'` | No | `'warning'` |

### Events

- `close`

### Slots

- `default`

## Collapse

可展开的信息块

- Category: display
- Import: `halo-ui/components/collapse`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| accordion | `boolean` | No | `false` |
| animated | `boolean` | No | `true` |
| items | `HaloCollapseItem[]` | No | `() => []` |
| modelValue | `Array<string \| number> \| string \| number` | No | `() => []` |

### Events

- `update:modelValue`
- `change`

### Slots

- `default`

## Swiper

轮播内容

- Category: display
- Import: `halo-ui/components/swiper`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| autoplay | `boolean` | No | `false` |
| circular | `boolean` | No | `true` |
| indicatorDots | `boolean` | No | `true` |
| interval | `number` | No | `3000` |
| items | `HaloSwiperItem[]` | No | `() => []` |

### Events

- `change`

### Slots

- `default`

## Steps

步骤进度

- Category: display
- Import: `halo-ui/components/steps`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| active | `number` | No | `—` |
| direction | `HaloDirection` | No | `—` |
| items | `HaloStepItem[]` | No | `—` |

### Events

- None

### Slots

- None

## Timeline

时间线事件

- Category: display
- Import: `halo-ui/components/timeline`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| items | `HaloTimelineItem[]` | No | `() => []` |

### Events

- None

### Slots

- None

## CountDown

倒计时状态

- Category: display
- Import: `halo-ui/components/count-down`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| autoStart | `boolean` | No | `true` |
| format | `string` | No | `'HH:mm:ss'` |
| time | `number` | No | `0` |

### Events

- `change`
- `finish`

### Slots

- None

## Rate

评分选择

- Category: display
- Import: `halo-ui/components/rate`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| color | `string` | No | `''` |
| count | `number` | No | `5` |
| disabled | `boolean` | No | `false` |
| modelValue | `number` | No | `0` |

### Events

- `update:modelValue`
- `change`

### Slots

- None

## Calendar

月历日期选择

- Category: display
- Import: `halo-ui/components/calendar`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| disabledDates | `string[]` | No | `() => []` |
| firstDayOfWeek | `0 \| 1` | No | `0` |
| locale | `'en' \| 'zh-cn'` | No | `'zh-cn'` |
| maxDate | `string` | No | `''` |
| minDate | `string` | No | `''` |
| modelValue | `string` | No | `''` |
| month | `string` | No | `''` |

### Events

- `update:modelValue`
- `change`
- `monthChange`

### Slots

- None

## Progress

进度反馈

- Category: display
- Import: `halo-ui/components/progress`

### Props

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| color | `string` | No | `''` |
| percentage | `number` | No | `0` |
| showText | `boolean` | No | `true` |
| status | `HaloStatus` | No | `'default'` |
| strokeWidth | `number` | No | `12` |

### Events

- None

### Slots

- None

