import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","首页",["/index.html","/readme.md"]],
  ["v-e02a086e","/javascript/","我的js",["/javascript/index.html","/javascript/index.md"]],
  ["v-3dda3dde","/javascript/test.html","我的js测试",["/javascript/test.md"]],
  ["v-fdeb98fc","/javascript/test2.html","我的js测试2",["/javascript/test2.md"]],
  ["v-3706649a","/404.html","",[]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
