import { expect, test } from '@playwright/test'

test('home provides developer navigation and local search', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Halo UI' })).toBeVisible()
  await expect(page.getByRole('link', { exact: true, name: '快速开始' })).toBeVisible()
  await expect(page.getByRole('button', { name: '搜索文档' })).toBeVisible()
})

test('component page exposes code, real preview, states and API', async ({ page }) => {
  await page.goto('/components/button')
  await expect(page.getByRole('heading', { name: 'Button' })).toBeVisible()
  await expect(page.getByRole('heading', { name: '基础用法' })).toBeVisible()
  await expect(page.locator('.halo-example__preview iframe')).toHaveAttribute('src', /name=button/)
  await expect(page.getByRole('heading', { name: 'API' })).toBeVisible()
  await expect(page.locator('.halo-component-api tbody tr')).not.toHaveCount(0)
})

test('high-risk component page retains its detailed platform guidance', async ({ page }) => {
  await page.goto('/components/upload')
  await expect(page.getByText('上传器由业务层注入')).toBeVisible()
  await expect(page.locator('.halo-example__preview iframe')).toHaveAttribute('src', /name=upload/)
})

test('dark appearance remains available on documentation pages', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.goto('/components/calendar')
  await expect(page.locator('html.dark')).toHaveCount(1)
  await expect(page.getByText('空白日期不会被选中')).toBeVisible()
})
