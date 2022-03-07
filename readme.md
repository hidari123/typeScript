## package.json
```json
// npm init -y 初始化一个package.json
```

## 类
```ts
class Person {
    // 直接定义的属性是实例属性 需要通过对象的实例访问
    // static 开头的属性是静态属性（类属性） 可以直接通过实例调用
    //定义实例属性
    name: String = 'hidari'
    // 在属性前面加 static 关键字 可以定义属性（静态属性）
    static age: number = 3
    // 只读属性 不可修改
    readonly gender: String = 'female'
    // 合起来用的时候 static 要在前面
    static readonly height: number = 100
    // 定义方法
    // static 开头 是类方法 可以直接访问
    sayHello () {
        console.log('hello')
    }
}

const per = new Person()
console.log(per.name)
per.name = 'tom' // 可以修改
// 静态属性调用
console.log(Person.age)
```

## 构造函数 & this
```ts
class Dog {
    name: string,
    age: number,
    constructor (name: string, age: number) {
        // 构造函数 在对象创建的时候调用
        // 在实例方法中 this 表示当前实例
        // 在构造函数中 当前对象就是当前建的对象
        console.log(this)
        this.name = name,
        this.age = age
    }
    bark () {
        alert ('汪汪汪')
        // 构造函数中 this 表示当前调用方法的对象
        console.log(this.name)
    }
}
const dog1 = new Dog ('mango1', 4)
const dog2 = new Dog ('mango2', 2)
dog1.bark()
```