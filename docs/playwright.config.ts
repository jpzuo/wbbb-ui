import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  timeout: 30_000,
  use: {
    baseURL: 'http://127.0.0.1:4174',
    screenshot: 'only-on-failure',
    viewport: { height: 960, width: 1440 }
  },
  webServer: process.env.PLAYWRIGHT_SERVER_MANAGED === 'true' ? undefined : {
    command: 'node scripts/serve-docs.mjs',
    reuseExistingServer: process.env.PLAYWRIGHT_REUSE_SERVER === 'true',
    timeout: 120_000,
    url: 'http://127.0.0.1:4174'
  }
})
