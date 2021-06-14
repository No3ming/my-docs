# c++ 和 wasm 项目搭建开发环境

总结一下：公司之前有一些牛逼的工程（移动端的[虚拟试衣特效](https://www.cloudream.com/)了解一下），却没有用上 wasm，简直是极度的浪费，我想抢救一下。
  
学习 wasm 的环境搭建过程，以 mac 环境来说

1. [安装 emcc](https://emcc.zcopy.site/docs/getting_started/downloads/)，比如我们放包的位置是`~/emsdk`


2. 配置环境，我用的是 mac 的 zsh，所以想要一劳永逸

   ```bash
   cd ~
   vim .zshrc
   # 添加, 保证启动终端就自动设置emcc编译环境， 如果不想这样，那就需要手动source ～/emsdk/emsdk_env.sh
   source ～/emsdk/emsdk_env.sh
   ```

3. 搭建 c++开发环境
4. 安装第三方包管理[vcpkg](https://github.com/microsoft/vcpkg)，这个会有一些坑，执行`./bootstrap-vcpkg.sh`的时候会报错，有可能是 gcc 没有安装,`brew install gcc`,brew 安装慢？修改 brew 的源

```bash
cd "$(brew --repo)"
git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git
```

如果还报错试试

```language
CXXFLAGS="-D_CTERMID_H_" ./bootstrap-vcpkg.sh
```

按照文档应该完成了部署，还有一些问题，我用的是 zsh 不是 bash，首先保证～/.bashrc 存在的

```bash
./vcpkg integrate bash
# 获取到 source /Users/lidm/vcpkg/scripts/vcpkg_completion.bash 添加到.zshrc
vim ~/.zshrc
```

2. 本人 c++菜鸟，mac 下的 c++开发环境不熟悉，所以第一时间使用了 clion 这种 idea

3. 创建一个 cmake（cmake 是啥？跨端的资源管理）项目。<br>
   ![image.png](http://lidomi.oss-cn-shenzhen.aliyuncs.com/image/png/a944a351e62cbcdbe1be4333f20fe840/image.png)<br>
   CMakeLists.txt`文件就是用来处理资源包

4. 比如我们想使用 GLES2

```bash
cd ~/vcpkg
./vcpkg search GLES
./vcpkg install angle
./vcpkg integrate install
cd ~/hello
// cmake还要多学习了解
cmake . -DCMAKE_TOOLCHAIN_FILE=/Users/lidm/vcpkg/scripts/buildsystems/vcpkg.cmake
```

5. 如果 cmake 没有集成这些资源 `#include <GLES2/gl2.h>` 还报错，那么就要手动集成了，看我的`CMakeLists.txt`

```vim
cmake_minimum_required(VERSION 3.15)
project(openes)

set(CMAKE_CXX_STANDARD 14)
// 声明OUT_DIR
set(OUT_DIR /Users/lidm/vcpkg/installed/x64-osx/include)
// 包含${OUT_DIR}
include_directories(${OUT_DIR})

add_executable(openes main.cpp)
```

6. 如果没有问题了的话，就可以利用 opengl 进行各种骚操作了


    ```bash
    emcc main.cpp -s WASM=1 -o hello.html
    emrun --no_browser --port 8080 .
    ```

    打开[http://localhost:8080](http://localhost:8080)跑起来

未完待续。。。。。
