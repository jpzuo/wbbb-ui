<template>
  <section v-if="section === 'overview'" class="halo-component-overview">
    <div>
      <p class="halo-component-overview__eyebrow">{{ categoryName }} · {{ component.interactive ? '可交互组件' : '展示组件' }}</p>
      <p class="halo-component-overview__description">{{ component.description }}</p>
    </div>
    <div class="halo-component-overview__import">
      <span>按需导入</span>
      <code>halo-ui/components/{{ component.slug }}</code>
    </div>
  </section>

  <section v-else-if="section === 'usage'" class="halo-example">
    <div class="halo-example__code">
      <div class="halo-example__toolbar">
        <span>示例代码</span>
        <button type="button" @click="copyCode">{{ copied ? '已复制' : '复制' }}</button>
      </div>
      <pre><code>{{ usageCode }}</code></pre>
    </div>
    <div class="halo-example__preview">
      <div class="halo-example__preview-bar"><span>真实移动端预览</span><a :href="previewUrl" target="_blank" rel="noreferrer">新窗口打开 ↗</a></div>
      <iframe :src="previewUrl" :title="`${component.name} Playground 预览`" loading="lazy" />
    </div>
  </section>

  <section v-else-if="section === 'states'" class="halo-component-states">
    <p>以下状态均可在右侧的真实 Playground 中操作与验收。</p>
    <div class="halo-state-list">
      <span v-for="state in component.states" :key="state" :class="{ 'is-semantic': component.semantic }">{{ state }}</span>
    </div>
    <p v-if="component.service" class="halo-callout">服务型组件需在应用根部挂载 <code>&lt;halo-overlay-host /&gt;</code>，未挂载时会回退到 uni-app 原生能力。</p>
  </section>

  <section v-else-if="section === 'api'" class="halo-component-api">
    <h3>Props</h3>
    <div class="halo-table-wrap">
      <table>
        <thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th></tr></thead>
        <tbody>
          <tr v-if="api.props.length === 0"><td colspan="4">无额外 Props</td></tr>
          <tr v-for="prop in api.props" :key="prop.name"><td><code>{{ prop.name }}</code></td><td><code>{{ prop.type }}</code></td><td><code>{{ prop.defaultValue }}</code></td><td>{{ prop.required ? '是' : '否' }}</td></tr>
        </tbody>
      </table>
    </div>
    <div class="halo-api-columns">
      <div><h3>Events</h3><ul v-if="api.events.length"><li v-for="event in api.events" :key="event"><code>{{ event }}</code></li></ul><p v-else>无事件</p></div>
      <div><h3>Slots</h3><ul v-if="api.slots.length"><li v-for="slot in api.slots" :key="slot"><code>{{ slot }}</code></li></ul><p v-else>无插槽</p></div>
      <div><h3>双向绑定</h3><p>{{ api.modelValue ? '支持 v-model（modelValue）。' : '不支持 v-model。' }}</p></div>
    </div>
  </section>

  <section v-else class="halo-component-platform">
    <p><strong>构建验证：</strong>H5、App Vue、微信小程序、支付宝小程序与抖音小程序。</p>
    <p><strong>运行时差异：</strong>H5 支持键盘焦点与减弱动效；小程序端使用等价触控交互。上传、日期选择和服务弹层应在目标端再次验收。</p>
    <div v-if="implementationHint" class="halo-callout"><strong>使用提示：</strong>{{ implementationHint }}</div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { componentApiMetadata } from '../../../../examples/playground/src/shared/api-metadata'
import { categoryMeta, componentBySlug } from '../../../../examples/playground/src/shared/component-catalog'

const props = withDefaults(defineProps<{ slug: string; section?: 'api' | 'overview' | 'platform' | 'states' | 'usage' }>(), { section: 'overview' })
const copied = ref(false)
const component = computed(() => componentBySlug[props.slug] ?? componentBySlug.button)
const api = computed(() => componentApiMetadata[component.value.slug] ?? { events: [], modelValue: false, props: [], slots: [] })
const categoryName = computed(() => categoryMeta[component.value.category].name)
const previewUrl = computed(() => `${__HALO_PLAYGROUND_URL__.replace(/\/$/, '')}/#/pages/component/detail?name=${component.value.slug}`)

