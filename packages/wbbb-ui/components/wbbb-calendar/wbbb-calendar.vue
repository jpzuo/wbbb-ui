<template>
  <view class="wbbb-calendar" :class="customClass" :style="customStyle">
    <view class="wbbb-calendar__header">
      <button class="wbbb-calendar__nav" @tap="move(-1)"><wbbb-icon name="left" :size="26" /></button>
      <text class="wbbb-calendar__title">{{ currentYear }}-{{ pad(currentMonth + 1) }}</text>
      <button class="wbbb-calendar__nav" @tap="move(1)"><wbbb-icon name="right" :size="26" /></button>
    </view>
    <view class="wbbb-calendar__week">
      <text v-for="day in weekDays" :key="day" class="wbbb-calendar__week-day">{{ day }}</text>
    </view>
    <view class="wbbb-calendar__days">
      <text
        v-for="item in days"
        :key="item.key"
        :data-testid="`calendar-day-${item.value || 'empty'}`"
        class="wbbb-calendar__day"
        :class="{ 'wbbb-calendar__day--active': Boolean(item.value) && item.value === modelValue, 'wbbb-calendar__day--disabled': isDisabled(item.value), 'wbbb-calendar__day--empty': !item.value, 'wbbb-calendar__day--today': Boolean(item.value) && item.value === today }"
        @tap="select(item.value)"
      >
        {{ item.label }}
      </text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import WbbbIcon from '../wbbb-icon'
import { formatDate, getMonth, getWeekdays } from '../../src/shared/date'
import { getLocale } from '../../src/locale'
import type { WbbbCalendarProps } from './props'

const props = withDefaults(defineProps<WbbbCalendarProps>(), {
  customClass: '',
  customStyle: '',
  disabledDates: () => [],
  firstDayOfWeek: 0,
  maxDate: '',
  minDate: '',
  modelValue: '',
  month: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  change: [value: string]
  monthChange: [value: string]
}>()

const initial = getMonth(props.month)
const currentYear = ref(initial.year())
const currentMonth = ref(initial.month())

watch(() => props.month, (value) => {
  if (!value) {
    return
  }

  const next = getMonth(value)
  currentYear.value = next.year()
  currentMonth.value = next.month()
})

const weekDays = computed(() => getWeekdays(props.locale ?? getLocale(), props.firstDayOfWeek))
const today = formatDate(getMonth().startOf('day'))

const days = computed(() => {
  const first = getMonth(`${currentYear.value}-${pad(currentMonth.value + 1)}`)
  const total = first.daysInMonth()
  const offset = (first.day() - props.firstDayOfWeek + 7) % 7
  const result: Array<{ key: string; label: string; value: string }> = []

  for (let index = 0; index < offset; index += 1) {
    result.push({ key: `empty-${index}`, label: '', value: '' })
  }

  for (let day = 1; day <= total; day += 1) {
    const value = formatDate(first.date(day))
    result.push({ key: value, label: String(day), value })
  }

  return result
})

function pad(value: number) {
  return String(value).padStart(2, '0')
}

function move(offset: number) {
  const date = getMonth(`${currentYear.value}-${pad(currentMonth.value + 1)}`).add(offset, 'month')
  currentYear.value = date.year()
  currentMonth.value = date.month()
  emit('monthChange', `${currentYear.value}-${pad(currentMonth.value + 1)}`)
}

function select(value: string) {
  if (!value || isDisabled(value)) {
    return
  }

  emit('update:modelValue', value)
  emit('change', value)
}

function isDisabled(value: string) {
  return !value || props.disabledDates.includes(value) || Boolean(props.minDate && value < props.minDate) || Boolean(props.maxDate && value > props.maxDate)
}
</script>

<style lang="scss">
@use "./style.scss";
</style>
