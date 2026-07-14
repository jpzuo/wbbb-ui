import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const catalogPath = join(root, 'examples', 'playground', 'src', 'shared', 'component-catalog.ts')
const metadataPath = join(root, 'examples', 'playground', 'src', 'shared', 'api-metadata.ts')
const docsRoot = join(root, 'docs')
const componentDocsDirectory = join(docsRoot, 'components')
const englishDocsDirectory = join(docsRoot, 'en')
const englishComponentDocsDirectory = join(englishDocsDirectory, 'components')
const check = process.argv.includes('--check')
const catalog = readFileSync(catalogPath, 'utf8')
const definitions = [...catalog.matchAll(/\{ category: '([^']+)', description: '([^']*)', enDescription: '([^']*)', name: '([^']+)', slug: '([^']+)', zhName: '([^']+)' \}/g)]
  .map(([, category, description, enDescription, name, slug, zhName]) => ({ category, description, enDescription, name, slug, zhName }))

const categoryCopy = {
  basic: { en: 'Basic', zh: '基础' },
  display: { en: 'Display', zh: '展示' },
  feedback: { en: 'Feedback', zh: '反馈' },
  form: { en: 'Form', zh: '表单' },
  layout: { en: 'Layout', zh: '布局' }
}

const localizedDefaults = new Set([
  'action-sheet:cancelText',
  'date-picker:placeholder',
  'dialog:cancelText',
  'dialog:confirmText',
  'empty:description',
  'picker:placeholder',
  'upload:text'
])

