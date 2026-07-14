# Wbbb UI API 参考

> 此文件由组件 Props 与 SFC 契约自动生成。公开 API 变更后请执行 `npm run docs:api`。

除非另有说明，所有组件都通过 `WbbbCommonProps` 支持 `customClass` 与 `customStyle`。

## 按钮 Button

主要操作、禁用与加载反馈

- 组件分类: 基础
- 导入路径: `wbbb-ui/components/button`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| block | 是否让按钮占满可用宽度。 | `boolean` | 否 | `false` |
| disabled | 是否禁止用户与组件交互。 | `boolean` | 否 | `false` |
| formType | 设置按钮触发的原生表单动作。 | `'submit' \| 'reset'` | 否 | `undefined` |
| icon | 设置图标名称或图标内容。 | `string` | 否 | `''` |
| loading | 是否显示加载状态，并在适用时阻止重复交互。 | `boolean` | 否 | `false` |
| loadingText | 设置加载过程显示的文案。 | `string` | 否 | `''` |
| openType | 设置按钮使用的 uni-app 开放能力类型。 | `string` | 否 | `''` |
| plain | 是否使用描边或低强调视觉样式。 | `boolean` | 否 | `false` |
| round | 是否使用全圆角或胶囊形外观。 | `boolean` | 否 | `false` |
| size | 设置组件尺寸。 | `WbbbSize` | 否 | `'medium'` |
| type | 设置组件的语义类型或样式变体。 | `WbbbType` | 否 | `'default'` |

### 事件（Events）

- `click`

### 插槽（Slots）

- `default`

## 图标 Icon

受控图标与自定义资源

- 组件分类: 基础
- 导入路径: `wbbb-ui/components/icon`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| code | 直接渲染字体图标时提供字形码点。 | `string` | 否 | `''` |
| color | 设置主要显示颜色。 | `string` | 否 | `''` |
| fontFamily | 设置直接字体图标使用的字体族。 | `string` | 否 | `''` |
| fontSet | 选择已注册的 Iconfont 图标集。 | `string` | 否 | `''` |
| name | 提供项目名称或唯一标识。 | `string` | 否 | `''` |
| size | 设置组件尺寸。 | `WbbbNumeric` | 否 | `32` |
| src | 设置资源的 URL 或本地路径。 | `string` | 否 | `''` |

### 事件（Events）

- 无

### 插槽（Slots）

- 无

## 文本 Text

语义化文字与省略处理

