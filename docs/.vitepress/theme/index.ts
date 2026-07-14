import DefaultTheme from 'vitepress/theme'
import ComponentDoc from './components/ComponentDoc.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ComponentDoc', ComponentDoc)
  }
}
