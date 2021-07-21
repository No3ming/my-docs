# TS 几个内置工具类型（Partial & Required & Readonly & Pick & Exclude & Extract & Omit & ReturnType）的使用

## Partial

源码

```ts
type Partial<T> = {
    [P in keyof T]?: T[P]
}
```

作用: 生成一个类型，该类型将T的属性全部变为可选

例子

```ts
type Foo = {
    name: string
    age: number
}

type FFoo = Partial<Foo>

// ==

type FFoo = {
    name?: string
    age?: number
}
```

## Required

源码

```ts
type Required<T> = {
    [P in keyof T]-?: T[p]
}
```

作用：将T的类型全部转换成必填

例子

```ts
type Foo = {
    name?: string
    age?: number
}
type FFoo = Required<Foo>

// 相当于

type FFoo = {
    name: string
    age: number
}

```

## Readonly

源码

```ts
type Readonly<T> = {
    readonly [P in keyof T]: T[P]
}
```

作用：返回新类型，将T的属性全部设置为只读

例子

```ts
type Foo = {
    name?: string
    age: number
}
type FFoo = Readonly<Foo>

// 相当

type Foo = {
    readonly name?: string
    readonly age: number
}
```

## Pick

源码

```ts
type Pick<T, K extend keyof T> = {
    [P in K]: T[P]
}
```

作用： 从T中获取K的属性，返回新类型, K为类型keys

例子

```ts
type Too = {
    name?: string
    age: number
    height?: number
} 
type Koo = 'name' | 'age

type TToo = Pick<Too, Koo>

// 相等于

type TToo = {
    name?: string
    age: number
}
```

## Exclude

源码

```ts
type Exclude<T, U> = T extends U ? never : T;
```

作用: 如果T是U的子类则返回never，否则返回T，其实就是从T中剔除U，  K 和 U 都是类型keys

例子:

```ts
type A = 'name' | 'age' | 'height'
type B = 'name' | 'age'

type C = Exclude<A, B>

// 相等于
type C = 'height'
```

## Extract

源码

```ts
type Extract<T, U> = T extends U ? T : never 
```

作用和Exclude相反,取出交集,K 和 U 都是类型keys

例子

```ts
type A = 'name' | 'age' | 'heught'

type B = 'name'

type C = Extract<A, B>

// 相当于
type C = 'name'

```

## Omit

源码

```ts
type Omit<T, K extends keyof any> = Pick<T, Exclude<typeof T, K>>
```

作用： 从T中剔除 K 属性

例子

```ts
type A = {
    name?: string
    age: number
    height: number
}

type B = 'name' | 'age'

type C = Omit<A, B>

// 相当于

type C = {
    height: number
}

```

## Record

源码

```ts
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
```

作用：将K作为属性名，T为属性值构建类型

例子

```ts
type A = 'name' | 'age

type B = number[]

type C = Record<A, B>

// 相当于

type C = {
    name: number[]
    age: number[]
}

```

## ReturnType

源码

```ts
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

```

作用: 获取一个函数的返回类型

例子

```ts
function A (name: string)  {
    return {
        [name]: name
    }
}

type B = ReturnType<typeof A>

// 相当

type B = {
    [string]: string
}

```

[抄自](https://juejin.cn/post/6905928813452984327)
