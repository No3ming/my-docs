import { defineClientAppEnhance } from '@vuepress/client'
import LastUpdateList from './component/LastUpdateList.vue'


export default defineClientAppEnhance(({ app , router, siteData}) => {
  app.component('LastUpdateList', LastUpdateList)
})
