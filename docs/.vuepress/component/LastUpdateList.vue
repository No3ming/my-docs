<template>
  <ul>
    <li v-for="item in last10" :key="item.path" class="post-item">
      <a  :href="item.path" class="post-title">{{item.title}}</a>
      <span class="post-other">----------------------------------------------------------------------------------------------------------------------------------------------------------</span>
      <span class="post-date">{{dayjs(item.createDate).format('YYYY-MM-DD hh:mm:ss')}}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import { useSiteData } from '@vuepress/client';

export default {
  name: "LastUpdateList.vue",
  setup() {
    const siteData = useSiteData()
    const msg = '11';
    return {
      msg,
      last10: siteData.value.last10,
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
  .post-title {


  }
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
