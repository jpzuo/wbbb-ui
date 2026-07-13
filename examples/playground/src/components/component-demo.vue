<template>
  <view class="demo">
    <view v-if="slug === 'button'" class="demo__row"><halo-button>默认</halo-button><halo-button type="primary">主色</halo-button><halo-button type="success">成功</halo-button><halo-button type="warning">警告</halo-button><halo-button type="danger">危险</halo-button><halo-button type="info">信息</halo-button><halo-button disabled>禁用</halo-button><halo-button loading type="primary">加载</halo-button></view>
    <view v-else-if="slug === 'icon'" class="demo__stack"><view class="icon-demo__grid"><view v-for="icon in haloCoreIcons" :key="icon" class="icon-demo__item"><halo-icon :name="icon" :size="34" /><text>{{ icon }}</text></view></view><view class="icon-demo__sources"><view><halo-icon font-family="Halo Icons" :code="directIconCode" :size="36" /><text>直接码点</text></view><view><halo-icon font-set="playground" name="dashboard" :size="36" /><text>注册字体集</text></view><view><halo-icon :src="coverBlue" :size="36" /><text>图片资源</text></view></view></view>
    <view v-else-if="slug === 'text'" class="demo__stack"><view class="demo__row"><halo-text type="primary">主色文本</halo-text><halo-text type="success">成功</halo-text><halo-text type="warning">警告</halo-text><halo-text type="danger">危险</halo-text><halo-text type="secondary">辅助信息</halo-text></view><halo-text ellipsis>这是一段超出容器后自动省略的辅助说明文本。</halo-text></view>
    <view v-else-if="slug === 'image'" class="demo__row"><halo-image :src="coverBlue" width="200" height="120" radius="12" /><halo-image loading width="200" height="120" radius="12" /><halo-image :src="missingMedia" width="200" height="120" radius="12"><template #error><halo-icon name="warning" :size="30" /><text>资源不存在</text></template></halo-image></view>
    <view v-else-if="slug === 'badge'" class="demo__row"><halo-badge v-for="type in semanticTypes" :key="type" :type="type" :value="8"><halo-avatar :alt="type.slice(0, 1).toUpperCase()" /></halo-badge><halo-badge dot type="danger"><halo-button size="small">消息</halo-button></halo-badge></view>
    <view v-else-if="slug === 'tag'" class="demo__row"><halo-tag v-for="type in semanticTypes" :key="type" :type="type" round>{{ semanticLabels[type] }}</halo-tag><halo-tag type="danger" plain>轮廓危险</halo-tag></view>
    <view v-else-if="slug === 'avatar'" class="demo__row"><halo-avatar :src="avatarBlue" alt="HU" :size="88" /><halo-avatar :src="avatarGreen" alt="A" :size="72" /><halo-avatar :src="missingMedia" alt="F" :size="64" /><halo-avatar alt="" :size="56" /></view>
    <view v-else-if="slug === 'divider'" class="demo__stack"><halo-divider>分组标题</halo-divider><halo-divider dashed /></view>
    <view v-else-if="slug === 'loading'" class="demo__row"><halo-loading text="正在同步" /><halo-loading vertical color="var(--halo-color-primary)" text="加载中" /></view>

    <view v-else-if="slug === 'cell'" class="demo__stack"><halo-cell-group title="项目设置" inset><halo-cell title="通知" label="接收更新提醒" value="已开启" clickable /><halo-cell title="成员" value="8 人" icon="info" clickable /></halo-cell-group></view>
    <view v-else-if="slug === 'grid'" class="demo__stack"><halo-grid :columns="3" bordered><halo-grid-item v-for="item in gridItems" :key="item.text" :text="item.text" :icon="item.icon" clickable /></halo-grid><text class="demo__hint">点击任一入口可验证网格项交互。</text></view>
    <view v-else-if="slug === 'list'" class="demo__stack"><halo-list :items="listItems" @select="selectItem" /></view>
    <view v-else-if="slug === 'card'" class="demo__stack"><halo-card title="本周进展" extra="查看全部" shadow><halo-progress :percentage="72" status="success" /></halo-card></view>
    <view v-else-if="slug === 'sticky'" class="demo__stack"><halo-sticky><halo-notice-bar text="吸顶区域示例" /></halo-sticky><text class="demo__hint">滚动页面时观察顶部定位。</text></view>
    <view v-else-if="slug === 'safe-area'" class="demo__stack"><view class="safe-demo">内容区</view><halo-safe-area position="bottom" /></view>
    <view v-else-if="slug === 'navbar'" class="demo__stack"><halo-navbar title="项目详情" left-arrow left-text="返回" right-text="编辑" /></view>
    <view v-else-if="slug === 'tabbar'" class="demo__stack"><halo-tabbar v-model="tabValue" :items="tabbarItems" :fixed="false" /></view>
    <view v-else-if="slug === 'tabs'" class="demo__stack"><halo-tabs v-model="tabValue" :items="tabItems"><HaloTabPanel name="overview"><text class="demo__hint">概览内容</text></HaloTabPanel><HaloTabPanel name="activity"><text class="demo__hint">动态内容</text></HaloTabPanel></halo-tabs></view>

    <view v-else-if="slug === 'input'" class="demo__stack"><halo-input v-model="inputValue" clearable placeholder="输入项目名称" /><halo-input error model-value="错误状态" /><halo-input readonly model-value="只读信息" /><halo-input disabled model-value="不可编辑" /></view>
    <view v-else-if="slug === 'textarea'" class="demo__stack"><halo-textarea v-model="textareaValue" :maxlength="60" show-count placeholder="记录说明" /><halo-textarea error model-value="错误状态" /><halo-textarea readonly model-value="只读状态" /><halo-textarea disabled model-value="禁用状态" /></view>
    <view v-else-if="slug === 'checkbox'" class="demo__stack"><halo-checkbox v-model="checkboxValue" :options="choiceOptions" /><halo-checkbox :model-value="[]" disabled :options="choiceOptions" /></view>
    <view v-else-if="slug === 'radio'" class="demo__stack"><halo-radio v-model="radioValue" :options="choiceOptions" /><halo-radio disabled model-value="high" :options="choiceOptions" /></view>
    <view v-else-if="slug === 'switch'" class="demo__row"><halo-switch v-model="switchValue" /><halo-switch disabled :model-value="false" /></view>
    <view v-else-if="slug === 'picker'" class="demo__stack"><halo-picker v-model="pickerValue" :options="pickerOptions" placeholder="选择优先级" /><halo-picker disabled :options="pickerOptions" /></view>
    <view v-else-if="slug === 'date-picker'" class="demo__stack"><halo-date-picker v-model="dateValue" start="2026-07-01" end="2026-12-31" /><halo-date-picker disabled model-value="2026-07-11" /></view>
    <view v-else-if="slug === 'stepper'" class="demo__row"><halo-stepper v-model="stepperValue" :step="0.25" :max="8" /><halo-stepper disabled :model-value="2" /></view>
    <view v-else-if="slug === 'slider'" class="demo__stack"><halo-slider v-model="sliderValue" :step="0.1" show-value /><halo-slider disabled :model-value="40" /></view>
    <view v-else-if="slug === 'upload'" class="demo__stack"><halo-upload v-model="uploadValue" text="选择图片" :uploader="failingUploader" @error="uploadFailed = true" /><halo-button size="small" plain type="danger" @click="simulateUploadFailure">模拟上传失败</halo-button><text v-if="uploadFailed" class="demo__error">上传失败，请重试。</text><halo-upload disabled text="禁用上传" /></view>
    <view v-else-if="slug === 'form'" class="demo__stack"><halo-form ref="formRef" :model="formModel" :rules="formRules"><halo-field label="项目名称" prop="name" required><halo-input v-model="formModel.name" placeholder="至少 3 个字符" /></halo-field><halo-field label="日期"><halo-date-picker v-model="formModel.date" /></halo-field></halo-form><halo-button data-testid="form-validate" size="small" type="primary" @click="validateForm">验证表单</halo-button></view>
    <view v-else-if="slug === 'field'" class="demo__stack"><halo-field label="邮箱" required><halo-input placeholder="name@example.com" /></halo-field><halo-field label="只读信息"><halo-input disabled model-value="不可修改" /></halo-field></view>

    <view v-else-if="slug === 'toast'" class="demo__row"><halo-button size="small" type="primary" @click="showToast('保存成功')">成功提示</halo-button><halo-button size="small" @click="showToast({ icon: 'error', title: '请求失败' })">错误提示</halo-button></view>
    <view v-else-if="slug === 'dialog'" class="demo__row"><halo-button type="primary" @click="openDialog">打开确认框</halo-button></view>
    <view v-else-if="slug === 'popup'" class="demo__row"><halo-button @click="popupVisible = true">底部弹层</halo-button><halo-popup v-model="popupVisible" placement="bottom" round><view class="popup-content"><text>弹层内容</text><halo-button block type="primary" @click="popupVisible = false">关闭</halo-button></view></halo-popup></view>
    <view v-else-if="slug === 'action-sheet'" class="demo__row"><halo-button @click="openActionSheet">选择操作</halo-button></view>
    <view v-else-if="slug === 'notify'" class="demo__row"><halo-button v-for="type in semanticTypes" :key="type" :type="type" size="small" @click="showNotify({ message: `${semanticLabels[type]}通知`, type })">{{ semanticLabels[type] }}</halo-button></view>
    <view v-else-if="slug === 'overlay-host'" class="demo__stack"><text class="demo__hint">HaloOverlayHost 已挂载，下面的服务调用将使用统一的库内视觉。</text><halo-button size="small" type="primary" @click="showToast('Overlay Host 已接管 Toast')">验证服务宿主</halo-button></view>
    <view v-else-if="slug === 'skeleton'" class="demo__stack"><halo-skeleton avatar title :rows="3" /><halo-skeleton :loading="false"><halo-card title="内容已加载">这里是实际内容。</halo-card></halo-skeleton></view>
    <view v-else-if="slug === 'empty'" class="demo__stack"><halo-empty description="暂无待处理任务"><halo-button size="small">刷新</halo-button></halo-empty></view>
    <view v-else-if="slug === 'progress'" class="demo__stack"><halo-progress v-for="(type, index) in semanticTypes" :key="type" :percentage="[88, 72, 54, 36, 20][index]" :status="type === 'primary' ? 'default' : type" /></view>

    <view v-else-if="slug === 'notice-bar'" class="demo__stack"><halo-notice-bar v-for="type in semanticTypes" :key="type" :type="type" :text="`${semanticLabels[type]}状态通知`" /><halo-notice-bar closeable type="warning" text="系统将在今晚 23:00 进行维护" /></view>
    <view v-else-if="slug === 'collapse'" class="demo__stack"><halo-collapse v-model="collapseValue" :items="collapseItems" /><halo-collapse :model-value="[]" :items="[{ content: '此项不可操作。', disabled: true, name: 'disabled', title: '禁用项目' }]" /></view>
    <view v-else-if="slug === 'swiper'" class="demo__stack"><halo-swiper :items="swiperItems" custom-style="height:220rpx" /></view>
    <view v-else-if="slug === 'steps'" class="demo__stack"><halo-steps :active="1" :items="stepItems" /><halo-steps direction="vertical" :active="1" :items="stepItems" /></view>
    <view v-else-if="slug === 'timeline'" class="demo__stack"><halo-timeline :items="timelineItems" /></view>
    <view v-else-if="slug === 'count-down'" class="demo__stack"><halo-count-down :time="90 * 1000" format="mm:ss" /><text class="demo__hint">自动开始倒计时。</text></view>
    <view v-else-if="slug === 'rate'" class="demo__stack"><halo-rate v-model="rateValue" /><halo-rate disabled :model-value="3" /></view>
    <view v-else-if="slug === 'calendar'" class="demo__stack"><halo-calendar v-model="calendarValue" locale="zh-cn" min-date="2026-07-05" max-date="2026-07-25" :disabled-dates="['2026-07-12']" month="2026-07" /><text class="demo__hint">{{ calendarValue || '请选择一个日期（12 日不可选）' }}</text></view>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import avatarBlue from '../static/media/avatar-blue.png'
