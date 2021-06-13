export const data = {
  "key": "v-3dda3dde",
  "path": "/javascript/test.html",
  "title": "我的js测试",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "我的js测试",
    "description": "页面的描述"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "javascript/test.md",
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
