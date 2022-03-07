console.log('hello ts');

// 声明一个变量a 指定类型为number
let a: Number

a = 10

// 直接指定变量赋值
let b: boolean = true

// 如果变量的声明和赋值 同时进行 TS可以自动对变量进行类型检测

// JS中的函数不考虑参数的类型和个数
function sum ( a: number, b: number):number {
    return a + b
}
console.log(sum (1, 2));

// 可以使用 | 来连接多个类型 （联合类型）
let c: 'male' | 'famale'
c = 'male'
c = 'famale'

// any 表示任意类型 不建议使用
// 可以赋值给任意变量
let d: any
let z:string
z = d

// unknown 表示未知类型的值
// 是一个类型安全的 any
// 不能直接复制给其他变量 需要做 安全检验
let y = 'hello'
let e: unknown
// 不能将类型“unknown”分配给类型“string”
// y = e

if (typeof e === 'string') {
    y = e
}

// 类型断言
// 告诉编译器 e 是一个字符串
// 两种方法都可以
y = e as string
y = <string>e

// void 表示空 以函数为例 表示没有返回值
function fn(): void {
}
// 没有返回值 连空都没有
function fn2(): never {
    throw new Error('error')
}

// {} 用来指定对象中 可以包含哪些属性
// 语法： {属性名：属性值}
// 属性名后加 ？ 表示属性可选
let f: {name: string}
f = {
    name: 'hidari'
}

let g: {name: string, age?:number}

// [propname: string]:any 表示任意类型的属性
let h: {name: string, [propname: string]:any}
h = {
    name: 'hidari',
    age: '3',
    gender: 'female'
}

// 设置函数结构的类型声明
let i: (a: number, b: number) => number
d = function (n1,n2): number {
    return n1+n2
}

// string[] 字符串数组
// Array<string> 也可以 Array<类型>
let j: string[]

let k: Array<string>

// 元组 元组是固定长度的数组
let l: [string, number]
l = ['hidari', 123]

// enum 枚举
enum Gender {
    Male = 0,
    Famale = 1
}
let m: {name: string, gender: Gender}
m = {
    name: 'hidari',
    gender: Gender.Famale
}
console.log(m.gender === Gender.Famale);

// & 表示同时
let n: {name: string} & {age: number}
n = {
    name:'hidari',
    age: 3
}

// 类型的别名
type myType = 1|2|3|4|5
let o:myType

// tsc type.ts -w 监视