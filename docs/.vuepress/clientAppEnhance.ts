import { defineClientAppEnhance } from '@vuepress/client'
import LastUpdateList from './component/LastUpdateList.vue'
import AllPostList from './component/AllPostList.vue'

export default defineClientAppEnhance(({ app , router, siteData}) => {
  app.component('LastUpdateList', LastUpdateList)
  app.component('AllPostList', AllPostList)
})