const propDescriptions = {
  accordion: { en: 'Allows only one collapse item to stay expanded at a time.', zh: '是否限制同一时间只展开一个折叠项。' },
  actions: { en: 'Defines the available action items.', zh: '定义可供选择的操作项。' },
  active: { en: 'Identifies the current active item or step.', zh: '标识当前激活的项目或步骤。' },
  activeColor: { en: 'Sets the color used by the active state.', zh: '设置激活状态使用的颜色。' },
  alt: { en: 'Provides alternative text for an image resource.', zh: '提供图片资源的替代文本。' },
  animated: { en: 'Enables the component transition animation.', zh: '是否启用组件的过渡动画。' },
  autoHeight: { en: 'Makes the textarea grow with its content.', zh: '是否让文本域随内容自动增高。' },
  autoplay: { en: 'Automatically advances to the next slide.', zh: '是否自动切换到下一张轮播项。' },
  autoStart: { en: 'Starts timing automatically after mount.', zh: '是否在组件挂载后自动开始计时。' },
  avatar: { en: 'Sets the avatar image or avatar content source.', zh: '设置头像图片或头像内容来源。' },
  beforeRead: { en: 'Runs before file selection is accepted and can block the read.', zh: '文件读取前执行，可阻止文件被接收。' },
  block: { en: 'Makes the button occupy the full available width.', zh: '是否让按钮占满可用宽度。' },
  border: { en: 'Controls whether a separator or border is displayed.', zh: '控制是否显示分隔线或边框。' },
  bordered: { en: 'Controls whether the container renders an outer border.', zh: '控制容器是否渲染外边框。' },
  bottom: { en: 'Enables the bottom safe-area inset.', zh: '是否启用底部安全区留白。' },
  cancelText: { en: 'Overrides the cancel action label.', zh: '覆盖取消操作的文案。' },
  circular: { en: 'Allows the carousel to loop from the last item to the first.', zh: '是否允许轮播从最后一项循环到第一项。' },
  clearable: { en: 'Shows a control for clearing the current input value.', zh: '是否显示清空当前输入值的控件。' },
  clickable: { en: 'Marks the component as interactive and emits click events.', zh: '是否作为可点击项处理并触发点击事件。' },
  closable: { en: 'Shows a close control and allows the item to be dismissed.', zh: '是否显示关闭控件并允许用户关闭。' },
  closeable: { en: 'Allows the overlay or notification to be closed by the user.', zh: '是否允许用户关闭弹层或通知。' },
  closeOnClickOverlay: { en: 'Closes the overlay when its backdrop is pressed.', zh: '点击遮罩层时是否关闭弹层。' },
  code: { en: 'Provides the glyph code when rendering a font icon directly.', zh: '直接渲染字体图标时提供字形码点。' },
  color: { en: 'Sets the primary display color.', zh: '设置主要显示颜色。' },
  columns: { en: 'Sets the number of columns in the grid.', zh: '设置网格的列数。' },
  confirmText: { en: 'Overrides the confirm action label.', zh: '覆盖确认操作的文案。' },
  content: { en: 'Provides the main text content of the component.', zh: '提供组件的主要文本内容。' },
  count: { en: 'Sets the number of rendered placeholder rows or items.', zh: '设置渲染的占位行数或项目数。' },
  dashed: { en: 'Uses a dashed divider line instead of a solid one.', zh: '是否使用虚线分隔线而非实线。' },
  description: { en: 'Provides supporting descriptive text.', zh: '提供辅助说明文字。' },
  direction: { en: 'Sets the layout or divider direction.', zh: '设置布局或分隔线方向。' },
  disabled: { en: 'Prevents user interaction with the component.', zh: '是否禁止用户与组件交互。' },
  disabledDates: { en: 'Lists dates that cannot be selected.', zh: '指定不可选择的日期列表。' },
  dot: { en: 'Displays the badge as a small status dot.', zh: '是否将徽标显示为小型状态点。' },
  duration: { en: 'Sets the display or animation duration in milliseconds.', zh: '设置展示或动画时长，单位为毫秒。' },
  ellipsis: { en: 'Truncates overflowing text with an ellipsis.', zh: '文本溢出时是否以省略号截断。' },
  end: { en: 'Sets the latest selectable or valid value.', zh: '设置可选或有效值的结束边界。' },
  error: { en: 'Shows the component in its error visual state.', zh: '是否以错误视觉状态展示组件。' },
  errorText: { en: 'Sets the default message shown after a loading failure.', zh: '设置加载失败时显示的默认提示文案。' },
  extra: { en: 'Provides supplementary content in the component header.', zh: '提供组件头部的补充内容。' },
  fields: { en: 'Registers the form fields managed by the component.', zh: '注册由组件管理的表单字段。' },
  firstDayOfWeek: { en: 'Sets which weekday starts the calendar row.', zh: '设置日历每周的起始星期。' },
  fixed: { en: 'Fixes the component to its viewport position.', zh: '是否将组件固定在视口位置。' },
  fontFamily: { en: 'Sets the font family used for a direct font icon.', zh: '设置直接字体图标使用的字体族。' },
  fontSet: { en: 'Selects a registered Iconfont set.', zh: '选择已注册的 Iconfont 图标集。' },
  format: { en: 'Sets the output display format.', zh: '设置输出内容的展示格式。' },
  formType: { en: 'Sets the native form action performed by the button.', zh: '设置按钮触发的原生表单动作。' },
  gap: { en: 'Sets the spacing between repeated items.', zh: '设置重复项目之间的间距。' },
  height: { en: 'Sets the component height.', zh: '设置组件高度。' },
  icon: { en: 'Sets the icon name or icon content.', zh: '设置图标名称或图标内容。' },
  image: { en: 'Sets the image resource used by the item.', zh: '设置项目使用的图片资源。' },
  imageSize: { en: 'Sets the rendered size of the image.', zh: '设置图片的渲染尺寸。' },
  inactiveColor: { en: 'Sets the color used by the inactive state.', zh: '设置未激活状态使用的颜色。' },
  indicatorDots: { en: 'Shows pagination dots for carousel items.', zh: '是否显示轮播项目的分页指示点。' },
  interval: { en: 'Sets the delay between automatic carousel transitions in milliseconds.', zh: '设置轮播自动切换间隔，单位为毫秒。' },
  items: { en: 'Provides the data items rendered by the component.', zh: '提供组件需要渲染的数据项目。' },
  label: { en: 'Sets the visible field or item label.', zh: '设置字段或项目的可见标签。' },
  labelWidth: { en: 'Sets the width reserved for field labels.', zh: '设置表单标签预留的宽度。' },
  lazyLoad: { en: 'Defers image loading until it is needed.', zh: '是否延迟加载图片资源。' },
  leftArrow: { en: 'Shows a back arrow on the left side.', zh: '是否在左侧显示返回箭头。' },
  leftText: { en: 'Sets the text shown on the left side.', zh: '设置左侧显示的文字。' },
  loading: { en: 'Shows a loading state and blocks repeated interaction when applicable.', zh: '是否显示加载状态，并在适用时阻止重复交互。' },
  loadingText: { en: 'Sets the text displayed while loading.', zh: '设置加载过程显示的文案。' },
  locale: { en: 'Overrides the locale used for built-in display copy.', zh: '覆盖组件内置文案使用的语言。' },
  max: { en: 'Sets the maximum allowed numeric value.', zh: '设置允许的最大数值。' },
  maxDate: { en: 'Sets the latest date that can be selected.', zh: '设置可选择的最晚日期。' },
  maxlength: { en: 'Limits the number of characters that can be entered.', zh: '限制允许输入的最大字符数。' },
  message: { en: 'Provides the notification or feedback message.', zh: '提供通知或反馈消息内容。' },
  min: { en: 'Sets the minimum allowed numeric value.', zh: '设置允许的最小数值。' },
  minDate: { en: 'Sets the earliest date that can be selected.', zh: '设置可选择的最早日期。' },
  mode: { en: 'Sets the display or image fitting mode.', zh: '设置展示方式或图片适配模式。' },
  model: { en: 'Provides the data model used by the component.', zh: '提供组件使用的数据模型。' },
  modelValue: { en: 'Provides the current value used by v-model.', zh: '提供 v-model 使用的当前值。' },
  month: { en: 'Sets the month displayed by the calendar.', zh: '设置日历当前显示的月份。' },
  name: { en: 'Provides the item name or identifier.', zh: '提供项目名称或唯一标识。' },
  offsetTop: { en: 'Sets the distance from the top before sticky positioning starts.', zh: '设置触发吸顶前距顶部的偏移量。' },
  openType: { en: 'Sets the uni-app open capability used by the button.', zh: '设置按钮使用的 uni-app 开放能力类型。' },
  options: { en: 'Provides selectable option data.', zh: '提供可选择的选项数据。' },
  percentage: { en: 'Sets the progress percentage to display.', zh: '设置需要展示的进度百分比。' },
  placeholder: { en: 'Sets placeholder text when no value is present.', zh: '设置尚未输入或选择时的占位文案。' },
  placement: { en: 'Sets where the overlay or pop-up is positioned.', zh: '设置弹层或浮层的展示位置。' },
  plain: { en: 'Uses the outlined or low-emphasis visual style.', zh: '是否使用描边或低强调视觉样式。' },
  prop: { en: 'Associates the field with a key in the form model.', zh: '将表单项关联到表单模型中的字段键。' },
  radius: { en: 'Sets the corner radius of the component.', zh: '设置组件的圆角半径。' },
  readonly: { en: 'Prevents editing while keeping the value readable.', zh: '是否禁止编辑但保留内容可读。' },
  required: { en: 'Marks the field as required for validation or display.', zh: '是否将字段标记为必填以用于校验或展示。' },
  rightText: { en: 'Sets the text shown on the right side.', zh: '设置右侧显示的文字。' },
  round: { en: 'Uses fully rounded corners or a pill shape.', zh: '是否使用全圆角或胶囊形外观。' },
  rows: { en: 'Sets the number of visible text rows.', zh: '设置可见的文本行数。' },
  rules: { en: 'Provides validation rules for the form or field.', zh: '提供表单或字段的校验规则。' },
  safeAreaInsetBottom: { en: 'Adds padding for the device bottom safe area.', zh: '是否为设备底部安全区增加留白。' },
  safeAreaTop: { en: 'Adds padding for the device top safe area.', zh: '是否为设备顶部安全区增加留白。' },
  scrollable: { en: 'Allows tab items to scroll horizontally when needed.', zh: '标签项超出宽度时是否允许横向滚动。' },
  shadow: { en: 'Adds an elevated shadow to the component.', zh: '是否为组件添加层级阴影。' },
  showCancel: { en: 'Controls whether the cancel action is shown.', zh: '控制是否显示取消操作。' },
  showCount: { en: 'Shows the current character count.', zh: '是否显示当前输入字数。' },
  showError: { en: 'Controls whether the built-in error placeholder is shown.', zh: '控制是否显示内置错误占位。' },
  showLoading: { en: 'Controls whether the built-in loading placeholder is shown.', zh: '控制是否显示内置加载占位。' },
  showText: { en: 'Controls whether accompanying text is displayed.', zh: '控制是否显示辅助文字。' },
  showValue: { en: 'Controls whether the current value is displayed.', zh: '控制是否显示当前数值。' },
  showZero: { en: 'Keeps a zero value visible in a badge.', zh: '徽标值为零时是否仍然显示。' },
  size: { en: 'Sets the component size.', zh: '设置组件尺寸。' },
  src: { en: 'Sets the source URL or local path of the resource.', zh: '设置资源的 URL 或本地路径。' },
  start: { en: 'Sets the earliest selectable or valid value.', zh: '设置可选或有效值的起始边界。' },
  status: { en: 'Sets the semantic status used for display.', zh: '设置展示使用的语义状态。' },
  step: { en: 'Sets the increment used when changing a numeric value.', zh: '设置数值变化时使用的步长。' },
  strokeWidth: { en: 'Sets the thickness of the progress stroke.', zh: '设置进度条描边的粗细。' },
  text: { en: 'Provides the primary display text.', zh: '提供主要展示文案。' },
  textPosition: { en: 'Sets the position of text relative to the divider.', zh: '设置文字相对分隔线的位置。' },
  time: { en: 'Sets the remaining time or target time value.', zh: '设置剩余时间或目标时间值。' },
  title: { en: 'Sets the component title text.', zh: '设置组件标题文字。' },
  top: { en: 'Enables the top safe-area inset.', zh: '是否启用顶部安全区留白。' },
  type: { en: 'Sets the semantic type or variant of the component.', zh: '设置组件的语义类型或样式变体。' },
  uploader: { en: 'Provides the business-layer upload implementation.', zh: '提供由业务层注入的上传实现。' },
  value: { en: 'Provides the displayed value or item value.', zh: '提供展示值或项目值。' },
  vertical: { en: 'Uses a vertical layout direction.', zh: '是否使用纵向布局方向。' },
  width: { en: 'Sets the component width.', zh: '设置组件宽度。' },
  zIndex: { en: 'Sets the stacking order of the component.', zh: '设置组件的层叠层级。' }
}

