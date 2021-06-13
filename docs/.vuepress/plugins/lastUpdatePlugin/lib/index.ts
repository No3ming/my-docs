const execa = require("execa");

let allMenu = []
let menu = []

const handlerMenu = (page) => {
  const index = menu.findIndex(it => it.createDate < page.createDate)
  if (index >= 0) {
    menu.splice(index, menu.length >= 10 ? 1 : 0)
  } else {
    menu.push(page)
  }
}

const getCreatedTime = async (filePath, cwd) => {
  const { stdout } = await execa('git', ['--no-pager', 'log', '--diff-filter=A', '--format=%at', filePath], {
    cwd,
  });
  return Number.parseInt(stdout, 10) * 1000;
};

const handlerFile = async (page, cwd) => {
  if (page.filePathRelative === 'readme.md') {
    allMenu.splice(0, allMenu.length)
    menu.splice(0, allMenu.length)
  }
  if (page.filePathRelative && page.filePathRelative !== 'readme.md') {
    const p = {
      title: page.title,
      path: page.path,
      createDate: await getCreatedTime(page.filePathRelative, cwd)
    }
    allMenu.push(p)
    handlerMenu(p)
  }
}
const lastUpdatePlugin =  (options, app) => {
  const cwd = app.dir.source();

  return {
    name: 'lastUpdatePlugin',
    extendsPageData: async (page) => {
      // await handlerFile(page, cwd)
      // console.log(allMenu)
      return {
        // allMenu,
        // menu
      }
    },
    async onInitialized (app) {
      // console.log(app.pages)
      // app.siteData.allMenu = allMenu
      for (let i =0; i< app.pages.length; i++) {
        await handlerFile(app.pages[i], cwd)
      }
      console.log(menu)
      app.siteData.last10 = menu
    }
  }
}

module.exports = lastUpdatePlugin
