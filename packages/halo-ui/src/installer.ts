import type { App, Component, Plugin } from 'vue'
import HaloActionSheet from '../components/halo-action-sheet'
import HaloAvatar from '../components/halo-avatar'
import HaloBadge from '../components/halo-badge'
import HaloButton from '../components/halo-button'
import HaloCalendar from '../components/halo-calendar'
import HaloCard from '../components/halo-card'
import HaloCell, { HaloCellGroup } from '../components/halo-cell'
import HaloCheckbox from '../components/halo-checkbox'
import HaloCollapse from '../components/halo-collapse'
import HaloCountDown from '../components/halo-count-down'
import HaloDatePicker from '../components/halo-date-picker'
import HaloDialog from '../components/halo-dialog'
import HaloDivider from '../components/halo-divider'
import HaloEmpty from '../components/halo-empty'
import HaloField from '../components/halo-field'
import HaloForm from '../components/halo-form'
import HaloGrid, { HaloGridItem } from '../components/halo-grid'
import HaloIcon from '../components/halo-icon'
import HaloImage from '../components/halo-image'
import HaloInput from '../components/halo-input'
import HaloList from '../components/halo-list'
import HaloLoading from '../components/halo-loading'
import HaloNavbar from '../components/halo-navbar'
import HaloNotify from '../components/halo-notify'
import HaloOverlayHost from '../components/halo-overlay-host'
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
import HaloSticky from '../components/halo-sticky'
import HaloSwiper from '../components/halo-swiper'
import HaloSwitch from '../components/halo-switch'
import HaloTabs, { HaloTabPanel } from '../components/halo-tabs'
import HaloTabbar, { HaloTabbarItem } from '../components/halo-tabbar'
import HaloTag from '../components/halo-tag'
import HaloText from '../components/halo-text'
import HaloTextarea from '../components/halo-textarea'
import HaloTimeline from '../components/halo-timeline'
import HaloToast from '../components/halo-toast'
import HaloUpload from '../components/halo-upload'

export const componentEntries: Array<[string, Component]> = [
  ['HaloActionSheet', HaloActionSheet],
  ['HaloAvatar', HaloAvatar],
  ['HaloBadge', HaloBadge],
  ['HaloButton', HaloButton],
  ['HaloCalendar', HaloCalendar],
  ['HaloCard', HaloCard],
  ['HaloCell', HaloCell],
  ['HaloCellGroup', HaloCellGroup],
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
  ['HaloGridItem', HaloGridItem],
  ['HaloIcon', HaloIcon],
  ['HaloImage', HaloImage],
  ['HaloInput', HaloInput],
  ['HaloList', HaloList],
  ['HaloLoading', HaloLoading],
  ['HaloNavbar', HaloNavbar],
  ['HaloNotify', HaloNotify],
  ['HaloOverlayHost', HaloOverlayHost],
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
  ['HaloSticky', HaloSticky],
  ['HaloSwiper', HaloSwiper],
  ['HaloSwitch', HaloSwitch],
  ['HaloTabs', HaloTabs],
  ['HaloTabPanel', HaloTabPanel],
  ['HaloTabbar', HaloTabbar],
  ['HaloTabbarItem', HaloTabbarItem],
  ['HaloTag', HaloTag],
  ['HaloText', HaloText],
  ['HaloTextarea', HaloTextarea],
  ['HaloTimeline', HaloTimeline],
  ['HaloToast', HaloToast],
  ['HaloUpload', HaloUpload]
]

export function install(app: App) {
  componentEntries.forEach(([name, component]) => {
    app.component(name, component)
  })
}

export const HaloUI: Plugin = { install }
