<template>
  <section v-if="section === 'overview'" class="wbbb-component-overview">
    <div>
      <p class="wbbb-component-overview__eyebrow">{{ categoryName }} · {{ component.interactive ? copy.interactive : copy.display }}</p>
      <p class="wbbb-component-overview__description">{{ description }}</p>
    </div>
    <div class="wbbb-component-overview__import"><span>{{ copy.onDemand }}</span><code>wbbb-ui/components/{{ component.slug }}</code></div>
  </section>

  <section v-else-if="section === 'usage'" class="wbbb-example">
    <div class="wbbb-example__code">
      <div class="wbbb-example__toolbar"><span>{{ copy.example }}</span><button type="button" @click="copyCode">{{ copied ? copy.copied : copy.copy }}</button></div>
      <pre><code>{{ usageCode }}</code></pre>
    </div>
    <div class="wbbb-example__preview">
      <div class="wbbb-example__preview-bar"><span>{{ copy.mobilePreview }}</span><a :href="previewUrl" target="_blank" rel="noreferrer">{{ copy.openPreview }}</a></div>
      <div class="wbbb-example__preview-stage">
        <div class="wbbb-phone-frame" data-testid="mobile-preview-frame">
          <span class="wbbb-phone-frame__speaker" aria-hidden="true" />
          <iframe :src="previewUrl" :title="`${componentTitle} Playground`" />
        </div>
      </div>
    </div>
  </section>

  <section v-else-if="section === 'states'" class="wbbb-component-states">
    <p>{{ copy.stateIntro }}</p>
    <div class="wbbb-state-list"><span v-for="state in states" :key="state" :class="{ 'is-semantic': component.semantic }">{{ state }}</span></div>
    <p v-if="component.service" class="wbbb-callout">{{ copy.serviceIntro }} <code>&lt;wbbb-overlay-host /&gt;</code>{{ copy.serviceOutro }}</p>
  </section>

  <section v-else-if="section === 'api'" class="wbbb-component-api">
    <h3>{{ copy.props }}</h3>
    <div class="wbbb-table-wrap"><table><thead><tr><th>{{ copy.property }}</th><th>{{ copy.description }}</th><th>{{ copy.type }}</th><th>{{ copy.default }}</th><th>{{ copy.required }}</th></tr></thead><tbody>
      <tr v-if="api.props.length === 0"><td colspan="5">{{ copy.noProps }}</td></tr>
      <tr v-for="prop in api.props" :key="prop.name"><td><code>{{ prop.name }}</code></td><td class="wbbb-prop-description">{{ isEnglish ? prop.enDescription : prop.description }}</td><td><code>{{ prop.type }}</code></td><td><code>{{ prop.defaultValue }}</code></td><td>{{ prop.required ? copy.yes : copy.no }}</td></tr>
    </tbody></table></div>
    <div class="wbbb-api-columns">
      <div><h3>{{ copy.events }}</h3><ul v-if="api.events.length"><li v-for="event in api.events" :key="event"><code>{{ event }}</code></li></ul><p v-else>{{ copy.none }}</p></div>
      <div><h3>{{ copy.slots }}</h3><ul v-if="api.slots.length"><li v-for="slot in api.slots" :key="slot"><code>{{ slot }}</code></li></ul><p v-else>{{ copy.none }}</p></div>
      <div><h3>{{ copy.model }}</h3><p>{{ api.modelValue ? copy.supportsModel : copy.noModel }}</p></div>
    </div>
  </section>

  <section v-else class="wbbb-component-platform">
    <p><strong>{{ copy.buildVerified }}</strong>{{ copy.platforms }}</p>
    <p><strong>{{ copy.runtimeDifference }}</strong>{{ copy.runtimeText }}</p>
    <div class="wbbb-callout"><strong>{{ copy.usageHint }}</strong>{{ implementationHint }}</div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import { componentApiMetadata } from '../../../../examples/playground/src/shared/api-metadata'
import { categoryMeta, componentBySlug } from '../../../../examples/playground/src/shared/component-catalog'

const props = withDefaults(defineProps<{ slug: string; section?: 'api' | 'overview' | 'platform' | 'states' | 'usage' }>(), { section: 'overview' })
const { lang } = useData()
const copied = ref(false)
const component = computed(() => componentBySlug[props.slug] ?? componentBySlug.button)
const api = computed(() => componentApiMetadata[component.value.slug] ?? { events: [], modelValue: false, props: [], slots: [] })
const isEnglish = computed(() => lang.value === 'en-US')

