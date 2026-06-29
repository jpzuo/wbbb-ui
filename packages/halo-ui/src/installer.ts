import type { App, Component, Plugin } from 'vue'
import HaloActionSheet from '../components/halo-action-sheet'
import HaloAvatar from '../components/halo-avatar'
import HaloBadge from '../components/halo-badge'
import HaloButton from '../components/halo-button'
import HaloCalendar from '../components/halo-calendar'
import HaloCell from '../components/halo-cell'
import HaloCheckbox from '../components/halo-checkbox'
import HaloCollapse from '../components/halo-collapse'
import HaloCountDown from '../components/halo-count-down'
import HaloDatePicker from '../components/halo-date-picker'
import HaloDialog from '../components/halo-dialog'
import HaloDivider from '../components/halo-divider'
import HaloEmpty from '../components/halo-empty'
import HaloField from '../components/halo-field'
import HaloForm from '../components/halo-form'
import HaloGrid from '../components/halo-grid'
import HaloIcon from '../components/halo-icon'
import HaloImage from '../components/halo-image'
import HaloInput from '../components/halo-input'
import HaloLoading from '../components/halo-loading'
import HaloNavbar from '../components/halo-navbar'
import HaloNoticeBar from '../components/halo-notice-bar'
import HaloPicker from '../components/halo-picker'
import HaloPopup from '../components/halo-popup'
import HaloProgress from '../components/halo-progress'
import HaloRadio from '../components/halo-radio'
import HaloRate from '../components/halo-rate'
import HaloSafeArea from '../components/halo-safe-area'
import HaloSkeleton from '../components/halo-skeleton'
import HaloSlider from '../components/halo-slider'
import HaloStepper from '../components/halo-stepper'
import HaloSteps from '../components/halo-steps'
import HaloSwiper from '../components/halo-swiper'
import HaloSwitch from '../components/halo-switch'
import HaloTabs from '../components/halo-tabs'
import HaloTag from '../components/halo-tag'
import HaloText from '../components/halo-text'
import HaloTextarea from '../components/halo-textarea'
import HaloTimeline from '../components/halo-timeline'
import HaloUpload from '../components/halo-upload'

export const componentEntries: Array<[string, Component]> = [
  ['HaloActionSheet', HaloActionSheet],
  ['HaloAvatar', HaloAvatar],
  ['HaloBadge', HaloBadge],
  ['HaloButton', HaloButton],
  ['HaloCalendar', HaloCalendar],
  ['HaloCell', HaloCell],
  ['HaloCheckbox', HaloCheckbox],
  ['HaloCollapse', HaloCollapse],
  ['HaloCountDown', HaloCountDown],
  ['HaloDatePicker', HaloDatePicker],
  ['HaloDialog', HaloDialog],
  ['HaloDivider', HaloDivider],
  ['HaloEmpty', HaloEmpty],
  ['HaloField', HaloField],
  ['HaloForm', HaloForm],
  ['HaloGrid', HaloGrid],
  ['HaloIcon', HaloIcon],
  ['HaloImage', HaloImage],
  ['HaloInput', HaloInput],
  ['HaloLoading', HaloLoading],
  ['HaloNavbar', HaloNavbar],
  ['HaloNoticeBar', HaloNoticeBar],
  ['HaloPicker', HaloPicker],
  ['HaloPopup', HaloPopup],
  ['HaloProgress', HaloProgress],
  ['HaloRadio', HaloRadio],
  ['HaloRate', HaloRate],
  ['HaloSafeArea', HaloSafeArea],
  ['HaloSkeleton', HaloSkeleton],
  ['HaloSlider', HaloSlider],
  ['HaloStepper', HaloStepper],
  ['HaloSteps', HaloSteps],
  ['HaloSwiper', HaloSwiper],
  ['HaloSwitch', HaloSwitch],
  ['HaloTabs', HaloTabs],
  ['HaloTag', HaloTag],
  ['HaloText', HaloText],
  ['HaloTextarea', HaloTextarea],
  ['HaloTimeline', HaloTimeline],
  ['HaloUpload', HaloUpload]
]

export function install(app: App) {
  componentEntries.forEach(([name, component]) => {
    app.component(name, component)
  })
}

export const HaloUI: Plugin = { install }

