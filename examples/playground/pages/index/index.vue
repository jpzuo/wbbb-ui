<template>
  <view class="page">
    <HaloNavbar title="Halo UI" />

    <view class="section">
      <text class="section__title">Basic</text>
      <HaloButton type="primary" @click="toast">Primary</HaloButton>
      <HaloButton type="success" plain>Success</HaloButton>
      <HaloTag type="warning" round>Tag</HaloTag>
      <HaloProgress :percentage="72" status="success" />
    </view>

    <view class="section">
      <text class="section__title">Form</text>
      <HaloForm ref="formRef" :model="form" :rules="rules">
        <HaloField label="Name" prop="name" required>
          <HaloInput v-model="form.name" clearable placeholder="Input name" />
        </HaloField>
        <HaloField label="Type" prop="type">
          <HaloPicker v-model="form.type" :options="typeOptions" />
        </HaloField>
      </HaloForm>
      <HaloButton block type="primary" @click="validate">Validate</HaloButton>
    </view>

    <view class="section">
      <text class="section__title">Feedback</text>
      <HaloButton @click="dialogVisible = true">Dialog</HaloButton>
      <HaloButton @click="sheetVisible = true">Action Sheet</HaloButton>
      <HaloDialog v-model="dialogVisible" title="Halo" content="Independent component imports are ready." />
      <HaloActionSheet v-model="sheetVisible" :actions="sheetActions" @select="toast" />
    </view>

    <view class="section">
      <text class="section__title">Display</text>
      <HaloNoticeBar text="Build once, verify across uni-app targets." closeable />
      <HaloTabs v-model="activeTab" :items="tabs" />
      <HaloCalendar v-model="selectedDate" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { showToast } from 'halo-ui/services/toast'

const formRef = ref<{ validate: () => Promise<boolean> }>()
const dialogVisible = ref(false)
const sheetVisible = ref(false)
const activeTab = ref('basic')
const selectedDate = ref('')

const form = reactive({
  name: '',
  type: ''
})

const rules = {
  name: [{ required: true, message: 'Name is required' }]
}

const typeOptions = [
  { label: 'Mini Program', value: 'mp' },
  { label: 'H5', value: 'h5' },
  { label: 'App', value: 'app' }
]

const sheetActions = [
  { name: 'Share' },
  { name: 'Favorite' }
]

const tabs = [
  { name: 'basic', title: 'Basic' },
  { name: 'form', title: 'Form' },
  { name: 'display', title: 'Display' }
]

function toast() {
  showToast('Halo UI')
}

async function validate() {
  const valid = await formRef.value?.validate()
  showToast(valid ? 'Valid' : 'Please complete the form')
}
</script>

<style lang="scss">
.page {
  box-sizing: border-box;
  min-height: 100vh;
  padding: 24rpx;
}

.section {
  background: #fff;
  border-radius: 16rpx;
  display: flex;
  flex-direction: column;
  gap: 20rpx;
  margin-bottom: 24rpx;
  padding: 24rpx;
}

.section__title {
  color: #172033;
  font-size: 30rpx;
  font-weight: 600;
}
</style>

