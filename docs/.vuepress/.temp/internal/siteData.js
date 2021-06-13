export const siteData = {
  "base": "/",
  "lang": "zh-CN",
  "title": "小明的博客！",
  "description": "做人一定要骚",
  "head": [],
  "locales": {},
  "last10": [
    {
      "title": "我的js",
      "path": "/javascript/",
      "createDate": 1623586137000
    },
    {
      "title": "我的js测试",
      "path": "/javascript/test.html",
      "createDate": 1623586137000
    },
    {
      "title": "我的js测试2",
      "path": "/javascript/test2.html",
      "createDate": 1623586137000
    }
  ]
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