const detailedHints: Record<string, string> = {
  'date-picker': '使用 start/end 约束可选范围；跨时区业务应统一由业务层传入日期字符串。',
  calendar: '空白日期不会被选中；minDate、maxDate 与 disabledDates 同时存在时，禁用规则优先。',
  form: '规则 API 兼容现有写法，内部使用 async-validator；调用 validate() 获取首条校验结果。',
  icon: '支持 64 个内置 Lucide 子集图标、图片 src、直接 fontFamily + code，以及注册式 fontSet + name。',
  'overlay-host': '服务组件优先使用 Overlay Host 的统一视觉；Host 未挂载时使用 uni-app 原生降级。',
  upload: '上传器由业务层注入；处理 beforeRead、失败、重试、删除与卸载取消，避免绑定云厂商 SDK。'
}

const implementationHint = computed(() => detailedHints[component.value.slug] ?? (component.value.service ? '服务调用可独立于全量安装使用，并由 Overlay Host 管理队列与视觉层级。' : '更多状态组合和跨端表现请在 Playground 中验证。'))

const detailedUsage: Record<string, string> = {
  checkbox: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { HaloCheckbox } from 'halo-ui/components/checkbox'\nimport 'halo-ui/styles/checkbox'\n\nconst value = ref<Array<string | number>>(['medium'])\nconst options = [\n  { label: '低', value: 'low' },\n  { label: '中', value: 'medium' },\n  { label: '高', value: 'high' }\n]\n<\/script>\n\n<template>\n  <HaloCheckbox v-model="value" :options="options" />\n</template>`,
  form: `<script setup lang="ts">\nimport { reactive, ref } from 'vue'\nimport { HaloForm } from 'halo-ui/components/form'\nimport { HaloField } from 'halo-ui/components/field'\nimport { HaloInput } from 'halo-ui/components/input'\nimport 'halo-ui/styles/form'\nimport 'halo-ui/styles/field'\nimport 'halo-ui/styles/input'\n\nconst formRef = ref<{ validate: () => Promise<boolean> }>()\nconst model = reactive({ name: '' })\nconst rules = { name: [{ required: true, min: 3, message: '至少输入 3 个字符' }] }\n\nasync function submit() {\n  if (await formRef.value?.validate()) { /* 提交业务请求 */ }\n}\n<\/script>\n\n<template>\n  <HaloForm ref="formRef" :model="model" :rules="rules">\n    <HaloField label="项目名称" prop="name"><HaloInput v-model="model.name" /></HaloField>\n  </HaloForm>\n</template>`,
  upload: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { HaloUpload } from 'halo-ui/components/upload'\nimport type { HaloUploadFile } from 'halo-ui/components/upload'\nimport 'halo-ui/styles/upload'\n\nconst files = ref<HaloUploadFile[]>([])\nasync function uploader(file: HaloUploadFile, { signal }: { signal?: AbortSignal } = {}) {\n  const result = await uploadToBusinessServer(file.path, { signal }) // 由业务层实现\n  return { ...file, path: result.url, status: 'success' as const }\n}\n<\/script>\n\n<template>\n  <HaloUpload v-model="files" :uploader="uploader" text="选择图片" />\n</template>`,
  calendar: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { HaloCalendar } from 'halo-ui/components/calendar'\nimport 'halo-ui/styles/calendar'\n\nconst date = ref('')\n<\/script>\n\n<template>\n  <HaloCalendar v-model="date" locale="zh-cn" min-date="2026-07-05" max-date="2026-07-25" :disabled-dates="['2026-07-12']" />\n</template>`,
  'date-picker': `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { HaloDatePicker } from 'halo-ui/components/date-picker'\nimport 'halo-ui/styles/date-picker'\n\nconst date = ref('')\n<\/script>\n\n<template>\n  <HaloDatePicker v-model="date" start="2026-07-01" end="2026-12-31" locale="zh-cn" />\n</template>`,
  icon: `<script setup lang="ts">\nimport { HaloIcon } from 'halo-ui/components/icon'\nimport 'halo-ui/styles/icon'\n<\/script>\n\n<template>\n  <HaloIcon name="search" :size="32" />\n  <HaloIcon src="/static/brand-mark.png" :size="32" />\n  <HaloIcon font-family="business-icons" code="e600" :size="32" />\n  <HaloIcon font-set="business" name="dashboard" :size="32" />\n</template>`,
  tabs: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { HaloTabs, HaloTabPanel } from 'halo-ui/components/tabs'\nimport 'halo-ui/styles/tabs'\n\nconst active = ref('overview')\nconst items = [{ name: 'overview', title: '概览' }, { name: 'activity', title: '动态' }]\n<\/script>\n\n<template>\n  <HaloTabs v-model="active" :items="items">\n    <HaloTabPanel name="overview">概览内容</HaloTabPanel>\n    <HaloTabPanel name="activity">动态内容</HaloTabPanel>\n  </HaloTabs>\n</template>`,
  'overlay-host': `<template>\n  <App />\n  <halo-overlay-host />\n</template>\n\n<script setup lang="ts">\nimport { showToast } from 'halo-ui/services/toast'\n\nshowToast({ title: '已启用 Overlay Host', icon: 'success' })\n<\/script>`
}

