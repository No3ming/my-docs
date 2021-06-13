
export declare type Post = {
  title: string,
  path: string
  createDate
}

declare module  '@vuepress/shared' {
  interface SiteData {
    allPost: Post[]
    last10: Post[]
  }
}
