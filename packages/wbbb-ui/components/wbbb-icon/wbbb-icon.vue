<template>
  <image
    v-if="src"
    class="wbbb-icon wbbb-icon--asset"
    :class="customClass"
    :src="src"
    :style="mergedStyle"
    mode="aspectFit"
  />
  <text v-else class="wbbb-icon" :class="[customClass, { 'wbbb-icon--custom': customFont }]" :style="mergedStyle">{{ glyph }}</text>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { normalizeWbbbIconCode, resolveWbbbCoreIcon, resolveWbbbIconFont } from '../../src/icons'
import { addUnit, toStyleText } from '../../src/shared/utils'
import type { WbbbIconProps } from './props'

const props = withDefaults(defineProps<WbbbIconProps>(), {
  color: '',
  code: '',
  customClass: '',
  customStyle: '',
  fontFamily: '',
  fontSet: '',
  name: '',
  size: 32,
  src: ''
})

const directGlyph = computed(() => props.fontFamily && props.code ? normalizeWbbbIconCode(props.code) : '')
const registeredGlyph = computed(() => props.fontSet ? resolveWbbbIconFont(props.fontSet, props.name) : undefined)
const customFont = computed(() => Boolean(directGlyph.value || registeredGlyph.value))
const glyph = computed(() => directGlyph.value || registeredGlyph.value?.glyph || resolveWbbbCoreIcon(props.name))

const mergedStyle = computed(() => {
  const size = addUnit(props.size)
  const fontFamily = directGlyph.value ? props.fontFamily : registeredGlyph.value?.fontFamily || 'Wbbb Icons'

  return [
    size ? `font-size:${size};width:${size};height:${size}` : '',
    `font-family:"${fontFamily.replace(/"/g, '\\"')}"`,
    props.color ? `color:${props.color}` : '',
    toStyleText(props.customStyle)
  ]
    .filter(Boolean)
    .join(';')
})
</script>

<style lang="scss">
@use "./style.scss";
</style>
