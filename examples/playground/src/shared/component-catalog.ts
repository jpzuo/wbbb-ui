export type ComponentCategory = 'basic' | 'layout' | 'form' | 'feedback' | 'display'

export interface PlaygroundComponent {
  category: ComponentCategory
  description: string
  enDescription: string
  docSlug: string
  interactive: boolean
  name: string
  requiredStates: string[]
  semantic: boolean
  service: boolean
  slug: string
  states: string[]
  zhName: string
}

export const categoryMeta: Record<ComponentCategory, { description: string; enDescription: string; enName: string; name: string }> = {
  basic: { description: '文本、图标和基础状态表达', enDescription: 'Text, icons, and foundational state expression.', enName: 'Basic', name: '基础' },
  display: { description: '内容呈现与信息编排', enDescription: 'Content presentation and information composition.', enName: 'Display', name: '展示' },
  feedback: { description: '反馈、弹层和状态提示', enDescription: 'Feedback, overlays, and status messaging.', enName: 'Feedback', name: '反馈' },
  form: { description: '输入、选择、校验与上传', enDescription: 'Input, selection, validation, and upload.', enName: 'Form', name: '表单' },
  layout: { description: '页面结构、导航和容器', enDescription: 'Page structure, navigation, and containers.', enName: 'Layout', name: '布局' }
}

