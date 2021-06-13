export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "首页",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "首页",
    "description": "小明的博客 明明的博客 No3ming",
    "home": true
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "最新的文章",
      "slug": "最新的文章",
      "children": []
    }
  ],
  "filePathRelative": "readme.md",
  "git": {
    "updatedTime": 1623586137000
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
