<template>
  <view class="halo-calendar" :class="customClass" :style="customStyle">
    <view class="halo-calendar__header">
      <button class="halo-calendar__nav" @tap="move(-1)"><</button>
      <text class="halo-calendar__title">{{ currentYear }}-{{ pad(currentMonth + 1) }}</text>
      <button class="halo-calendar__nav" @tap="move(1)">></button>
    </view>
    <view class="halo-calendar__week">
      <text v-for="day in weekDays" :key="day" class="halo-calendar__week-day">{{ day }}</text>
    </view>
    <view class="halo-calendar__days">
      <text
        v-for="item in days"
        :key="item.key"
        class="halo-calendar__day"
        :class="{ 'halo-calendar__day--empty': !item.value, 'halo-calendar__day--active': item.value === modelValue }"
        @tap="select(item.value)"
      >
        {{ item.label }}
      </text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { HaloCalendarProps } from './props'

const props = withDefaults(defineProps<HaloCalendarProps>(), {
  customClass: '',
  customStyle: '',
  firstDayOfWeek: 0,
  modelValue: '',
  month: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  change: [value: string]
  monthChange: [value: string]
}>()

const today = new Date()
const initial = props.month ? parseMonth(props.month) : new Date(today.getFullYear(), today.getMonth(), 1)
const currentYear = ref(initial.getFullYear())
const currentMonth = ref(initial.getMonth())

const weekDays = computed(() => props.firstDayOfWeek === 1 ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])

const days = computed(() => {
  const first = new Date(currentYear.value, currentMonth.value, 1)
  const total = new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
  const offset = (first.getDay() - props.firstDayOfWeek + 7) % 7
  const result: Array<{ key: string; label: string; value: string }> = []

  for (let index = 0; index < offset; index += 1) {
    result.push({ key: `empty-${index}`, label: '', value: '' })
  }

  for (let day = 1; day <= total; day += 1) {
    const value = `${currentYear.value}-${pad(currentMonth.value + 1)}-${pad(day)}`
    result.push({ key: value, label: String(day), value })
  }

  return result
})

function parseMonth(value: string) {
  const [year, month] = value.split('-').map(Number)
  return new Date(year, (month || 1) - 1, 1)
}

function pad(value: number) {
  return String(value).padStart(2, '0')
}

function move(offset: number) {
  const date = new Date(currentYear.value, currentMonth.value + offset, 1)
  currentYear.value = date.getFullYear()
  currentMonth.value = date.getMonth()
  emit('monthChange', `${currentYear.value}-${pad(currentMonth.value + 1)}`)
}

function select(value: string) {
  if (!value) {
    return
  }

  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<style lang="scss">
@use "./style.scss";
</style>

