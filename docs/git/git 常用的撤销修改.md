# git 常用的撤销修改

## 平时我们大多数使用 idea 的 git 操作工具，很少使用 git 命令行工具，看到了一编关于该内容的文章，顺手总结一下

4 个区：git 中总共分为 **工作区** `git add .` -> **暂存区** `git commit -m '添加'`-> **本地仓库** `git push`-> **远程仓库**<br>
5 个状态： **未修改（Origin）**`修改内容` -> **已修改（Modified）** `git add .`-> **已暂存（Staged）** `git commit` -> **已提交（Commited）** `git push` -> **已推送（Pushed）** <br>

思路：套路先检查变化再进行撤销<br>

**回退已经修改内容**

```javascript
// 检查
git diff
// 回退
git checkout .
// or
giy reset --hard
```

**回退已经存在暂存区的内容**

```javascript
// 检查
git diff --cached
// 回退
git reset
git checkout .
// or
git reset --hard
```

**回退已经提交的内容**

```javascript
// 检查
git diff master origin/master
git reset --hard origin/master
// 回退
```

**回退已经推送的内容**

```javascript
// 查看日志
git log
// 回退 git reset --hard sad1231asda
git reset --hard HEAR^
git push -f
```

总的来说要掌握`git reset --hard`哈哈

来源[git 的 4 个阶段的撤销更改](https://mp.weixin.qq.com/s/S33W_L9-taAC-aEuHvZYPQ)