const copy = computed(() => isEnglish.value
  ? {
      buildVerified: 'Build verification: ', copied: 'Copied', copy: 'Copy', default: 'Default', description: 'Description', display: 'Display component', events: 'Events', example: 'Example code', interactive: 'Interactive component', mobilePreview: 'Live mobile preview', model: 'Two-way binding', no: 'No', noModel: 'Does not support v-model.', noProps: 'No additional props', none: 'None', onDemand: 'On-demand import', openPreview: 'Open in a new tab ↗', platforms: 'H5, App Vue, WeChat Mini Program, Alipay Mini Program, and Douyin Mini Program.', property: 'Property', props: 'Props', required: 'Required', runtimeDifference: 'Runtime differences: ', runtimeText: 'H5 supports keyboard focus and reduced motion. Mini Programs provide equivalent touch interaction; verify upload, date selection, and overlays on target platforms.', serviceIntro: 'Service components use ', serviceOutro: ' for library visuals and fall back to uni-app native capability without a host.', slots: 'Slots', stateIntro: 'All listed states can be operated and verified in the live Playground preview.', supportsModel: 'Supports v-model (modelValue).', type: 'Type', usageHint: 'Usage note: ', yes: 'Yes'
    }
  : {
      buildVerified: '构建验证：', copied: '已复制', copy: '复制', default: '默认值', description: '说明', display: '展示组件', events: '事件（Events）', example: '示例代码', interactive: '可交互组件', mobilePreview: '真实移动端预览', model: '双向绑定', no: '否', noModel: '不支持 v-model。', noProps: '无额外属性', none: '无', onDemand: '按需导入', openPreview: '新窗口打开 ↗', platforms: 'H5、App Vue、微信小程序、支付宝小程序与抖音小程序。', property: '属性', props: '属性（Props）', required: '必填', runtimeDifference: '运行时差异：', runtimeText: 'H5 支持键盘焦点与减弱动效；小程序端使用等价触控交互。上传、日期选择和服务弹层应在目标端再次验收。', serviceIntro: '服务型组件需在应用根部挂载 ', serviceOutro: '；未挂载时会回退到 uni-app 原生能力。', slots: '插槽（Slots）', stateIntro: '以下状态均可在右侧的真实 Playground 中操作与验收。', supportsModel: '支持 v-model（modelValue）。', type: '类型', usageHint: '使用提示：', yes: '是'
    })

