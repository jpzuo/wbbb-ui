export interface WbbbApiProp {
  defaultValue: string
  description: string
  enDescription: string
  name: string
  required: boolean
  type: string
}

export interface WbbbComponentApi {
  events: readonly string[]
  modelValue: boolean
  props: readonly WbbbApiProp[]
  slots: readonly string[]
}

export const componentApiMetadata = {
  "button": {
    "events": [
      "click"
    ],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "false",
        "description": "是否让按钮占满可用宽度。",
        "enDescription": "Makes the button occupy the full available width.",
        "name": "block",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "description": "是否禁止用户与组件交互。",
        "enDescription": "Prevents user interaction with the component.",
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "undefined",
        "description": "设置按钮触发的原生表单动作。",
        "enDescription": "Sets the native form action performed by the button.",
        "name": "formType",
        "required": false,
        "type": "'submit' \\| 'reset'"
      },
      {
        "defaultValue": "''",
        "description": "设置图标名称或图标内容。",
        "enDescription": "Sets the icon name or icon content.",
        "name": "icon",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "description": "是否显示加载状态，并在适用时阻止重复交互。",
        "enDescription": "Shows a loading state and blocks repeated interaction when applicable.",
        "name": "loading",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "description": "设置加载过程显示的文案。",
        "enDescription": "Sets the text displayed while loading.",
        "name": "loadingText",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "description": "设置按钮使用的 uni-app 开放能力类型。",
        "enDescription": "Sets the uni-app open capability used by the button.",
        "name": "openType",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "description": "是否使用描边或低强调视觉样式。",
        "enDescription": "Uses the outlined or low-emphasis visual style.",
        "name": "plain",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "description": "是否使用全圆角或胶囊形外观。",
        "enDescription": "Uses fully rounded corners or a pill shape.",
        "name": "round",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'medium'",
        "description": "设置组件尺寸。",
        "enDescription": "Sets the component size.",
        "name": "size",
        "required": false,
        "type": "WbbbSize"
      },
      {
        "defaultValue": "'default'",
        "description": "设置组件的语义类型或样式变体。",
        "enDescription": "Sets the semantic type or variant of the component.",
        "name": "type",
        "required": false,
        "type": "WbbbType"
      }
    ],
    "slots": [
      "default"
    ]
  },
  "icon": {
    "events": [],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "''",
        "description": "直接渲染字体图标时提供字形码点。",
        "enDescription": "Provides the glyph code when rendering a font icon directly.",
        "name": "code",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "description": "设置主要显示颜色。",
        "enDescription": "Sets the primary display color.",
        "name": "color",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "description": "设置直接字体图标使用的字体族。",
        "enDescription": "Sets the font family used for a direct font icon.",
        "name": "fontFamily",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "description": "选择已注册的 Iconfont 图标集。",
        "enDescription": "Selects a registered Iconfont set.",
        "name": "fontSet",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "description": "提供项目名称或唯一标识。",
        "enDescription": "Provides the item name or identifier.",
        "name": "name",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "32",
        "description": "设置组件尺寸。",
        "enDescription": "Sets the component size.",
        "name": "size",
        "required": false,
        "type": "WbbbNumeric"
      },
      {
        "defaultValue": "''",
        "description": "设置资源的 URL 或本地路径。",
        "enDescription": "Sets the source URL or local path of the resource.",
        "name": "src",
        "required": false,
        "type": "string"
      }
    ],
    "slots": []
  },
  "text": {
    "events": [],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "''",
        "description": "设置主要显示颜色。",
        "enDescription": "Sets the primary display color.",
        "name": "color",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "description": "文本溢出时是否以省略号截断。",
        "enDescription": "Truncates overflowing text with an ellipsis.",
        "name": "ellipsis",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "description": "设置组件尺寸。",
        "enDescription": "Sets the component size.",
        "name": "size",
        "required": false,
        "type": "WbbbNumeric"
      },
      {
        "defaultValue": "'default'",
        "description": "设置组件的语义类型或样式变体。",
        "enDescription": "Sets the semantic type or variant of the component.",
        "name": "type",
        "required": false,
        "type": "'default' \\| 'secondary' \\| 'primary' \\| 'success' \\| 'warning' \\| 'danger'"
      }
    ],
    "slots": [
      "default"
    ]
  },
  "image": {
    "events": [
      "error",
      "load"
    ],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "'图片加载失败'",
        "description": "设置加载失败时显示的默认提示文案。",
        "enDescription": "Sets the default message shown after a loading failure.",
        "name": "errorText",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "description": "设置组件高度。",
        "enDescription": "Sets the component height.",
        "name": "height",
        "required": false,
        "type": "WbbbNumeric"
      },
      {
        "defaultValue": "true",
        "description": "是否延迟加载图片资源。",
        "enDescription": "Defers image loading until it is needed.",
        "name": "lazyLoad",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'aspectFill'",
        "description": "设置展示方式或图片适配模式。",
        "enDescription": "Sets the display or image fitting mode.",
        "name": "mode",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "0",
        "description": "设置组件的圆角半径。",
        "enDescription": "Sets the corner radius of the component.",
        "name": "radius",
        "required": false,
        "type": "WbbbNumeric"
      },
      {
        "defaultValue": "true",
        "description": "控制是否显示内置错误占位。",
        "enDescription": "Controls whether the built-in error placeholder is shown.",
        "name": "showError",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "true",
        "description": "控制是否显示内置加载占位。",
        "enDescription": "Controls whether the built-in loading placeholder is shown.",
        "name": "showLoading",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "description": "设置资源的 URL 或本地路径。",
        "enDescription": "Sets the source URL or local path of the resource.",
        "name": "src",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "description": "是否显示加载状态，并在适用时阻止重复交互。",
        "enDescription": "Shows a loading state and blocks repeated interaction when applicable.",
        "name": "loading",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'加载中'",
        "description": "设置加载过程显示的文案。",
        "enDescription": "Sets the text displayed while loading.",
        "name": "loadingText",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "'100%'",
        "description": "设置组件宽度。",
        "enDescription": "Sets the component width.",
        "name": "width",
        "required": false,
        "type": "WbbbNumeric"
      }
    ],
    "slots": [
      "error"
    ]
  },
  "badge": {
    "events": [],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "false",
        "description": "是否将徽标显示为小型状态点。",
        "enDescription": "Displays the badge as a small status dot.",
        "name": "dot",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "99",
        "description": "设置允许的最大数值。",
        "enDescription": "Sets the maximum allowed numeric value.",
        "name": "max",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "false",
        "description": "徽标值为零时是否仍然显示。",
        "enDescription": "Keeps a zero value visible in a badge.",
        "name": "showZero",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'danger'",
        "description": "设置组件的语义类型或样式变体。",
        "enDescription": "Sets the semantic type or variant of the component.",
        "name": "type",
        "required": false,
        "type": "WbbbType"
      },
      {
        "defaultValue": "''",
        "description": "提供展示值或项目值。",
        "enDescription": "Provides the displayed value or item value.",
        "name": "value",
        "required": false,
        "type": "number \\| string"
      }
    ],
    "slots": [
      "default"
    ]
  },
  "tag": {
    "events": [
      "click",
      "close"
    ],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "false",
        "description": "是否作为可点击项处理并触发点击事件。",
        "enDescription": "Marks the component as interactive and emits click events.",
        "name": "clickable",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "description": "是否显示关闭控件并允许用户关闭。",
        "enDescription": "Shows a close control and allows the item to be dismissed.",
        "name": "closable",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "description": "是否使用描边或低强调视觉样式。",
        "enDescription": "Uses the outlined or low-emphasis visual style.",
        "name": "plain",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "description": "是否使用全圆角或胶囊形外观。",
        "enDescription": "Uses fully rounded corners or a pill shape.",
        "name": "round",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'medium'",
        "description": "设置组件尺寸。",
        "enDescription": "Sets the component size.",
        "name": "size",
        "required": false,
        "type": "WbbbSize"
      },
      {
        "defaultValue": "'default'",
        "description": "设置组件的语义类型或样式变体。",
        "enDescription": "Sets the semantic type or variant of the component.",
        "name": "type",
        "required": false,
        "type": "WbbbType"
      }
    ],
    "slots": [
      "default"
    ]
  },
  "avatar": {
    "events": [
      "error"
    ],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "''",
        "description": "提供图片资源的替代文本。",
        "enDescription": "Provides alternative text for an image resource.",
        "name": "alt",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "true",
        "description": "是否使用全圆角或胶囊形外观。",
        "enDescription": "Uses fully rounded corners or a pill shape.",
        "name": "round",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "80",
        "description": "设置组件尺寸。",
        "enDescription": "Sets the component size.",
        "name": "size",
        "required": false,
        "type": "WbbbNumeric"
      },
      {
        "defaultValue": "''",
        "description": "设置资源的 URL 或本地路径。",
        "enDescription": "Sets the source URL or local path of the resource.",
        "name": "src",
        "required": false,
        "type": "string"
      }
    ],
    "slots": [
      "default"
    ]
  },
  "divider": {
    "events": [],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "false",
        "description": "是否使用虚线分隔线而非实线。",
        "enDescription": "Uses a dashed divider line instead of a solid one.",
        "name": "dashed",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'horizontal'",
        "description": "设置布局或分隔线方向。",
        "enDescription": "Sets the layout or divider direction.",
        "name": "direction",
        "required": false,
        "type": "WbbbDirection"
      },
      {
        "defaultValue": "'center'",
        "description": "设置文字相对分隔线的位置。",
        "enDescription": "Sets the position of text relative to the divider.",
        "name": "textPosition",
        "required": false,
        "type": "'left' \\| 'center' \\| 'right'"
      }
    ],
    "slots": [
      "default"
    ]
  },
  "loading": {
    "events": [],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "''",
        "description": "设置主要显示颜色。",
        "enDescription": "Sets the primary display color.",
        "name": "color",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "32",
        "description": "设置组件尺寸。",
        "enDescription": "Sets the component size.",
        "name": "size",
        "required": false,
        "type": "WbbbNumeric"
      },
      {
        "defaultValue": "''",
        "description": "提供主要展示文案。",
        "enDescription": "Provides the primary display text.",
        "name": "text",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "description": "是否使用纵向布局方向。",
        "enDescription": "Uses a vertical layout direction.",
        "name": "vertical",
        "required": false,
        "type": "boolean"
      }
    ],
    "slots": []
  },
  "cell": {
    "events": [
      "click"
    ],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "true",
        "description": "控制是否显示分隔线或边框。",
        "enDescription": "Controls whether a separator or border is displayed.",
        "name": "border",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "description": "是否作为可点击项处理并触发点击事件。",
        "enDescription": "Marks the component as interactive and emits click events.",
        "name": "clickable",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "description": "设置图标名称或图标内容。",
        "enDescription": "Sets the icon name or icon content.",
        "name": "icon",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "description": "设置字段或项目的可见标签。",
        "enDescription": "Sets the visible field or item label.",
        "name": "label",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "description": "是否将字段标记为必填以用于校验或展示。",
        "enDescription": "Marks the field as required for validation or display.",
        "name": "required",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "description": "设置组件标题文字。",
        "enDescription": "Sets the component title text.",
        "name": "title",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "description": "提供展示值或项目值。",
        "enDescription": "Provides the displayed value or item value.",
        "name": "value",
        "required": false,
        "type": "string"
      }
    ],
    "slots": [
      "title",
      "default"
    ]
  },
  "grid": {
    "events": [],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "false",
        "description": "控制容器是否渲染外边框。",
        "enDescription": "Controls whether the container renders an outer border.",
        "name": "bordered",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "4",
        "description": "设置网格的列数。",
        "enDescription": "Sets the number of columns in the grid.",
        "name": "columns",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "16",
        "description": "设置重复项目之间的间距。",
        "enDescription": "Sets the spacing between repeated items.",
        "name": "gap",
        "required": false,
        "type": "number"
      }
    ],
    "slots": [
      "default"
    ]
  },
  "list": {
    "events": [
      "select"
    ],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "true",
        "description": "控制是否显示分隔线或边框。",
        "enDescription": "Controls whether a separator or border is displayed.",
        "name": "border",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "() => []",
        "description": "提供组件需要渲染的数据项目。",
        "enDescription": "Provides the data items rendered by the component.",
        "name": "items",
        "required": false,
        "type": "WbbbListItem[]"
      }
    ],
    "slots": [
      "default"
    ]
  },
  "card": {
    "events": [],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "true",
        "description": "控制容器是否渲染外边框。",
        "enDescription": "Controls whether the container renders an outer border.",
        "name": "bordered",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "description": "提供组件头部的补充内容。",
        "enDescription": "Provides supplementary content in the component header.",
        "name": "extra",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "description": "是否为组件添加层级阴影。",
        "enDescription": "Adds an elevated shadow to the component.",
        "name": "shadow",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "description": "设置组件标题文字。",
        "enDescription": "Sets the component title text.",
        "name": "title",
        "required": false,
        "type": "string"
      }
    ],
    "slots": [
      "header",
      "default",
      "footer"
    ]
  },
  "sticky": {
    "events": [],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "0",
        "description": "设置触发吸顶前距顶部的偏移量。",
        "enDescription": "Sets the distance from the top before sticky positioning starts.",
        "name": "offsetTop",
        "required": false,
        "type": "WbbbNumeric"
      },
      {
        "defaultValue": "700",
        "description": "设置组件的层叠层级。",
        "enDescription": "Sets the stacking order of the component.",
        "name": "zIndex",
        "required": false,
        "type": "number"
      }
    ],
    "slots": [
      "default"
    ]
  },
  "safe-area": {
    "events": [],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "true",
        "description": "是否启用底部安全区留白。",
        "enDescription": "Enables the bottom safe-area inset.",
        "name": "bottom",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "description": "是否启用顶部安全区留白。",
        "enDescription": "Enables the top safe-area inset.",
        "name": "top",
        "required": false,
        "type": "boolean"
      }
    ],
    "slots": [
      "default"
    ]
  },
  "navbar": {
    "events": [
      "clickLeft",
      "clickRight"
    ],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "true",
        "description": "控制是否显示分隔线或边框。",
        "enDescription": "Controls whether a separator or border is displayed.",
        "name": "border",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "description": "是否将组件固定在视口位置。",
        "enDescription": "Fixes the component to its viewport position.",
        "name": "fixed",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "description": "是否在左侧显示返回箭头。",
        "enDescription": "Shows a back arrow on the left side.",
        "name": "leftArrow",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "description": "设置左侧显示的文字。",
        "enDescription": "Sets the text shown on the left side.",
        "name": "leftText",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "description": "设置尚未输入或选择时的占位文案。",
        "enDescription": "Sets placeholder text when no value is present.",
        "name": "placeholder",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "description": "设置右侧显示的文字。",
        "enDescription": "Sets the text shown on the right side.",
        "name": "rightText",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "true",
        "description": "是否为设备顶部安全区增加留白。",
        "enDescription": "Adds padding for the device top safe area.",
        "name": "safeAreaTop",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "description": "设置组件标题文字。",
        "enDescription": "Sets the component title text.",
        "name": "title",
        "required": false,
        "type": "string"
      }
    ],
    "slots": [
      "left",
      "title",
      "right"
    ]
  },
  "tabbar": {
    "events": [
      "update:modelValue",
      "change"
    ],
    "modelValue": true,
    "props": [
      {
        "defaultValue": "'var(--wbbb-color-primary)'",
        "description": "设置激活状态使用的颜色。",
        "enDescription": "Sets the color used by the active state.",
        "name": "activeColor",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "true",
        "description": "是否将组件固定在视口位置。",
        "enDescription": "Fixes the component to its viewport position.",
        "name": "fixed",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'var(--wbbb-color-text-secondary)'",
        "description": "设置未激活状态使用的颜色。",
        "enDescription": "Sets the color used by the inactive state.",
        "name": "inactiveColor",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "() => []",
        "description": "提供组件需要渲染的数据项目。",
        "enDescription": "Provides the data items rendered by the component.",
        "name": "items",
        "required": false,
        "type": "WbbbTabbarItem[]"
      },
      {
        "defaultValue": "''",
        "description": "提供 v-model 使用的当前值。",
        "enDescription": "Provides the current value used by v-model.",
        "name": "modelValue",
        "required": false,
        "type": "string \\| number"
      },
      {
        "defaultValue": "true",
        "description": "是否为设备底部安全区增加留白。",
        "enDescription": "Adds padding for the device bottom safe area.",
        "name": "safeAreaInsetBottom",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "800",
        "description": "设置组件的层叠层级。",
        "enDescription": "Sets the stacking order of the component.",
        "name": "zIndex",
        "required": false,
        "type": "number"
      }
    ],
    "slots": [
      "default"
    ]
  },
  "tabs": {
    "events": [
      "update:modelValue",
      "change"
    ],
    "modelValue": true,
    "props": [
      {
        "defaultValue": "''",
        "description": "设置激活状态使用的颜色。",
        "enDescription": "Sets the color used by the active state.",
        "name": "activeColor",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "() => []",
        "description": "提供组件需要渲染的数据项目。",
        "enDescription": "Provides the data items rendered by the component.",
        "name": "items",
        "required": false,
        "type": "WbbbTabItem[]"
      },
      {
        "defaultValue": "''",
        "description": "提供 v-model 使用的当前值。",
        "enDescription": "Provides the current value used by v-model.",
        "name": "modelValue",
        "required": false,
        "type": "string \\| number"
      },
      {
        "defaultValue": "false",
        "description": "标签项超出宽度时是否允许横向滚动。",
        "enDescription": "Allows tab items to scroll horizontally when needed.",
        "name": "scrollable",
        "required": false,
        "type": "boolean"
      }
    ],
    "slots": [
      "default"
    ]
  },
  "input": {
    "events": [
      "update:modelValue",
      "blur",
      "change",
      "clear",
      "confirm",
      "focus"
    ],
    "modelValue": true,
    "props": [
      {
        "defaultValue": "false",
        "description": "是否显示清空当前输入值的控件。",
        "enDescription": "Shows a control for clearing the current input value.",
        "name": "clearable",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "description": "是否禁止用户与组件交互。",
        "enDescription": "Prevents user interaction with the component.",
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "description": "是否以错误视觉状态展示组件。",
        "enDescription": "Shows the component in its error visual state.",
        "name": "error",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "140",
        "description": "限制允许输入的最大字符数。",
        "enDescription": "Limits the number of characters that can be entered.",
        "name": "maxlength",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "''",
        "description": "提供 v-model 使用的当前值。",
        "enDescription": "Provides the current value used by v-model.",
        "name": "modelValue",
        "required": false,
        "type": "string \\| number"
      },
      {
        "defaultValue": "''",
        "description": "设置尚未输入或选择时的占位文案。",
        "enDescription": "Sets placeholder text when no value is present.",
        "name": "placeholder",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "description": "是否禁止编辑但保留内容可读。",
        "enDescription": "Prevents editing while keeping the value readable.",
        "name": "readonly",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'text'",
        "description": "设置组件的语义类型或样式变体。",
        "enDescription": "Sets the semantic type or variant of the component.",
        "name": "type",
        "required": false,
        "type": "'text' \\| 'number' \\| 'idcard' \\| 'digit' \\| 'safe-password' \\| 'nickname'"
      }
    ],
    "slots": []
  },
  "textarea": {
    "events": [
      "update:modelValue",
      "blur",
      "change",
      "focus"
    ],
    "modelValue": true,
    "props": [
      {
        "defaultValue": "false",
        "description": "是否让文本域随内容自动增高。",
        "enDescription": "Makes the textarea grow with its content.",
        "name": "autoHeight",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "description": "是否禁止用户与组件交互。",
        "enDescription": "Prevents user interaction with the component.",
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "description": "是否以错误视觉状态展示组件。",
        "enDescription": "Shows the component in its error visual state.",
        "name": "error",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "200",
        "description": "限制允许输入的最大字符数。",
        "enDescription": "Limits the number of characters that can be entered.",
        "name": "maxlength",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "''",
        "description": "提供 v-model 使用的当前值。",
        "enDescription": "Provides the current value used by v-model.",
        "name": "modelValue",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "description": "设置尚未输入或选择时的占位文案。",
        "enDescription": "Sets placeholder text when no value is present.",
        "name": "placeholder",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "description": "是否禁止编辑但保留内容可读。",
        "enDescription": "Prevents editing while keeping the value readable.",
        "name": "readonly",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "description": "是否显示当前输入字数。",
        "enDescription": "Shows the current character count.",
        "name": "showCount",
        "required": false,
        "type": "boolean"
      }
    ],
    "slots": []
  },
  "checkbox": {
    "events": [
      "update:modelValue",
      "change"
    ],
    "modelValue": true,
    "props": [
      {
        "defaultValue": "false",
        "description": "是否禁止用户与组件交互。",
        "enDescription": "Prevents user interaction with the component.",
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "() => []",
        "description": "提供 v-model 使用的当前值。",
        "enDescription": "Provides the current value used by v-model.",
        "name": "modelValue",
        "required": false,
        "type": "Array<string \\| number>"
      },
      {
        "defaultValue": "() => []",
        "description": "提供可选择的选项数据。",
        "enDescription": "Provides selectable option data.",
        "name": "options",
        "required": false,
        "type": "WbbbCheckboxOption[]"
      }
    ],
    "slots": []
  },
  "radio": {
    "events": [
      "update:modelValue",
      "change"
    ],
    "modelValue": true,
    "props": [
      {
        "defaultValue": "false",
        "description": "是否禁止用户与组件交互。",
        "enDescription": "Prevents user interaction with the component.",
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "description": "提供 v-model 使用的当前值。",
        "enDescription": "Provides the current value used by v-model.",
        "name": "modelValue",
        "required": false,
        "type": "string \\| number"
      },
      {
        "defaultValue": "() => []",
        "description": "提供可选择的选项数据。",
        "enDescription": "Provides selectable option data.",
        "name": "options",
        "required": false,
        "type": "WbbbRadioOption[]"
      }
    ],
    "slots": []
  },
  "switch": {
    "events": [
      "update:modelValue",
      "change"
    ],
    "modelValue": true,
    "props": [
      {
        "defaultValue": "''",
        "description": "设置激活状态使用的颜色。",
        "enDescription": "Sets the color used by the active state.",
        "name": "activeColor",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "description": "是否禁止用户与组件交互。",
        "enDescription": "Prevents user interaction with the component.",
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "description": "提供 v-model 使用的当前值。",
        "enDescription": "Provides the current value used by v-model.",
        "name": "modelValue",
        "required": false,
        "type": "boolean"
      }
    ],
    "slots": []
  },
  "picker": {
    "events": [
      "update:modelValue",
      "change"
    ],
    "modelValue": true,
    "props": [
      {
        "defaultValue": "false",
        "description": "是否禁止用户与组件交互。",
        "enDescription": "Prevents user interaction with the component.",
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "—",
        "description": "覆盖组件内置文案使用的语言。",
        "enDescription": "Overrides the locale used for built-in display copy.",
        "name": "locale",
        "required": false,
        "type": "WbbbLocaleInput"
      },
      {
        "defaultValue": "''",
        "description": "提供 v-model 使用的当前值。",
        "enDescription": "Provides the current value used by v-model.",
        "name": "modelValue",
        "required": false,
        "type": "string \\| number"
      },
      {
        "defaultValue": "() => []",
        "description": "提供可选择的选项数据。",
        "enDescription": "Provides selectable option data.",
        "name": "options",
        "required": false,
        "type": "WbbbPickerOption[]"
      },
      {
        "defaultValue": "由 locale 决定",
        "description": "设置尚未输入或选择时的占位文案。",
        "enDescription": "Sets placeholder text when no value is present.",
        "name": "placeholder",
        "required": false,
        "type": "string"
      }
    ],
    "slots": []
  },
  "date-picker": {
    "events": [
      "update:modelValue",
      "change"
    ],
    "modelValue": true,
    "props": [
      {
        "defaultValue": "false",
        "description": "是否禁止用户与组件交互。",
        "enDescription": "Prevents user interaction with the component.",
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "description": "设置可选或有效值的结束边界。",
        "enDescription": "Sets the latest selectable or valid value.",
        "name": "end",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "'day'",
        "description": "注册由组件管理的表单字段。",
        "enDescription": "Registers the form fields managed by the component.",
        "name": "fields",
        "required": false,
        "type": "'day' \\| 'month' \\| 'year'"
      },
      {
        "defaultValue": "—",
        "description": "覆盖组件内置文案使用的语言。",
        "enDescription": "Overrides the locale used for built-in display copy.",
        "name": "locale",
        "required": false,
        "type": "WbbbLocaleInput"
      },
      {
        "defaultValue": "''",
        "description": "提供 v-model 使用的当前值。",
        "enDescription": "Provides the current value used by v-model.",
        "name": "modelValue",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "由 locale 决定",
        "description": "设置尚未输入或选择时的占位文案。",
        "enDescription": "Sets placeholder text when no value is present.",
        "name": "placeholder",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "description": "设置可选或有效值的起始边界。",
        "enDescription": "Sets the earliest selectable or valid value.",
        "name": "start",
        "required": false,
        "type": "string"
      }
    ],
    "slots": []
  },
  "stepper": {
    "events": [
      "update:modelValue",
      "change"
    ],
    "modelValue": true,
    "props": [
      {
        "defaultValue": "false",
        "description": "是否禁止用户与组件交互。",
        "enDescription": "Prevents user interaction with the component.",
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "Number.MAX_SAFE_INTEGER",
        "description": "设置允许的最大数值。",
        "enDescription": "Sets the maximum allowed numeric value.",
        "name": "max",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "0",
        "description": "设置允许的最小数值。",
        "enDescription": "Sets the minimum allowed numeric value.",
        "name": "min",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "0",
        "description": "提供 v-model 使用的当前值。",
        "enDescription": "Provides the current value used by v-model.",
        "name": "modelValue",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "1",
        "description": "设置数值变化时使用的步长。",
        "enDescription": "Sets the increment used when changing a numeric value.",
        "name": "step",
        "required": false,
        "type": "number"
      }
    ],
    "slots": []
  },
  "slider": {
    "events": [
      "update:modelValue",
      "change",
      "changing"
    ],
    "modelValue": true,
    "props": [
      {
        "defaultValue": "''",
        "description": "设置激活状态使用的颜色。",
        "enDescription": "Sets the color used by the active state.",
        "name": "activeColor",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "description": "是否禁止用户与组件交互。",
        "enDescription": "Prevents user interaction with the component.",
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "100",
        "description": "设置允许的最大数值。",
        "enDescription": "Sets the maximum allowed numeric value.",
        "name": "max",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "0",
        "description": "设置允许的最小数值。",
        "enDescription": "Sets the minimum allowed numeric value.",
        "name": "min",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "0",
        "description": "提供 v-model 使用的当前值。",
        "enDescription": "Provides the current value used by v-model.",
        "name": "modelValue",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "false",
        "description": "控制是否显示当前数值。",
        "enDescription": "Controls whether the current value is displayed.",
        "name": "showValue",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "1",
        "description": "设置数值变化时使用的步长。",
        "enDescription": "Sets the increment used when changing a numeric value.",
        "name": "step",
        "required": false,
        "type": "number"
      }
    ],
    "slots": []
  },
  "upload": {
    "events": [
      "update:modelValue",
      "afterRead",
      "change",
      "error",
      "remove"
    ],
    "modelValue": true,
    "props": [
      {
        "defaultValue": "—",
        "description": "文件读取前执行，可阻止文件被接收。",
        "enDescription": "Runs before file selection is accepted and can block the read.",
        "name": "beforeRead",
        "required": false,
        "type": "(files: WbbbUploadFile[]) => boolean \\| Promise<boolean>"
      },
      {
        "defaultValue": "9",
        "description": "设置渲染的占位行数或项目数。",
        "enDescription": "Sets the number of rendered placeholder rows or items.",
        "name": "count",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "false",
        "description": "是否禁止用户与组件交互。",
        "enDescription": "Prevents user interaction with the component.",
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "—",
        "description": "覆盖组件内置文案使用的语言。",
        "enDescription": "Overrides the locale used for built-in display copy.",
        "name": "locale",
        "required": false,
        "type": "WbbbLocaleInput"
      },
      {
        "defaultValue": "() => []",
        "description": "提供 v-model 使用的当前值。",
        "enDescription": "Provides the current value used by v-model.",
        "name": "modelValue",
        "required": false,
        "type": "WbbbUploadFile[]"
      },
      {
        "defaultValue": "由 locale 决定",
        "description": "提供主要展示文案。",
        "enDescription": "Provides the primary display text.",
        "name": "text",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "—",
        "description": "提供由业务层注入的上传实现。",
        "enDescription": "Provides the business-layer upload implementation.",
        "name": "uploader",
        "required": false,
        "type": "(file: WbbbUploadFile, options?: { signal?: AbortSignal }) => WbbbUploadFile \\| Promise<WbbbUploadFile>"
      }
    ],
    "slots": []
  },
  "form": {
    "events": [],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "false",
        "description": "是否禁止用户与组件交互。",
        "enDescription": "Prevents user interaction with the component.",
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "160",
        "description": "设置表单标签预留的宽度。",
        "enDescription": "Sets the width reserved for field labels.",
        "name": "labelWidth",
        "required": false,
        "type": "WbbbNumeric"
      },
      {
        "defaultValue": "() => ({})",
        "description": "提供组件使用的数据模型。",
        "enDescription": "Provides the data model used by the component.",
        "name": "model",
        "required": false,
        "type": "Record<string, unknown>"
      },
      {
        "defaultValue": "() => ({})",
        "description": "提供表单或字段的校验规则。",
        "enDescription": "Provides validation rules for the form or field.",
        "name": "rules",
        "required": false,
        "type": "Record<string, WbbbFormRule \\| WbbbFormRule[]>"
      }
    ],
    "slots": [
      "default"
    ]
  },
  "field": {
    "events": [],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "''",
        "description": "设置字段或项目的可见标签。",
        "enDescription": "Sets the visible field or item label.",
        "name": "label",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "undefined",
        "description": "设置表单标签预留的宽度。",
        "enDescription": "Sets the width reserved for field labels.",
        "name": "labelWidth",
        "required": false,
        "type": "WbbbNumeric"
      },
      {
        "defaultValue": "''",
        "description": "将表单项关联到表单模型中的字段键。",
        "enDescription": "Associates the field with a key in the form model.",
        "name": "prop",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "description": "是否将字段标记为必填以用于校验或展示。",
        "enDescription": "Marks the field as required for validation or display.",
        "name": "required",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "undefined",
        "description": "提供表单或字段的校验规则。",
        "enDescription": "Provides validation rules for the form or field.",
        "name": "rules",
        "required": false,
        "type": "WbbbFormRule \\| WbbbFormRule[]"
      },
      {
        "defaultValue": "undefined",
        "description": "提供展示值或项目值。",
        "enDescription": "Provides the displayed value or item value.",
        "name": "value",
        "required": false,
        "type": "unknown"
      }
    ],
    "slots": [
      "default"
    ]
  },
  "toast": {
    "events": [
      "update:modelValue",
      "close"
    ],
    "modelValue": true,
    "props": [
      {
        "defaultValue": "1800",
        "description": "设置展示或动画时长，单位为毫秒。",
        "enDescription": "Sets the display or animation duration in milliseconds.",
        "name": "duration",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "'none'",
        "description": "设置图标名称或图标内容。",
        "enDescription": "Sets the icon name or icon content.",
        "name": "icon",
        "required": false,
        "type": "'success' \\| 'error' \\| 'loading' \\| 'none'"
      },
      {
        "defaultValue": "''",
        "description": "提供通知或反馈消息内容。",
        "enDescription": "Provides the notification or feedback message.",
        "name": "message",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "description": "提供 v-model 使用的当前值。",
        "enDescription": "Provides the current value used by v-model.",
        "name": "modelValue",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "1100",
        "description": "设置组件的层叠层级。",
        "enDescription": "Sets the stacking order of the component.",
        "name": "zIndex",
        "required": false,
        "type": "number"
      }
    ],
    "slots": [
      "default"
    ]
  },
  "dialog": {
    "events": [
      "update:modelValue",
      "cancel",
      "close",
      "confirm"
    ],
    "modelValue": true,
    "props": [
      {
        "defaultValue": "由 locale 决定",
        "description": "覆盖取消操作的文案。",
        "enDescription": "Overrides the cancel action label.",
        "name": "cancelText",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "由 locale 决定",
        "description": "覆盖确认操作的文案。",
        "enDescription": "Overrides the confirm action label.",
        "name": "confirmText",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "description": "提供组件的主要文本内容。",
        "enDescription": "Provides the main text content of the component.",
        "name": "content",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "—",
        "description": "覆盖组件内置文案使用的语言。",
        "enDescription": "Overrides the locale used for built-in display copy.",
        "name": "locale",
        "required": false,
        "type": "WbbbLocaleInput"
      },
      {
        "defaultValue": "false",
        "description": "提供 v-model 使用的当前值。",
        "enDescription": "Provides the current value used by v-model.",
        "name": "modelValue",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "true",
        "description": "控制是否显示取消操作。",
        "enDescription": "Controls whether the cancel action is shown.",
        "name": "showCancel",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "description": "设置组件标题文字。",
        "enDescription": "Sets the component title text.",
        "name": "title",
        "required": false,
        "type": "string"
      }
    ],
    "slots": [
      "default"
    ]
  },
  "popup": {
    "events": [
      "update:modelValue",
      "close",
      "open"
    ],
    "modelValue": true,
    "props": [
      {
        "defaultValue": "true",
        "description": "点击遮罩层时是否关闭弹层。",
        "enDescription": "Closes the overlay when its backdrop is pressed.",
        "name": "closeOnClickOverlay",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "description": "提供 v-model 使用的当前值。",
        "enDescription": "Provides the current value used by v-model.",
        "name": "modelValue",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'center'",
        "description": "设置弹层或浮层的展示位置。",
        "enDescription": "Sets where the overlay or pop-up is positioned.",
        "name": "placement",
        "required": false,
        "type": "WbbbPlacement"
      },
      {
        "defaultValue": "false",
        "description": "是否使用全圆角或胶囊形外观。",
        "enDescription": "Uses fully rounded corners or a pill shape.",
        "name": "round",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "900",
        "description": "设置组件的层叠层级。",
        "enDescription": "Sets the stacking order of the component.",
        "name": "zIndex",
        "required": false,
        "type": "number"
      }
    ],
    "slots": [
      "default"
    ]
  },
  "action-sheet": {
    "events": [
      "update:modelValue",
      "cancel",
      "close",
      "select"
    ],
    "modelValue": true,
    "props": [
      {
        "defaultValue": "() => []",
        "description": "定义可供选择的操作项。",
        "enDescription": "Defines the available action items.",
        "name": "actions",
        "required": false,
        "type": "WbbbActionSheetAction[]"
      },
      {
        "defaultValue": "由 locale 决定",
        "description": "覆盖取消操作的文案。",
        "enDescription": "Overrides the cancel action label.",
        "name": "cancelText",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "—",
        "description": "覆盖组件内置文案使用的语言。",
        "enDescription": "Overrides the locale used for built-in display copy.",
        "name": "locale",
        "required": false,
        "type": "WbbbLocaleInput"
      },
      {
        "defaultValue": "false",
        "description": "提供 v-model 使用的当前值。",
        "enDescription": "Provides the current value used by v-model.",
        "name": "modelValue",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "description": "设置组件标题文字。",
        "enDescription": "Sets the component title text.",
        "name": "title",
        "required": false,
        "type": "string"
      }
    ],
    "slots": []
  },
  "notify": {
    "events": [
      "update:modelValue",
      "close"
    ],
    "modelValue": true,
    "props": [
      {
        "defaultValue": "2200",
        "description": "设置展示或动画时长，单位为毫秒。",
        "enDescription": "Sets the display or animation duration in milliseconds.",
        "name": "duration",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "''",
        "description": "提供通知或反馈消息内容。",
        "enDescription": "Provides the notification or feedback message.",
        "name": "message",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "description": "提供 v-model 使用的当前值。",
        "enDescription": "Provides the current value used by v-model.",
        "name": "modelValue",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'info'",
        "description": "设置组件的语义类型或样式变体。",
        "enDescription": "Sets the semantic type or variant of the component.",
        "name": "type",
        "required": false,
        "type": "Exclude<WbbbType, 'default'>"
      },
      {
        "defaultValue": "1000",
        "description": "设置组件的层叠层级。",
        "enDescription": "Sets the stacking order of the component.",
        "name": "zIndex",
        "required": false,
        "type": "number"
      }
    ],
    "slots": [
      "default"
    ]
  },
  "overlay-host": {
    "events": [],
    "modelValue": false,
    "props": [],
    "slots": []
  },
  "skeleton": {
    "events": [],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "true",
        "description": "是否启用组件的过渡动画。",
        "enDescription": "Enables the component transition animation.",
        "name": "animated",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "description": "设置头像图片或头像内容来源。",
        "enDescription": "Sets the avatar image or avatar content source.",
        "name": "avatar",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "true",
        "description": "是否显示加载状态，并在适用时阻止重复交互。",
        "enDescription": "Shows a loading state and blocks repeated interaction when applicable.",
        "name": "loading",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "3",
        "description": "设置可见的文本行数。",
        "enDescription": "Sets the number of visible text rows.",
        "name": "rows",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "true",
        "description": "设置组件标题文字。",
        "enDescription": "Sets the component title text.",
        "name": "title",
        "required": false,
        "type": "boolean"
      }
    ],
    "slots": [
      "default"
    ]
  },
  "empty": {
    "events": [],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "由 locale 决定",
        "description": "提供辅助说明文字。",
        "enDescription": "Provides supporting descriptive text.",
        "name": "description",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "description": "设置项目使用的图片资源。",
        "enDescription": "Sets the image resource used by the item.",
        "name": "image",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "160",
        "description": "设置图片的渲染尺寸。",
        "enDescription": "Sets the rendered size of the image.",
        "name": "imageSize",
        "required": false,
        "type": "WbbbNumeric"
      },
      {
        "defaultValue": "—",
        "description": "覆盖组件内置文案使用的语言。",
        "enDescription": "Overrides the locale used for built-in display copy.",
        "name": "locale",
        "required": false,
        "type": "WbbbLocaleInput"
      }
    ],
    "slots": [
      "default"
    ]
  },
  "notice-bar": {
    "events": [
      "close"
    ],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "false",
        "description": "是否允许用户关闭弹层或通知。",
        "enDescription": "Allows the overlay or notification to be closed by the user.",
        "name": "closeable",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "description": "设置主要显示颜色。",
        "enDescription": "Sets the primary display color.",
        "name": "color",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "description": "提供主要展示文案。",
        "enDescription": "Provides the primary display text.",
        "name": "text",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "'warning'",
        "description": "设置组件的语义类型或样式变体。",
        "enDescription": "Sets the semantic type or variant of the component.",
        "name": "type",
        "required": false,
        "type": "WbbbStatus \\| 'primary'"
      }
    ],
    "slots": [
      "default"
    ]
  },
  "collapse": {
    "events": [
      "update:modelValue",
      "change"
    ],
    "modelValue": true,
    "props": [
      {
        "defaultValue": "false",
        "description": "是否限制同一时间只展开一个折叠项。",
        "enDescription": "Allows only one collapse item to stay expanded at a time.",
        "name": "accordion",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "true",
        "description": "是否启用组件的过渡动画。",
        "enDescription": "Enables the component transition animation.",
        "name": "animated",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "() => []",
        "description": "提供组件需要渲染的数据项目。",
        "enDescription": "Provides the data items rendered by the component.",
        "name": "items",
        "required": false,
        "type": "WbbbCollapseItem[]"
      },
      {
        "defaultValue": "() => []",
        "description": "提供 v-model 使用的当前值。",
        "enDescription": "Provides the current value used by v-model.",
        "name": "modelValue",
        "required": false,
        "type": "Array<string \\| number> \\| string \\| number"
      }
    ],
    "slots": [
      "default"
    ]
  },
  "swiper": {
    "events": [
      "change"
    ],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "false",
        "description": "是否自动切换到下一张轮播项。",
        "enDescription": "Automatically advances to the next slide.",
        "name": "autoplay",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "true",
        "description": "是否允许轮播从最后一项循环到第一项。",
        "enDescription": "Allows the carousel to loop from the last item to the first.",
        "name": "circular",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "true",
        "description": "是否显示轮播项目的分页指示点。",
        "enDescription": "Shows pagination dots for carousel items.",
        "name": "indicatorDots",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "3000",
        "description": "设置轮播自动切换间隔，单位为毫秒。",
        "enDescription": "Sets the delay between automatic carousel transitions in milliseconds.",
        "name": "interval",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "() => []",
        "description": "提供组件需要渲染的数据项目。",
        "enDescription": "Provides the data items rendered by the component.",
        "name": "items",
        "required": false,
        "type": "WbbbSwiperItem[]"
      }
    ],
    "slots": [
      "default"
    ]
  },
  "steps": {
    "events": [],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "—",
        "description": "标识当前激活的项目或步骤。",
        "enDescription": "Identifies the current active item or step.",
        "name": "active",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "—",
        "description": "设置布局或分隔线方向。",
        "enDescription": "Sets the layout or divider direction.",
        "name": "direction",
        "required": false,
        "type": "WbbbDirection"
      },
      {
        "defaultValue": "—",
        "description": "提供组件需要渲染的数据项目。",
        "enDescription": "Provides the data items rendered by the component.",
        "name": "items",
        "required": false,
        "type": "WbbbStepItem[]"
      }
    ],
    "slots": []
  },
  "timeline": {
    "events": [],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "() => []",
        "description": "提供组件需要渲染的数据项目。",
        "enDescription": "Provides the data items rendered by the component.",
        "name": "items",
        "required": false,
        "type": "WbbbTimelineItem[]"
      }
    ],
    "slots": []
  },
  "count-down": {
    "events": [
      "change",
      "finish"
    ],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "true",
        "description": "是否在组件挂载后自动开始计时。",
        "enDescription": "Starts timing automatically after mount.",
        "name": "autoStart",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'HH:mm:ss'",
        "description": "设置输出内容的展示格式。",
        "enDescription": "Sets the output display format.",
        "name": "format",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "0",
        "description": "设置剩余时间或目标时间值。",
        "enDescription": "Sets the remaining time or target time value.",
        "name": "time",
        "required": false,
        "type": "number"
      }
    ],
    "slots": []
  },
  "rate": {
    "events": [
      "update:modelValue",
      "change"
    ],
    "modelValue": true,
    "props": [
      {
        "defaultValue": "''",
        "description": "设置主要显示颜色。",
        "enDescription": "Sets the primary display color.",
        "name": "color",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "5",
        "description": "设置渲染的占位行数或项目数。",
        "enDescription": "Sets the number of rendered placeholder rows or items.",
        "name": "count",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "false",
        "description": "是否禁止用户与组件交互。",
        "enDescription": "Prevents user interaction with the component.",
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "0",
        "description": "提供 v-model 使用的当前值。",
        "enDescription": "Provides the current value used by v-model.",
        "name": "modelValue",
        "required": false,
        "type": "number"
      }
    ],
    "slots": []
  },
  "calendar": {
    "events": [
      "update:modelValue",
      "change",
      "monthChange"
    ],
    "modelValue": true,
    "props": [
      {
        "defaultValue": "() => []",
        "description": "指定不可选择的日期列表。",
        "enDescription": "Lists dates that cannot be selected.",
        "name": "disabledDates",
        "required": false,
        "type": "string[]"
      },
      {
        "defaultValue": "0",
        "description": "设置日历每周的起始星期。",
        "enDescription": "Sets which weekday starts the calendar row.",
        "name": "firstDayOfWeek",
        "required": false,
        "type": "0 \\| 1"
      },
      {
        "defaultValue": "—",
        "description": "覆盖组件内置文案使用的语言。",
        "enDescription": "Overrides the locale used for built-in display copy.",
        "name": "locale",
        "required": false,
        "type": "WbbbLocaleInput"
      },
      {
        "defaultValue": "''",
        "description": "设置可选择的最晚日期。",
        "enDescription": "Sets the latest date that can be selected.",
        "name": "maxDate",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "description": "设置可选择的最早日期。",
        "enDescription": "Sets the earliest date that can be selected.",
        "name": "minDate",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "description": "提供 v-model 使用的当前值。",
        "enDescription": "Provides the current value used by v-model.",
        "name": "modelValue",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "description": "设置日历当前显示的月份。",
        "enDescription": "Sets the month displayed by the calendar.",
        "name": "month",
        "required": false,
        "type": "string"
      }
    ],
    "slots": []
  },
  "progress": {
    "events": [],
    "modelValue": false,
    "props": [
      {
        "defaultValue": "''",
        "description": "设置主要显示颜色。",
        "enDescription": "Sets the primary display color.",
        "name": "color",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "0",
        "description": "设置需要展示的进度百分比。",
        "enDescription": "Sets the progress percentage to display.",
        "name": "percentage",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "true",
        "description": "控制是否显示辅助文字。",
        "enDescription": "Controls whether accompanying text is displayed.",
        "name": "showText",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'default'",
        "description": "设置展示使用的语义状态。",
        "enDescription": "Sets the semantic status used for display.",
        "name": "status",
        "required": false,
        "type": "WbbbStatus"
      },
      {
        "defaultValue": "12",
        "description": "设置进度条描边的粗细。",
        "enDescription": "Sets the thickness of the progress stroke.",
        "name": "strokeWidth",
        "required": false,
        "type": "number"
      }
    ],
    "slots": []
  }
} as const satisfies Record<string, WbbbComponentApi>
