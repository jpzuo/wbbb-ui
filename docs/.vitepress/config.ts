import { defineConfig } from 'vitepress'
import { categoryMeta, playgroundComponents, type ComponentCategory } from '../../examples/playground/src/shared/component-catalog'

type DocsLocale = 'en' | 'zh'

const playgroundUrl = process.env.WBBB_PLAYGROUND_URL ?? 'https://wbbb-ui.pages.dev'
const categoryOrder: ComponentCategory[] = ['basic', 'layout', 'form', 'feedback', 'display']

function pathFor(locale: DocsLocale, path: string) {
  return locale === 'en' ? `/en${path}` : path
}

function componentSidebar(locale: DocsLocale) {
  return categoryOrder.map((category) => ({
    collapsed: false,
    items: playgroundComponents
      .filter((component) => component.category === category)
      .map((component) => ({
        link: pathFor(locale, `/components/${component.docSlug}`),
        text: locale === 'zh' ? `${component.zhName} ${component.name}` : `${component.name} ${component.zhName}`
      })),
    text: `${locale === 'zh' ? categoryMeta[category].name : categoryMeta[category].enName} (${playgroundComponents.filter((component) => component.category === category).length})`
  }))
}

function searchTranslations(locale: DocsLocale) {
  const zh = locale === 'zh'
  return {
    button: { buttonAriaLabel: zh ? '搜索文档' : 'Search documentation', buttonText: zh ? '搜索文档' : 'Search' },
    modal: {
      displayDetails: zh ? '显示详情' : 'Display details',
      footerCloseText: zh ? '关闭' : 'Close',
      footerNavigateDownText: zh ? '向下' : 'Down',
      footerNavigateText: zh ? '切换' : 'Navigate',
      footerNavigateUpText: zh ? '向上' : 'Up',
      noResultsText: zh ? '没有找到相关内容' : 'No results found',
      resetButtonAriaLabel: zh ? '清除查询' : 'Clear query',
      resetButtonTitle: zh ? '清除查询' : 'Clear query'
    }
  }
}

const localSearch = {
  provider: 'local' as const,
  options: {
    locales: {
      en: { translations: searchTranslations('en') },
      root: { translations: searchTranslations('zh') }
    },
    translations: searchTranslations('zh')
  }
}

function theme(locale: DocsLocale) {
  const zh = locale === 'zh'
  const guide = [
    ['quick-start', zh ? '快速开始' : 'Quick Start'],
    ['on-demand', zh ? '按需导入' : 'On-demand Imports'],
    ['uni-modules', 'uni_modules'],
    ['theme', zh ? '主题定制' : 'Theme'],
    ['icons', zh ? '图标' : 'Icons'],
    ['platforms', zh ? '平台支持' : 'Platforms'],
    ['migration', zh ? '迁移与兼容' : 'Migration'],
    ['deployment', zh ? '部署文档站' : 'Deployment']
  ] as const

  return {
    darkModeSwitchLabel: zh ? '外观' : 'Appearance',
    docFooter: { next: zh ? '下一页' : 'Next page', prev: zh ? '上一页' : 'Previous page' },
    footer: {
      copyright: zh ? '基于 MIT 协议开源' : 'MIT Licensed',
      message: zh ? 'Wbbb UI · 为 uni-app 产品体验而生' : 'Wbbb UI · Built for uni-app product experiences'
    },
    lastUpdated: { text: zh ? '最后更新于' : 'Last updated' },
    logo: '/wbbb-ui-logo.png',
    nav: [
      { activeMatch: '^/(en/)?(quick-start|on-demand|uni-modules|platforms|migration|deployment)', link: pathFor(locale, '/quick-start'), text: zh ? '指南' : 'Guide' },
      { activeMatch: '^/(en/)?components', link: pathFor(locale, '/components'), text: zh ? '组件' : 'Components' },
      { activeMatch: '^/(en/)?(theme|design)', link: pathFor(locale, '/design'), text: zh ? '主题' : 'Theme' },
      { activeMatch: '^/(en/)?icons', link: pathFor(locale, '/icons'), text: zh ? '图标' : 'Icons' },
      { activeMatch: '^/(en/)?(api|services)', link: pathFor(locale, '/services'), text: zh ? '服务 API' : 'Service API' },
      { link: pathFor(locale, '/changelog'), text: zh ? '更新日志' : 'Changelog' },
      { link: 'https://github.com/jpzuo/wbbb-ui', text: 'GitHub' }
    ],
    outline: { label: zh ? '本页内容' : 'On this page', level: [2, 3] },
    returnToTopLabel: zh ? '回到顶部' : 'Return to top',
    sidebar: [
      { items: guide.map(([slug, text]) => ({ link: pathFor(locale, `/${slug}`), text })), text: zh ? '开始使用' : 'Getting Started' },
      ...componentSidebar(locale),
      {
        items: [
          { link: pathFor(locale, '/design'), text: zh ? '设计 Token 与状态' : 'Design Tokens and States' },
          { link: pathFor(locale, '/services'), text: zh ? '服务组件与 Overlay Host' : 'Services and Overlay Host' },
          { link: pathFor(locale, '/api'), text: zh ? '完整 API 索引' : 'API Reference' },
          { link: pathFor(locale, '/changelog'), text: zh ? '更新日志' : 'Changelog' }
        ],
        text: zh ? '参考' : 'Reference'
      }
    ],
    sidebarMenuLabel: zh ? '菜单' : 'Menu',
    socialLinks: [{ icon: 'github', link: 'https://github.com/jpzuo/wbbb-ui' }]
  }
}

export default defineConfig({
  cleanUrls: true,
  description: '面向 uni-app 的 Vue 3 跨端组件库',
  head: [
    ['meta', { content: '#2f6fed', name: 'theme-color' }],
    ['link', { href: '/wbbb-ui-logo.png', rel: 'icon', type: 'image/png' }]
  ],
  lastUpdated: true,
  locales: {
    root: {
      description: '面向 uni-app 的 Vue 3 跨端组件库',
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: theme('zh'),
      title: 'Wbbb UI'
    },
    en: {
      description: 'A cross-platform Vue 3 component library for uni-app.',
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: theme('en'),
      title: 'Wbbb UI'
    }
  },
  markdown: { lineNumbers: true },
  themeConfig: { search: localSearch },
  title: 'Wbbb UI',
  vite: {
    define: {
      __WBBB_PLAYGROUND_URL__: JSON.stringify(playgroundUrl)
    }
  }
})
