import {path} from '@vuepress/shared-utils'

console.log(process.env.NODE_ENV)
module.exports = {
  base: process.env.NODE_ENV === 'development' ? '': 'my-docs',
  lang: 'zh-CN',
  title: '小明的博客！',
  description: '做人一定要骚',
  plugins: [
    '@vuepress/plugin-search',
    require('./plugins/lastUpdatePlugin/lib/index.ts')

  ],
  themeConfig: {
    repo: 'https://github.com/No3ming/my-docs.git',
    logo: 'https://vuejs.org/images/logo.png',
    navbar: require('./nav'),
    lastUpdated: true,
    docsDir: 'docs',
    lastUpdatedText: '更新时间',
    contributors: false,
    backToHome: '返回首页',
    editLinkText: '编辑页面'
  },

}