const componentDefinitions = [
  { category: 'basic', description: '主要操作、禁用与加载反馈', enDescription: 'Primary actions with disabled and loading feedback.', name: 'Button', slug: 'button', zhName: '按钮' },
  { category: 'basic', description: '受控图标与自定义资源', enDescription: 'Controlled icons and custom sources.', name: 'Icon', slug: 'icon', zhName: '图标' },
  { category: 'basic', description: '语义化文字与省略处理', enDescription: 'Semantic text and ellipsis handling.', name: 'Text', slug: 'text', zhName: '文本' },
  { category: 'basic', description: '图片加载与失败占位', enDescription: 'Image loading and error placeholders.', name: 'Image', slug: 'image', zhName: '图片' },
  { category: 'basic', description: '数字角标与状态点', enDescription: 'Numeric badges and status dots.', name: 'Badge', slug: 'badge', zhName: '徽标' },
  { category: 'basic', description: '轻量状态标签', enDescription: 'Compact status tags.', name: 'Tag', slug: 'tag', zhName: '标签' },
  { category: 'basic', description: '头像与默认占位', enDescription: 'Avatars and fallback placeholders.', name: 'Avatar', slug: 'avatar', zhName: '头像' },
  { category: 'basic', description: '内容分隔与文字说明', enDescription: 'Content separators and labels.', name: 'Divider', slug: 'divider', zhName: '分割线' },
  { category: 'basic', description: '加载中的过程状态', enDescription: 'Progress feedback while loading.', name: 'Loading', slug: 'loading', zhName: '加载' },
  { category: 'layout', description: '信息行与分组容器', enDescription: 'Information rows and grouped containers.', name: 'Cell', slug: 'cell', zhName: '单元格' },
  { category: 'layout', description: '网格布局与子项', enDescription: 'Grid layouts and grid items.', name: 'Grid', slug: 'grid', zhName: '宫格' },
  { category: 'layout', description: '可选择的业务列表', enDescription: 'Selectable business lists.', name: 'List', slug: 'list', zhName: '列表' },
  { category: 'layout', description: '内容卡片与层级容器', enDescription: 'Content cards and layered containers.', name: 'Card', slug: 'card', zhName: '卡片' },
  { category: 'layout', description: '吸顶内容区', enDescription: 'Sticky content areas.', name: 'Sticky', slug: 'sticky', zhName: '吸顶' },
  { category: 'layout', description: '设备安全区适配', enDescription: 'Device safe-area adaptation.', name: 'SafeArea', slug: 'safe-area', zhName: '安全区' },
  { category: 'layout', description: '页面导航栏', enDescription: 'Page navigation bars.', name: 'Navbar', slug: 'navbar', zhName: '导航栏' },
  { category: 'layout', description: '底部应用导航', enDescription: 'Bottom application navigation.', name: 'Tabbar', slug: 'tabbar', zhName: '底部导航栏' },
  { category: 'layout', description: '内容标签切换', enDescription: 'Content tab switching.', name: 'Tabs', slug: 'tabs', zhName: '标签页' },
  { category: 'form', description: '单行文本输入', enDescription: 'Single-line text input.', name: 'Input', slug: 'input', zhName: '输入框' },
  { category: 'form', description: '多行文本与字数控制', enDescription: 'Multi-line text with character counting.', name: 'Textarea', slug: 'textarea', zhName: '文本域' },
  { category: 'form', description: '多项复选', enDescription: 'Multiple option selection.', name: 'Checkbox', slug: 'checkbox', zhName: '复选框' },
  { category: 'form', description: '单项选择', enDescription: 'Single option selection.', name: 'Radio', slug: 'radio', zhName: '单选框' },
  { category: 'form', description: '布尔开关', enDescription: 'Boolean switches.', name: 'Switch', slug: 'switch', zhName: '开关' },
  { category: 'form', description: '基础选项选择器', enDescription: 'Basic option picker.', name: 'Picker', slug: 'picker', zhName: '选择器' },
  { category: 'form', description: '日期值选择', enDescription: 'Date value selection.', name: 'DatePicker', slug: 'date-picker', zhName: '日期选择器' },
  { category: 'form', description: '精确数字步进', enDescription: 'Precise numeric stepping.', name: 'Stepper', slug: 'stepper', zhName: '步进器' },
  { category: 'form', description: '范围值选择', enDescription: 'Range value selection.', name: 'Slider', slug: 'slider', zhName: '滑块' },
  { category: 'form', description: '本地选择、上传钩子和失败反馈', enDescription: 'Local selection, upload hooks, and failure feedback.', name: 'Upload', slug: 'upload', zhName: '上传' },
  { category: 'form', description: '表单规则与校验', enDescription: 'Form rules and validation.', name: 'Form', slug: 'form', zhName: '表单' },
  { category: 'form', description: '字段标签和错误提示', enDescription: 'Field labels and error messages.', name: 'Field', slug: 'field', zhName: '表单项' },
  { category: 'feedback', description: '轻量短消息', enDescription: 'Lightweight short messages.', name: 'Toast', slug: 'toast', zhName: '轻提示' },
  { category: 'feedback', description: '确认和取消对话框', enDescription: 'Confirmation and cancellation dialogs.', name: 'Dialog', slug: 'dialog', zhName: '对话框' },
  { category: 'feedback', description: '位置弹出层', enDescription: 'Positioned popup layers.', name: 'Popup', slug: 'popup', zhName: '弹出层' },
  { category: 'feedback', description: '操作项面板', enDescription: 'Action option sheets.', name: 'ActionSheet', slug: 'action-sheet', zhName: '动作面板' },
  { category: 'feedback', description: '页面顶部通知', enDescription: 'Page-top notifications.', name: 'Notify', slug: 'notify', zhName: '消息通知' },
  { category: 'feedback', description: '服务弹层的统一宿主', enDescription: 'Shared host for service overlays.', name: 'OverlayHost', slug: 'overlay-host', zhName: '遮罩宿主' },
  { category: 'feedback', description: '内容加载骨架', enDescription: 'Content loading skeletons.', name: 'Skeleton', slug: 'skeleton', zhName: '骨架屏' },
  { category: 'feedback', description: '空内容状态', enDescription: 'Empty content states.', name: 'Empty', slug: 'empty', zhName: '空状态' },
  { category: 'display', description: '重要通知横幅', enDescription: 'Important notification banners.', name: 'NoticeBar', slug: 'notice-bar', zhName: '通知栏' },
  { category: 'display', description: '可展开的信息块', enDescription: 'Expandable information panels.', name: 'Collapse', slug: 'collapse', zhName: '折叠面板' },
  { category: 'display', description: '轮播内容', enDescription: 'Carousel content.', name: 'Swiper', slug: 'swiper', zhName: '轮播' },
  { category: 'display', description: '步骤进度', enDescription: 'Step progress.', name: 'Steps', slug: 'steps', zhName: '步骤条' },
  { category: 'display', description: '时间线事件', enDescription: 'Timeline events.', name: 'Timeline', slug: 'timeline', zhName: '时间线' },
  { category: 'display', description: '倒计时状态', enDescription: 'Countdown states.', name: 'CountDown', slug: 'count-down', zhName: '倒计时' },
  { category: 'display', description: '评分选择', enDescription: 'Rating selection.', name: 'Rate', slug: 'rate', zhName: '评分' },
  { category: 'display', description: '月历日期选择', enDescription: 'Monthly calendar date selection.', name: 'Calendar', slug: 'calendar', zhName: '日历' },
  { category: 'display', description: '进度反馈', enDescription: 'Progress feedback.', name: 'Progress', slug: 'progress', zhName: '进度条' }
] as const