function propDescription(name, locale) {
  const description = propDescriptions[name]
  if (description) return description[locale]
  return locale === 'zh' ? `配置组件的 ${name} 属性。` : `Configures the component ${name} property.`
}

function propsFor(slug) {
  const path = join(root, 'packages', 'wbbb-ui', 'components', `wbbb-${slug}`, 'props.ts')
  if (!existsSync(path)) return []
  const source = readFileSync(path, 'utf8')
  const body = source.match(/export interface \w+Props[^\{]*\{([\s\S]*?)\n\}/)?.[1] ?? ''

  return [...body.matchAll(/^\s{2}([\w$]+)(\?)?:\s*([^\n]+)$/gm)].map(([, name, optional, type]) => ({
    name,
    required: optional !== '?',
    type: type.trim().replace(/\|/g, '\\|')
  }))
}

function componentSource(slug) {
  const path = join(root, 'packages', 'wbbb-ui', 'components', `wbbb-${slug}`, `wbbb-${slug}.vue`)
  return existsSync(path) ? readFileSync(path, 'utf8') : ''
}

function eventsFor(source) {
  const block = source.match(/defineEmits<\{([\s\S]*?)\}>\(\)/)?.[1] ?? ''
  return [...block.matchAll(/^\s*'([^']+)'|^\s*([\w$]+):/gm)].map((match) => match[1] ?? match[2])
}

function slotsFor(source) {
  const slots = new Set()
  for (const match of source.matchAll(/<slot(?:\s+name="([^"]+)")?/g)) slots.add(match[1] ?? 'default')
  return [...slots]
}

function defaultFor(source, slug, prop, locale = 'zh') {
  if (localizedDefaults.has(`${slug}:${prop}`)) return locale === 'zh' ? '由 locale 决定' : 'Locale-dependent'
  const pattern = new RegExp(`(?:^|\\n)\\s*${prop}:\\s*([^,\\n]+)`, 'm')
  return source.match(pattern)?.[1]?.trim() ?? '—'
}

function apiPage(locale, metadata) {
  const zh = locale === 'zh'
  const copy = zh
    ? { category: '组件分类', default: '默认值', description: '说明', empty: '无', events: '事件（Events）', import: '导入路径', intro: '此文件由组件 Props 与 SFC 契约自动生成。公开 API 变更后请执行 `npm run docs:api`。', name: '属性', props: '属性（Props）', required: '必填', slots: '插槽（Slots）', title: 'Wbbb UI API 参考', type: '类型', yes: '是', no: '否' }
    : { category: 'Category', default: 'Default', description: 'Description', empty: 'None', events: 'Events', import: 'Import', intro: 'This file is generated from component props and SFC contracts. Run `npm run docs:api` after a public API change.', name: 'Name', props: 'Props', required: 'Required', slots: 'Slots', title: 'Wbbb UI API Reference', type: 'Type', yes: 'Yes', no: 'No' }
  const lines = [`# ${copy.title}`, '', `> ${copy.intro}`, '', zh ? '除非另有说明，所有组件都通过 `WbbbCommonProps` 支持 `customClass` 与 `customStyle`。' : 'All components support `customClass` and `customStyle` through `WbbbCommonProps` unless noted otherwise.', '']

  for (const component of definitions) {
    const api = metadata[component.slug]
    const title = zh ? `${component.zhName} ${component.name}` : `${component.name} ${component.zhName}`
    lines.push(`## ${title}`, '', zh ? component.description : component.enDescription, '')
    lines.push(`- ${copy.category}: ${zh ? categoryCopy[component.category].zh : categoryCopy[component.category].en}`, `- ${copy.import}: \`wbbb-ui/components/${component.slug}\``, '')
    lines.push(`### ${copy.props}`, '', `| ${copy.name} | ${copy.description} | ${copy.type} | ${copy.required} | ${copy.default} |`, '| --- | --- | --- | --- | --- |')
    if (api.props.length === 0) lines.push(`| ${copy.empty} | ${copy.empty} | ${copy.empty} | ${copy.empty} | ${copy.empty} |`)
    else api.props.forEach((prop) => lines.push(`| ${prop.name} | ${zh ? prop.description : prop.enDescription} | \`${prop.type}\` | ${prop.required ? copy.yes : copy.no} | \`${prop.defaultValue}\` |`))
    lines.push('', `### ${copy.events}`, '')
    lines.push(api.events.length ? api.events.map((event) => `- \`${event}\``).join('\n') : `- ${copy.empty}`, '', `### ${copy.slots}`, '')
    lines.push(api.slots.length ? api.slots.map((slot) => `- \`${slot}\``).join('\n') : `- ${copy.empty}`, '')
  }

  return `${lines.join('\n')}\n`
}

function componentPage(component, locale) {
  const zh = locale === 'zh'
  const title = zh ? `${component.zhName} ${component.name}` : `${component.name} ${component.zhName}`
  const description = zh ? component.description : component.enDescription
  const sections = zh
    ? ['基础用法', '状态与交互', 'API 参考', '平台说明']
    : ['Basic Usage', 'States and Interaction', 'API Reference', 'Platform Notes']
  return `---\ntitle: ${title}\ndescription: ${description}\noutline: [2, 3]\n---\n\n# ${title}\n\n<ComponentDoc slug="${component.slug}" section="overview" />\n\n## ${sections[0]}\n\n<ComponentDoc slug="${component.slug}" section="usage" />\n\n## ${sections[1]}\n\n<ComponentDoc slug="${component.slug}" section="states" />\n\n## ${sections[2]}\n\n<ComponentDoc slug="${component.slug}" section="api" />\n\n## ${sections[3]}\n\n<ComponentDoc slug="${component.slug}" section="platform" />\n`
}

const metadata = {}
for (const component of definitions) {
  const source = componentSource(component.slug)
  const props = propsFor(component.slug)
  metadata[component.slug] = {
    events: eventsFor(source),
    modelValue: props.some((prop) => prop.name === 'modelValue'),
    props: props.map((prop) => ({
      defaultValue: defaultFor(source, component.slug, prop.name),
      description: propDescription(prop.name, 'zh'),
      enDescription: propDescription(prop.name, 'en'),
      name: prop.name,
      required: prop.required,
      type: prop.type
    })),
    slots: slotsFor(source)
  }
}

const metadataOutput = `export interface WbbbApiProp {\n  defaultValue: string\n  description: string\n  enDescription: string\n  name: string\n  required: boolean\n  type: string\n}\n\nexport interface WbbbComponentApi {\n  events: readonly string[]\n  modelValue: boolean\n  props: readonly WbbbApiProp[]\n  slots: readonly string[]\n}\n\nexport const componentApiMetadata = ${JSON.stringify(metadata, null, 2)} as const satisfies Record<string, WbbbComponentApi>\n`
const generatedFiles = new Map([
  [join(docsRoot, 'api.md'), apiPage('zh', metadata)],
  [join(englishDocsDirectory, 'api.md'), apiPage('en', metadata)],
  ...definitions.flatMap((component) => [
    [join(componentDocsDirectory, `${component.slug}.md`), componentPage(component, 'zh')],
    [join(englishComponentDocsDirectory, `${component.slug}.md`), componentPage(component, 'en')]
  ])
])

function isCurrent(path, content) {
  return existsSync(path) && readFileSync(path, 'utf8') === content
}

if (check) {
  if (!isCurrent(metadataPath, metadataOutput) || [...generatedFiles].some(([path, content]) => !isCurrent(path, content))) {
    console.error('Generated API documentation is out of date. Run npm run docs:api.')
    process.exit(1)
  }
} else {
  mkdirSync(componentDocsDirectory, { recursive: true })
  mkdirSync(englishComponentDocsDirectory, { recursive: true })
  writeFileSync(metadataPath, metadataOutput)
  generatedFiles.forEach((content, path) => {
    mkdirSync(dirname(path), { recursive: true })
    writeFileSync(path, content)
  })
  console.log(`Generated bilingual API docs and ${definitions.length * 2} component pages.`)
}
