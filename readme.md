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

## 继承
```ts
class Animal{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

// 通过继承可以在不修改类的情况下完成对类的扩展
class Dog extends Animal{

    bark(){
        console.log(`${this.name}在汪汪叫！`);
    }
}

const dog = new Dog('旺财', 4);
dog.bark();
```

## 重写
```ts

// 发生继承时，如果子类中的方法会替换掉父类中的同名方法，这就称为方法的重写
class Animal{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    run(){
        console.log(`父类中的run方法！`);
    }
}

class Dog extends Animal{

    bark(){
        console.log(`${this.name}在汪汪叫！`);
    }

    run(){
        console.log(`子类中的run方法，会重写父类中的run方法！`);
    }
}

const dog = new Dog('旺财', 4);
dog.bark();
```

## super 关键字
```ts
class Animal {

    constructor(name: string) {}

    sayHello() {
        console.log('动物在叫~');
    }
}

class Dog extends Animal{

    age: number;

    constructor(name: string, age: number) {
        // 如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用
        super(name); // 调用父类的构造函数
        this.age = age;
    }

    sayHello() {
        // 在类的方法中 super就表示当前类的父类
        //super.sayHello();

        console.log('汪汪汪汪！');
    }

}

const dog = new Dog('旺财', 3);
dog.sayHello();
```

## 抽象类
```ts
// 抽象类是专门用来被其他类所继承的类，它只能被其他类所继承不能用来创建实例
// 使用abstract开头的方法叫做抽象方法，抽象方法没有方法体只能定义在抽象类中，继承抽象类时抽象方法必须要实现
abstract class Animal{
    abstract run(): void; // 抽象方法 void 返回值为空
    bark(){
        console.log('动物在叫~');
    }
}

class Dog extends Animals{
    run(){
        console.log('狗在跑~');
    }
}
```

## 接口
```ts
// 接口的作用类似于抽象类，不同点在于接口中的所有方法和属性都是没有实值的，换句话说接口中的所有方法都是抽象方法
// 接口主要负责定义一个类的结构，接口可以去限制一个对象的接口，对象只有包含接口中定义的所有属性和方法时才能匹配接口
// 同时，可以让一个类去实现接口，实现接口时类中要保护接口中的所有属性。

// interface 表示一个接口
interface Person{
    name: string;
    sayHello():void;  // 接口中所有方法都是抽象方法，抽象类中可以有抽象方法也可以有实例方法
}

function fn(per: Person){
    per.sayHello();
}

fn({
        name:'孙悟空', 
        sayHello() {
            console.log(`Hello, 我是 ${this.name}`)
        }
    })

// 定义类时 可以使类实现一个接口 implements
class Student implements Person{
    name: string
    constructor(public name: string) {
        this.name = name
    }

    sayHello() {
        console.log('大家好，我是'+this.name);
    }
}
```

## 属性的封装
```ts
// 对象实质上就是属性和方法的容器，它的主要作用就是存储属性和方法，这就是所谓的封装
// 默认情况下，对象的属性是可以任意的修改的，为了确保数据的安全性，在TS中可以对属性的权限进行设置
// 只读属性（readonly）：
//    如果在声明属性时添加一个readonly，则属性便成了只读属性无法修改

// TS中属性具有三种修饰符：
//    public（默认值），可以在类、子类和对象中修改
//    protected ，可以在类、子类中修改
//    private ，可以在类中修改


// public
class Person{
    public name: string; // 写或什么都不写都是public
    public age: number;

    constructor(name: string, age: number){
        this.name = name; // 可以在类中修改
        this.age = age;
    }

    sayHello(){
        console.log(`大家好，我是${this.name}`);
    }
}

class Employee extends Person{
    constructor(name: string, age: number){
        super(name, age);
        this.name = name; //子类中可以修改
    }
}

const p = new Person('孙悟空', 18)
p.name = '猪八戒' // 可以通过对象修改

// protected
class Person {
    protected name: string
    protected age: number

    constructor(name: string, age: number) {
        this.name = name // 可以修改
        this.age = age
    }

    sayHello() {
        console.log(`大家好，我是${this.name}`)
    }
}

class Employee extends Person {

    constructor(name: string, age: number) {
        super(name, age);
        this.name = name; //子类中可以修改
    }
}

const p = new Person('孙悟空', 18)
p.name = '猪八戒' // 不能修改

// private
class Person {
    private name: string
    private age: number

    constructor(name: string, age: number) {
        this.name = name // 可以修改
        this.age = age
    }

    sayHello() {
        console.log(`大家好，我是${this.name}`)
    }
}

class Employee extends Person{

    constructor(name: string, age: number) {
        super(name, age)
        this.name = name //子类中不能修改
    }
}

const p = new Person('孙悟空', 18)
p.name = '猪八戒' // 不能修改
```

## 属性存储器
```ts
//  - 属性存取器

//    - 对于一些不希望被任意修改的属性，可以将其设置为private

//    - 直接将其设置为private将导致无法再通过对象修改其中的属性

//    - 我们可以在类中定义一组读取、设置属性的方法，这种对属性读取或设置的属性被称为属性的存取器

//    - 读取属性的方法叫做setter方法，设置属性的方法叫做getter方法

class Person{
    private _name: string
    private _age: number

    constructor(name: string) {
        this._name = name
        this._age = age
    }

    get name() {
        return this._name
    }

    set name(name: string) {
        this._name = name
    }

    set age(age: number) {
        // 判断年龄是否合法
        if (age >= 0) {
            this._age = age
        }
    }

    get age(age: number) {
        this._age = age
    }
}

const p1 = new Person('孙悟空')
console.log(p1.name) // 通过getter读取name属性
p1.name = '猪八戒' // 通过setter修改name属性

class A {
    // 可以直接将属性 定义在构造函数中
    constructor(public name: string, public age: number){}
}
// 相当于
class B {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
```

## 泛型
```ts
// 在定义函数或者类时 如果遇到类型不明确 可以使用泛型
// <T> 表示任意类型 只有在函数执行的时候才能确认是什么类型
// 避免使用 any（跳过类型检查） 也可以体现出 参数和返回值类型相同
function fn<T>(a: T): T {
    return a
}
// 可以直接调用具有泛型的函数
let result1 = fn(10) // 不指定泛型 TS可以自动对类型进行判断（有时候不准确
let result2 = fn<string>('hello') // 可以指定泛型

// 泛型可以同时指示多个
function fn2<T, K>(a: T, b: K): T {
    console.log(b)
    return a
}
fn2<number, string>(123, 'hello')

// 限制泛型的范围
interface Inter {
    length: number
}
// T extends Inter 表示泛型T必须是Inter实现类（子类）
function fn3<T extends Inter>(a: T): number {
    return a.length
}

class MyClass<T> {
    name: T,
    constructor(name: T) {
        this.name = name
    }
}
const mc = new MyClass<string>('hidari')
```