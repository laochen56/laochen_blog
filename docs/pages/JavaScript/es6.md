---
title: ES6
date: 2022-09-21 09:51:01
permalink: /pages/30f9ae/
categories:
  - pages
  - JavaScript
tags:
  - ES6
---

# show_page

&emsp;&emsp;ES6的版本变动内容最多，具有里程碑意义；加入许多新的语法特性，编程实现更简单、高效......

<p align="center"><img src="http://cdn-hw-static.shanhutech.cn/bizhi/staticwp/202208/d9bee592a6fc45c8d9ef08cafdfea9c0--4069214321.jpg" width="70%" style="cursor: zoom-in;"></p>

<!-- more -->

> 尚硅谷ES6学习总结
## ES6 简介
&emsp;&emsp;ES 的全称是 ECMAScript ,是JavaScript语言的增强； 它是由 Ecma国际 通过 ECMA-262标准化的脚本程序设计语言；ES6 实际上是一个泛指，泛指 ES2015 及后续的版本。

### let const 关键词
1、let用来声明变量；
 声明的变量有几个特点： 
- 不允许重复声明
- 块儿级作用域
```js
 if (true) {
    let a = 10;
}
console.log(a) // a is not defined
```
- 不存在变量提升
```js
 console.log(a); // a is not defined 
 let a = 20;
```
- 不影响作用链

2、const 用来声明常量；const声明有以下特点：
- 声明必须赋初始值
```
const test; // Missing initializer in const declaration
```
- 标识符一般为大写
- 不允许重复声明
```js
const test = 123;
test = 345; // Assignment to constant variable.
```
- 值不允许修改
- 块级作用域

>tips:var、let、const区别：

| var     | 	let     | 	const  |
|---------|----------|---------|
| 函数级作用域	 | 块级作用域    | 	块级作用域  |
| 存在变量提升	 | 不存在变量提升	 | 不存在变量提升 |
| 值可更改    | 	值可更改    | 值不可更改   |
### 解构赋值
&emsp;&emsp;按照一定模式，从数组或者对象中提取值，对变量进行赋值，这被称为解构赋值。 

1、数组解构
```js
let [a, b, c] = [1, 2, 3];
console.log(a)
console.log(b)
console.log(c)
```
2、对象解构
```js
let person = { name: 'laochen', age: 18 }; 
let { name, age } = person;
console.log(name); // 'laochen' 
console.log(age); // 18
```
```js
let {name: myName, age: myAge} = person; // myName myAge 属于别名
console.log(myName); // 'laochen' 
console.log(myAge); // 18
```
### 模板字符串
&emsp;&emsp; 模板字符串（ template string）是增强版的字符串， 用反引号（ `）标识 ，特点:
- 字符 串中可以出现换行
- 可以使用 ${xxx} 形式输出变量
- 可以调用函数
```js
 let person = { 
     name: 'laochen', 
     age: 18, 
     sex: '男' 
 } 
 let html = ` <div>
     <span>${person.name}</span>
     <span>${person.age}</span>
     <span>${person.sex}</span>
 </div> `;
```
```js
const sayHello = function () { 
    return '笑什么笑，不许笑';
 }; 
let  test = `${sayHello()} 哈哈哈哈`; console.log(test); // 笑什么笑，不许笑 哈哈哈哈
```
### 简化对象
&emsp;&emsp;在大括号里面，直接写入变量和函数作为对象的属性方法，这样的书写更加简洁。
```js
let name = 'laochen'; 
let slogon = '一点一滴都是进步'; 
let improve = function () { console.log('学习可以提高你的技能'); }
//属性和方法简写
let xuexi = { 
    name,//name:name的简化
    slogon,
    improve(){console.log('学习可以提高你的技能');}//improve:function () { console.log('学习可以提高你的技能'); }的简化
   
};
console.log(xuexi)
```
### 箭头函数
&emsp;&emsp;使用() => {} 定义函数，特点：
- 如果形参只有一个，则小括号可以省略
- 函数体如果只有一条语句，则花括号可以省略，函数的返回值为条语句的该执行结果
- 箭头函数 this指向声明时所在作用域下 this 的值
- 箭头函数不能作为构造实例化
- 不能使用 arguments

```js
/* 1. 定义方式 */
() => {}
const fn1 = () => {}
/* 2. 省略小括号的情况 */ 
let fn2 = num => { return num * 10; };
/* 3. 省略花括号的情况 */ 
let fn3 = score => score * 20;
/* 4. this指向声明时所在作用域中 this 的值 */
let fn4 = () => { console.log(this); }
```
>tips:箭头函数不会更改 this指向，用来定义回调函数会非常合适 
### rest 参数
&emsp;&emsp;用于获取 参数，用于获取 函数的实参，用来代替 arguments
```js
/* 作用与 arguments 类似 */
function add(...args){
    console.log(args); 
                     }
add(1,2,3,4,5);
/* rest 参数必须是最后一个形参 */ 
function minus(a,b,...args){
    console.log(a,b,args); 
                           } 
