import { defineThemeConfig } from 'vuepress-theme-hope';
import navbar from './navbar';
import sidebar from './sidebar';

export default defineThemeConfig({
  hostname: 'http://www.xiaopengji.com',

  author: {
    name: 'CHIHPENGCHIU',
    url: 'http://www.xiaopengji.com',
  },

  iconPrefix: 'iconfont icon-',

  // 导航栏图标，应为基于 .vuepress/public 文件夹的绝对路径
  logo: '/sun_256x256.png',

  // 仓库配置，用于在导航栏中显示仓库链接
  repo: 'https://github.com/zpChiu?tab=repositories',

  // 是否启用路径导航
  breadcrumb: false,

  // 导航栏配置
  navbar: navbar,

  // 侧边栏配置
  sidebar: sidebar,

  // 页脚的默认内容，可输入 HTMLString。
  footer: 'MIT Licensed',

  // 是否默认显示页脚
  displayFooter: true,
  
  // 是否展示编辑此页链接
  editLink: false,

  // 是否启用页面信息 (不启用则填false)
  pageInfo: [
    'Author',        // 作者
    'Original',      // 写作日期 
    'Date',          // 是否原创 
    'Category',      // 分类 
    'Tag',           // 标签 
    'ReadingTime',   // 预计阅读时间 
    'Word'           // 字数 
  ],

  plugins: {
    // 博客配置
    blog: {
      autoExcerpt: true,
    },

    // 如果您不需要评论功能，您可以删除以下选项
    // 以下配置仅供演示，如果您需要评论功能，请生成并使用您自己的配置，详见评论插件文档。
    // 为避免打扰主题开发者并消耗他的资源，请不要在您的生产环境中直接使用以下配置！！！！！！
    comment: {
      /**
       * Using giscus
       */
      // type: 'giscus',
      // repo: 'vuepress-theme-hope/giscus-discussions',
      // repoId: 'R_kgDOG_Pt2A',
      // category: 'Announcements',
      // categoryId: 'DIC_kwDOG_Pt2M4COD69',

      /**
       * Using twikoo
       */
      // type: 'twikoo',
      // envId: 'https://twikoo.ccknbc.vercel.app',

      /**
       * Using Waline
       * VercelUrl: https://vercel.com/dashboard
       * AdminManageUrl: https://web-books-waline-ogg9drnj9-zpchiu.vercel.app/ui
       */
      type: 'waline',
      serverURL: 'https://web-books-waline-ogg9drnj9-zpchiu.vercel.app',
    },

    // Markdown 增强功能
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
    },
    // 搜索
    search: {
      locales: {
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }
  },
});