const componentTitle = computed(() => isEnglish.value ? `${component.value.name} ${component.value.zhName}` : `${component.value.zhName} ${component.value.name}`)
const categoryName = computed(() => isEnglish.value ? categoryMeta[component.value.category].enName : categoryMeta[component.value.category].name)
const description = computed(() => isEnglish.value ? component.value.enDescription : component.value.description)
const playgroundRoot = __WBBB_PLAYGROUND_URL__.replace(/\/?#\/?$/, '').replace(/\/+$/, '')
const previewUrl = computed(() => `${playgroundRoot}/#/pages/component/detail?name=${component.value.slug}`)

const stateTranslations: Record<string, string> = {
  '上传中': 'Uploading', '今天': 'Today', '信息': 'Info', '内容态': 'Content', '关闭': 'Closed', '加载中': 'Loading', '加载失败': 'Load failed', '加载失败回退': 'Load-failure fallback', '加载失败/空资源': 'Error / empty resource', '危险': 'Danger', '可选': 'Selectable', '可操作': 'Interactive', '成功': 'Success', '已填写': 'Filled', '展开动画': 'Expand animation', '已选中': 'Selected', '按压': 'Pressed', '文字卡片': 'Text card', '等待': 'Waiting', '空内容': 'Empty', '空资源': 'Empty source', '禁用': 'Disabled', '默认': 'Default', '错误': 'Error', '图片内容': 'Image content', '失败': 'Failed', '首字母': 'Initials', '默认图标': 'Default icon', '主色': 'Primary', '完成': 'Finished', '警告': 'Warning', '进行中': 'In progress', '末项无连线': 'No trailing connector', '焦点': 'Focus'
}
const states = computed(() => isEnglish.value ? component.value.states.map((state) => stateTranslations[state] ?? state) : component.value.states)

const hints = computed(() => isEnglish.value
  ? {
      'date-picker': 'Use start and end to constrain selectable dates. Pass normalized date strings from the business layer for cross-timezone workflows.',
      calendar: 'Empty cells are never selectable. Disabled-date rules take precedence when minDate, maxDate, and disabledDates coexist.',
      form: 'The existing rule API remains compatible and uses async-validator internally. Call validate() to obtain the validation result.',
      icon: 'Supports the 64-icon Lucide subset, image src, direct fontFamily + code, and registered fontSet + name sources.',
      'overlay-host': 'Service calls use the unified Overlay Host visual layer when available and retain a native uni-app fallback.',
      upload: 'Inject the uploader from the business layer and handle beforeRead, failures, retries, deletion, and cancellation.'
    }
  : {
      'date-picker': '使用 start/end 约束可选范围；跨时区业务应统一由业务层传入日期字符串。',
      calendar: '空白日期不会被选中；minDate、maxDate 与 disabledDates 同时存在时，禁用规则优先。',
      form: '规则 API 兼容现有写法，内部使用 async-validator；调用 validate() 获取校验结果。',
      icon: '支持 64 个内置 Lucide 子集图标、图片 src、直接 fontFamily + code，以及注册式 fontSet + name。',
      'overlay-host': '服务组件优先使用 Overlay Host 的统一视觉；Host 未挂载时使用 uni-app 原生降级。',
      upload: '上传器由业务层注入；处理 beforeRead、失败、重试、删除与卸载取消，避免绑定云厂商 SDK。'
    })
const implementationHint = computed(() => hints.value[component.value.slug] ?? (component.value.service ? (isEnglish.value ? 'Service APIs can be used without full installation and are queued by Overlay Host.' : '服务调用可独立于全量安装使用，并由 Overlay Host 管理队列与视觉层级。') : (isEnglish.value ? 'Use Playground to verify further state combinations and cross-platform behavior.' : '更多状态组合和跨端表现请在 Playground 中验证。')))

function pascalCase(value: string) {
  return `Wbbb${value.split('-').map((part) => part.slice(0, 1).toUpperCase() + part.slice(1)).join('')}`
}

const usageCode = computed(() => {
  const { slug, service } = component.value
  const componentName = pascalCase(slug)
  const english = isEnglish.value
  if (slug === 'button') return `<script setup lang="ts">\nimport { WbbbButton } from 'wbbb-ui/components/button'\nimport 'wbbb-ui/styles/button'\n<\/script>\n\n<template>\n  <WbbbButton type="primary">${english ? 'Submit' : '确认提交'}</WbbbButton>\n</template>`
  if (slug === 'calendar' || slug === 'date-picker') return `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { ${componentName} } from 'wbbb-ui/components/${slug}'\nimport 'wbbb-ui/styles/${slug}'\n\nconst value = ref('')\n<\/script>\n\n<template>\n  <${componentName} v-model="value" locale="${english ? 'en-US' : 'zh-CN'}" />\n</template>`
  if (slug === 'upload') return `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { WbbbUpload } from 'wbbb-ui/components/upload'\nimport type { WbbbUploadFile } from 'wbbb-ui/components/upload'\n\nconst files = ref<WbbbUploadFile[]>([])\nasync function uploader(file: WbbbUploadFile) {\n  return { ...file, path: await uploadToBusinessServer(file.path) }\n}\n<\/script>\n\n<template>\n  <WbbbUpload v-model="files" :uploader="uploader" locale="${english ? 'en-US' : 'zh-CN'}" />\n</template>`
  if (service && slug !== 'overlay-host') return `<script setup lang="ts">\nimport { show${component.value.name} } from 'wbbb-ui/services/${slug}'\n\nfunction open() { show${component.value.name}('${english ? 'Saved successfully' : '保存成功'}') }\n<\/script>\n\n<template><button @click="open">${english ? `Open ${component.value.name}` : `打开${component.value.zhName}`}</button></template>`
  if (api.value.modelValue) return `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { ${componentName} } from 'wbbb-ui/components/${slug}'\nimport 'wbbb-ui/styles/${slug}'\n\nconst value = ref('')\n<\/script>\n\n<template>\n  <${componentName} v-model="value" />\n</template>`
  return `<script setup lang="ts">\nimport { ${componentName} } from 'wbbb-ui/components/${slug}'\nimport 'wbbb-ui/styles/${slug}'\n<\/script>\n\n<template>\n  <${componentName} />\n</template>`
})

async function copyCode() {
  try {
    await navigator.clipboard.writeText(usageCode.value)
    copied.value = true
    window.setTimeout(() => { copied.value = false }, 1600)
  } catch {
    copied.value = false
  }
}
</script>