- 组件分类: 基础
- 导入路径: `wbbb-ui/components/text`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| color | 设置主要显示颜色。 | `string` | 否 | `''` |
| ellipsis | 文本溢出时是否以省略号截断。 | `boolean` | 否 | `false` |
| size | 设置组件尺寸。 | `WbbbNumeric` | 否 | `''` |
| type | 设置组件的语义类型或样式变体。 | `'default' \| 'secondary' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | 否 | `'default'` |

### 事件（Events）

- 无

### 插槽（Slots）

- `default`

## 图片 Image

图片加载与失败占位

- 组件分类: 基础
- 导入路径: `wbbb-ui/components/image`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| errorText | 设置加载失败时显示的默认提示文案。 | `string` | 否 | `'图片加载失败'` |
| height | 设置组件高度。 | `WbbbNumeric` | 否 | `''` |
| lazyLoad | 是否延迟加载图片资源。 | `boolean` | 否 | `true` |
| mode | 设置展示方式或图片适配模式。 | `string` | 否 | `'aspectFill'` |
| radius | 设置组件的圆角半径。 | `WbbbNumeric` | 否 | `0` |
| showError | 控制是否显示内置错误占位。 | `boolean` | 否 | `true` |
| showLoading | 控制是否显示内置加载占位。 | `boolean` | 否 | `true` |
| src | 设置资源的 URL 或本地路径。 | `string` | 否 | `''` |
| loading | 是否显示加载状态，并在适用时阻止重复交互。 | `boolean` | 否 | `false` |
| loadingText | 设置加载过程显示的文案。 | `string` | 否 | `'加载中'` |
| width | 设置组件宽度。 | `WbbbNumeric` | 否 | `'100%'` |

### 事件（Events）

- `error`
- `load`

### 插槽（Slots）

- `error`

## 徽标 Badge

数字角标与状态点

- 组件分类: 基础
- 导入路径: `wbbb-ui/components/badge`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| dot | 是否将徽标显示为小型状态点。 | `boolean` | 否 | `false` |
| max | 设置允许的最大数值。 | `number` | 否 | `99` |
| showZero | 徽标值为零时是否仍然显示。 | `boolean` | 否 | `false` |
| type | 设置组件的语义类型或样式变体。 | `WbbbType` | 否 | `'danger'` |
| value | 提供展示值或项目值。 | `number \| string` | 否 | `''` |

### 事件（Events）

- 无

### 插槽（Slots）

- `default`

## 标签 Tag

轻量状态标签

- 组件分类: 基础
- 导入路径: `wbbb-ui/components/tag`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| clickable | 是否作为可点击项处理并触发点击事件。 | `boolean` | 否 | `false` |
| closable | 是否显示关闭控件并允许用户关闭。 | `boolean` | 否 | `false` |
| plain | 是否使用描边或低强调视觉样式。 | `boolean` | 否 | `false` |
| round | 是否使用全圆角或胶囊形外观。 | `boolean` | 否 | `false` |
| size | 设置组件尺寸。 | `WbbbSize` | 否 | `'medium'` |
| type | 设置组件的语义类型或样式变体。 | `WbbbType` | 否 | `'default'` |

### 事件（Events）

- `click`
- `close`

### 插槽（Slots）

- `default`

## 头像 Avatar

头像与默认占位

- 组件分类: 基础
- 导入路径: `wbbb-ui/components/avatar`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| alt | 提供图片资源的替代文本。 | `string` | 否 | `''` |
| round | 是否使用全圆角或胶囊形外观。 | `boolean` | 否 | `true` |
| size | 设置组件尺寸。 | `WbbbNumeric` | 否 | `80` |
| src | 设置资源的 URL 或本地路径。 | `string` | 否 | `''` |

### 事件（Events）

- `error`

### 插槽（Slots）

- `default`

## 分割线 Divider

内容分隔与文字说明

- 组件分类: 基础
- 导入路径: `wbbb-ui/components/divider`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| dashed | 是否使用虚线分隔线而非实线。 | `boolean` | 否 | `false` |
| direction | 设置布局或分隔线方向。 | `WbbbDirection` | 否 | `'horizontal'` |
| textPosition | 设置文字相对分隔线的位置。 | `'left' \| 'center' \| 'right'` | 否 | `'center'` |

### 事件（Events）

- 无

### 插槽（Slots）

- `default`

## 加载 Loading

加载中的过程状态

- 组件分类: 基础
- 导入路径: `wbbb-ui/components/loading`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| color | 设置主要显示颜色。 | `string` | 否 | `''` |
| size | 设置组件尺寸。 | `WbbbNumeric` | 否 | `32` |
| text | 提供主要展示文案。 | `string` | 否 | `''` |
| vertical | 是否使用纵向布局方向。 | `boolean` | 否 | `false` |

### 事件（Events）

- 无

### 插槽（Slots）

- 无

## 单元格 Cell

信息行与分组容器

- 组件分类: 布局
- 导入路径: `wbbb-ui/components/cell`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| border | 控制是否显示分隔线或边框。 | `boolean` | 否 | `true` |
| clickable | 是否作为可点击项处理并触发点击事件。 | `boolean` | 否 | `false` |
| icon | 设置图标名称或图标内容。 | `string` | 否 | `''` |
| label | 设置字段或项目的可见标签。 | `string` | 否 | `''` |
| required | 是否将字段标记为必填以用于校验或展示。 | `boolean` | 否 | `false` |
| title | 设置组件标题文字。 | `string` | 否 | `''` |
| value | 提供展示值或项目值。 | `string` | 否 | `''` |

### 事件（Events）

- `click`

### 插槽（Slots）

- `title`
- `default`

## 宫格 Grid

网格布局与子项

- 组件分类: 布局
- 导入路径: `wbbb-ui/components/grid`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| bordered | 控制容器是否渲染外边框。 | `boolean` | 否 | `false` |
| columns | 设置网格的列数。 | `number` | 否 | `4` |
| gap | 设置重复项目之间的间距。 | `number` | 否 | `16` |

### 事件（Events）

- 无

### 插槽（Slots）

- `default`

## 列表 List

可选择的业务列表

- 组件分类: 布局
- 导入路径: `wbbb-ui/components/list`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| border | 控制是否显示分隔线或边框。 | `boolean` | 否 | `true` |
| items | 提供组件需要渲染的数据项目。 | `WbbbListItem[]` | 否 | `() => []` |

### 事件（Events）

- `select`

### 插槽（Slots）

- `default`

## 卡片 Card

内容卡片与层级容器

- 组件分类: 布局
- 导入路径: `wbbb-ui/components/card`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| bordered | 控制容器是否渲染外边框。 | `boolean` | 否 | `true` |
| extra | 提供组件头部的补充内容。 | `string` | 否 | `''` |
| shadow | 是否为组件添加层级阴影。 | `boolean` | 否 | `false` |
| title | 设置组件标题文字。 | `string` | 否 | `''` |

### 事件（Events）

- 无

### 插槽（Slots）

- `header`
- `default`
- `footer`

## 吸顶 Sticky

吸顶内容区

- 组件分类: 布局
- 导入路径: `wbbb-ui/components/sticky`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| offsetTop | 设置触发吸顶前距顶部的偏移量。 | `WbbbNumeric` | 否 | `0` |
| zIndex | 设置组件的层叠层级。 | `number` | 否 | `700` |

### 事件（Events）

- 无

### 插槽（Slots）

- `default`

## 安全区 SafeArea

设备安全区适配

- 组件分类: 布局
- 导入路径: `wbbb-ui/components/safe-area`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| bottom | 是否启用底部安全区留白。 | `boolean` | 否 | `true` |
| top | 是否启用顶部安全区留白。 | `boolean` | 否 | `false` |

### 事件（Events）

- 无

### 插槽（Slots）

- `default`

## 导航栏 Navbar

页面导航栏

- 组件分类: 布局
- 导入路径: `wbbb-ui/components/navbar`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| border | 控制是否显示分隔线或边框。 | `boolean` | 否 | `true` |
| fixed | 是否将组件固定在视口位置。 | `boolean` | 否 | `false` |
| leftArrow | 是否在左侧显示返回箭头。 | `boolean` | 否 | `false` |
| leftText | 设置左侧显示的文字。 | `string` | 否 | `''` |
| placeholder | 设置尚未输入或选择时的占位文案。 | `boolean` | 否 | `false` |
| rightText | 设置右侧显示的文字。 | `string` | 否 | `''` |
| safeAreaTop | 是否为设备顶部安全区增加留白。 | `boolean` | 否 | `true` |
| title | 设置组件标题文字。 | `string` | 否 | `''` |

### 事件（Events）

- `clickLeft`
- `clickRight`

### 插槽（Slots）

- `left`
- `title`
- `right`

## 底部导航栏 Tabbar

底部应用导航

- 组件分类: 布局
- 导入路径: `wbbb-ui/components/tabbar`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| activeColor | 设置激活状态使用的颜色。 | `string` | 否 | `'var(--wbbb-color-primary)'` |
| fixed | 是否将组件固定在视口位置。 | `boolean` | 否 | `true` |
| inactiveColor | 设置未激活状态使用的颜色。 | `string` | 否 | `'var(--wbbb-color-text-secondary)'` |
| items | 提供组件需要渲染的数据项目。 | `WbbbTabbarItem[]` | 否 | `() => []` |
| modelValue | 提供 v-model 使用的当前值。 | `string \| number` | 否 | `''` |
| safeAreaInsetBottom | 是否为设备底部安全区增加留白。 | `boolean` | 否 | `true` |
| zIndex | 设置组件的层叠层级。 | `number` | 否 | `800` |

### 事件（Events）

- `update:modelValue`
- `change`

### 插槽（Slots）

- `default`

## 标签页 Tabs

内容标签切换

- 组件分类: 布局
- 导入路径: `wbbb-ui/components/tabs`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| activeColor | 设置激活状态使用的颜色。 | `string` | 否 | `''` |
| items | 提供组件需要渲染的数据项目。 | `WbbbTabItem[]` | 否 | `() => []` |
| modelValue | 提供 v-model 使用的当前值。 | `string \| number` | 否 | `''` |
| scrollable | 标签项超出宽度时是否允许横向滚动。 | `boolean` | 否 | `false` |

### 事件（Events）

- `update:modelValue`
- `change`

### 插槽（Slots）

- `default`

## 输入框 Input

单行文本输入

- 组件分类: 表单
- 导入路径: `wbbb-ui/components/input`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| clearable | 是否显示清空当前输入值的控件。 | `boolean` | 否 | `false` |
| disabled | 是否禁止用户与组件交互。 | `boolean` | 否 | `false` |
| error | 是否以错误视觉状态展示组件。 | `boolean` | 否 | `false` |
| maxlength | 限制允许输入的最大字符数。 | `number` | 否 | `140` |
| modelValue | 提供 v-model 使用的当前值。 | `string \| number` | 否 | `''` |
| placeholder | 设置尚未输入或选择时的占位文案。 | `string` | 否 | `''` |
| readonly | 是否禁止编辑但保留内容可读。 | `boolean` | 否 | `false` |
| type | 设置组件的语义类型或样式变体。 | `'text' \| 'number' \| 'idcard' \| 'digit' \| 'safe-password' \| 'nickname'` | 否 | `'text'` |

### 事件（Events）

- `update:modelValue`
- `blur`
- `change`
- `clear`
- `confirm`
- `focus`

### 插槽（Slots）

- 无

## 文本域 Textarea

多行文本与字数控制

- 组件分类: 表单
- 导入路径: `wbbb-ui/components/textarea`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| autoHeight | 是否让文本域随内容自动增高。 | `boolean` | 否 | `false` |
| disabled | 是否禁止用户与组件交互。 | `boolean` | 否 | `false` |
| error | 是否以错误视觉状态展示组件。 | `boolean` | 否 | `false` |
| maxlength | 限制允许输入的最大字符数。 | `number` | 否 | `200` |
| modelValue | 提供 v-model 使用的当前值。 | `string` | 否 | `''` |
| placeholder | 设置尚未输入或选择时的占位文案。 | `string` | 否 | `''` |
| readonly | 是否禁止编辑但保留内容可读。 | `boolean` | 否 | `false` |
| showCount | 是否显示当前输入字数。 | `boolean` | 否 | `false` |

### 事件（Events）

- `update:modelValue`
- `blur`
- `change`
- `focus`

### 插槽（Slots）

- 无

## 复选框 Checkbox

多项复选

- 组件分类: 表单
- 导入路径: `wbbb-ui/components/checkbox`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| disabled | 是否禁止用户与组件交互。 | `boolean` | 否 | `false` |
| modelValue | 提供 v-model 使用的当前值。 | `Array<string \| number>` | 否 | `() => []` |
| options | 提供可选择的选项数据。 | `WbbbCheckboxOption[]` | 否 | `() => []` |

### 事件（Events）

- `update:modelValue`
- `change`

### 插槽（Slots）

- 无

## 单选框 Radio

单项选择

- 组件分类: 表单
- 导入路径: `wbbb-ui/components/radio`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| disabled | 是否禁止用户与组件交互。 | `boolean` | 否 | `false` |
| modelValue | 提供 v-model 使用的当前值。 | `string \| number` | 否 | `''` |
| options | 提供可选择的选项数据。 | `WbbbRadioOption[]` | 否 | `() => []` |

### 事件（Events）

- `update:modelValue`
- `change`

### 插槽（Slots）

- 无

## 开关 Switch

布尔开关

- 组件分类: 表单
- 导入路径: `wbbb-ui/components/switch`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| activeColor | 设置激活状态使用的颜色。 | `string` | 否 | `''` |
| disabled | 是否禁止用户与组件交互。 | `boolean` | 否 | `false` |
| modelValue | 提供 v-model 使用的当前值。 | `boolean` | 否 | `false` |

### 事件（Events）

- `update:modelValue`
- `change`

### 插槽（Slots）

- 无

## 选择器 Picker

基础选项选择器

- 组件分类: 表单
- 导入路径: `wbbb-ui/components/picker`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| disabled | 是否禁止用户与组件交互。 | `boolean` | 否 | `false` |
| locale | 覆盖组件内置文案使用的语言。 | `WbbbLocaleInput` | 否 | `—` |
| modelValue | 提供 v-model 使用的当前值。 | `string \| number` | 否 | `''` |
| options | 提供可选择的选项数据。 | `WbbbPickerOption[]` | 否 | `() => []` |
| placeholder | 设置尚未输入或选择时的占位文案。 | `string` | 否 | `由 locale 决定` |

### 事件（Events）

- `update:modelValue`
- `change`

### 插槽（Slots）

- 无

## 日期选择器 DatePicker

日期值选择

- 组件分类: 表单
- 导入路径: `wbbb-ui/components/date-picker`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| disabled | 是否禁止用户与组件交互。 | `boolean` | 否 | `false` |
| end | 设置可选或有效值的结束边界。 | `string` | 否 | `''` |
| fields | 注册由组件管理的表单字段。 | `'day' \| 'month' \| 'year'` | 否 | `'day'` |
| locale | 覆盖组件内置文案使用的语言。 | `WbbbLocaleInput` | 否 | `—` |
| modelValue | 提供 v-model 使用的当前值。 | `string` | 否 | `''` |
| placeholder | 设置尚未输入或选择时的占位文案。 | `string` | 否 | `由 locale 决定` |
| start | 设置可选或有效值的起始边界。 | `string` | 否 | `''` |

### 事件（Events）

- `update:modelValue`
- `change`

### 插槽（Slots）

- 无

## 步进器 Stepper

精确数字步进

- 组件分类: 表单
- 导入路径: `wbbb-ui/components/stepper`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| disabled | 是否禁止用户与组件交互。 | `boolean` | 否 | `false` |
| max | 设置允许的最大数值。 | `number` | 否 | `Number.MAX_SAFE_INTEGER` |
| min | 设置允许的最小数值。 | `number` | 否 | `0` |
| modelValue | 提供 v-model 使用的当前值。 | `number` | 否 | `0` |
| step | 设置数值变化时使用的步长。 | `number` | 否 | `1` |

### 事件（Events）

- `update:modelValue`
- `change`

### 插槽（Slots）

- 无

## 滑块 Slider

范围值选择

- 组件分类: 表单
- 导入路径: `wbbb-ui/components/slider`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| activeColor | 设置激活状态使用的颜色。 | `string` | 否 | `''` |
| disabled | 是否禁止用户与组件交互。 | `boolean` | 否 | `false` |
| max | 设置允许的最大数值。 | `number` | 否 | `100` |
| min | 设置允许的最小数值。 | `number` | 否 | `0` |
| modelValue | 提供 v-model 使用的当前值。 | `number` | 否 | `0` |
| showValue | 控制是否显示当前数值。 | `boolean` | 否 | `false` |
| step | 设置数值变化时使用的步长。 | `number` | 否 | `1` |

### 事件（Events）

- `update:modelValue`
- `change`
- `changing`

### 插槽（Slots）

- 无

## 上传 Upload

本地选择、上传钩子和失败反馈

- 组件分类: 表单
- 导入路径: `wbbb-ui/components/upload`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| beforeRead | 文件读取前执行，可阻止文件被接收。 | `(files: WbbbUploadFile[]) => boolean \| Promise<boolean>` | 否 | `—` |
| count | 设置渲染的占位行数或项目数。 | `number` | 否 | `9` |
| disabled | 是否禁止用户与组件交互。 | `boolean` | 否 | `false` |
| locale | 覆盖组件内置文案使用的语言。 | `WbbbLocaleInput` | 否 | `—` |
| modelValue | 提供 v-model 使用的当前值。 | `WbbbUploadFile[]` | 否 | `() => []` |
| text | 提供主要展示文案。 | `string` | 否 | `由 locale 决定` |
| uploader | 提供由业务层注入的上传实现。 | `(file: WbbbUploadFile, options?: { signal?: AbortSignal }) => WbbbUploadFile \| Promise<WbbbUploadFile>` | 否 | `—` |

### 事件（Events）

- `update:modelValue`
- `afterRead`
- `change`
- `error`
- `remove`

### 插槽（Slots）

- 无

## 表单 Form

表单规则与校验

- 组件分类: 表单
- 导入路径: `wbbb-ui/components/form`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| disabled | 是否禁止用户与组件交互。 | `boolean` | 否 | `false` |
| labelWidth | 设置表单标签预留的宽度。 | `WbbbNumeric` | 否 | `160` |
| model | 提供组件使用的数据模型。 | `Record<string, unknown>` | 否 | `() => ({})` |
| rules | 提供表单或字段的校验规则。 | `Record<string, WbbbFormRule \| WbbbFormRule[]>` | 否 | `() => ({})` |

### 事件（Events）

- 无

### 插槽（Slots）

- `default`

## 表单项 Field

字段标签和错误提示

- 组件分类: 表单
- 导入路径: `wbbb-ui/components/field`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| label | 设置字段或项目的可见标签。 | `string` | 否 | `''` |
| labelWidth | 设置表单标签预留的宽度。 | `WbbbNumeric` | 否 | `undefined` |
| prop | 将表单项关联到表单模型中的字段键。 | `string` | 否 | `''` |
| required | 是否将字段标记为必填以用于校验或展示。 | `boolean` | 否 | `false` |
| rules | 提供表单或字段的校验规则。 | `WbbbFormRule \| WbbbFormRule[]` | 否 | `undefined` |
| value | 提供展示值或项目值。 | `unknown` | 否 | `undefined` |

### 事件（Events）

- 无

### 插槽（Slots）

- `default`

## 轻提示 Toast

轻量短消息

- 组件分类: 反馈
- 导入路径: `wbbb-ui/components/toast`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| duration | 设置展示或动画时长，单位为毫秒。 | `number` | 否 | `1800` |
| icon | 设置图标名称或图标内容。 | `'success' \| 'error' \| 'loading' \| 'none'` | 否 | `'none'` |
| message | 提供通知或反馈消息内容。 | `string` | 否 | `''` |
| modelValue | 提供 v-model 使用的当前值。 | `boolean` | 否 | `false` |
| zIndex | 设置组件的层叠层级。 | `number` | 否 | `1100` |

### 事件（Events）

- `update:modelValue`
- `close`

### 插槽（Slots）

- `default`

## 对话框 Dialog

确认和取消对话框

- 组件分类: 反馈
- 导入路径: `wbbb-ui/components/dialog`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| cancelText | 覆盖取消操作的文案。 | `string` | 否 | `由 locale 决定` |
| confirmText | 覆盖确认操作的文案。 | `string` | 否 | `由 locale 决定` |
| content | 提供组件的主要文本内容。 | `string` | 否 | `''` |
| locale | 覆盖组件内置文案使用的语言。 | `WbbbLocaleInput` | 否 | `—` |
| modelValue | 提供 v-model 使用的当前值。 | `boolean` | 否 | `false` |
| showCancel | 控制是否显示取消操作。 | `boolean` | 否 | `true` |
| title | 设置组件标题文字。 | `string` | 否 | `''` |

### 事件（Events）

- `update:modelValue`
- `cancel`
- `close`
- `confirm`

### 插槽（Slots）

- `default`

## 弹出层 Popup

位置弹出层

- 组件分类: 反馈
- 导入路径: `wbbb-ui/components/popup`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| closeOnClickOverlay | 点击遮罩层时是否关闭弹层。 | `boolean` | 否 | `true` |
| modelValue | 提供 v-model 使用的当前值。 | `boolean` | 否 | `false` |
| placement | 设置弹层或浮层的展示位置。 | `WbbbPlacement` | 否 | `'center'` |
| round | 是否使用全圆角或胶囊形外观。 | `boolean` | 否 | `false` |
| zIndex | 设置组件的层叠层级。 | `number` | 否 | `900` |

### 事件（Events）

- `update:modelValue`
- `close`
- `open`

### 插槽（Slots）

- `default`

## 动作面板 ActionSheet

操作项面板

- 组件分类: 反馈
- 导入路径: `wbbb-ui/components/action-sheet`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| actions | 定义可供选择的操作项。 | `WbbbActionSheetAction[]` | 否 | `() => []` |
| cancelText | 覆盖取消操作的文案。 | `string` | 否 | `由 locale 决定` |
| locale | 覆盖组件内置文案使用的语言。 | `WbbbLocaleInput` | 否 | `—` |
| modelValue | 提供 v-model 使用的当前值。 | `boolean` | 否 | `false` |
| title | 设置组件标题文字。 | `string` | 否 | `''` |

### 事件（Events）

- `update:modelValue`
- `cancel`
- `close`
- `select`

### 插槽（Slots）

- 无

## 消息通知 Notify

页面顶部通知

- 组件分类: 反馈
- 导入路径: `wbbb-ui/components/notify`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| duration | 设置展示或动画时长，单位为毫秒。 | `number` | 否 | `2200` |
| message | 提供通知或反馈消息内容。 | `string` | 否 | `''` |
| modelValue | 提供 v-model 使用的当前值。 | `boolean` | 否 | `false` |
| type | 设置组件的语义类型或样式变体。 | `Exclude<WbbbType, 'default'>` | 否 | `'info'` |
| zIndex | 设置组件的层叠层级。 | `number` | 否 | `1000` |

### 事件（Events）

- `update:modelValue`
- `close`

### 插槽（Slots）

- `default`

## 遮罩宿主 OverlayHost

服务弹层的统一宿主

- 组件分类: 反馈
- 导入路径: `wbbb-ui/components/overlay-host`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| 无 | 无 | 无 | 无 | 无 |

### 事件（Events）

- 无

### 插槽（Slots）

- 无

## 骨架屏 Skeleton

内容加载骨架

- 组件分类: 反馈
- 导入路径: `wbbb-ui/components/skeleton`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| animated | 是否启用组件的过渡动画。 | `boolean` | 否 | `true` |
| avatar | 设置头像图片或头像内容来源。 | `boolean` | 否 | `false` |
| loading | 是否显示加载状态，并在适用时阻止重复交互。 | `boolean` | 否 | `true` |
| rows | 设置可见的文本行数。 | `number` | 否 | `3` |
| title | 设置组件标题文字。 | `boolean` | 否 | `true` |

### 事件（Events）

- 无

### 插槽（Slots）

- `default`

## 空状态 Empty

空内容状态

- 组件分类: 反馈
- 导入路径: `wbbb-ui/components/empty`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| description | 提供辅助说明文字。 | `string` | 否 | `由 locale 决定` |
| image | 设置项目使用的图片资源。 | `string` | 否 | `''` |
| imageSize | 设置图片的渲染尺寸。 | `WbbbNumeric` | 否 | `160` |
| locale | 覆盖组件内置文案使用的语言。 | `WbbbLocaleInput` | 否 | `—` |

### 事件（Events）

- 无

### 插槽（Slots）

- `default`

## 通知栏 NoticeBar

重要通知横幅

- 组件分类: 展示
- 导入路径: `wbbb-ui/components/notice-bar`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| closeable | 是否允许用户关闭弹层或通知。 | `boolean` | 否 | `false` |
| color | 设置主要显示颜色。 | `string` | 否 | `''` |
| text | 提供主要展示文案。 | `string` | 否 | `''` |
| type | 设置组件的语义类型或样式变体。 | `WbbbStatus \| 'primary'` | 否 | `'warning'` |

### 事件（Events）

- `close`

### 插槽（Slots）

- `default`

## 折叠面板 Collapse

可展开的信息块

- 组件分类: 展示
- 导入路径: `wbbb-ui/components/collapse`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| accordion | 是否限制同一时间只展开一个折叠项。 | `boolean` | 否 | `false` |
| animated | 是否启用组件的过渡动画。 | `boolean` | 否 | `true` |
| items | 提供组件需要渲染的数据项目。 | `WbbbCollapseItem[]` | 否 | `() => []` |
| modelValue | 提供 v-model 使用的当前值。 | `Array<string \| number> \| string \| number` | 否 | `() => []` |

### 事件（Events）

- `update:modelValue`
- `change`

### 插槽（Slots）

- `default`

## 轮播 Swiper

轮播内容

- 组件分类: 展示
- 导入路径: `wbbb-ui/components/swiper`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| autoplay | 是否自动切换到下一张轮播项。 | `boolean` | 否 | `false` |
| circular | 是否允许轮播从最后一项循环到第一项。 | `boolean` | 否 | `true` |
| indicatorDots | 是否显示轮播项目的分页指示点。 | `boolean` | 否 | `true` |
| interval | 设置轮播自动切换间隔，单位为毫秒。 | `number` | 否 | `3000` |
| items | 提供组件需要渲染的数据项目。 | `WbbbSwiperItem[]` | 否 | `() => []` |

### 事件（Events）

- `change`

### 插槽（Slots）

- `default`

## 步骤条 Steps

步骤进度

- 组件分类: 展示
- 导入路径: `wbbb-ui/components/steps`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| active | 标识当前激活的项目或步骤。 | `number` | 否 | `—` |
| direction | 设置布局或分隔线方向。 | `WbbbDirection` | 否 | `—` |
| items | 提供组件需要渲染的数据项目。 | `WbbbStepItem[]` | 否 | `—` |

### 事件（Events）

- 无

### 插槽（Slots）

- 无

## 时间线 Timeline

时间线事件

- 组件分类: 展示
- 导入路径: `wbbb-ui/components/timeline`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| items | 提供组件需要渲染的数据项目。 | `WbbbTimelineItem[]` | 否 | `() => []` |

### 事件（Events）

- 无

### 插槽（Slots）

- 无

## 倒计时 CountDown

倒计时状态

- 组件分类: 展示
- 导入路径: `wbbb-ui/components/count-down`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| autoStart | 是否在组件挂载后自动开始计时。 | `boolean` | 否 | `true` |
| format | 设置输出内容的展示格式。 | `string` | 否 | `'HH:mm:ss'` |
| time | 设置剩余时间或目标时间值。 | `number` | 否 | `0` |

### 事件（Events）

- `change`
- `finish`

### 插槽（Slots）

- 无

## 评分 Rate

评分选择

- 组件分类: 展示
- 导入路径: `wbbb-ui/components/rate`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| color | 设置主要显示颜色。 | `string` | 否 | `''` |
| count | 设置渲染的占位行数或项目数。 | `number` | 否 | `5` |
| disabled | 是否禁止用户与组件交互。 | `boolean` | 否 | `false` |
| modelValue | 提供 v-model 使用的当前值。 | `number` | 否 | `0` |

### 事件（Events）

- `update:modelValue`
- `change`

### 插槽（Slots）

- 无

## 日历 Calendar

月历日期选择

- 组件分类: 展示
- 导入路径: `wbbb-ui/components/calendar`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| disabledDates | 指定不可选择的日期列表。 | `string[]` | 否 | `() => []` |
| firstDayOfWeek | 设置日历每周的起始星期。 | `0 \| 1` | 否 | `0` |
| locale | 覆盖组件内置文案使用的语言。 | `WbbbLocaleInput` | 否 | `—` |
| maxDate | 设置可选择的最晚日期。 | `string` | 否 | `''` |
| minDate | 设置可选择的最早日期。 | `string` | 否 | `''` |
| modelValue | 提供 v-model 使用的当前值。 | `string` | 否 | `''` |
| month | 设置日历当前显示的月份。 | `string` | 否 | `''` |

### 事件（Events）

- `update:modelValue`
- `change`
- `monthChange`

### 插槽（Slots）

- 无

## 进度条 Progress

进度反馈

- 组件分类: 展示
- 导入路径: `wbbb-ui/components/progress`

### 属性（Props）

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| color | 设置主要显示颜色。 | `string` | 否 | `''` |
| percentage | 设置需要展示的进度百分比。 | `number` | 否 | `0` |
| showText | 控制是否显示辅助文字。 | `boolean` | 否 | `true` |
| status | 设置展示使用的语义状态。 | `WbbbStatus` | 否 | `'default'` |
| strokeWidth | 设置进度条描边的粗细。 | `number` | 否 | `12` |

### 事件（Events）

- 无

### 插槽（Slots）

- 无

