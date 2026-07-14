import { expect, test } from '@playwright/test'

const playgroundRoot = 'https://wbbb-ui.pages.dev'
const playgroundHome = `${playgroundRoot}/#/`
const previewUrl = (slug: string, theme: 'dark' | 'light' = 'light') => `${playgroundRoot}/#/pages/component/detail?name=${slug}&theme=${theme}`

test('home provides developer navigation and local search', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Wbbb UI' })).toBeVisible()
  await expect(page.getByRole('link', { exact: true, name: '快速开始' })).toBeVisible()
  await expect(page.getByRole('button', { name: '搜索文档' })).toBeVisible()
  await expect(page.locator('.VPNavBarTitle img.logo')).toHaveAttribute('src', '/wbbb-ui-logo.png')
  await expect(page.locator(`a[href="${playgroundHome}"]`).first()).toBeVisible()
})

test('English home links to the canonical Playground', async ({ page }) => {
  await page.goto('/en/')
  await expect(page.locator(`a[href="${playgroundHome}"]`).first()).toBeVisible()
})

test('component page exposes code, real preview, states and API', async ({ page }) => {
  await page.goto('/components/button')
  await expect(page.getByRole('heading', { name: '按钮 Button' })).toBeVisible()
  await expect(page.getByRole('heading', { name: '基础用法' })).toBeVisible()
  await expect(page.locator('.wbbb-example__preview iframe')).toHaveAttribute('src', previewUrl('button'))
  await expect(page.locator('.wbbb-example__preview-bar a')).toHaveAttribute('href', previewUrl('button'))
  await expect(page.getByTestId('mobile-preview-frame')).toBeVisible()
  await expect(page.getByRole('heading', { name: 'API 参考' })).toBeVisible()
  await expect(page.locator('.wbbb-component-api tbody tr')).not.toHaveCount(0)
})

test('component preview follows the documentation appearance', async ({ page }) => {
  await page.goto('/components/button')
  const preview = page.locator('.wbbb-example__preview iframe')
  const openPreview = page.locator('.wbbb-example__preview-bar a')
  await expect(preview).toHaveAttribute('src', previewUrl('button', 'light'))

  await page.locator('.VPNavBar button.VPSwitchAppearance:visible').click()
  await expect(page.locator('html.dark')).toHaveCount(1)
  await expect(preview).toHaveAttribute('src', previewUrl('button', 'dark'))
  await expect(openPreview).toHaveAttribute('href', previewUrl('button', 'dark'))
})

test('English documentation renders the mirrored component page', async ({ page }) => {
  await page.goto('/en/components/button')
  await expect(page.getByRole('heading', { name: 'Button 按钮' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Basic Usage' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Search' })).toBeVisible()
  await expect(page.getByRole('columnheader', { name: 'Description' })).toBeVisible()
})

test('Prop tables explain the behavior of each option', async ({ page }) => {
  await page.goto('/components/swiper')
  await expect(page.getByRole('columnheader', { name: '说明' })).toBeVisible()
  await expect(page.getByText('是否自动切换到下一张轮播项。')).toBeVisible()
})

test('manual English selection is remembered at the documentation root', async ({ page }) => {
  await page.goto('/en/')
  await page.evaluate(() => window.localStorage.setItem('wbbb-doc-locale', 'en'))
  await page.goto('/')
  await expect(page).toHaveURL(/\/en\/$/)
})

test('high-risk component page retains its detailed platform guidance', async ({ page }) => {
  await page.goto('/components/upload')
  await expect(page.getByText('上传器由业务层注入')).toBeVisible()
  await expect(page.locator('.wbbb-example__preview iframe')).toHaveAttribute('src', previewUrl('upload'))
  await expect(page.locator('.wbbb-example__preview-bar a')).toHaveAttribute('href', previewUrl('upload'))
})

test('Calendar preview uses the same canonical Playground route', async ({ page }) => {
  await page.goto('/components/calendar')
  await expect(page.locator('.wbbb-example__preview iframe')).toHaveAttribute('src', previewUrl('calendar'))
})

test('desktop component layout keeps the preview and API inside the document column', async ({ page }) => {
  await page.setViewportSize({ height: 960, width: 1440 })
  await page.goto('/components/button')

  const dimensions = await page.evaluate(() => {
    const bounds = (selector: string) => document.querySelector(selector)?.getBoundingClientRect()
    const example = bounds('.wbbb-example')
    const code = bounds('.wbbb-example__code')
    const frame = bounds('.wbbb-phone-frame')
    const api = bounds('.wbbb-component-api')
    const table = bounds('.wbbb-table-wrap')

    return { api, code, example, frame, table }
  })

  expect(dimensions.example).not.toBeNull()
  expect(dimensions.code).not.toBeNull()
  expect(dimensions.frame).not.toBeNull()
  expect(dimensions.api).not.toBeNull()
  expect(dimensions.table).not.toBeNull()
  expect(dimensions.frame!.width).toBeLessThanOrEqual(390)
  expect(dimensions.code!.left).toBeGreaterThanOrEqual(dimensions.example!.left)
  expect(dimensions.frame!.right).toBeLessThanOrEqual(dimensions.example!.right + 1)
  expect(Math.abs(dimensions.api!.width - dimensions.table!.width)).toBeLessThanOrEqual(1)
})

test('wide documentation layout prioritizes the article over both sidebars', async ({ page }) => {
  await page.setViewportSize({ height: 1200, width: 2048 })
  await page.goto('/components/button')

  const dimensions = await page.evaluate(() => {
    const bounds = (selector: string) => document.querySelector(selector)?.getBoundingClientRect()
    return {
      article: bounds('.VPDoc.has-aside .content-container'),
      outline: bounds('.VPDoc .aside'),
      sidebar: bounds('.VPSidebar')
    }
  })

  expect(dimensions.article).not.toBeNull()
  expect(dimensions.outline).not.toBeNull()
  expect(dimensions.sidebar).not.toBeNull()
  expect(dimensions.article!.width).toBeGreaterThanOrEqual(900)
  expect(dimensions.article!.width).toBeGreaterThan(dimensions.sidebar!.width)
  expect(dimensions.article!.width).toBeGreaterThan(dimensions.outline!.width)
  expect(dimensions.outline!.width).toBeLessThanOrEqual(216)
})

test('narrow documentation layout stacks without page-level horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ height: 844, width: 390 })
  await page.goto('/components/button')

  const dimensions = await page.evaluate(() => {
    const code = document.querySelector('.wbbb-example__code')?.getBoundingClientRect()
    const frame = document.querySelector('.wbbb-phone-frame')?.getBoundingClientRect()
    return {
      code,
      frame,
      pageWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth
    }
  })

  expect(dimensions.code).not.toBeNull()
  expect(dimensions.frame).not.toBeNull()
  expect(dimensions.frame!.top).toBeGreaterThanOrEqual(dimensions.code!.bottom)
  expect(dimensions.frame!.width).toBeLessThanOrEqual(dimensions.viewportWidth)
  expect(dimensions.pageWidth).toBeLessThanOrEqual(dimensions.viewportWidth)
})

test('dark appearance remains available on documentation pages', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.goto('/components/calendar')
  await expect(page.locator('html.dark')).toHaveCount(1)
  await expect(page.getByText('空白日期不会被选中')).toBeVisible()
})
