import { defineConfig } from 'vitepress'
import { categoryMeta, playgroundComponents, type ComponentCategory } from '../../examples/playground/src/shared/component-catalog'

const playgroundUrl = process.env.HALO_PLAYGROUND_URL ?? 'https://play.halo-ui.pages.dev'
const categoryOrder: ComponentCategory[] = ['basic', 'layout', 'form', 'feedback', 'display']

const componentSidebar = categoryOrder.map((category) => ({
  collapsed: false,
  items: playgroundComponents
    .filter((component) => component.category === category)
    .map((component) => ({ link: `/components/${component.docSlug}`, text: component.name })),
  text: `${categoryMeta[category].name} (${playgroundComponents.filter((component) => component.category === category).length})`
}))

export default defineConfig({
  cleanUrls: true,
  description: '面向 uni-app 的 Vue 3 跨端组件库',
  head: [
    ['meta', { content: '#2f6fed', name: 'theme-color' }],
    ['meta', { content: 'Halo UI 组件文档', property: 'og:title' }],
    ['meta', { content: '面向 uni-app 的 Vue 3 跨端组件库', property: 'og:description' }]
  ],
  lang: 'zh-CN',
  lastUpdated: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    darkModeSwitchLabel: '外观',
    docFooter: { next: '下一页', prev: '上一页' },
    footer: {
      copyright: 'MIT Licensed',
      message: 'Halo UI · 为 uni-app 产品体验而生'
    },
    lastUpdated: { text: '最后更新于' },
    nav: [
      { activeMatch: '^/quick-start|^/on-demand|^/uni-modules|^/platforms|^/migration', link: '/quick-start', text: '指南' },
      { activeMatch: '^/components', link: '/components', text: '组件' },
      { activeMatch: '^/theme|^/design', link: '/design', text: '主题' },
      { activeMatch: '^/icons', link: '/icons', text: '图标' },
      { activeMatch: '^/api|^/services', link: '/services', text: '服务 API' },
      { link: '/changelog', text: '更新日志' },
      { link: 'https://github.com/jpzuo/halo-ui', text: 'GitHub' }
    ],
    outline: { label: '本页内容', level: [2, 3] },
    returnToTopLabel: '回到顶部',
    search: {
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            displayDetails: '显示详情',
            footerCloseText: '关闭',
            footerNavigateDownText: '向下',
            footerNavigateText: '切换',
            footerNavigateUpText: '向上',
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除查询',
            resetButtonAriaLabel: '清除查询'
          }
        }
      },
      provider: 'local'
    },
    sidebar: [
      {
        items: [
          { link: '/quick-start', text: '快速开始' },
          { link: '/on-demand', text: '按需导入' },
          { link: '/uni-modules', text: 'uni_modules' },
          { link: '/theme', text: '主题定制' },
          { link: '/icons', text: '图标' },
          { link: '/platforms', text: '平台支持' },
          { link: '/migration', text: '迁移与兼容' },
          { link: '/deployment', text: '部署文档站' }
        ],
        text: '开始使用'
      },
      ...componentSidebar,
      {
        items: [
          { link: '/design', text: '设计 Token 与状态' },
          { link: '/services', text: '服务组件与 Overlay Host' },
          { link: '/api', text: '完整 API 索引' },
          { link: '/changelog', text: '更新日志' }
        ],
        text: '参考'
      }
    ],
    sidebarMenuLabel: '菜单',
    socialLinks: [{ icon: 'github', link: 'https://github.com/jpzuo/halo-ui' }]
  },
  title: 'Halo UI',
  vite: {
    define: {
      __HALO_PLAYGROUND_URL__: JSON.stringify(playgroundUrl)
    }
  }
})