import avatarGreen from '../static/media/avatar-green.png'
import coverBlue from '../static/media/cover-blue.png'
import coverGreen from '../static/media/cover-green.png'
import coverWarm from '../static/media/cover-warm.png'
import { showActionSheet, showDialog, showNotify, showToast } from '../uni_modules/halo-ui/src/services'
import { haloCoreIconCodepoints, haloCoreIcons, registerHaloIconFont } from '../uni_modules/halo-ui/src/icons'
import { HaloGridItem } from '../uni_modules/halo-ui/components/halo-grid'
import { HaloTabPanel } from '../uni_modules/halo-ui/components/halo-tabs'
import type { HaloUploadFile } from '../uni_modules/halo-ui/components/halo-upload/props'

defineProps<{ slug: string }>()

const inputValue = ref('')
const textareaValue = ref('')
const checkboxValue = ref<Array<string | number>>(['high'])
const radioValue = ref<string | number>('medium')
const switchValue = ref(true)
const pickerValue = ref<string | number>('medium')
const dateValue = ref('')
const stepperValue = ref(2.5)
const sliderValue = ref(72.4)
const uploadValue = ref<HaloUploadFile[]>([])
const uploadFailed = ref(false)
const popupVisible = ref(false)
const tabValue = ref('overview')
const rateValue = ref(4)
const calendarValue = ref('')
const collapseValue = ref<Array<string | number>>(['detail'])
const formRef = ref<{ validate: () => Promise<boolean> }>()
const formModel = reactive({ date: '', name: '' })
const semanticTypes = ['primary', 'success', 'warning', 'danger', 'info'] as const
const semanticLabels = { danger: '危险', info: '信息', primary: '主色', success: '成功', warning: '警告' }
const missingMedia = '/static/media/missing-media.png'
const directIconCode = haloCoreIconCodepoints['grid-2x2'].toString(16)

