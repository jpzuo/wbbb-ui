export interface HaloApiProp {
  defaultValue: string
  name: string
  required: boolean
  type: string
}

export interface HaloComponentApi {
  events: readonly string[]
  modelValue: boolean
  props: readonly HaloApiProp[]
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
        "name": "block",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "undefined",
        "name": "formType",
        "required": false,
        "type": "'submit' \\| 'reset'"
      },
      {
        "defaultValue": "''",
        "name": "icon",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "name": "loading",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "name": "loadingText",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "name": "openType",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "name": "plain",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "name": "round",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'medium'",
        "name": "size",
        "required": false,
        "type": "HaloSize"
      },
      {
        "defaultValue": "'default'",
        "name": "type",
        "required": false,
        "type": "HaloType"
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
        "name": "color",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "name": "name",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "32",
        "name": "size",
        "required": false,
        "type": "HaloNumeric"
      },
      {
        "defaultValue": "''",
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
        "name": "color",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "name": "ellipsis",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "name": "size",
        "required": false,
        "type": "HaloNumeric"
      },
      {
        "defaultValue": "'default'",
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
        "name": "errorText",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "name": "height",
        "required": false,
        "type": "HaloNumeric"
      },
      {
        "defaultValue": "true",
        "name": "lazyLoad",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'aspectFill'",
        "name": "mode",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "0",
        "name": "radius",
        "required": false,
        "type": "HaloNumeric"
      },
      {
        "defaultValue": "true",
        "name": "showError",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "true",
        "name": "showLoading",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "name": "src",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "name": "loading",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'加载中'",
        "name": "loadingText",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "'100%'",
        "name": "width",
        "required": false,
        "type": "HaloNumeric"
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
        "name": "dot",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "99",
        "name": "max",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "false",
        "name": "showZero",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'danger'",
        "name": "type",
        "required": false,
        "type": "HaloType"
      },
      {
        "defaultValue": "''",
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
        "name": "clickable",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "name": "closable",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "name": "plain",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "name": "round",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'medium'",
        "name": "size",
        "required": false,
        "type": "HaloSize"
      },
      {
        "defaultValue": "'default'",
        "name": "type",
        "required": false,
        "type": "HaloType"
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
        "name": "alt",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "true",
        "name": "round",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "80",
        "name": "size",
        "required": false,
        "type": "HaloNumeric"
      },
      {
        "defaultValue": "''",
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
        "name": "dashed",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'horizontal'",
        "name": "direction",
        "required": false,
        "type": "HaloDirection"
      },
      {
        "defaultValue": "'center'",
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
        "name": "color",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "32",
        "name": "size",
        "required": false,
        "type": "HaloNumeric"
      },
      {
        "defaultValue": "''",
        "name": "text",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
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
        "name": "border",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "name": "clickable",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "name": "icon",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "name": "label",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "name": "required",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "name": "title",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
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
        "name": "bordered",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "4",
        "name": "columns",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "16",
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
        "name": "border",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "() => []",
        "name": "items",
        "required": false,
        "type": "HaloListItem[]"
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
        "name": "bordered",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "name": "extra",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "name": "shadow",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
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
        "name": "offsetTop",
        "required": false,
        "type": "HaloNumeric"
      },
      {
        "defaultValue": "700",
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
        "name": "bottom",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
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
        "name": "border",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "name": "fixed",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "name": "leftArrow",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "name": "leftText",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "name": "placeholder",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "name": "rightText",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "true",
        "name": "safeAreaTop",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
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
        "defaultValue": "'var(--halo-color-primary)'",
        "name": "activeColor",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "true",
        "name": "fixed",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'var(--halo-color-text-secondary)'",
        "name": "inactiveColor",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "() => []",
        "name": "items",
        "required": false,
        "type": "HaloTabbarItem[]"
      },
      {
        "defaultValue": "''",
        "name": "modelValue",
        "required": false,
        "type": "string \\| number"
      },
      {
        "defaultValue": "true",
        "name": "safeAreaInsetBottom",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "800",
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
        "name": "activeColor",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "() => []",
        "name": "items",
        "required": false,
        "type": "HaloTabItem[]"
      },
      {
        "defaultValue": "''",
        "name": "modelValue",
        "required": false,
        "type": "string \\| number"
      },
      {
        "defaultValue": "false",
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
        "name": "clearable",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "name": "error",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "140",
        "name": "maxlength",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "''",
        "name": "modelValue",
        "required": false,
        "type": "string \\| number"
      },
      {
        "defaultValue": "''",
        "name": "placeholder",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "name": "readonly",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'text'",
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
        "name": "autoHeight",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "name": "error",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "200",
        "name": "maxlength",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "''",
        "name": "modelValue",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "name": "placeholder",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "name": "readonly",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
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
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "() => []",
        "name": "modelValue",
        "required": false,
        "type": "Array<string \\| number>"
      },
      {
        "defaultValue": "() => []",
        "name": "options",
        "required": false,
        "type": "HaloCheckboxOption[]"
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
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "name": "modelValue",
        "required": false,
        "type": "string \\| number"
      },
      {
        "defaultValue": "() => []",
        "name": "options",
        "required": false,
        "type": "HaloRadioOption[]"
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
        "name": "activeColor",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
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
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "name": "modelValue",
        "required": false,
        "type": "string \\| number"
      },
      {
        "defaultValue": "() => []",
        "name": "options",
        "required": false,
        "type": "HaloPickerOption[]"
      },
      {
        "defaultValue": "'Please select'",
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
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "name": "end",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "'day'",
        "name": "fields",
        "required": false,
        "type": "'day' \\| 'month' \\| 'year'"
      },
      {
        "defaultValue": "'zh-cn'",
        "name": "locale",
        "required": false,
        "type": "'en' \\| 'zh-cn'"
      },
      {
        "defaultValue": "''",
        "name": "modelValue",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "'Select date'",
        "name": "placeholder",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
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
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "Number.MAX_SAFE_INTEGER",
        "name": "max",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "0",
        "name": "min",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "0",
        "name": "modelValue",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "1",
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
        "name": "activeColor",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "100",
        "name": "max",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "0",
        "name": "min",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "0",
        "name": "modelValue",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "false",
        "name": "showValue",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "1",
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
        "name": "beforeRead",
        "required": false,
        "type": "(files: HaloUploadFile[]) => boolean \\| Promise<boolean>"
      },
      {
        "defaultValue": "9",
        "name": "count",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "false",
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "() => []",
        "name": "modelValue",
        "required": false,
        "type": "HaloUploadFile[]"
      },
      {
        "defaultValue": "'Upload'",
        "name": "text",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "—",
        "name": "uploader",
        "required": false,
        "type": "(file: HaloUploadFile, options?: { signal?: AbortSignal }) => HaloUploadFile \\| Promise<HaloUploadFile>"
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
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "160",
        "name": "labelWidth",
        "required": false,
        "type": "HaloNumeric"
      },
      {
        "defaultValue": "() => ({})",
        "name": "model",
        "required": false,
        "type": "Record<string, unknown>"
      },
      {
        "defaultValue": "() => ({})",
        "name": "rules",
        "required": false,
        "type": "Record<string, HaloFormRule \\| HaloFormRule[]>"
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
        "name": "label",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "undefined",
        "name": "labelWidth",
        "required": false,
        "type": "HaloNumeric"
      },
      {
        "defaultValue": "''",
        "name": "prop",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "name": "required",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "undefined",
        "name": "rules",
        "required": false,
        "type": "HaloFormRule \\| HaloFormRule[]"
      },
      {
        "defaultValue": "undefined",
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
        "name": "duration",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "'none'",
        "name": "icon",
        "required": false,
        "type": "'success' \\| 'error' \\| 'loading' \\| 'none'"
      },
      {
        "defaultValue": "''",
        "name": "message",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "name": "modelValue",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "1100",
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
        "defaultValue": "'Cancel'",
        "name": "cancelText",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "'OK'",
        "name": "confirmText",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "name": "content",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "name": "modelValue",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "true",
        "name": "showCancel",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
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
        "name": "closeOnClickOverlay",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "name": "modelValue",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'center'",
        "name": "placement",
        "required": false,
        "type": "HaloPlacement"
      },
      {
        "defaultValue": "false",
        "name": "round",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "900",
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
        "name": "actions",
        "required": false,
        "type": "HaloActionSheetAction[]"
      },
      {
        "defaultValue": "'Cancel'",
        "name": "cancelText",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "name": "modelValue",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
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
        "name": "duration",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "''",
        "name": "message",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "false",
        "name": "modelValue",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'info'",
        "name": "type",
        "required": false,
        "type": "Exclude<HaloType, 'default'>"
      },
      {
        "defaultValue": "1000",
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
        "name": "animated",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "false",
        "name": "avatar",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "true",
        "name": "loading",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "3",
        "name": "rows",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "true",
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
        "defaultValue": "'No data'",
        "name": "description",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "name": "image",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "160",
        "name": "imageSize",
        "required": false,
        "type": "HaloNumeric"
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
        "name": "closeable",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "''",
        "name": "color",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "name": "text",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "'warning'",
        "name": "type",
        "required": false,
        "type": "HaloStatus \\| 'primary'"
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
        "name": "accordion",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "true",
        "name": "animated",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "() => []",
        "name": "items",
        "required": false,
        "type": "HaloCollapseItem[]"
      },
      {
        "defaultValue": "() => []",
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
        "name": "autoplay",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "true",
        "name": "circular",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "true",
        "name": "indicatorDots",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "3000",
        "name": "interval",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "() => []",
        "name": "items",
        "required": false,
        "type": "HaloSwiperItem[]"
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
        "name": "active",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "—",
        "name": "direction",
        "required": false,
        "type": "HaloDirection"
      },
      {
        "defaultValue": "—",
        "name": "items",
        "required": false,
        "type": "HaloStepItem[]"
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
        "name": "items",
        "required": false,
        "type": "HaloTimelineItem[]"
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
        "name": "autoStart",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'HH:mm:ss'",
        "name": "format",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "0",
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
        "name": "color",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "5",
        "name": "count",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "false",
        "name": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "0",
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
        "name": "disabledDates",
        "required": false,
        "type": "string[]"
      },
      {
        "defaultValue": "0",
        "name": "firstDayOfWeek",
        "required": false,
        "type": "0 \\| 1"
      },
      {
        "defaultValue": "'zh-cn'",
        "name": "locale",
        "required": false,
        "type": "'en' \\| 'zh-cn'"
      },
      {
        "defaultValue": "''",
        "name": "maxDate",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "name": "minDate",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
        "name": "modelValue",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "''",
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
        "name": "color",
        "required": false,
        "type": "string"
      },
      {
        "defaultValue": "0",
        "name": "percentage",
        "required": false,
        "type": "number"
      },
      {
        "defaultValue": "true",
        "name": "showText",
        "required": false,
        "type": "boolean"
      },
      {
        "defaultValue": "'default'",
        "name": "status",
        "required": false,
        "type": "HaloStatus"
      },
      {
        "defaultValue": "12",
        "name": "strokeWidth",
        "required": false,
        "type": "number"
      }
    ],
    "slots": []
  }
} as const satisfies Record<string, HaloComponentApi>
