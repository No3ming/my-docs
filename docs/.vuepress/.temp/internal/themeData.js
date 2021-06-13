export const themeData = {
  "repo": "https://github.com/No3ming/my-docs.git",
  "logo": "https://vuejs.org/images/logo.png",
  "navbar": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "javascript",
      "link": "/javascript/"
    }
  ],
  "lastUpdated": true,
  "docsDir": "docs",
  "lastUpdatedText": "更新时间",
  "contributors": false,
  "backToHome": "返回首页",
  "editLinkText": "编辑页面",
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "openInNewWindow": "open in new window"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
