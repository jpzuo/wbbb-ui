# Wbbb UI API Reference

> This file is generated from component props and SFC contracts. Run `npm run docs:api` after a public API change.

All components support `customClass` and `customStyle` through `WbbbCommonProps` unless noted otherwise.

## Button 按钮

Primary actions with disabled and loading feedback.

- Category: Basic
- Import: `wbbb-ui/components/button`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| block | Makes the button occupy the full available width. | `boolean` | No | `false` |
| disabled | Prevents user interaction with the component. | `boolean` | No | `false` |
| formType | Sets the native form action performed by the button. | `'submit' \| 'reset'` | No | `undefined` |
| icon | Sets the icon name or icon content. | `string` | No | `''` |
| loading | Shows a loading state and blocks repeated interaction when applicable. | `boolean` | No | `false` |
| loadingText | Sets the text displayed while loading. | `string` | No | `''` |
| openType | Sets the uni-app open capability used by the button. | `string` | No | `''` |
| plain | Uses the outlined or low-emphasis visual style. | `boolean` | No | `false` |
| round | Uses fully rounded corners or a pill shape. | `boolean` | No | `false` |
| size | Sets the component size. | `WbbbSize` | No | `'medium'` |
| type | Sets the semantic type or variant of the component. | `WbbbType` | No | `'default'` |

### Events

- `click`

### Slots

- `default`

## Icon 图标

Controlled icons and custom sources.

- Category: Basic
- Import: `wbbb-ui/components/icon`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| code | Provides the glyph code when rendering a font icon directly. | `string` | No | `''` |
| color | Sets the primary display color. | `string` | No | `''` |
| fontFamily | Sets the font family used for a direct font icon. | `string` | No | `''` |
| fontSet | Selects a registered Iconfont set. | `string` | No | `''` |
| name | Provides the item name or identifier. | `string` | No | `''` |
| size | Sets the component size. | `WbbbNumeric` | No | `32` |
| src | Sets the source URL or local path of the resource. | `string` | No | `''` |

### Events

- None

### Slots

- None

## Text 文本

Semantic text and ellipsis handling.

