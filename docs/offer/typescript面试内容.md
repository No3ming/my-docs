# typescript 面试内容

现在似乎很少面试涉及到 typescript(文中简称 ts)，本文收集一些 ts 面试需要准备的内容。
1.js 项目如何升级为 ts？有何影响？

1.  在原有项目上搭建 ts 环境，同时配置 tsconfig.json, 新版`typeRoot`可以忽略了

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "allowJs": true,
    "lib": ["es6"]
  }
}
```

2.  添加一个@types 目录，专门存放原来使用 js 来写各个类库的方法`*.d.ts`文件,使用方法见[声明文件](https://www.tslang.cn/docs/handbook/declaration-files/introduction.html).
3.  针对第三方库先尝试使用`npm i @types/*`来安装，如果没有的话需要在`@types`目录下添加对于库的声明文件
    [更多](https://segmentfault.com/a/1190000018585303)，比如：

```typescript
declare module "jquery" {}
```

4.逐渐将原来的 js 代码重构建到 ts。

2.ts 基础类型都哪些，他们跟 js 的区别。

- string 字符串
- number 数值
- boolean 布尔
- string[], number[], Array\<number> 固定类型数组
- [string, number] 元组, 固定下标类型的数组，不同类型的数组
- enum 枚举, 给一组数值一个友好的标志: enum Color {red, blue = 3} // Color.red === 0 ; Color.blue === 3
- any 不确定类型
- void 没有返回值，只可以设置为 null 或者 undefined
- null 和 undefined， 对应着他们的值，在-staticNullCheck=false 的情况下 null 和 undefined 可以赋值给任何类型，希望是 true。
- never 永不存在值的类型，是任何类型的子类，可以给赋值给任何类型，但是任何类型不能声明为 naver 类型，any 也不可以。
- Object 纯属一个对象，可以为数组，{},null, 问题是没有任何属性 obj.attr 是会报错的
- 类型断言
  ```
  let len: number = (<string>value).length
  // or
  let l: number = (value as string).length
  ```
- unkown (3.0 新增)顶级数据类型，在和 any 不同的是在没有确定类型时不能进行操作(x.do())，只能赋值给 unkown 和 any 类型

  3.ts 为什么会流行？与 ECMA 新规范的关系？
  因为 js 是一个弱类型语言，在类型推断相比其他强类型语言有先天弱势，也是导致其代码容易出错的原因之一，容易造成不规范代码；
  在这样的背景下，ts 的类型推断给 js 更加牢固的代码规范，同时也因为类型推断加快开发效率。
  ES 新规范的发展促进了 typescript 的发展，ts 也是依据 ES 规范的语言。

  4.tslint 都能配置哪些功能？对开发流程有何影响？
  tslint 包含了 eslint 的配置，tslint 和 eslint 已经合并。
  主要配置信息有：
  `tslint.json`

```json
{
  "extends": "tslint:recommended",
  "rulesDirectory": ["src"],
  "linterOptions": {
    "exclude": []
  },
  "rules": {
    "member-access": true, // 设置成员对象的访问权限（public,private,protect)
    "member-ordering": [
      // 设置修饰符顺序
      true,
      {
        "order": [
          "public-static-field",
          "public-static-method",
          "protected-static-field",
          "protected-static-method",
          "private-static-field",
          "private-static-method",
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "public-constructor",
          "protected-constructor",
          "private-constructor",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method"
        ]
      }
    ],
    // "no-empty-interface":true,// 不允许空接口
    "no-parameter-reassignment": false, // 不允许修改方法输入参数
    "prefer-for-of": true, // 如果for循环中没有使用索引，建议是使用for-of
    // 功能特性
    "no-namespace": false,
    "only-arrow-functions": false, //禁止使用传统（非箭头）函数表达式
    "no-shadowed-variable": true, // 不允许子作用域与外层作用域声明同名变量
    "no-string-literal": false,
    "ban-types": false, // 禁止内置原始类型
    "await-promise": true, // 不允许没有Promise的情况下使用await
    "curly": true, // if/for/do/while强制使用大括号
    "forin": false, // 使用for in语句时，强制进行hasOwnProperty检查
    "no-arg": true, // 不允许使用arguments.callee
    "no-bitwise": false, // 不允许使用特殊运算符 &, &=, |, |=, ^, ^=, <<, <<=, >>, >>=, >>>, >>>=, ~
    "no-conditional-assignment": true, // do while/for/if/while 语句中将会对例如if(a=b)进行检查
    "no-console": true, // 不允许使用console对象
    "no-debugger": true, // 不允许使用debugger
    "no-duplicate-super": true, // 不允许super() 两次使用在构造函数中
    "no-empty": false, // 函数体不允许空
    "no-eval": true, // 不允许使用eval
    "no-for-in-array": true, // 不允许对Array使用for-in
    "no-invalid-template-strings": true, // 只允许在模板字符串中使用${
    // "no-invalid-this":true,// 不允许在class之外使用this
    // "no-null-keyword":true,// 不允许使用null,使用undefined代替null，指代空指针对象
    "no-sparse-arrays": true, // 不允许array中有空元素
    "no-string-throw": true, // 不允许throw一个字符串
    "no-switch-case-fall-through": true, // 不允许case段落中在没有使用breack的情况下，在新启一段case逻辑
    "no-unsafe-finally": true, // 不允许在finally语句中使用return/continue/break/throw
    "no-unused-expression": true, // 不允许使用未使用的表达式
    "no-use-before-declare": true, // 在使用前必须声明
    "no-var-keyword": true, // 不允许使用var
    "radix": false, // parseInt时，必须输入radix精度参数
    // "restrict-plus-operands":true,// 不允许自动类型转换，如果已设置不允许使用关键字var该设置无效
    "triple-equals": false, // 必须使用恒等号，进行等于比较
    "use-isnan": true, // 只允许使用isNaN方法检查数字是否有效

    // 维护性功能
    "indent": [true, "spaces", 4], // 每行开始以4个空格符开始
    "max-classes-per-file": [true, 1], // 每个文件中可定义类的个数
    "max-file-line-count": [true, 1000], // 定义每个文件代码行数
    "max-line-length": [true, 300], // 定义每行代码数
    "no-default-export": true, // 禁止使用export default关键字，因为当export对象名称发生变化时，需要修改import中的对象名。https://github.com/palantir/tslint/issues/1182#issue-151780453
    "no-duplicate-imports": true, // 禁止在一个文件内，多次引用同一module
    // 格式
    "align": [
      true,
      "parameters",
      "arguments",
      "statements",
      "members",
      "elements"
    ], // 定义对齐风格
    "array-type": [true, "array"], // 建议使用T[]方式声明一个数组对象
    "class-name": false, // 类名以大驼峰格式命名
    "comment-format": [true, "check-space"], // 定义注释格式
    "encoding": false, // 定义编码格式默认utf-8
    "import-spacing": true, // import关键字后加空格
    "interface-name": [true, "always-prefix"], // interface必须以I开头
    "jsdoc-format": false, // 注释基于jsdoc风格
    "new-parens": true, // 调用构造函数时需要用括号
    "object-literal-sort-keys": false,
    "no-consecutive-blank-lines": [true, 2], // 不允许有空行
    // "no-trailing-whitespace": [// 不允许空格结尾
    //     true,
    //     "ignore-comments",
    //     "ignore-jsdoc"
    // ],
    "no-unnecessary-initializer": true, // 不允许没有必要的初始化
    "variable-name": [
      false,
      "check-format", // 定义变量命名规则
      "allow-leading-underscore",
      "allow-trailing-underscore",
      "ban-keywords"
    ]
  }
}
```

5.如何使用 js 实现类型约束，枚举等特性么？

```javascript
typeof value === "string";
typeof value === "number";

var enum;
(function(enum) {
  enum[(enum["A"] = 0)] = "A"; // enum['A'] = 0;enum[0] = 'A'
})((enum || enum = {})); // enum = {}
```

6.如何理解接口，泛型?
接口理解为一个对象的约束或者说是描述，约束该对象的属性类型，多个同名的接口会被合并。
泛型，在运行的时候才会约束类型，根据输入类型来限制输出类型，类型约束的一个灵活使用方式，首先需要确保输入类型和输出类型的关系，以大写字母变量的形式存储输入值的类型，以让其在函数中及输出是使用。
