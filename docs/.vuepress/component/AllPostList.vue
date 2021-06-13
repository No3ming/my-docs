<template>
  <ul>
    <li v-for="item in allPost" :key="item.path" class="post-item">
      <a  :href="item.path" class="post-title">{{item.title}}</a>
      <span class="post-other">----------------------------------------------------------------------------------------------------------------------------------------------------------</span>
      <span class="post-date">{{dayjs(item.createDate).format('YYYY-MM-DD hh:mm:ss')}}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import {computed} from 'vue'
import { useSiteData } from '@vuepress/client'

export default {
  name: 'AllPostList',
  setup() {
    const siteData = useSiteData()
    const allPost = computed(() => siteData.value.allPost)
    return {
      allPost,
      dayjs
    }
  }
}

</script>

<style scoped lang="less">
.post-item {
  display: flex;
  flex-direction: row;
  width: 100%;

  .post-other {
    flex: 1;
    overflow: hidden;
    text-overflow: clip;
    height: 24px;
    padding: 0 5px;
    color: #ccc;
  }
  .post-date {
    color: #666;
  }
}

</style>
