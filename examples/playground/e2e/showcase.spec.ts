import { expect, test } from '@playwright/test'

test('home links to the complete 47-component catalog', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.brand')).toContainText('Halo UI')
  await expect(page).toHaveScreenshot('home-light.png', { maxDiffPixelRatio: 0.01 })
  await page.getByTestId('open-catalog').click({ force: true })
  await expect(page.locator('.catalog-item')).toHaveCount(47)
  await expect(page).toHaveScreenshot('catalog.png', { maxDiffPixelRatio: 0.01 })
})

test('catalog routes to a reusable component detail page', async ({ page }) => {
  await page.goto('/#/pages/catalog/index')
  await page.getByText('Button', { exact: true }).click({ force: true })
  await expect(page).toHaveURL(/name=button/)
  await expect(page.locator('.detail__title')).toHaveText('Button')
  await expect(page.locator('.demo .halo-button')).toHaveCount(8)
  await expect(page.locator('.state-matrix__item')).toHaveCount(6)
})

test('design token page switches its full semantic palette', async ({ page }) => {
  await page.goto('/#/pages/tokens/index')
  await expect(page.locator('.color-card')).toHaveCount(5)
  await expect(page.locator('.tokens-page__buttons .halo-button')).toHaveCount(8)
  await page.getByText('切换深色', { exact: true }).click({ force: true })
  await expect(page.locator('.tokens-page')).toHaveAttribute('data-theme', 'dark')
})

test('media, disclosure, progress and calendar details render their real states', async ({ page }) => {
  await page.goto('/#/pages/component/detail?name=image')
  await page.reload()
  await expect(page.locator('.halo-image--loaded')).toHaveCount(1)
  await expect(page.locator('.halo-image--loading')).toHaveCount(1)
  await expect(page.locator('.halo-image--error')).toHaveCount(1)

  await page.goto('/#/pages/component/detail?name=collapse')
  await page.reload()
  await expect(page.locator('.halo-collapse__arrow--active')).toHaveCount(1)
  await page.getByTestId('collapse-activity').click({ force: true })
  await expect(page.locator('.halo-collapse__arrow--active')).toHaveCount(2)

  await page.goto('/#/pages/component/detail?name=steps')
  await page.reload()
  await expect(page.locator('.halo-steps__connector')).toHaveCount(6)

  await page.goto('/#/pages/component/detail?name=calendar')
  await page.reload()
  await expect(page.locator('.halo-calendar__day--empty.halo-calendar__day--active')).toHaveCount(0)
})

test('component details cover stateful controls and overlay services', async ({ page }) => {
  await page.goto('/#/pages/component/detail?name=form')
  await page.reload()
  await page.getByTestId('form-validate').click({ force: true })
  await expect(page.locator('.halo-field--error .halo-field__error')).toBeVisible()

  await page.goto('/#/pages/component/detail?name=calendar')
  await page.reload()
  await page.getByTestId('calendar-day-2026-07-05').click()
  await expect(page.locator('.demo__hint')).not.toHaveText(/请选择/)

  await page.goto('/#/pages/component/detail?name=upload')
  await page.reload()
  await page.getByText('模拟上传失败', { exact: true }).click({ force: true })
  await expect(page.locator('.demo__error')).toBeVisible()

  await page.goto('/#/pages/component/detail?name=overlay-host')
  await page.reload()
  await page.getByText('验证服务宿主', { exact: true }).click({ force: true })
  await expect(page.locator('.halo-toast')).toBeVisible()

  await page.goto('/#/pages/component/detail?name=tabbar')
  await page.reload()
  await page.getByRole('tab', { name: '动态' }).click({ force: true })
  await expect(page.locator('.halo-tabbar__item--active')).toHaveCount(1)
})