const serviceUsage: Record<string, string> = {
  toast: `<script setup lang="ts">\nimport { showToast } from 'halo-ui/services/toast'\n\nfunction open() { showToast({ title: '保存成功', icon: 'success' }) }\n<\/script>\n\n<template><button @click="open">显示提示</button></template>`,
  notify: `<script setup lang="ts">\nimport { showNotify } from 'halo-ui/services/notify'\n\nfunction open() { showNotify({ message: '数据已同步', type: 'success' }) }\n<\/script>\n\n<template><button @click="open">显示通知</button></template>`,
  dialog: `<script setup lang="ts">\nimport { showDialog } from 'halo-ui/services/dialog'\n\nasync function open() {\n  const confirmed = await showDialog({ title: '同步更新', content: '确认同步给团队吗？' })\n  if (confirmed) { /* 执行业务操作 */ }\n}\n<\/script>\n\n<template><button @click="open">打开确认框</button></template>`,
  'action-sheet': `<script setup lang="ts">\nimport { showActionSheet } from 'halo-ui/services/action-sheet'\n\nasync function open() {\n  const index = await showActionSheet({ itemList: ['保存草稿', '提交审核', '删除项目'] })\n  if (index !== undefined) { /* 根据 index 执行业务操作 */ }\n}\n<\/script>\n\n<template><button @click="open">选择操作</button></template>`
}

function pascalCase(value: string) {
  return `Halo${value.split('-').map((part) => part.slice(0, 1).toUpperCase() + part.slice(1)).join('')}`
}

const usageCode = computed(() => {
  const { name, slug, service } = component.value
  const componentName = pascalCase(slug)
  if (detailedUsage[slug]) return detailedUsage[slug]
  if (service && serviceUsage[slug]) return serviceUsage[slug]
  if (api.value.modelValue) {
    return `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { ${componentName} } from 'halo-ui/components/${slug}'\nimport 'halo-ui/styles/${slug}'\n\nconst value = ref('')\n<\/script>\n\n<template>\n  <${componentName} v-model="value" />\n</template>`
  }
  if (slug === 'button') {
    return `<script setup lang="ts">\nimport { HaloButton } from 'halo-ui/components/button'\nimport 'halo-ui/styles/button'\n<\/script>\n\n<template>\n  <HaloButton type="primary">确认提交</HaloButton>\n</template>`
  }
  return `<script setup lang="ts">\nimport { ${componentName} } from 'halo-ui/components/${slug}'\nimport 'halo-ui/styles/${slug}'\n<\/script>\n\n<template>\n  <${componentName} />\n</template>`
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