- Category: Basic
- Import: `wbbb-ui/components/text`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| color | Sets the primary display color. | `string` | No | `''` |
| ellipsis | Truncates overflowing text with an ellipsis. | `boolean` | No | `false` |
| size | Sets the component size. | `WbbbNumeric` | No | `''` |
| type | Sets the semantic type or variant of the component. | `'default' \| 'secondary' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | No | `'default'` |

### Events

- None

### Slots

- `default`

## Image 图片

Image loading and error placeholders.

- Category: Basic
- Import: `wbbb-ui/components/image`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| errorText | Sets the default message shown after a loading failure. | `string` | No | `'图片加载失败'` |
| height | Sets the component height. | `WbbbNumeric` | No | `''` |
| lazyLoad | Defers image loading until it is needed. | `boolean` | No | `true` |
| mode | Sets the display or image fitting mode. | `string` | No | `'aspectFill'` |
| radius | Sets the corner radius of the component. | `WbbbNumeric` | No | `0` |
| showError | Controls whether the built-in error placeholder is shown. | `boolean` | No | `true` |
| showLoading | Controls whether the built-in loading placeholder is shown. | `boolean` | No | `true` |
| src | Sets the source URL or local path of the resource. | `string` | No | `''` |
| loading | Shows a loading state and blocks repeated interaction when applicable. | `boolean` | No | `false` |
| loadingText | Sets the text displayed while loading. | `string` | No | `'加载中'` |
| width | Sets the component width. | `WbbbNumeric` | No | `'100%'` |

### Events

- `error`
- `load`

### Slots

- `error`

## Badge 徽标

Numeric badges and status dots.

- Category: Basic
- Import: `wbbb-ui/components/badge`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| dot | Displays the badge as a small status dot. | `boolean` | No | `false` |
| max | Sets the maximum allowed numeric value. | `number` | No | `99` |
| showZero | Keeps a zero value visible in a badge. | `boolean` | No | `false` |
| type | Sets the semantic type or variant of the component. | `WbbbType` | No | `'danger'` |
| value | Provides the displayed value or item value. | `number \| string` | No | `''` |

### Events

- None

### Slots

- `default`

## Tag 标签

Compact status tags.

- Category: Basic
- Import: `wbbb-ui/components/tag`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| clickable | Marks the component as interactive and emits click events. | `boolean` | No | `false` |
| closable | Shows a close control and allows the item to be dismissed. | `boolean` | No | `false` |
| plain | Uses the outlined or low-emphasis visual style. | `boolean` | No | `false` |
| round | Uses fully rounded corners or a pill shape. | `boolean` | No | `false` |
| size | Sets the component size. | `WbbbSize` | No | `'medium'` |
| type | Sets the semantic type or variant of the component. | `WbbbType` | No | `'default'` |

### Events

- `click`
- `close`

### Slots

- `default`

## Avatar 头像

Avatars and fallback placeholders.

- Category: Basic
- Import: `wbbb-ui/components/avatar`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| alt | Provides alternative text for an image resource. | `string` | No | `''` |
| round | Uses fully rounded corners or a pill shape. | `boolean` | No | `true` |
| size | Sets the component size. | `WbbbNumeric` | No | `80` |
| src | Sets the source URL or local path of the resource. | `string` | No | `''` |

### Events

- `error`

### Slots

- `default`

## Divider 分割线

Content separators and labels.

- Category: Basic
- Import: `wbbb-ui/components/divider`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| dashed | Uses a dashed divider line instead of a solid one. | `boolean` | No | `false` |
| direction | Sets the layout or divider direction. | `WbbbDirection` | No | `'horizontal'` |
| textPosition | Sets the position of text relative to the divider. | `'left' \| 'center' \| 'right'` | No | `'center'` |

### Events

- None

### Slots

- `default`

## Loading 加载

Progress feedback while loading.

- Category: Basic
- Import: `wbbb-ui/components/loading`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| color | Sets the primary display color. | `string` | No | `''` |
| size | Sets the component size. | `WbbbNumeric` | No | `32` |
| text | Provides the primary display text. | `string` | No | `''` |
| vertical | Uses a vertical layout direction. | `boolean` | No | `false` |

### Events

- None

### Slots

- None

## Cell 单元格

Information rows and grouped containers.

- Category: Layout
- Import: `wbbb-ui/components/cell`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| border | Controls whether a separator or border is displayed. | `boolean` | No | `true` |
| clickable | Marks the component as interactive and emits click events. | `boolean` | No | `false` |
| icon | Sets the icon name or icon content. | `string` | No | `''` |
| label | Sets the visible field or item label. | `string` | No | `''` |
| required | Marks the field as required for validation or display. | `boolean` | No | `false` |
| title | Sets the component title text. | `string` | No | `''` |
| value | Provides the displayed value or item value. | `string` | No | `''` |

### Events

- `click`

### Slots

- `title`
- `default`

## Grid 宫格

Grid layouts and grid items.

- Category: Layout
- Import: `wbbb-ui/components/grid`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| bordered | Controls whether the container renders an outer border. | `boolean` | No | `false` |
| columns | Sets the number of columns in the grid. | `number` | No | `4` |
| gap | Sets the spacing between repeated items. | `number` | No | `16` |

### Events

- None

### Slots

- `default`

## List 列表

Selectable business lists.

- Category: Layout
- Import: `wbbb-ui/components/list`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| border | Controls whether a separator or border is displayed. | `boolean` | No | `true` |
| items | Provides the data items rendered by the component. | `WbbbListItem[]` | No | `() => []` |

### Events

- `select`

### Slots

- `default`

## Card 卡片

Content cards and layered containers.

- Category: Layout
- Import: `wbbb-ui/components/card`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| bordered | Controls whether the container renders an outer border. | `boolean` | No | `true` |
| extra | Provides supplementary content in the component header. | `string` | No | `''` |
| shadow | Adds an elevated shadow to the component. | `boolean` | No | `false` |
| title | Sets the component title text. | `string` | No | `''` |

### Events

- None

### Slots

- `header`
- `default`
- `footer`

## Sticky 吸顶

Sticky content areas.

- Category: Layout
- Import: `wbbb-ui/components/sticky`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| offsetTop | Sets the distance from the top before sticky positioning starts. | `WbbbNumeric` | No | `0` |
| zIndex | Sets the stacking order of the component. | `number` | No | `700` |

### Events

- None

### Slots

- `default`

## SafeArea 安全区

Device safe-area adaptation.

- Category: Layout
- Import: `wbbb-ui/components/safe-area`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| bottom | Enables the bottom safe-area inset. | `boolean` | No | `true` |
| top | Enables the top safe-area inset. | `boolean` | No | `false` |

### Events

- None

### Slots

- `default`

## Navbar 导航栏

Page navigation bars.

- Category: Layout
- Import: `wbbb-ui/components/navbar`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| border | Controls whether a separator or border is displayed. | `boolean` | No | `true` |
| fixed | Fixes the component to its viewport position. | `boolean` | No | `false` |
| leftArrow | Shows a back arrow on the left side. | `boolean` | No | `false` |
| leftText | Sets the text shown on the left side. | `string` | No | `''` |
| placeholder | Sets placeholder text when no value is present. | `boolean` | No | `false` |
| rightText | Sets the text shown on the right side. | `string` | No | `''` |
| safeAreaTop | Adds padding for the device top safe area. | `boolean` | No | `true` |
| title | Sets the component title text. | `string` | No | `''` |

### Events

- `clickLeft`
- `clickRight`

### Slots

- `left`
- `title`
- `right`

## Tabbar 底部导航栏

Bottom application navigation.

- Category: Layout
- Import: `wbbb-ui/components/tabbar`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| activeColor | Sets the color used by the active state. | `string` | No | `'var(--wbbb-color-primary)'` |
| fixed | Fixes the component to its viewport position. | `boolean` | No | `true` |
| inactiveColor | Sets the color used by the inactive state. | `string` | No | `'var(--wbbb-color-text-secondary)'` |
| items | Provides the data items rendered by the component. | `WbbbTabbarItem[]` | No | `() => []` |
| modelValue | Provides the current value used by v-model. | `string \| number` | No | `''` |
| safeAreaInsetBottom | Adds padding for the device bottom safe area. | `boolean` | No | `true` |
| zIndex | Sets the stacking order of the component. | `number` | No | `800` |

### Events

- `update:modelValue`
- `change`

### Slots

- `default`

## Tabs 标签页

Content tab switching.

- Category: Layout
- Import: `wbbb-ui/components/tabs`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| activeColor | Sets the color used by the active state. | `string` | No | `''` |
| items | Provides the data items rendered by the component. | `WbbbTabItem[]` | No | `() => []` |
| modelValue | Provides the current value used by v-model. | `string \| number` | No | `''` |
| scrollable | Allows tab items to scroll horizontally when needed. | `boolean` | No | `false` |

### Events

- `update:modelValue`
- `change`

### Slots

- `default`

## Input 输入框

Single-line text input.

- Category: Form
- Import: `wbbb-ui/components/input`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| clearable | Shows a control for clearing the current input value. | `boolean` | No | `false` |
| disabled | Prevents user interaction with the component. | `boolean` | No | `false` |
| error | Shows the component in its error visual state. | `boolean` | No | `false` |
| maxlength | Limits the number of characters that can be entered. | `number` | No | `140` |
| modelValue | Provides the current value used by v-model. | `string \| number` | No | `''` |
| placeholder | Sets placeholder text when no value is present. | `string` | No | `''` |
| readonly | Prevents editing while keeping the value readable. | `boolean` | No | `false` |
| type | Sets the semantic type or variant of the component. | `'text' \| 'number' \| 'idcard' \| 'digit' \| 'safe-password' \| 'nickname'` | No | `'text'` |

### Events

- `update:modelValue`
- `blur`
- `change`
- `clear`
- `confirm`
- `focus`

### Slots

- None

## Textarea 文本域

Multi-line text with character counting.

- Category: Form
- Import: `wbbb-ui/components/textarea`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| autoHeight | Makes the textarea grow with its content. | `boolean` | No | `false` |
| disabled | Prevents user interaction with the component. | `boolean` | No | `false` |
| error | Shows the component in its error visual state. | `boolean` | No | `false` |
| maxlength | Limits the number of characters that can be entered. | `number` | No | `200` |
| modelValue | Provides the current value used by v-model. | `string` | No | `''` |
| placeholder | Sets placeholder text when no value is present. | `string` | No | `''` |
| readonly | Prevents editing while keeping the value readable. | `boolean` | No | `false` |
| showCount | Shows the current character count. | `boolean` | No | `false` |

### Events

- `update:modelValue`
- `blur`
- `change`
- `focus`

### Slots

- None

## Checkbox 复选框

Multiple option selection.

- Category: Form
- Import: `wbbb-ui/components/checkbox`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| disabled | Prevents user interaction with the component. | `boolean` | No | `false` |
| modelValue | Provides the current value used by v-model. | `Array<string \| number>` | No | `() => []` |
| options | Provides selectable option data. | `WbbbCheckboxOption[]` | No | `() => []` |

### Events

- `update:modelValue`
- `change`

### Slots

- None

## Radio 单选框

Single option selection.

- Category: Form
- Import: `wbbb-ui/components/radio`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| disabled | Prevents user interaction with the component. | `boolean` | No | `false` |
| modelValue | Provides the current value used by v-model. | `string \| number` | No | `''` |
| options | Provides selectable option data. | `WbbbRadioOption[]` | No | `() => []` |

### Events

- `update:modelValue`
- `change`

### Slots

- None

## Switch 开关

Boolean switches.

- Category: Form
- Import: `wbbb-ui/components/switch`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| activeColor | Sets the color used by the active state. | `string` | No | `''` |
| disabled | Prevents user interaction with the component. | `boolean` | No | `false` |
| modelValue | Provides the current value used by v-model. | `boolean` | No | `false` |

### Events

- `update:modelValue`
- `change`

### Slots

- None

## Picker 选择器

Basic option picker.

- Category: Form
- Import: `wbbb-ui/components/picker`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| disabled | Prevents user interaction with the component. | `boolean` | No | `false` |
| locale | Overrides the locale used for built-in display copy. | `WbbbLocaleInput` | No | `—` |
| modelValue | Provides the current value used by v-model. | `string \| number` | No | `''` |
| options | Provides selectable option data. | `WbbbPickerOption[]` | No | `() => []` |
| placeholder | Sets placeholder text when no value is present. | `string` | No | `由 locale 决定` |

### Events

- `update:modelValue`
- `change`

### Slots

- None

## DatePicker 日期选择器

Date value selection.

- Category: Form
- Import: `wbbb-ui/components/date-picker`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| disabled | Prevents user interaction with the component. | `boolean` | No | `false` |
| end | Sets the latest selectable or valid value. | `string` | No | `''` |
| fields | Registers the form fields managed by the component. | `'day' \| 'month' \| 'year'` | No | `'day'` |
| locale | Overrides the locale used for built-in display copy. | `WbbbLocaleInput` | No | `—` |
| modelValue | Provides the current value used by v-model. | `string` | No | `''` |
| placeholder | Sets placeholder text when no value is present. | `string` | No | `由 locale 决定` |
| start | Sets the earliest selectable or valid value. | `string` | No | `''` |

### Events

- `update:modelValue`
- `change`

### Slots

- None

## Stepper 步进器

Precise numeric stepping.

- Category: Form
- Import: `wbbb-ui/components/stepper`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| disabled | Prevents user interaction with the component. | `boolean` | No | `false` |
| max | Sets the maximum allowed numeric value. | `number` | No | `Number.MAX_SAFE_INTEGER` |
| min | Sets the minimum allowed numeric value. | `number` | No | `0` |
| modelValue | Provides the current value used by v-model. | `number` | No | `0` |
| step | Sets the increment used when changing a numeric value. | `number` | No | `1` |

### Events

- `update:modelValue`
- `change`

### Slots

- None

## Slider 滑块

Range value selection.

- Category: Form
- Import: `wbbb-ui/components/slider`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| activeColor | Sets the color used by the active state. | `string` | No | `''` |
| disabled | Prevents user interaction with the component. | `boolean` | No | `false` |
| max | Sets the maximum allowed numeric value. | `number` | No | `100` |
| min | Sets the minimum allowed numeric value. | `number` | No | `0` |
| modelValue | Provides the current value used by v-model. | `number` | No | `0` |
| showValue | Controls whether the current value is displayed. | `boolean` | No | `false` |
| step | Sets the increment used when changing a numeric value. | `number` | No | `1` |

### Events

- `update:modelValue`
- `change`
- `changing`

### Slots

- None

## Upload 上传

Local selection, upload hooks, and failure feedback.

- Category: Form
- Import: `wbbb-ui/components/upload`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| beforeRead | Runs before file selection is accepted and can block the read. | `(files: WbbbUploadFile[]) => boolean \| Promise<boolean>` | No | `—` |
| count | Sets the number of rendered placeholder rows or items. | `number` | No | `9` |
| disabled | Prevents user interaction with the component. | `boolean` | No | `false` |
| locale | Overrides the locale used for built-in display copy. | `WbbbLocaleInput` | No | `—` |
| modelValue | Provides the current value used by v-model. | `WbbbUploadFile[]` | No | `() => []` |
| text | Provides the primary display text. | `string` | No | `由 locale 决定` |
| uploader | Provides the business-layer upload implementation. | `(file: WbbbUploadFile, options?: { signal?: AbortSignal }) => WbbbUploadFile \| Promise<WbbbUploadFile>` | No | `—` |

### Events

- `update:modelValue`
- `afterRead`
- `change`
- `error`
- `remove`

### Slots

- None

## Form 表单

Form rules and validation.

- Category: Form
- Import: `wbbb-ui/components/form`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| disabled | Prevents user interaction with the component. | `boolean` | No | `false` |
| labelWidth | Sets the width reserved for field labels. | `WbbbNumeric` | No | `160` |
| model | Provides the data model used by the component. | `Record<string, unknown>` | No | `() => ({})` |
| rules | Provides validation rules for the form or field. | `Record<string, WbbbFormRule \| WbbbFormRule[]>` | No | `() => ({})` |

### Events

- None

### Slots

- `default`

## Field 表单项

Field labels and error messages.

- Category: Form
- Import: `wbbb-ui/components/field`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| label | Sets the visible field or item label. | `string` | No | `''` |
| labelWidth | Sets the width reserved for field labels. | `WbbbNumeric` | No | `undefined` |
| prop | Associates the field with a key in the form model. | `string` | No | `''` |
| required | Marks the field as required for validation or display. | `boolean` | No | `false` |
| rules | Provides validation rules for the form or field. | `WbbbFormRule \| WbbbFormRule[]` | No | `undefined` |
| value | Provides the displayed value or item value. | `unknown` | No | `undefined` |

### Events

- None

### Slots

- `default`

## Toast 轻提示

Lightweight short messages.

- Category: Feedback
- Import: `wbbb-ui/components/toast`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| duration | Sets the display or animation duration in milliseconds. | `number` | No | `1800` |
| icon | Sets the icon name or icon content. | `'success' \| 'error' \| 'loading' \| 'none'` | No | `'none'` |
| message | Provides the notification or feedback message. | `string` | No | `''` |
| modelValue | Provides the current value used by v-model. | `boolean` | No | `false` |
| zIndex | Sets the stacking order of the component. | `number` | No | `1100` |

### Events

- `update:modelValue`
- `close`

### Slots

- `default`

## Dialog 对话框

Confirmation and cancellation dialogs.

- Category: Feedback
- Import: `wbbb-ui/components/dialog`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| cancelText | Overrides the cancel action label. | `string` | No | `由 locale 决定` |
| confirmText | Overrides the confirm action label. | `string` | No | `由 locale 决定` |
| content | Provides the main text content of the component. | `string` | No | `''` |
| locale | Overrides the locale used for built-in display copy. | `WbbbLocaleInput` | No | `—` |
| modelValue | Provides the current value used by v-model. | `boolean` | No | `false` |
| showCancel | Controls whether the cancel action is shown. | `boolean` | No | `true` |
| title | Sets the component title text. | `string` | No | `''` |

### Events

- `update:modelValue`
- `cancel`
- `close`
- `confirm`

### Slots

- `default`

## Popup 弹出层

Positioned popup layers.

- Category: Feedback
- Import: `wbbb-ui/components/popup`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| closeOnClickOverlay | Closes the overlay when its backdrop is pressed. | `boolean` | No | `true` |
| modelValue | Provides the current value used by v-model. | `boolean` | No | `false` |
| placement | Sets where the overlay or pop-up is positioned. | `WbbbPlacement` | No | `'center'` |
| round | Uses fully rounded corners or a pill shape. | `boolean` | No | `false` |
| zIndex | Sets the stacking order of the component. | `number` | No | `900` |

### Events

- `update:modelValue`
- `close`
- `open`

### Slots

- `default`

## ActionSheet 动作面板

Action option sheets.

- Category: Feedback
- Import: `wbbb-ui/components/action-sheet`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| actions | Defines the available action items. | `WbbbActionSheetAction[]` | No | `() => []` |
| cancelText | Overrides the cancel action label. | `string` | No | `由 locale 决定` |
| locale | Overrides the locale used for built-in display copy. | `WbbbLocaleInput` | No | `—` |
| modelValue | Provides the current value used by v-model. | `boolean` | No | `false` |
| title | Sets the component title text. | `string` | No | `''` |

### Events

- `update:modelValue`
- `cancel`
- `close`
- `select`

### Slots

- None

## Notify 消息通知

Page-top notifications.

- Category: Feedback
- Import: `wbbb-ui/components/notify`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| duration | Sets the display or animation duration in milliseconds. | `number` | No | `2200` |
| message | Provides the notification or feedback message. | `string` | No | `''` |
| modelValue | Provides the current value used by v-model. | `boolean` | No | `false` |
| type | Sets the semantic type or variant of the component. | `Exclude<WbbbType, 'default'>` | No | `'info'` |
| zIndex | Sets the stacking order of the component. | `number` | No | `1000` |

### Events

- `update:modelValue`
- `close`

### Slots

- `default`

## OverlayHost 遮罩宿主

Shared host for service overlays.

- Category: Feedback
- Import: `wbbb-ui/components/overlay-host`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| None | None | None | None | None |

### Events

- None

### Slots

- None

## Skeleton 骨架屏

Content loading skeletons.

- Category: Feedback
- Import: `wbbb-ui/components/skeleton`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| animated | Enables the component transition animation. | `boolean` | No | `true` |
| avatar | Sets the avatar image or avatar content source. | `boolean` | No | `false` |
| loading | Shows a loading state and blocks repeated interaction when applicable. | `boolean` | No | `true` |
| rows | Sets the number of visible text rows. | `number` | No | `3` |
| title | Sets the component title text. | `boolean` | No | `true` |

### Events

- None

### Slots

- `default`

## Empty 空状态

Empty content states.

- Category: Feedback
- Import: `wbbb-ui/components/empty`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| description | Provides supporting descriptive text. | `string` | No | `由 locale 决定` |
| image | Sets the image resource used by the item. | `string` | No | `''` |
| imageSize | Sets the rendered size of the image. | `WbbbNumeric` | No | `160` |
| locale | Overrides the locale used for built-in display copy. | `WbbbLocaleInput` | No | `—` |

### Events

- None

### Slots

- `default`

## NoticeBar 通知栏

Important notification banners.

- Category: Display
- Import: `wbbb-ui/components/notice-bar`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| closeable | Allows the overlay or notification to be closed by the user. | `boolean` | No | `false` |
| color | Sets the primary display color. | `string` | No | `''` |
| text | Provides the primary display text. | `string` | No | `''` |
| type | Sets the semantic type or variant of the component. | `WbbbStatus \| 'primary'` | No | `'warning'` |

### Events

- `close`

### Slots

- `default`

## Collapse 折叠面板

Expandable information panels.

- Category: Display
- Import: `wbbb-ui/components/collapse`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| accordion | Allows only one collapse item to stay expanded at a time. | `boolean` | No | `false` |
| animated | Enables the component transition animation. | `boolean` | No | `true` |
| items | Provides the data items rendered by the component. | `WbbbCollapseItem[]` | No | `() => []` |
| modelValue | Provides the current value used by v-model. | `Array<string \| number> \| string \| number` | No | `() => []` |

### Events

- `update:modelValue`
- `change`

### Slots

- `default`

## Swiper 轮播

Carousel content.

- Category: Display
- Import: `wbbb-ui/components/swiper`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| autoplay | Automatically advances to the next slide. | `boolean` | No | `false` |
| circular | Allows the carousel to loop from the last item to the first. | `boolean` | No | `true` |
| indicatorDots | Shows pagination dots for carousel items. | `boolean` | No | `true` |
| interval | Sets the delay between automatic carousel transitions in milliseconds. | `number` | No | `3000` |
| items | Provides the data items rendered by the component. | `WbbbSwiperItem[]` | No | `() => []` |

### Events

- `change`

### Slots

- `default`

## Steps 步骤条

Step progress.

- Category: Display
- Import: `wbbb-ui/components/steps`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| active | Identifies the current active item or step. | `number` | No | `—` |
| direction | Sets the layout or divider direction. | `WbbbDirection` | No | `—` |
| items | Provides the data items rendered by the component. | `WbbbStepItem[]` | No | `—` |

### Events

- None

### Slots

- None

## Timeline 时间线

Timeline events.

- Category: Display
- Import: `wbbb-ui/components/timeline`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| items | Provides the data items rendered by the component. | `WbbbTimelineItem[]` | No | `() => []` |

### Events

- None

### Slots

- None

## CountDown 倒计时

Countdown states.

- Category: Display
- Import: `wbbb-ui/components/count-down`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| autoStart | Starts timing automatically after mount. | `boolean` | No | `true` |
| format | Sets the output display format. | `string` | No | `'HH:mm:ss'` |
| time | Sets the remaining time or target time value. | `number` | No | `0` |

### Events

- `change`
- `finish`

### Slots

- None

## Rate 评分

Rating selection.

- Category: Display
- Import: `wbbb-ui/components/rate`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| color | Sets the primary display color. | `string` | No | `''` |
| count | Sets the number of rendered placeholder rows or items. | `number` | No | `5` |
| disabled | Prevents user interaction with the component. | `boolean` | No | `false` |
| modelValue | Provides the current value used by v-model. | `number` | No | `0` |

### Events

- `update:modelValue`
- `change`

### Slots

- None

## Calendar 日历

Monthly calendar date selection.

- Category: Display
- Import: `wbbb-ui/components/calendar`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| disabledDates | Lists dates that cannot be selected. | `string[]` | No | `() => []` |
| firstDayOfWeek | Sets which weekday starts the calendar row. | `0 \| 1` | No | `0` |
| locale | Overrides the locale used for built-in display copy. | `WbbbLocaleInput` | No | `—` |
| maxDate | Sets the latest date that can be selected. | `string` | No | `''` |
| minDate | Sets the earliest date that can be selected. | `string` | No | `''` |
| modelValue | Provides the current value used by v-model. | `string` | No | `''` |
| month | Sets the month displayed by the calendar. | `string` | No | `''` |

### Events

- `update:modelValue`
- `change`
- `monthChange`

### Slots

- None

## Progress 进度条

Progress feedback.

- Category: Display
- Import: `wbbb-ui/components/progress`

### Props

| Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| color | Sets the primary display color. | `string` | No | `''` |
| percentage | Sets the progress percentage to display. | `number` | No | `0` |
| showText | Controls whether accompanying text is displayed. | `boolean` | No | `true` |
| status | Sets the semantic status used for display. | `WbbbStatus` | No | `'default'` |
| strokeWidth | Sets the thickness of the progress stroke. | `number` | No | `12` |

### Events

- None

### Slots

- None

