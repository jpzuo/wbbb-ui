import { createSSRApp } from 'vue'
import App from './App.vue'
import HaloUI from 'halo-ui'
import 'halo-ui/styles'

export function createApp() {
  const app = createSSRApp(App)
  app.use(HaloUI)

  return { app }
}

