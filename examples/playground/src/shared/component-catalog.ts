export type ComponentCategory = 'basic' | 'layout' | 'form' | 'feedback' | 'display'

export interface PlaygroundComponent {
  category: ComponentCategory
  description: string
  docSlug: string
  interactive: boolean
  name: string
  requiredStates: string[]
  semantic: boolean
  service: boolean
  slug: string
  states: string[]
}

export const categoryMeta: Record<ComponentCategory, { description: string; name: string }> = {
  basic: { description: '文本、图标和基础状态表达', name: '基础' },
  display: { description: '内容呈现与信息编排', name: '展示' },
  feedback: { description: '反馈、弹层和状态提示', name: '反馈' },
  form: { description: '输入、选择、校验与上传', name: '表单' },
  layout: { description: '页面结构、导航和容器', name: '布局' }
}

const componentDefinitions = [
  { category: 'basic', description: '主要操作、禁用与加载反馈', name: 'Button', slug: 'button' },
  { category: 'basic', description: '受控图标与自定义资源', name: 'Icon', slug: 'icon' },
  { category: 'basic', description: '语义化文字与省略处理', name: 'Text', slug: 'text' },
  { category: 'basic', description: '图片加载与失败占位', name: 'Image', slug: 'image' },
  { category: 'basic', description: '数字角标与状态点', name: 'Badge', slug: 'badge' },
  { category: 'basic', description: '轻量状态标签', name: 'Tag', slug: 'tag' },
  { category: 'basic', description: '头像与默认占位', name: 'Avatar', slug: 'avatar' },
  { category: 'basic', description: '内容分隔与文字说明', name: 'Divider', slug: 'divider' },
  { category: 'basic', description: '加载中的过程状态', name: 'Loading', slug: 'loading' },
  { category: 'layout', description: '信息行与分组容器', name: 'Cell', slug: 'cell' },
  { category: 'layout', description: '网格布局与子项', name: 'Grid', slug: 'grid' },
  { category: 'layout', description: '可选择的业务列表', name: 'List', slug: 'list' },
  { category: 'layout', description: '内容卡片与层级容器', name: 'Card', slug: 'card' },
  { category: 'layout', description: '吸顶内容区', name: 'Sticky', slug: 'sticky' },
  { category: 'layout', description: '设备安全区适配', name: 'SafeArea', slug: 'safe-area' },
  { category: 'layout', description: '页面导航栏', name: 'Navbar', slug: 'navbar' },
  { category: 'layout', description: '底部应用导航', name: 'Tabbar', slug: 'tabbar' },
  { category: 'layout', description: '内容标签切换', name: 'Tabs', slug: 'tabs' },
  { category: 'form', description: '单行文本输入', name: 'Input', slug: 'input' },
  { category: 'form', description: '多行文本与字数控制', name: 'Textarea', slug: 'textarea' },
  { category: 'form', description: '多项复选', name: 'Checkbox', slug: 'checkbox' },
  { category: 'form', description: '单项选择', name: 'Radio', slug: 'radio' },
  { category: 'form', description: '布尔开关', name: 'Switch', slug: 'switch' },
  { category: 'form', description: '基础选项选择器', name: 'Picker', slug: 'picker' },
  { category: 'form', description: '日期值选择', name: 'DatePicker', slug: 'date-picker' },
  { category: 'form', description: '精确数字步进', name: 'Stepper', slug: 'stepper' },
  { category: 'form', description: '范围值选择', name: 'Slider', slug: 'slider' },
  { category: 'form', description: '本地选择、上传钩子和失败反馈', name: 'Upload', slug: 'upload' },
  { category: 'form', description: '表单规则与校验', name: 'Form', slug: 'form' },
  { category: 'form', description: '字段标签和错误提示', name: 'Field', slug: 'field' },
  { category: 'feedback', description: '轻量短消息', name: 'Toast', slug: 'toast' },
  { category: 'feedback', description: '确认和取消对话框', name: 'Dialog', slug: 'dialog' },
  { category: 'feedback', description: '位置弹出层', name: 'Popup', slug: 'popup' },
  { category: 'feedback', description: '操作项面板', name: 'ActionSheet', slug: 'action-sheet' },
  { category: 'feedback', description: '页面顶部通知', name: 'Notify', slug: 'notify' },
  { category: 'feedback', description: '服务弹层的统一宿主', name: 'OverlayHost', slug: 'overlay-host' },
  { category: 'feedback', description: '内容加载骨架', name: 'Skeleton', slug: 'skeleton' },
  { category: 'feedback', description: '空内容状态', name: 'Empty', slug: 'empty' },
  { category: 'display', description: '重要通知横幅', name: 'NoticeBar', slug: 'notice-bar' },
  { category: 'display', description: '可展开的信息块', name: 'Collapse', slug: 'collapse' },
  { category: 'display', description: '轮播内容', name: 'Swiper', slug: 'swiper' },
  { category: 'display', description: '步骤进度', name: 'Steps', slug: 'steps' },
  { category: 'display', description: '时间线事件', name: 'Timeline', slug: 'timeline' },
  { category: 'display', description: '倒计时状态', name: 'CountDown', slug: 'count-down' },
  { category: 'display', description: '评分选择', name: 'Rate', slug: 'rate' },
  { category: 'display', description: '月历日期选择', name: 'Calendar', slug: 'calendar' },
  { category: 'display', description: '进度反馈', name: 'Progress', slug: 'progress' }
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
  return `halo-ui/components/${component.slug}`
}

export function componentsByCategory(category: ComponentCategory) {
  return playgroundComponents.filter((component) => component.category === category)
}
