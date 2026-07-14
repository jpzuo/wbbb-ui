import DefaultTheme from 'vitepress/theme'
import ComponentDoc from './components/ComponentDoc.vue'
import Layout from './Layout.vue'
import LocaleMemory from './components/LocaleMemory.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('ComponentDoc', ComponentDoc)
    app.component('LocaleMemory', LocaleMemory)
  }
}