minus(100,1,2,3,4,5,19);
```
>tip:rest参数非常适合不定个数函数的场景
### spread 扩展运算符
&emsp;&emsp;spread扩展运算符也是三个点（...）。它好比rest参数的逆运算，将一个数组转为逗号分隔的参数序列，对数组进行解包。
- 扩展运算符可以将数组或者对象转为用逗号分隔的参数序列。
```js
 let arr = [1, 2, 3];
 /*...arr*/  // 1, 2, 3
 console.log(...arr);    // 1 2 3
 console.log(1, 2, 3)

```
- 扩展运算符可以应用于合并数组。
```js
// 方法一 
 let arr1 = [1, 2, 3];
 let arr2 = [3, 4, 5];
 let arr3 = [...arr1, ...arr2];
 // 方法二 
 ary1.push(...arr2);

```
- 将类数组或可遍历对象转换为真正的数组
```js
let Divs = document.getElementsByTagName('div'); 
Divs = [...Divs];
```
### Symbol数据类型
&emsp;&emsp;表示独一无二的值。它是 JavaScript 语言的第七种数据类型，是一似于字符串。
Symbol特点：
- Symbol的值是唯一，用来解决命名冲突问题 的值是唯一，用来解决命名冲突问题
- Symbol值不能与其他数据进行运算 值不能与其他数据进行运算
- Symbol 定义的对象属性不能使用`for…in`循环遍历，但是可以使用 `Reflect.ownKeys`来获取对象的所有键名
  
1、Symbol的创建方式：
```js
//创建 Symbol 
let s1 = Symbol();
console.log(s1, typeof s1); 
//创建带标识的 Symbol 
let s2 = Symbol('前端笔记'); 
let s2_2 = Symbol('前端笔记'); 
console.log(s2 === s2_2); 
//使用 Symbol for 定义 
let s3 = Symbol.for('前端笔记'); 
let s3_2 = Symbol.for('前端笔记'); 
console.log(s3 === s3_2);
```
2、Symbol作为对象的三种写法：
```js
//第一种
let mySymbol = Symbol()
let s = {}
s[mySymbol] = 'laochen'
//第二种
let mySymbol = Symbol()
let s = {
    [mySymbol]: 'laochen'
}
//第三种
let mySymbol = Symbol()
let s = {}
Object.defineProperty(s,mySymbol,{value: 'laochen'})
//三种s[mySymbol]打印结果都是laochen
```
> tip: 遇到唯一性的场景优先使用 Symbol
### 迭代器
&emsp;&emsp;迭代器（ Iterator）又可以叫遍历器，是一种机制。
它是一种接口，为不同的数据结构提供统一的访问机制。
任何数据只要部署了Iterator接口，就可以完成遍历操作 。

1、ES6创造了一种新的遍历命令 for...of循环， Iterator接口主要供 for...of消费
>tip:在遍历数组里,for...in 循环保存的是键名(index),而for...of循环保存的是键值(value)

2、原生具备 iterator接口的数据 ， (可用 for of遍历 )的有：
   - Array
   - Arguments
   - Set
   - Map
   - String
   - TypedArray
   - NodeList

3、工作原理
   
（1）创建一个指针对象，向当前数据结构的起始位置

（2）第一次调用对象的 next方法，指针自动向数据结构的第一个成员 

（3）接下来不断调用 next方法，指针一直往后移动，直到指向最后一个成员

（4）每调用 next方法返回一个包含 value和 done 的属性对象
### 生成器
&emsp;&emsp;生成器函数是 ES6提供的一种异步编程解决方案，语法行为与传统函数完全不同
```js
//生成器是一个特殊的函数，正常不能调用
//要通过迭代器iterator.next来调用
function * gen(){
    yield '111';//yield 语句是函数的分割符
    yield '222'; 
    return '333'; 
                 } 