registerHaloIconFont({
  fontFamily: 'Halo Icons',
  glyphs: { dashboard: haloCoreIconCodepoints['bar-chart-3'].toString(16) },
  name: 'playground'
})

const choiceOptions = [{ label: '低', value: 'low' }, { label: '中', value: 'medium' }, { label: '高', value: 'high' }]
const pickerOptions = choiceOptions
const tabItems = [{ name: 'overview', title: '概览' }, { name: 'activity', title: '动态' }]
const tabbarItems = [{ icon: 'calendar', name: 'overview', text: '概览' }, { badge: 2, icon: 'info', name: 'activity', text: '动态' }]
const listItems = [{ label: '今日 · 10:30', title: '设计评审', value: '进行中' }, { label: '明日 · 14:00', title: '体验走查', value: '待开始' }]
const gridItems = [{ icon: 'home', text: '概览' }, { icon: 'calendar', text: '任务' }, { icon: 'bell', text: '提醒' }]
const collapseItems = [{ content: '这里展示可展开的内容区域。', name: 'detail', title: '项目说明' }, { content: '已同步到团队成员。', name: 'activity', title: '活动记录' }]
const swiperItems = [{ image: coverBlue, title: '新品发布' }, { image: coverGreen, title: '团队协作' }, { image: coverWarm, title: '数据洞察' }]
const stepItems = [{ description: '填写基础信息', title: '创建项目' }, { description: '邀请协作成员', title: '配置团队' }, { description: '开始推进工作', status: 'wait' as const, title: '完成发布' }]
const timelineItems = [{ content: '视觉基线已更新', status: 'success' as const, time: '刚刚', title: '组件验收' }, { content: '所有端构建成功', status: 'info' as const, time: '今天', title: '发布检查' }]
const formRules = { name: [{ min: 3, message: '项目名称至少需要 3 个字符', required: true, whitespace: true }] }