const semanticComponents = new Set(['badge', 'button', 'notice-bar', 'notify', 'progress', 'steps', 'tag', 'text', 'timeline'])
const interactiveComponents = new Set(['action-sheet', 'button', 'calendar', 'cell', 'checkbox', 'collapse', 'date-picker', 'dialog', 'grid', 'input', 'list', 'picker', 'popup', 'radio', 'rate', 'slider', 'stepper', 'switch', 'tabbar', 'tabs', 'textarea', 'upload'])
const formComponents = new Set(['checkbox', 'date-picker', 'field', 'form', 'input', 'picker', 'radio', 'rate', 'slider', 'stepper', 'switch', 'textarea', 'upload'])
const feedbackComponents = new Set(['empty', 'image', 'loading', 'progress', 'skeleton', 'upload'])
const serviceComponents = new Set(['action-sheet', 'dialog', 'notify', 'overlay-host', 'toast'])
const explicitStates: Record<string, string[]> = {
  avatar: ['图片', '加载失败回退', '首字母', '默认图标'],
  calendar: ['默认', '今天', '选中', '禁用日期'],
  collapse: ['关闭', '展开动效', '禁用'],
  empty: ['空内容', '操作入口'],
  image: ['成功', '加载中', '加载失败', '空资源'],
  steps: ['完成', '进行中', '等待', '错误'],
  swiper: ['图片内容', '加载中', '图片失败', '文字卡片'],
  timeline: ['默认', '成功', '信息', '末项无连线']
}

function stateContract(slug: string): Pick<PlaygroundComponent, 'interactive' | 'requiredStates' | 'semantic' | 'service' | 'states'> {
  const semantic = semanticComponents.has(slug)
  const form = formComponents.has(slug)
  const feedback = feedbackComponents.has(slug)
  const interactive = interactiveComponents.has(slug)
  const states = explicitStates[slug] ?? (semantic
    ? ['默认', '主色', '成功', '警告', '危险', '信息']
    : form
      ? ['默认', '已填写', '焦点', '禁用', '错误']
      : feedback
        ? ['默认', '加载', '空态 / 失败', '完成']
        : interactive
          ? ['默认', '按压', '选中', '禁用']
          : ['默认', '内容态'])

  return { interactive, requiredStates: states, semantic, service: serviceComponents.has(slug), states }
}

export const playgroundComponents = componentDefinitions.map((component) => ({ ...component, docSlug: component.slug, ...stateContract(component.slug) })) satisfies readonly PlaygroundComponent[]

export const componentBySlug = Object.fromEntries(playgroundComponents.map((component) => [component.slug, component])) as Record<string, PlaygroundComponent>

export function importPath(component: PlaygroundComponent) {
  return `wbbb-ui/components/${component.slug}`
}

export function componentsByCategory(category: ComponentCategory) {
  return playgroundComponents.filter((component) => component.category === category)
}
