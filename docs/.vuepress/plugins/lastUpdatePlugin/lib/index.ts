const execa = require("execa");
const path = require('path')
let allPost = []
let lastPost10 = []

const handlerMenu = (page) => {
  const index = lastPost10.findIndex(it => it.createDate < page.createDate)
  if (index >= 0) {
    lastPost10.splice(index, lastPost10.length >= 10 ? 1 : 0, page)
  } else {
    lastPost10.push(page)
  }
}

const getCreatedTime = async (filePath, cwd) => {
  const { stdout } = await execa('git', ['--no-pager', 'log', '--diff-filter=A', '--format=%at', filePath], {
    cwd,
  });
  return Number.parseInt(stdout, 10) * 1000;
};

const handlerFile = async (page, cwd, app) => {
  if (page.filePathRelative === 'readme.md') {
    allPost.splice(0, allPost.length)
    lastPost10.splice(0, allPost.length)
  }
  if (page.filePathRelative && page.filePathRelative !== 'readme.md' && page.frontmatter.isShowList !== false) {
    const p = {
      title: page.title,
      path: path.resolve(app.options.base + page.path),
      createDate: await getCreatedTime(page.filePathRelative, cwd)
    }
    allPost.push(p)
    handlerMenu(p)
  }
}
const lastUpdatePlugin =  (options, app) => {
  const cwd = app.dir.source();

  return {
    name: 'lastUpdatePlugin',
    extendsPageData: async (page) => {
      // await handlerFile(page, cwd)
      // console.log(allPost)
      return {
        // allPost,
        // lastPost10
      }
    },
    async onInitialized (app) {
      // app.siteData.allPost = allPost
      for (let i =0; i< app.pages.length; i++) {
        await handlerFile(app.pages[i], cwd, app)
      }
      // console.log(app)
      app.siteData.last10 = lastPost10
      app.siteData.allPost = allPost.sort((a, b) =>  b.createDate - a.createDate)
    }
  }
}

module.exports = lastUpdatePlugin