async function failingUploader(_file: HaloUploadFile) {
  uploadFailed.value = true
  throw new Error('upload failed')
}

async function openDialog() {
  const confirmed = await showDialog({ content: '确认将改动同步给团队吗？', title: '同步更新' })
  if (confirmed) showToast({ icon: 'success', title: '已同步' })
}

function openActionSheet() {
  showActionSheet({ itemList: ['保存草稿', '提交审核', '删除项目'] })
}

function simulateUploadFailure() { uploadFailed.value = true }

function selectItem(item: { title: string }) {
  showToast(item.title)
}

async function validateForm() {
  await formRef.value?.validate()
}
</script>

<style lang="scss">
.demo { min-height: 220rpx; }
.demo__row { align-items: center; display: flex; flex-wrap: wrap; gap: 18rpx; }
.demo__stack { display: flex; flex-direction: column; gap: 20rpx; }
.demo__hint { color: var(--halo-color-text-secondary); font-size: 24rpx; }
.demo__error { color: var(--halo-color-danger); font-size: 24rpx; }
.safe-demo { background: var(--halo-color-fill); border-radius: var(--halo-radius-md); color: var(--halo-color-text-secondary); padding: 24rpx; }
.popup-content { background: var(--halo-color-surface); border-radius: 28rpx 28rpx 0 0; display: flex; flex-direction: column; gap: 28rpx; padding: 36rpx 32rpx 44rpx; }
.icon-demo__grid { display: grid; gap: 12rpx; grid-template-columns: repeat(4, minmax(0, 1fr)); }.icon-demo__item { align-items: center; background: var(--halo-color-surface-subtle); border: 1rpx solid var(--halo-color-separator); border-radius: var(--halo-radius-md); color: var(--halo-color-text); display: flex; flex-direction: column; font-size: 18rpx; gap: 10rpx; min-height: 112rpx; justify-content: center; padding: 12rpx 6rpx; text-align: center; }.icon-demo__item text { line-height: 1.25; word-break: break-word; }.icon-demo__sources { display: grid; gap: 16rpx; grid-template-columns: repeat(3, minmax(0, 1fr)); }.icon-demo__sources view { align-items: center; background: var(--halo-color-surface-subtle); border: 1rpx solid var(--halo-color-separator); border-radius: var(--halo-radius-md); color: var(--halo-color-text-secondary); display: flex; flex-direction: column; font-size: 20rpx; gap: 10rpx; justify-content: center; min-height: 110rpx; padding: 12rpx; text-align: center; }
</style>
