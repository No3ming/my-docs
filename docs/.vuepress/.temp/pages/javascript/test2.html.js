export const data = {
  "key": "v-fdeb98fc",
  "path": "/javascript/test2.html",
  "title": "我的js测试2",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "我的js测试2",
    "description": "页面的描述"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "javascript/test2.md",
  "git": {
    "updatedTime": 1623586476000
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
