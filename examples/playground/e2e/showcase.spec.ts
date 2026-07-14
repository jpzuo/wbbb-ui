import { expect, test } from '@playwright/test'

test('home links to the complete 47-component catalog', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.brand')).toContainText('Wbbb UI')
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
  await expect(page.locator('.demo .wbbb-button')).toHaveCount(8)
  await expect(page.locator('.state-matrix__item')).toHaveCount(6)
})

test('component detail applies a valid route theme and keeps it during API navigation', async ({ page }) => {
  await page.goto('/#/pages/component/detail?name=button&theme=dark')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await expect(page.locator('.detail')).toHaveCSS('background-color', 'rgb(19, 26, 38)')
  await page.getByText('查看 API', { exact: true }).click({ force: true })
  await expect(page).toHaveURL(/theme=dark/)
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')

  await page.goto('/#/pages/component/detail?name=button&theme=unsupported')
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
})

test('design token page switches its full semantic palette', async ({ page }) => {
  await page.goto('/#/pages/tokens/index')
  await expect(page.locator('.color-card')).toHaveCount(5)
  await expect(page.locator('.tokens-page__buttons .wbbb-button')).toHaveCount(8)
  await page.getByText('切换深色', { exact: true }).click({ force: true })
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
})

test('icon detail renders the core set and all three icon sources', async ({ page }) => {
  await page.goto('/#/pages/component/detail?name=icon')
  await page.reload()
  await expect(page.locator('.icon-demo__item')).toHaveCount(64)
  await expect(page.locator('.icon-demo__sources .wbbb-icon')).toHaveCount(3)
  await expect(page.locator('.icon-demo__sources .wbbb-icon--asset')).toHaveCount(1)
})

test('media, disclosure, progress and calendar details render their real states', async ({ page }) => {
  await page.goto('/#/pages/component/detail?name=image')
  await page.reload()
  await expect(page.locator('.wbbb-image--loaded')).toHaveCount(1)
  await expect(page.locator('.wbbb-image--loading')).toHaveCount(1)
  await expect(page.locator('.wbbb-image--error')).toHaveCount(1)

  await page.goto('/#/pages/component/detail?name=collapse')
  await page.reload()
  await expect(page.locator('.wbbb-collapse__arrow--active')).toHaveCount(1)
  await page.getByTestId('collapse-activity').click({ force: true })
  await expect(page.locator('.wbbb-collapse__arrow--active')).toHaveCount(2)

  await page.goto('/#/pages/component/detail?name=steps')
  await page.reload()
  await expect(page.locator('.wbbb-steps__connector')).toHaveCount(6)

  await page.goto('/#/pages/component/detail?name=calendar')
  await page.reload()
  await expect(page.locator('.wbbb-calendar__day--empty.wbbb-calendar__day--active')).toHaveCount(0)
})

test('grid and stepper details expose visible content and controls', async ({ page }) => {
  await page.goto('/#/pages/component/detail?name=grid')
  await expect(page.locator('.wbbb-grid-item')).toHaveCount(3)
  await expect(page.getByText('概览', { exact: true })).toHaveCount(1)
  await expect(page.getByText('任务', { exact: true })).toHaveCount(1)
  await expect(page.getByText('提醒', { exact: true })).toHaveCount(1)

  await page.goto('/#/pages/component/detail?name=stepper')
  await page.reload()
  await expect(page.locator('.wbbb-stepper:not(.wbbb-stepper--disabled) .wbbb-stepper__button .wbbb-icon')).toHaveCount(2)
})

test('component details cover stateful controls and overlay services', async ({ page }) => {
  await page.goto('/#/pages/component/detail?name=form')
  await page.reload()
  await page.getByTestId('form-validate').click({ force: true })
  await expect(page.locator('.wbbb-field--error .wbbb-field__error')).toBeVisible()

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
  await expect(page.locator('.wbbb-toast')).toBeVisible()

  await page.goto('/#/pages/component/detail?name=tabbar')
  await page.reload()
  await page.getByRole('tab', { name: '动态' }).click({ force: true })
  await expect(page.locator('.wbbb-tabbar__item--active')).toHaveCount(1)
})
