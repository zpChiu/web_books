import { defineSidebarConfig } from "vuepress-theme-hope";

// 图标地址：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html
export default defineSidebarConfig([
  "",
  {
    icon: "stack",
    text: "基础类",
    link: "/books/basic",
    prefix: "/books/basic",
    children: [
      'html',
      'css',
      'es5',
      'es6',
    ],
  },
  {
    icon: "plugin",
    text: "插件类",
    link: "/books/plugin",
    prefix: "/books/plugin",
    children: [
      'vue',
    ],
  }
]);
