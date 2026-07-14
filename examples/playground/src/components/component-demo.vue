<template>
  <view class="demo">
    <view v-if="slug === 'button'" class="demo__row"><wbbb-button>默认</wbbb-button><wbbb-button type="primary">主色</wbbb-button><wbbb-button type="success">成功</wbbb-button><wbbb-button type="warning">警告</wbbb-button><wbbb-button type="danger">危险</wbbb-button><wbbb-button type="info">信息</wbbb-button><wbbb-button disabled>禁用</wbbb-button><wbbb-button loading type="primary">加载</wbbb-button></view>
    <view v-else-if="slug === 'icon'" class="demo__stack"><view class="icon-demo__grid"><view v-for="icon in wbbbCoreIcons" :key="icon" class="icon-demo__item"><wbbb-icon :name="icon" :size="34" /><text>{{ icon }}</text></view></view><view class="icon-demo__sources"><view><wbbb-icon font-family="Wbbb Icons" :code="directIconCode" :size="36" /><text>直接码点</text></view><view><wbbb-icon font-set="playground" name="dashboard" :size="36" /><text>注册字体集</text></view><view><wbbb-icon :src="coverBlue" :size="36" /><text>图片资源</text></view></view></view>
    <view v-else-if="slug === 'text'" class="demo__stack"><view class="demo__row"><wbbb-text type="primary">主色文本</wbbb-text><wbbb-text type="success">成功</wbbb-text><wbbb-text type="warning">警告</wbbb-text><wbbb-text type="danger">危险</wbbb-text><wbbb-text type="secondary">辅助信息</wbbb-text></view><wbbb-text ellipsis>这是一段超出容器后自动省略的辅助说明文本。</wbbb-text></view>
    <view v-else-if="slug === 'image'" class="demo__row"><wbbb-image :src="coverBlue" width="200" height="120" radius="12" /><wbbb-image loading width="200" height="120" radius="12" /><wbbb-image :src="missingMedia" width="200" height="120" radius="12"><template #error><wbbb-icon name="warning" :size="30" /><text>资源不存在</text></template></wbbb-image></view>
    <view v-else-if="slug === 'badge'" class="demo__row"><wbbb-badge v-for="type in semanticTypes" :key="type" :type="type" :value="8"><wbbb-avatar :alt="type.slice(0, 1).toUpperCase()" /></wbbb-badge><wbbb-badge dot type="danger"><wbbb-button size="small">消息</wbbb-button></wbbb-badge></view>
    <view v-else-if="slug === 'tag'" class="demo__row"><wbbb-tag v-for="type in semanticTypes" :key="type" :type="type" round>{{ semanticLabels[type] }}</wbbb-tag><wbbb-tag type="danger" plain>轮廓危险</wbbb-tag></view>
    <view v-else-if="slug === 'avatar'" class="demo__row"><wbbb-avatar :src="avatarBlue" alt="HU" :size="88" /><wbbb-avatar :src="avatarGreen" alt="A" :size="72" /><wbbb-avatar :src="missingMedia" alt="F" :size="64" /><wbbb-avatar alt="" :size="56" /></view>
    <view v-else-if="slug === 'divider'" class="demo__stack"><wbbb-divider>分组标题</wbbb-divider><wbbb-divider dashed /></view>
    <view v-else-if="slug === 'loading'" class="demo__row"><wbbb-loading text="正在同步" /><wbbb-loading vertical color="var(--wbbb-color-primary)" text="加载中" /></view>

    <view v-else-if="slug === 'cell'" class="demo__stack"><wbbb-cell-group title="项目设置" inset><wbbb-cell title="通知" label="接收更新提醒" value="已开启" clickable /><wbbb-cell title="成员" value="8 人" icon="info" clickable /></wbbb-cell-group></view>
    <view v-else-if="slug === 'grid'" class="demo__stack"><wbbb-grid :columns="3" bordered><wbbb-grid-item v-for="item in gridItems" :key="item.text" :text="item.text" :icon="item.icon" clickable /></wbbb-grid><text class="demo__hint">点击任一入口可验证网格项交互。</text></view>
    <view v-else-if="slug === 'list'" class="demo__stack"><wbbb-list :items="listItems" @select="selectItem" /></view>
    <view v-else-if="slug === 'card'" class="demo__stack"><wbbb-card title="本周进展" extra="查看全部" shadow><wbbb-progress :percentage="72" status="success" /></wbbb-card></view>
    <view v-else-if="slug === 'sticky'" class="demo__stack"><wbbb-sticky><wbbb-notice-bar text="吸顶区域示例" /></wbbb-sticky><text class="demo__hint">滚动页面时观察顶部定位。</text></view>
    <view v-else-if="slug === 'safe-area'" class="demo__stack"><view class="safe-demo">内容区</view><wbbb-safe-area position="bottom" /></view>
    <view v-else-if="slug === 'navbar'" class="demo__stack"><wbbb-navbar title="项目详情" left-arrow left-text="返回" right-text="编辑" /></view>
    <view v-else-if="slug === 'tabbar'" class="demo__stack"><wbbb-tabbar v-model="tabValue" :items="tabbarItems" :fixed="false" /></view>
    <view v-else-if="slug === 'tabs'" class="demo__stack"><wbbb-tabs v-model="tabValue" :items="tabItems"><WbbbTabPanel name="overview"><text class="demo__hint">概览内容</text></WbbbTabPanel><WbbbTabPanel name="activity"><text class="demo__hint">动态内容</text></WbbbTabPanel></wbbb-tabs></view>

    <view v-else-if="slug === 'input'" class="demo__stack"><wbbb-input v-model="inputValue" clearable placeholder="输入项目名称" /><wbbb-input error model-value="错误状态" /><wbbb-input readonly model-value="只读信息" /><wbbb-input disabled model-value="不可编辑" /></view>
    <view v-else-if="slug === 'textarea'" class="demo__stack"><wbbb-textarea v-model="textareaValue" :maxlength="60" show-count placeholder="记录说明" /><wbbb-textarea error model-value="错误状态" /><wbbb-textarea readonly model-value="只读状态" /><wbbb-textarea disabled model-value="禁用状态" /></view>
    <view v-else-if="slug === 'checkbox'" class="demo__stack"><wbbb-checkbox v-model="checkboxValue" :options="choiceOptions" /><wbbb-checkbox :model-value="[]" disabled :options="choiceOptions" /></view>
    <view v-else-if="slug === 'radio'" class="demo__stack"><wbbb-radio v-model="radioValue" :options="choiceOptions" /><wbbb-radio disabled model-value="high" :options="choiceOptions" /></view>
    <view v-else-if="slug === 'switch'" class="demo__row"><wbbb-switch v-model="switchValue" /><wbbb-switch disabled :model-value="false" /></view>
    <view v-else-if="slug === 'picker'" class="demo__stack"><wbbb-picker v-model="pickerValue" :options="pickerOptions" placeholder="选择优先级" /><wbbb-picker disabled :options="pickerOptions" /></view>
    <view v-else-if="slug === 'date-picker'" class="demo__stack"><wbbb-date-picker v-model="dateValue" start="2026-07-01" end="2026-12-31" /><wbbb-date-picker disabled model-value="2026-07-11" /></view>
    <view v-else-if="slug === 'stepper'" class="demo__row"><wbbb-stepper v-model="stepperValue" :step="0.25" :max="8" /><wbbb-stepper disabled :model-value="2" /></view>
    <view v-else-if="slug === 'slider'" class="demo__stack"><wbbb-slider v-model="sliderValue" :step="0.1" show-value /><wbbb-slider disabled :model-value="40" /></view>
    <view v-else-if="slug === 'upload'" class="demo__stack"><wbbb-upload v-model="uploadValue" text="选择图片" :uploader="failingUploader" @error="uploadFailed = true" /><wbbb-button size="small" plain type="danger" @click="simulateUploadFailure">模拟上传失败</wbbb-button><text v-if="uploadFailed" class="demo__error">上传失败，请重试。</text><wbbb-upload disabled text="禁用上传" /></view>
    <view v-else-if="slug === 'form'" class="demo__stack"><wbbb-form ref="formRef" :model="formModel" :rules="formRules"><wbbb-field label="项目名称" prop="name" required><wbbb-input v-model="formModel.name" placeholder="至少 3 个字符" /></wbbb-field><wbbb-field label="日期"><wbbb-date-picker v-model="formModel.date" /></wbbb-field></wbbb-form><wbbb-button data-testid="form-validate" size="small" type="primary" @click="validateForm">验证表单</wbbb-button></view>
    <view v-else-if="slug === 'field'" class="demo__stack"><wbbb-field label="邮箱" required><wbbb-input placeholder="name@example.com" /></wbbb-field><wbbb-field label="只读信息"><wbbb-input disabled model-value="不可修改" /></wbbb-field></view>

    <view v-else-if="slug === 'toast'" class="demo__row"><wbbb-button size="small" type="primary" @click="showToast('保存成功')">成功提示</wbbb-button><wbbb-button size="small" @click="showToast({ icon: 'error', title: '请求失败' })">错误提示</wbbb-button></view>
    <view v-else-if="slug === 'dialog'" class="demo__row"><wbbb-button type="primary" @click="openDialog">打开确认框</wbbb-button></view>
    <view v-else-if="slug === 'popup'" class="demo__row"><wbbb-button @click="popupVisible = true">底部弹层</wbbb-button><wbbb-popup v-model="popupVisible" placement="bottom" round><view class="popup-content"><text>弹层内容</text><wbbb-button block type="primary" @click="popupVisible = false">关闭</wbbb-button></view></wbbb-popup></view>
    <view v-else-if="slug === 'action-sheet'" class="demo__row"><wbbb-button @click="openActionSheet">选择操作</wbbb-button></view>
    <view v-else-if="slug === 'notify'" class="demo__row"><wbbb-button v-for="type in semanticTypes" :key="type" :type="type" size="small" @click="showNotify({ message: `${semanticLabels[type]}通知`, type })">{{ semanticLabels[type] }}</wbbb-button></view>
    <view v-else-if="slug === 'overlay-host'" class="demo__stack"><text class="demo__hint">WbbbOverlayHost 已挂载，下面的服务调用将使用统一的库内视觉。</text><wbbb-button size="small" type="primary" @click="showToast('Overlay Host 已接管 Toast')">验证服务宿主</wbbb-button></view>
    <view v-else-if="slug === 'skeleton'" class="demo__stack"><wbbb-skeleton avatar title :rows="3" /><wbbb-skeleton :loading="false"><wbbb-card title="内容已加载">这里是实际内容。</wbbb-card></wbbb-skeleton></view>
    <view v-else-if="slug === 'empty'" class="demo__stack"><wbbb-empty description="暂无待处理任务"><wbbb-button size="small">刷新</wbbb-button></wbbb-empty></view>
    <view v-else-if="slug === 'progress'" class="demo__stack"><wbbb-progress v-for="(type, index) in semanticTypes" :key="type" :percentage="[88, 72, 54, 36, 20][index]" :status="type === 'primary' ? 'default' : type" /></view>

    <view v-else-if="slug === 'notice-bar'" class="demo__stack"><wbbb-notice-bar v-for="type in semanticTypes" :key="type" :type="type" :text="`${semanticLabels[type]}状态通知`" /><wbbb-notice-bar closeable type="warning" text="系统将在今晚 23:00 进行维护" /></view>
    <view v-else-if="slug === 'collapse'" class="demo__stack"><wbbb-collapse v-model="collapseValue" :items="collapseItems" /><wbbb-collapse :model-value="[]" :items="[{ content: '此项不可操作。', disabled: true, name: 'disabled', title: '禁用项目' }]" /></view>
    <view v-else-if="slug === 'swiper'" class="demo__stack"><wbbb-swiper :items="swiperItems" custom-style="height:220rpx" /></view>
    <view v-else-if="slug === 'steps'" class="demo__stack"><wbbb-steps :active="1" :items="stepItems" /><wbbb-steps direction="vertical" :active="1" :items="stepItems" /></view>
    <view v-else-if="slug === 'timeline'" class="demo__stack"><wbbb-timeline :items="timelineItems" /></view>
    <view v-else-if="slug === 'count-down'" class="demo__stack"><wbbb-count-down :time="90 * 1000" format="mm:ss" /><text class="demo__hint">自动开始倒计时。</text></view>
    <view v-else-if="slug === 'rate'" class="demo__stack"><wbbb-rate v-model="rateValue" /><wbbb-rate disabled :model-value="3" /></view>
    <view v-else-if="slug === 'calendar'" class="demo__stack"><wbbb-calendar v-model="calendarValue" locale="zh-cn" min-date="2026-07-05" max-date="2026-07-25" :disabled-dates="['2026-07-12']" month="2026-07" /><text class="demo__hint">{{ calendarValue || '请选择一个日期（12 日不可选）' }}</text></view>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import avatarBlue from '../static/media/avatar-blue.png'
