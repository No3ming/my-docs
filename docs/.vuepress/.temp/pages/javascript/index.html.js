export const data = {
  "key": "v-e02a086e",
  "path": "/javascript/",
  "title": "我的js",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "我的js",
    "description": "页面的描述",
    "home": false
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "javascript/index.md",
  "git": {
    "updatedTime": 1623588361000
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
