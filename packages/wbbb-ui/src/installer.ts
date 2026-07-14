import type { App, Component, Plugin } from 'vue'
import WbbbActionSheet from '../components/wbbb-action-sheet'
import WbbbAvatar from '../components/wbbb-avatar'
import WbbbBadge from '../components/wbbb-badge'
import WbbbButton from '../components/wbbb-button'
import WbbbCalendar from '../components/wbbb-calendar'
import WbbbCard from '../components/wbbb-card'
import WbbbCell, { WbbbCellGroup } from '../components/wbbb-cell'
import WbbbCheckbox from '../components/wbbb-checkbox'
import WbbbCollapse from '../components/wbbb-collapse'
import WbbbCountDown from '../components/wbbb-count-down'
import WbbbDatePicker from '../components/wbbb-date-picker'
import WbbbDialog from '../components/wbbb-dialog'
import WbbbDivider from '../components/wbbb-divider'
import WbbbEmpty from '../components/wbbb-empty'
import WbbbField from '../components/wbbb-field'
import WbbbForm from '../components/wbbb-form'
import WbbbGrid, { WbbbGridItem } from '../components/wbbb-grid'
import WbbbIcon from '../components/wbbb-icon'
import WbbbImage from '../components/wbbb-image'
import WbbbInput from '../components/wbbb-input'
import WbbbList from '../components/wbbb-list'
import WbbbLoading from '../components/wbbb-loading'
import WbbbNavbar from '../components/wbbb-navbar'
import WbbbNotify from '../components/wbbb-notify'
import WbbbOverlayHost from '../components/wbbb-overlay-host'
import WbbbNoticeBar from '../components/wbbb-notice-bar'
import WbbbPicker from '../components/wbbb-picker'
import WbbbPopup from '../components/wbbb-popup'
import WbbbProgress from '../components/wbbb-progress'
import WbbbRadio from '../components/wbbb-radio'
import WbbbRate from '../components/wbbb-rate'
import WbbbSafeArea from '../components/wbbb-safe-area'
import WbbbSkeleton from '../components/wbbb-skeleton'
import WbbbSlider from '../components/wbbb-slider'
import WbbbStepper from '../components/wbbb-stepper'
import WbbbSteps from '../components/wbbb-steps'
import WbbbSticky from '../components/wbbb-sticky'
import WbbbSwiper from '../components/wbbb-swiper'
import WbbbSwitch from '../components/wbbb-switch'
import WbbbTabs, { WbbbTabPanel } from '../components/wbbb-tabs'
import WbbbTabbar, { WbbbTabbarItem } from '../components/wbbb-tabbar'
import WbbbTag from '../components/wbbb-tag'
import WbbbText from '../components/wbbb-text'
import WbbbTextarea from '../components/wbbb-textarea'
import WbbbTimeline from '../components/wbbb-timeline'
import WbbbToast from '../components/wbbb-toast'
import WbbbUpload from '../components/wbbb-upload'
import { setLocale } from './locale'
import type { WbbbLocaleInput } from './shared/types'

export interface WbbbUIOptions {
  locale?: WbbbLocaleInput
}

export const componentEntries: Array<[string, Component]> = [
  ['WbbbActionSheet', WbbbActionSheet],
  ['WbbbAvatar', WbbbAvatar],
  ['WbbbBadge', WbbbBadge],
  ['WbbbButton', WbbbButton],
  ['WbbbCalendar', WbbbCalendar],
  ['WbbbCard', WbbbCard],
  ['WbbbCell', WbbbCell],
  ['WbbbCellGroup', WbbbCellGroup],
  ['WbbbCheckbox', WbbbCheckbox],
  ['WbbbCollapse', WbbbCollapse],
  ['WbbbCountDown', WbbbCountDown],
  ['WbbbDatePicker', WbbbDatePicker],
  ['WbbbDialog', WbbbDialog],
  ['WbbbDivider', WbbbDivider],
  ['WbbbEmpty', WbbbEmpty],
  ['WbbbField', WbbbField],
  ['WbbbForm', WbbbForm],
  ['WbbbGrid', WbbbGrid],
  ['WbbbGridItem', WbbbGridItem],
  ['WbbbIcon', WbbbIcon],
  ['WbbbImage', WbbbImage],
  ['WbbbInput', WbbbInput],
  ['WbbbList', WbbbList],
  ['WbbbLoading', WbbbLoading],
  ['WbbbNavbar', WbbbNavbar],
  ['WbbbNotify', WbbbNotify],
  ['WbbbOverlayHost', WbbbOverlayHost],
  ['WbbbNoticeBar', WbbbNoticeBar],
  ['WbbbPicker', WbbbPicker],
  ['WbbbPopup', WbbbPopup],
  ['WbbbProgress', WbbbProgress],
  ['WbbbRadio', WbbbRadio],
  ['WbbbRate', WbbbRate],
  ['WbbbSafeArea', WbbbSafeArea],
  ['WbbbSkeleton', WbbbSkeleton],
  ['WbbbSlider', WbbbSlider],
  ['WbbbStepper', WbbbStepper],
  ['WbbbSteps', WbbbSteps],
  ['WbbbSticky', WbbbSticky],
  ['WbbbSwiper', WbbbSwiper],
  ['WbbbSwitch', WbbbSwitch],
  ['WbbbTabs', WbbbTabs],
  ['WbbbTabPanel', WbbbTabPanel],
  ['WbbbTabbar', WbbbTabbar],
  ['WbbbTabbarItem', WbbbTabbarItem],
  ['WbbbTag', WbbbTag],
  ['WbbbText', WbbbText],
  ['WbbbTextarea', WbbbTextarea],
  ['WbbbTimeline', WbbbTimeline],
  ['WbbbToast', WbbbToast],
  ['WbbbUpload', WbbbUpload]
]

export function install(app: App, options: WbbbUIOptions = {}) {
  if (options.locale) {
    setLocale(options.locale)
  }

  componentEntries.forEach(([name, component]) => {
    app.component(name, component)
  })
}

export const WbbbUI: Plugin = { install }