import avatarGreen from '../static/media/avatar-green.png'
import coverBlue from '../static/media/cover-blue.png'
import coverGreen from '../static/media/cover-green.png'
import coverWarm from '../static/media/cover-warm.png'
import { showActionSheet, showDialog, showNotify, showToast } from '../uni_modules/wbbb-ui/src/services'
import { wbbbCoreIconCodepoints, wbbbCoreIcons, registerWbbbIconFont } from '../uni_modules/wbbb-ui/src/icons'
import { WbbbGridItem } from '../uni_modules/wbbb-ui/components/wbbb-grid'
import { WbbbTabPanel } from '../uni_modules/wbbb-ui/components/wbbb-tabs'
import type { WbbbUploadFile } from '../uni_modules/wbbb-ui/components/wbbb-upload/props'

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
const uploadValue = ref<WbbbUploadFile[]>([])
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
const directIconCode = wbbbCoreIconCodepoints['grid-2x2'].toString(16)

registerWbbbIconFont({
  fontFamily: 'Wbbb Icons',
  glyphs: { dashboard: wbbbCoreIconCodepoints['bar-chart-3'].toString(16) },
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

async function failingUploader(_file: WbbbUploadFile) {
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
.demo__hint { color: var(--wbbb-color-text-secondary); font-size: 24rpx; }
.demo__error { color: var(--wbbb-color-danger); font-size: 24rpx; }
.safe-demo { background: var(--wbbb-color-fill); border-radius: var(--wbbb-radius-md); color: var(--wbbb-color-text-secondary); padding: 24rpx; }
.popup-content { background: var(--wbbb-color-surface); border-radius: 28rpx 28rpx 0 0; display: flex; flex-direction: column; gap: 28rpx; padding: 36rpx 32rpx 44rpx; }
.icon-demo__grid { display: grid; gap: 12rpx; grid-template-columns: repeat(4, minmax(0, 1fr)); }.icon-demo__item { align-items: center; background: var(--wbbb-color-surface-subtle); border: 1rpx solid var(--wbbb-color-separator); border-radius: var(--wbbb-radius-md); color: var(--wbbb-color-text); display: flex; flex-direction: column; font-size: 18rpx; gap: 10rpx; min-height: 112rpx; justify-content: center; padding: 12rpx 6rpx; text-align: center; }.icon-demo__item text { line-height: 1.25; word-break: break-word; }.icon-demo__sources { display: grid; gap: 16rpx; grid-template-columns: repeat(3, minmax(0, 1fr)); }.icon-demo__sources view { align-items: center; background: var(--wbbb-color-surface-subtle); border: 1rpx solid var(--wbbb-color-separator); border-radius: var(--wbbb-radius-md); color: var(--wbbb-color-text-secondary); display: flex; flex-direction: column; font-size: 20rpx; gap: 10rpx; justify-content: center; min-height: 110rpx; padding: 12rpx; text-align: center; }
</style>
