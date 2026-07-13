import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './examples/playground/e2e',
  timeout: 30_000,
  use: {
    baseURL: 'http://127.0.0.1:4173',
    screenshot: 'only-on-failure',
    viewport: { height: 844, width: 390 }
  },
  webServer: process.env.PLAYWRIGHT_SERVER_MANAGED === 'true' ? undefined : {
    command: 'node scripts/serve-playground.mjs',
    reuseExistingServer: process.env.PLAYWRIGHT_REUSE_SERVER === 'true',
    timeout: 120_000,
    url: 'http://127.0.0.1:4173'
  }
})