let iterator = gen();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
```
说明：
- 生成器函数返回的结果是迭代对象，调用迭代器对象的next方法可以得到 yield语句后的值
- yield相当于函数的暂停标记，也可以认为是函数的分隔符，每调用一次 next方法，执行一段代码
- next方法可以传递实参，作为 yield语句的返回值
### Promise
Promise是 ES6引入的 异步编程引入的 异步编程新解决方案 。语法上 Promise是一个构造函数，用来封装异步操作并可以获取其成功或失败的结果。
- Promise构造函数 : Promise (excutor) {}
- Promise.prototype.then方法
- Promise.prototype.catch方法

1、Promise对象两个特点：

- 对象的状态不受外界影响。

&emsp;&emsp;Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。

说明：只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，
表示其他手段无法改变
- 一旦状态改变，就不会再变，任何时候都可以得到这个结果。

&emsp;&emsp;Promise对象的状态改变， 只有两种可能： 从pending变为fulfilled和从pending变为rejected。

说明：只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。
如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，
事件的特点是，如果你错过了它，再去监听，是得不到结果的。

2、基本用法
```
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```
说明：
Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。

&emsp;&emsp;resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

&emsp;&emsp;Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
```js
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```
### Set
&emsp;&emsp;ES6 提供了新的数据结构 Set（集合）,特点：每个值在 Set 中只能出现一次，
一个 Set 可以容纳任何数据类型的任何值。

&emsp;&emsp;它类似于数组，但成员的值都是唯一的，set集合实现了 iterator接口，
所以可使用『 扩展运算符』和『for...of』进行遍历，集合和属性方法：

1) size 返回集合元素的个数
2) add 增加一个新元素，返回当前集合
3) delete 删除元素，返回 boolean 值
4) has 检测集合中是否包含某个元素，返回 boolean值
5) clear 清空集合，返回 undefined

```js
//创建一个非空集合
let s1 = new Set([1,2,3,1,2,3]);
/*集合属性与方法*/ 
//返回集合的元素个数
console.log(s1.size);
//添加新元素
console.log(s1.add(4)); 
//删除元素 
console.log(s1.delete(1)); 
// 检测是否存在某个值 
console.log(s1.has(2)); 
//清空集合
console.log(s1.clear());
```
例子：
```js
//利用set去重
arr = [1,2,3,3,5]
let res = Array.from(new Set(arr))//或者let res = [...new Set(arr)]
console.log(res);
```
### Class 类
&emsp;&emsp;ES6提供了更为传统的语言写法，引入了类的的概念，作为对象的模板。

知识点：
1) class声明类
2) constructor定义构造函数初始化 
3) extends继承父类
4) super调用父级构造方法 
5) static定义静态方法和属性 
6) 父类方法可以重写

实例：
```js
class Phone { 
    //构造方法 
    constructor(brand, color, price) { 
        this.brand = brand;
        this.color = color; 
        this.price = price; } 
    //对象方法 
    call() {
         console.log('我可以打电话!!!') } 
           }
    //子类               
    class SmartPhone extends Phone { 
         constructor(brand, color, price, screen, pixel) {
               super(brand, color, price);
               this.screen = screen; 
               this.pixel = pixel;
                                                         } 
    //子类方法
    photo(){ console.log('我可以拍照!!'); } 
    playGame(){ console.log('我可以玩游戏!!'); } 
    // 方法重写 
     call(){ console.log('我可以进行视频通话!!'); } 
    // 静态方法 
     static run(){ console.log('我可以运行程序') } 
     static connect(){ console.log('我可以建立连接') } 
              }
```
对比非类的写法
```js
class Point {
  constructor() {
    // ...
  }
  toString() {
    // ...
  }
  toValue() {
    // ...
  }
}
// 等同于
Point.prototype = {
  constructor() {},
  toString() {},
  toValue() {},
};
```
取值函数（getter）和存值函数（setter）
```js
class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter';
    console.log('值被读取了');
  }
  set prop(value) {
    console.log('值被修改了'+value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop
// 'getter'
```
### 正表达式（RegExp）
&emsp;&emsp;正则表达式用于对字符串模式匹配及检索替换，是对字符串执行模式匹配的强大工具。

语法：

    /正则表达式主体/修饰符(可选)

1、基本使用
```js
//创建方式一
var  regexp_1 = /a/;
//创建方式二
var  regexp_2 = new Regexp("a");
```
2、正则表达式通常用于两个字符串方法 : search() 和 replace()。
- search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置。

例子：
```js
var str = "laochen"; 
var c = str.search(/chen/i);
console.log(c)//3
```
- replace() 方法用于在字符串中用一些字符串替换另一些字符串，或替换一个与正则表达式匹配的子串。

例子：
```js
var str = "xiaochen";
var txt = str.replace(/xiao/i,"lao");
console.log(txt)//laochen
```
3、正则表达式修饰符

| 修饰符 | 描述                            |
|-----|-------------------------------|
| i	  | 匹配时忽略大小写                      |
| g	  | 执行全局匹配(会匹配整个语句，而非匹配到第一个目标后终止) |
| m	  | 执行多行匹配                        |
&emsp;例子：
```js
var  regexp_1 = /a/i;
var  regexp_2 = /a/g;
var  regexp_3 = /a/m;

var  regexp_4 = new Regexp("a","i"); 
var  regexp_5 = new Regexp("a","g"); 
var  regexp_6 = new Regexp("a","m"); 
 
var  regexp_7 = new Regexp("a","igm"); 
var  regexp_8 = /a/igm; 
```
4、正则表达式模式

| 表达式    | 	描述              |
|--------|------------------|
| [abc]	 | 查找方括号之间的任何字符。    |
| [0-9]	 | 查找任何从 0 至 9 的数字。 |

关于`RegExp`的更多请访问:[正则的扩展](https://wangdoc.com/es6/regex.html)
### async和 await
&emsp;&emsp;async和 await两种语法结合可以让异步代码像同步代码一样，promise的简化。

1、async函数
- async函数的返回值为 promise对象
- promise对象的结果由 async函数执行的返回值决定

2、await表达式 
- await必须写在 async函数中
- await右侧的表达式一般为promise对象
- await返回的是promise成功的值
- await的 promise失败了,就会抛出异常,需要通过try...catch捕获处理
### 更多待完善