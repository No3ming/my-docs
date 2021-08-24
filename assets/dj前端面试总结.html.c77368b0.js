import{d as i}from"./app.dd1f0c8e.js";const e={},n=i('<h1 id="dj前端面试总结"><a class="header-anchor" href="#dj前端面试总结">#</a> dj前端面试总结</h1><h2 id="介绍"><a class="header-anchor" href="#介绍">#</a> 介绍</h2><p>大疆 web 前端面试一面，方式为视频面试。 开始为自我介绍，介绍了 3 个项目。</p><p>介绍了我自己主要使用的技术 vue、react、jquery，后端 nodejs、golang。</p><ol><li>商户中心管理后台，介绍来我的团队组成技术选型 react+i18n 国际化以及我负责内容，我在团队里是组长，所以讲里一下团队开发的一些内容，我主要讲了开发规范以及 react 组件化开发以及我负责开发的模块。</li></ol><p>第二个项目是一个运营数据中心，和商户中心基本一致，讲了自己负责的内容。</p><p>第三个项目是微信小程序在线试衣，讲一下团队组成以及担任的角色，整个项目是从 0 到 1 开发的，参考了 weapp 库进行组件开发，后面这个项目基本由我来维护，我又用 taro 和 ts 重新开发一个版本。</p><p>我自己也接过一些私活，其中 2018 年用 react-native 开发过一个 app，我负责了整个应用的所有设计和开发，还有在安卓和 ios 的应用打包。</p><p>去年 8 月份，由于后端人力不足，领导安排我支援，我学习了一个月的 golang 后已经可以独立开发和部署服务，并且开发了一些微服务。</p><p>到这里介绍完毕。 提问题阶段，不分先后</p><h2 id="项目"><a class="header-anchor" href="#项目">#</a> 项目</h2><ol><li>讲一下你最熟悉的一个项目。 我讲了商户中心：</li></ol><ul><li>负责内容：自己担任的角色组长，基本就是分解任务分配任务，搭项目架构，写开发规范文档，review 代码。</li><li>分解任务：根据需求理解，先大致地分块，然后细分，列出每个模块的难点和注意点，根据组员的水平合理分配。</li><li>如何写规范文档：理解 eslint 的配置内容，拿出经常会犯错的内容记录到文档中，根据对 react 的理解，组件如何设计，全局数据如何控制，规范注释，面对复杂的逻辑提前写思路注释。</li><li>如何技术选型：团队基本是初级前端，react 事件驱动更加贴合原生 js，利于团队水平的提高；在 GitHub 找库原则，功能、star、issus、update times，download。</li><li>如何 review 代码：项目分支为 master、版本分支、以及每个开发者一个分支，每天进行 2 次代码请求合并，审查要求，是否和注释内容一致，是否有大面积提交代码，代码是否符合规范；需要在每个开发者的电脑配置 git-cz，统一提交格式；修改 git config ，需要在 git cz 的时候使用 npm run lint 进行代码检查。</li><li>讲讲组件化开发一些经验：1）数据流的处理，状态提升。2）对嵌套多层传递数据，改成把组件提升到顶部，使用 props.children 或者把传递数据改成传递组件（不建议使用 context，会破坏稳定的代码结构）。3）尽可能细化组件，组件可复用。4）开发一个组件之前确保是受控组件还是非受控组件。</li><li>react 最重要的性能问题：我当时回答了修改数据需要在 componentDidMount 中修改，避免初始化时多次 render，还有事件和对象不要直接在 render 中使用，采用变量引用事件 <code>&lt;Demo onChange={() =&gt; {}} /&gt;</code> // 避免这样写`。其实面试官是想问我 shouComponentupdate,将数据对比再决定要不要更新渲染。</li><li>react 中用了那些第三方的库：我当时回答了，axios，redux，mobx，i18n，现在补充一下 dayjs（日期格式），lodash（这个要多学习了解一下），save-file，jszip(zip 打包),less,uid,md5,exif-js(图片元数据读取)。</li></ul><h2 id="框架"><a class="header-anchor" href="#框架">#</a> 框架</h2><ol><li><p>vue、react、angular 的区别。 vue：mvvc， 在 mvc 的基础上加上基础组件，采用了 template 模版语法，使用数据驱动的双向绑定的理念，上手简单。 react：推崇 jsx 语法，使用事件驱动理念，贴近原生开发(我见过很多用了 vue 以后忘记了原生 js 怎么写的，算不算是一个笑话)，和 vue 一样都使用了虚拟 dom。 angular：使用 mvc，和 java 类似，推崇项目框架开发，更好的进行各种设计模式开发，最早支持 typescript 的，但是上手比较困难，相对 react 和 vue 来说比较重。</p></li><li><p>讲一下 vue 是如何进行双向绑定的以及 es6 给 vue 带来了那些改变。 我的回答是是脏检查，将需要进行检查的数据放到一个队列中，每隔一段时间进行一次遍历；使用 defineProperty 截取改动，存在缺点是不能对数组的成员进行监听，vue 优化 push 和 slice 方法；在 es6 中带来了 proxy，该方法可以解决 defineProperty 的问题。</p></li><li><p>http 状态码都有表示什么么？1，2，3，4，5。</p><p>1**，信息，服务器收到请求，可以继续操作；</p><p>2**，成功，操作被成功接收并处理；</p><p>3**，重定向，需要进一步请求以完成请求；</p><p>4**，客户端错误，请求包含错误或者无法完成请求；</p><p>5**，服务器错误，服务器在处理请求过程中发生了错误。</p><p>当时我回答重定向反来，正确应该是 301 是永久重定向，302 是临时重定向.</p></li><li><p>讲一下作用域。 作用域可以分为 3 种：全局作用域、函数作用域、块作用域，他们形成了一个作用域链，js 查找变量和 function 时会从作用域一层层往上查找，如果没有在全局作用域中找到 说明是<code>not defined</code>。块作用域是什么时候引进来的。我当时没有回答好，直讲了 let 解决了 for 解决了索引的问题。其实块作用域是 let 和 const 引进来的，es6 才有，在 for 循环代码块中使用 let 或者 const 定义的变量在 for 外是访问不到的。</p></li><li><p>讲一下变量提升和变量提升是什么阶段发生。 js 是一种解释语言，在浏览器或者 node 引擎运行代码的时候会解释成 c 语言后执行，解释过程会先将代码中的所有变量都找到，而且 function 的优先级比 var 高，新重复的声明会覆盖旧的声明，所以在在声明之前的变量都会赋值<code>undefined</code>。</p></li><li><p>typescript 为什么产生的带来了什么好处，在项目有有使用过么？ 由于 js 是一种弱类型语言，在类型限制上存在很大的不足，虽然自由，但是同时也给代码结构带来很破坏性的影响，导致有很多代码质量差次不起，所以就有了 typescript 的类型检查，可以让我们写出更加规范的代码，以及类型推断可以将开发效率提高。类型检查是在开发阶段发生的，准确地说是 webpack 编译代码的阶段发生的。我在使用 taro 重写微信小程序的时候使用过 ts。</p></li><li><p>react 的 diff 算法是的时间复杂度是多少？ 我当时答烂了，准确地说答偏了。 时间复杂度的含义：</p></li></ol><ul><li><p>O(1): 常数，不管有多少值，执行的时间都是恒定的。一般表示简单值和存储在变量中的值。</p></li><li><p>O(log n): 对数，总的执行时间和值的数量相关，但是要完成算法并不一定要获取每一个值。例如二分查找。</p></li><li><p>O(n): 线性，总执行时间和值的数量直接相关。例如遍历某个数组的所有元素。</p></li><li><p>O(n^2): 平方，总执行时间和值的数量有关，每个值至少要获取 n 次。例如：插入排序(每次遍插入都要遍历一次)</p></li><li><p>O(n^3): 立方，总执行时间和值的数量有关，每个人值至少要获取 n^2 次。比如二叉树的对比</p><p><strong>学习一下简化循环的几个方法</strong> i. <strong>减至迭代</strong>，大多情况使用从 0 开始循环，其实从最大数开始循环更加有效。 ii. <strong>简化终止条件</strong>，由于每次循环过程都会计算终止条件，所以必须保证它尽可能地快。也就是说避免属性查找或其他 O(n)操作。 iii. <strong>简化循环体</strong>，循环体是执行最多的，所以要最大限度的优化。确保没有某些可以被很容易移出循环的密集计算，也就尽可能把复杂运算移出循环体，或者添加多简单计算的条件避免不必要的复杂运算。。 iiii. <strong>使用后测试循环</strong>，最常使用是前测试循环 for 和 while。而 do-while 后测试循环可以避免最初终止条件的计算，少一次条件判断。</p><p><strong>react 将 diff 算法由 O(n^3)使用以下方法优化到 O(n)，其实就是简化循环体，用简单的条件来避免复杂计算</strong> i. 使用 key，如果 key 一样的进行下一步对比，否则直接替换。 ii. 对比 dom 的类型，不一样直接替换了。 iii. 如果新节点遍历完了直接抛弃剩下的旧节点。</p></li></ul><ol start="9"><li><p>说一下你的职业规划（知道哪些跨平台应用，知道 flutter 么）? 我的职业就是大前端，所有需要 web 前端的应用。 比如 react-native、ionic、Electron，知道 flutter，目前还没了解到，还没准备好，主要是还需要多学一门语言 dart,目前还没这么多精力。 react-native 如何实现跨平台开发的？react-native 其实就是安卓和 object-c 这些原生手机应用，在里面嵌入了一个 web-view，使用了一些粘合代码把 web-view 和原生代码连接起来。</p></li><li><p>知道宏任务和微任务么？ 我的表述的是，js 代码执行过程是从上往下执行完一段代码，然后按照广度遍历的方式执行宏任务队列，然后执行微任务队列，以此类推，直至没有宏任务和微任务为止。</p></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// 微任务队列\nprocess.nextTick\npromise\nMutationObserver\n// 宏任务队列\nsetTimeout\nsetImmediate\nsetInterval\nI/O\nUI 渲染\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>其他，一些应该会问但是由于时间问题没有问到的。</strong></p><ol start="11"><li><p>https 握手过程？</p><p>i. 客户端使用 https 请求服务端 ii. 服务端收到请求后会查询证书，然后将证书相关内容和公钥发送给客户端。 iii. 客户端收到证书描述，检查证书是否有效，如果有效使用服务端提供的公钥生成一个 hash iiii. 客户端将生成的 hash 后发送给服务端， 这样双方都具有解密数据的钥匙。 iiiii. 双方可以传递数据。</p></li><li><p>浏览器渲染的过程？ i. 将 html 转换成 dom 节点树；</p><p>ii. 将 css 转换成 cssom 树；</p><p>iii. 将 dom 和 cssom 合并成渲染树；</p><p>iiii. 计算出布局的所有属性以及样式，使用流式布局的<code>layout</code>；</p><p>iiiii. 将 layout 绘制到屏幕，过程叫做<code>painting</code>。</p><p>这里可以扩展到，浏览器重绘还有回流 i. 重绘，对屏幕上一部分重新绘制，比如修改颜色，背景色等不影响周边元素的大小修改时会重绘。 ii. 回流，引起渲染树的的 layout 发生改变是，需要进行回流，重新计算改变的元素，避免引起回流或者说减少改变布局的操作。，</p></li><li><p>还有一个白板算法计算题还没有做？应该是队列\\堆栈、链表、二叉树的算法题，首先那就先了解清楚含义。</p></li></ol><ul><li><p>队列：先进先出，array 的方法 push, shift</p></li><li><p>堆栈：先进后出，array 的方法 push，pop</p></li><li><p>二叉树：一个节点可以有左树和右树，左树的值比右树的值要大。二叉树的遍历有前序遍历（先访问跟节点，前序遍历左树，前序遍历右树），中序遍历（先访问左树，再访问该节点，再访问右树），后序遍历（先访问左树，再访问右树，再访问该节点）。</p></li><li><p>链表：一个节点的和父节点以及子节点的结构是一样</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    value<span class="token punctuation">,</span>\n    parent<span class="token punctuation">,</span>\n    child\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul>',21);e.render=function(i,e){return n};export default e;
