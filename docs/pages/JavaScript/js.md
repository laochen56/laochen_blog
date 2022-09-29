---
title: js
date: 2022-09-01 09:46:23
permalink: /pages/JavaScript/
categories:
  - pages
  - JavaScript
tags:
  - JavaScript
---
&emsp;&emsp;JavaScript（通常缩写为JS）是一种高级的、解释型的编程语言。JavaScript是一门基于原型、函数先行的语言，是一门多范式的语言，它支持面向对象编程，命令式编程，以及函数式编程。它提供语法来操控文本、数组、日期以及正则表达式等，不支持I/O，比如网络、存储和图形等，但这些都可以由它的宿主环境提供支持。它已经由ECMA（欧洲电脑制造商协会）通过ECMAScript实现语言的标准化。它被世界上的绝大多数网站所使用，也被世界主流浏览器（Chrome、IE、Firefox、Safari、Opera）支持。

&emsp;&emsp;一般使用JavaScript有3种方式，外部引入`<script src=''xxx.js"></script>`，内部`<script></script>`标签和内部元素标签使用，例如：`<button οnclick="alert('javascript的使用')">`。

 一个简单的JavaScript程序:

      <script>window.onload = function () { alert("老陈笔记"); }</script>
## 语法基础
1、变量与常量
在JavaScript中，变量指的是一个可以改变的量。变量类似数学的变量，但用法和语法不同。

- 变量名字需要使用者定义命名来灵活使用。

- 在JavaScript中，给一个变量命名，我们需要遵循以下两个方面的原则。

&emsp;（1）变量由字母、下划线、$或数字组成，并且第一个字母必须是“字母、下划线或$”。

&emsp;（2）变量不能是系统关键字和保留字。
语法 例如：  var 变量名 = 值；

2、数据类型

&emsp;在JavaScript中，基本数据类型：字符串（String）、数字(Number)、布尔(Boolean)、空（Null）、未定义（Undefined）、Symbol。

&emsp;对象类型：对象(Object)、数组(Array)、函数(Function)，还有两个特殊的对象：正则（RegExp）和日期（Date）。

3、运算符 

| 运算符 | 	说明	 | 举例                     |
|-----|------|------------------------|
| + 	 | 加    | 	 10+5 //返回15          |
| －	  | 减    | 	 10-5 //返回5           |
| *   | 乘	   | 10*5 //返回50            |
| /	  | 除    | 	 10/5 //返回2           |
| %	  | 求余   | 	 10%4 //返回2           |
| ++	 | 自增   | 	 var i=10;i++; //返回11 |
| --	 | 自减   | 	 var i=10;i--; //返回9  |
| >	  | 大于   | 	  2>1   //返回true      |
| <	  | 小于   | 	  2<1    //返回false    |
| >=	 | 大于等于 | 2>=2   //返回true        |
| <=	 | 小于等于 | 2<=2   //返回true        |
| ==	 | 等于   | 	  1==2   //返回false    |
| !=	 | 不等于  | 	  1!=2    //返回true    |

逻辑运算符:`&&“与”运算; ||	“或”运算; !“非”运算`

tips:数字 + 数字 = 数字;<br>
&emsp;&emsp;字符串 + 字符串 = 字符串;<br>
&emsp;&emsp;字符串 + 数字 = 字符串。

4、表达式与语句

一个表达式包含“操作数”和“操作符”两部分。操作数可以是变量，也可以是常量。操作符指的就是之前学的运算符。每一个表达式都会产生一个值。

例如：var a =  8+9（8+9是一个表达式）而整一句代码<b>var a=8+9 </b>就是一个语句了

5、类型转换

类型转换有2种，隐式类型转换和显式类型转换；隐式类型转换，指的是JavaScript自动进行的类型转换。显式类型转换，指的是需要我们手动用代码强制进行的类型转换。

例如：
```
字符串转数字，隐式转换：var res = 123+"abc"

显示转换：var res =  Number(" 123 ")
```
`tips:   console.log(typeof res)判断res数据类型。`

## 流程控制 
&emsp;&emsp;流程控制，是任何一门编程语言都有的一个语法，指的是控制程序按照怎样的顺序执行的。

&emsp;&emsp;在JavaScript中，共有3种流程控制方式

1、<b>顺序结构</b>；在JavaScript中，顺序结构是最基本的结构。所谓的顺序结构，说白了，就是代码按照从上到下、从左到右的“顺序”执行。

2、<b>选择结构</b>；在JavaScript中，选择结构指的是根据“条件判断”来决定使用哪一段代码。选择结构有3种：单项选择、双项选择以及多项选择，但是无论是哪一种，JavaScript都只会执行其中的一个分支。

3、<b>循环结构</b>；指的是根据条件来判断是否重复执行某一段程序。若条件为true，则继续循环；若条件为false，则退出循环。

&emsp;&emsp;顺序结构是js默认的执行方式这里就不说了，说一下选择结构和循环结构吧。

&emsp;&emsp;<b>选择结构</b>；共有两种方式：一种是if语句；另外一种是switch语句。

- 对于if语句，主要包括以下要点：

（1）单项选择：if…

&emsp;语法：
```
if(条件)
{
……
}
```

（2）双项选择：if…else…

&emsp;语法：
```
if(条件)
{
    ……
}
else
{
    ……
}
```

（3）多项选择：if…else if…else…

&emsp;语法：
```
if(条件1)
{
    //当条件1为true时执行的代码
}
else if(条件2)
{
    //当条件2为true时执行的代码
}
else
{
    //当条件1和条件2都为false时执行的代码
}
```

（4）if语句的嵌套

&emsp;语法：
```
if(条件1)
{
    if(条件2)
    {
        当“条件1”和“条件2”都为true时执行的代码
    }
    else
    {
        当“条件1”为true、“条件2”为false时执行的代码
    }
}
else
{
    if(条件2)
    {
        当“条件1”为false、“条件2”为true时执行的代码
    }
    else
    {
        当“条件1”和“条件2”都为false时执行的代码
    }
}
```
- 对于switch语句：

&emsp;语法：
```
switch(判断值)
{
    case 取值1:
        语块1;break;
    case 取值2:
        语块2;break;
    ……
    case 取值n:
        语块n;break;
    default:
        语句块n+1;
}
```
说明：switch是“开关”，case是“情况”，break是“断开”，default是“默认”。switch语句会根据“判断值”来判断，然后来选择使用哪一个case。如果每一个case的取值都不符合，那就执行default的语句。

tips：switch里通常会结合continue/break来使用；continue是跳过本条case，继续执行下一个；而break是执行本case后终止不再执行下一条。

&emsp;&emsp;<b>循环结构</b>；共有三种方式：分别是while语句、do…while语句和for语句。

- while语句

&emsp;语法：
```
while(条件)
{
    //当条件为true时，循环执行
}
```
说明：如果“条件”返回为true，则会执行大括号{}内部的程序。当执行完大括号{}内部的程序后，会再次判断“条件”。
如果条件依旧还是true，则会继续重复执行大括号中的程序……循环执行直到条件为false才结束整个循环，然后再接着执行while语句后面的程序。
- do…while语句

&emsp;语法：
```
do
{
    ……
}while(条件);
```
说明：
do…while语句首先是无条件执行循环体一次，然后再判断是否符合条件。如果符合条件，则重复执行循环体；如果不符合条件，则退出循环。

do…while语句跟while语句是非常相似的，并且任何一个都可以转换成等价的另外一个。

do…while语句结尾处括号后有一个分号（;），该分号一定不能省略，这是初学者最容易忽略的一点。
- for语句

&emsp;语法：
```
for(初始化表达式; 条件表达式; 循环后操作)
{
    ……
}
```
说明：在for循环中，首先定义一个用于计数的变量i，其中设i的初始值为0。然后定义一个判断条件i<n；
只要i小于n就会执行for循环中的程序。最后定义一个循环后的表达式i++，也就是说，每次循环之后都会进行一次i++。
## 函数
&emsp;&emsp;为了减轻重复编码的负担，JavaScript引入了函数的概念。函数一般是在两种种情况下使用：一种是“重复使用的功能”，另外一种是“特定的功能”。

1、在JavaScript中，如果我们想要使用函数，一般只需要简单的2步；定义函数和调用函数。

（1）定义函数
- 定义没有返回值的函数

  &emsp;语法：
```
function 函数名(参数1 , 参数2 ,..., 参数n)
{
    ……
}
```
- 定义有返回值的函数

&emsp;语法：
```
function 函数名(参数1 , 参数2 ,..., 参数n)
{
    ……
    return 返回值;
}
```
tips：根据作用域，变量可以分为以下2种，全局变量和局部变量。

&emsp;&emsp;全局变量一般在主程序中定义，其有效范围是从定义开始，一直到整个程序结束为止。说白了，全局变量在任何地方都可以用。

&emsp;&emsp;局部变量一般在函数中定义，其有效范围只限于在函数之中，函数执行完了就没了。说白了，局部变量只能在函数中使用，函数之外是不能使用函数之内定义的变量的。

（2）调用函数
- 直接调用

&emsp;语法：

    函数名(实参1, 实参2, ... , 实参n);
- 在表达式中调用

  &emsp;&emsp;在表达式中调用，一般用于“有返回值的函数”，然后函数的返回值会参与表达式的计算。

例子：
```
function addSum(a, b) 
        {
            var sum = a + b;
            return sum;
        }
        //调用函数
        var n = addSum(1, 2) + 100;
```
- 在超链接中调用

  &emsp;&emsp;当用户点击超链接时，就会调用该函数。
  
&emsp;语法：

    <a href="javascript:函数名"></a>
- 在事件中调用

&emsp;&emsp;鼠标移动是一个事件、鼠标单击也是一个事件，类似的事件很多。当一个事件产生的时候，我们就可以调用某个函数来针对这个事件作出响应。

例子：

```
 <script>
        function test()
        {
            alert("函数被调用了~");
        }
    </script>
</head>
<body>
    <button onclick= "test()">点击按钮</button>
</body>

```
2、内置函数

| 函数	           | 说明                 |
|---------------|--------------------|
| parseInt()    | 	提取字符串中的数字，只限提取整数  |
| parseFloat()	 | 提取字符串中的数字，可以提取小数   |
| isFinite()	   | 判断某一个数是否是一个有限数值    |
| isNaN()	      | 判断一个数是否是NaN值       |
| escape()	     | 对字符串进行编码           |
| unescape()    | 	对字符串进行解码          |
| eval()	       | 把一个字符串当做一个表达式一样去执行 |

## 数组
&emsp;&emsp;数组，就是将多个元素（通常是同一类型）按一定顺序排列放到一个集合中，那么这个集合我们就称之为数组。

&emsp;&emsp;数组就类似一个储物柜，储物柜有按顺序排好的小储物箱，每个小储物箱都有一个序号，可以放置很多东西，同时我们也可以按照序号取东西出来。

一、<b>创建数组的4种方法：</b>

1、自面量创建 var arr = [ ];

2、构造函数方法创建数组，new一个数组创建 var arr = new Array();

3、也是采用构造函数创建数组对象，不过设置了初始长度：var arr = new Array(5);

4、也是采用构造函数创建数组对象，且在创建的同时给它赋予了初始值“5”：
var arr = new Array("5");

二、<b>数组的获取</b>

&emsp;&emsp;想要获取数组某一项的值，我们都是使用“下标”的方式来获取。

注意：数组的下标是从0开始的，而不是从1开始的

例子：
 
    var arr = ["HTML","CSS", "JavaScript"];
`arr[0]`表示获取第1项的值"HTML"。`arr[1]`表示获取第2项的值"CSS"，以此类推。

tips:可以使用length属性来获取数组的长度。语法`数组名.length`。

三、<b>数组方法</b>

&emsp;&emsp; 常见的数组方法如下表：

| 方法          | 说明                                   |
|-------------|--------------------------------------|
| push        | 往数组最后一个位置追加元素                        |
| unshift     | 往数组第一个位置追加元素                         |
| pop         | 移除数组最后一个元素，并返回被移除的元素                 |
| shift       | shift 移除第一个元素，并返回被移除的元素              |
| splice      | 移除数组某个位置的元素，可以移除多个，并可以加替补元素          |
| slice       | slice （顾头不顾尾）切割数组，返回新数组，不改变原数组       |
| concat      | 拼接数组，返回新数组，不改变原数组                    |
| reverse     | 数组反转，返回新数组，会改变原数组                    |
| sort        | 数组排序，返回新数组，会改变原数组                    |
| join        | 把数组用字符串拼接，返回拼接字符串，不影响原数组             |
| tostring    | 把数组转出字符串                             |
| indexof     | 查询某个元素的索引，不存在返回-1                    |
| lastindexof | 查询某个元素的最后一个索引位置                      |
| forEach     | 遍历数组，会遍历数组的每一个元素                     |
| filter      | 过滤数组，根据条件进行过滤，返回一个新数组，不影响原数组         |
| map         | 根据原数组，返回一个新数组，此数组结构发生改变              |
| some        | 用户查询数组中是否符合条件的元素，如果有返回true，没有返回false |
| find        | find 查找符合条件的某个元素，返回该元素对象             |
| findindex   | find 查找符合条件的某个元素，返回该元素下标             |

<b>基础方法</b>

1、push 往数组最后一个位置追加元素
```
 var arr = [1,2,3,4,5,6]
 arr.push(7)
 console.log(arr)
```
2、unshift 往数组第一个位置追加元素
```
var arr = [1,2,3,4,5,6]
arr.unshift(0)
console.log(arr)
```
3、pop移除数组最后一个元素，并返回被移除的元素
```
var arr = [1,2,3,4,5,6]
var res = arr.pop()
console.log(arr)
console.log(res)
```
4、shift 移除第一个元素，并返回被移除的元素
```
var arr = [1, 2, 3, 4, 5, 6]
var res = arr.shift()
console.log(arr)
console.log(res)
```
5、splice 移除数组某个位置的元素，可以移除多个，并可以加参数3替补元素

     参数1 表示开始删除的索引

     参数2 表示删除的个数

     参数3或4或5等等 表示要替补的元素
```
var arr = [1,2,3,4,5,6]
arr.splice(1,1,666)
console.log(arr)
```
6、slice （顾头不顾尾）切割数组，返回新数组，不改变原数组

    参数1 表示切割开始的索引

    参数2 表示切割结束的索引

注：如果只传一个参数的话，表示从这个索引位置切割到最后一个
```
var arr = ['a','b','c','d','e','f']
var res = arr.slice(0,5)
console.log(arr)
console.log(res)
```
7、concat 拼接数组，返回新数组，不改变原数组
```
var arr = ['a', 'b', 'c', 'd', 'e', 'f']
var res1 = arr.concat(1,2,3)
// 或者
var res2 = arr.concat([1,2,3])
console.log(arr)
console.log(res1)
console.log(res2)
```
8、reverse 数组反转，返回新数组，会改变原数组
```
var arr = ['a', 'b', 'c', 'd', 'e', 'f']
var res = arr.reverse()
console.log(arr)
console.log(res)
```
9、sort 数组排序，返回新数组，会改变原数组
```
var arr = [5,2,3,7,5,9]
var res = arr.sort()
console.log(arr)
console.log(res)
```
10、join 把数组用字符串拼接，返回拼接字符串，不影响原数组
```
var arr = ['a', 'b','c', 'd', 'e', 'f']
var res = arr.join('-')
console.log(arr)
console.log(res)
```
11、tostring 把数组转出字符串
```
var arr = ['a', 'b','c', 'd', 'e', 'f']
var res = arr.toString()
console.log(res)
```
12、indexof 查询某个元素的索引，不存在返回-1（可以利用这个特性判断元素是否存在数组）
```
var arr = ['a', 'b','c', 'd', 'e', 'f']
var res1 = arr.indexOf('c')
var res2 = arr.indexOf('隔壁老陈')
console.log(res1)
console.log(res2)
```
13、lastindexof 查询某个元素的最后一个索引位置
```
var arr = ['a', 'a','b','c', 'd', 'e', 'f']
var res = arr.lastIndexOf('a')
console.log(res)
```
<b>进阶方法</b>

1、forEach 遍历数组，会遍历数组的每一个元素
```
var arr = [{
id: 1,
name: '张三',
job: '法外狂徒'
},
{
id: 2,
name: '李四',
job: '电玩小子'
},
{
id: 3,
name: '王五',
job: '隔壁老王'
}]
arr.forEach(item => {console.log(item.job)})
```
2、filter 过滤数组，根据条件进行过滤，返回一个新数组，不影响原数组
```
var arr = [{
id: 1,
name: '张三',
job: '法外狂徒'
},
{
id: 2,
name: '李四',
job: '电玩小子'
},
{
id: 3,
name: '王五',
job: '隔壁老王'
}]
var res = arr.filter(item => {
return item.name === '张三'
})
console.log(res)
```
3、map 根据原数组，返回一个新数组，此数组结构发生改变
```
var arr = [{
id: 1,
name: '张三',
job: '法外狂徒'
},
{
id: 2,
name: '李四',
job: '电玩小子'
},
{
id: 3,
name: '王五',
job: '隔壁老王'
}]
var res = arr.map(item => {
return item.name
})
```
4、some 用户查询数组中是否符合条件的元素，如果有返回true，没有返回false
```
var arr = [{
id: 1,
name: '张三',
job: '法外狂徒'
},
{
id: 2,
name: '李四',
job: '电玩小子'
},
{
id: 3,
name: '王五',
job: '隔壁老王'
}]
var res1 = arr.some(item => {
return item.id===2
})
var res2 = arr.some(item => {
return item.id===11
})
console.log(res1)
console.log(res2)
```
5、find 查找符合条件的某个元素，返回该元素对象
```
var arr = [{
id: 1,
name: '张三',
job: '法外狂徒'
},
{
id: 2,
name: '李四',
job: '电玩小子'
},
{
id: 3,
name: '王五',
job: '隔壁老王'
}]
var res = arr.find( item =>{
return item.name = '张三'
})
console.log(res)
```
## 内置对象
&emsp;JavaScript中，常用的内置对象有3种；

分别是`字符串对象：String`、`日期对象：Date`和`数值对象：Math`。


### （1）字符串对象：String

1、使用length属性来获取字符串的长度。

&emsp;语法：

    字符串名.length

2、 使用<b>toLowerCase()</b>方法将大写字符串转化为小写字符串，

也可以使用<b>toUpperCase()</b>方法将小写字符串转化为大写字符串。

&emsp;语法：
```
字符串名.toLowerCase()
字符串名.toUpperCase()
```
3、使用charAt()方法来获取字符串中的某一个字符。

&emsp;语法：

    字符串名.charAt(n)
说明：字符串下标是从零开始的，用n来表示， n是整数，表示字符串中第n+1个字符。

4、使用substring()方法来截取字符串的某一部分。

&emsp;语法：

    字符串名.substring(start, end)
说明：start表示开始位置，end表示结束位置。start和end都是整数，一般都是从0开始，其中end大于start。

5、使用replace()方法来用一个字符串替换另外一个字符串的某一部分。

&emsp;语法：
```
字符串名.replace(原字符串, 替换字符串)
字符串名.replace(正则表达式, 替换字符串)
```
6、使用split()方法把一个字符串分割成一个数组，这个数组存放的是原来字符串的所有字符片段。有多少个片段，数组元素个数就是多少。

&emsp;语法：

    字符串名.split("分割符")
7、使用indexOf()方法来找出“某个指定字符串”在字符串中首次出现的下标位置，也可以使用lastIndexOf()来找出“某个指定字符串”在字符串中最后出现的下标位置。

&emsp;语法：
```
字符串名.indexOf(指定字符串)
字符串名.lastIndexOf(指定字符串)
```
说明：如果字符串中包含“指定字符串”，indexOf()就会返回指定字符串首次出现的下标，

而lastIndexOf()就会返回指定字符串最后出现的下标；

如果字符串中不包含“指定字符串”，indexOf()或lastIndexOf()就会返回-1。

### （2）日期对象：Date
&emsp;&emsp;在JavaScript中，我们可以使用时间对象Date来处理时间。

&emsp;语法：

    var 日期对象名 = new Date();
&emsp;&emsp;创建一个日期对象，必须使用new关键字。其中Date对象的方法有很多，主要分为两大类：getXxx()和setXxx()。getXxx()用于获取时间，setXxx()用于设置时间。

用于获取时间的getXxx()

| 方法             | 	说明                         |
|----------------|-----------------------------|
| getFullYear()	 | 获取年份，取值为4位数字                |
| getMonth()     | 	获取月份，取值为0（一月）到11（十二月）之间的整数 |
| getDay()       | 获取星期，取值为1~7之间的整数            |
| getDate()      | 	获取日数，取值为1~31之间的整数          |
| getHours()     | 	获取小时数，取值为0~23之间的整数         |
| getMinutes()   | 	获取分钟数，取值为0~59之间的整数         |
| getSeconds()   | 	获取秒数，取值为0~59之间的整数          |
>tips：getMonth()方法返回值是0（一月）到11（十二月）之间的整数，所以必须加上1，这样月份才正确。<br/>
获取当前的“日”，不是使用getDay()，而是使用getDate();getDay()是获取星期的。

用于设置时间的setXxx()

| 方法            | 	说明         |
|---------------|-------------|
| setFullYear() | 	设置年、月、日    |
| setMonth()    | 	设置月、日      |
| setDate()     | 	设置日        |
| setHours()    | 	设置时、分、秒、毫秒 |
| setMinutes()  | 	设置分、秒、毫秒   |
| setSeconds()  | 	设置秒、毫秒     |
>tips： getFullYear()只能获取年，但setFullYear()却可以同时设置年、月、日。同理，setMonth()和setDate()也有这个特点。
### （3）数学对象：Math
&emsp;&emsp;Math对象跟其他对象不一样，我们不需要使用new关键字来创造，而是直接使用它的属性和方法就行。

&emsp;语法：
```
Math.属性
Math.方法
```
常见Math对象的属性如下表：

| 属性      | 	说明	        | 对应的数学形式 |
|---------|-------------|---------|
| PI      | 	圆周率	π      |         |
| LN2     | 	2的自然对数     | 	ln(2)  |
| LN10    | 	10的自然对数	   | ln(10)  |
| LOG2E   | 	以2为底的e的对数  | 	log2e  |
| LOG10E  | 	以10为底的e的对数 | 	log10e |
| SQRT2   | 	2的平方根      | 	√2     |
| SQRT1_2 | 	2的平方根的倒数   | 	1/√2   |
例子：

    120*Math.PI/180   //120°
常用Math对象的方法如下表：

| 方法           | 	说明           |
|--------------|---------------|
| max(a,b,…,n) | 	返回一组数中的最大值   |
| min(a,b,…,n) | 	返回一组数中的最小值   |
| sin(x)       | 	正弦           |
| cos(x)       | 	余弦           |
| tan(x)       | 	正切           |
| asin(x)      | 	反正弦          |
| acos(x)      | 	反余弦          |
| atan(x)      | 	反正切          |
| atan2(y, x)  | 	反正切（注意y、x顺序） |
| floor(x)     | 	向下取整         |
| ceil(x)      | 	向上取整         |
| random()     | 	生成随机数        |
| abs(x)       | 	返回x的绝对值      |
| sqrt(x)	     | 返回x的平方根       |
常见例子：

1、生成0~m之间的随机数

    Math.random()*m
2、生成0到m之间的随机整数

    Math.floor(Math.random()*(m+1))
3、生成n到m之间的随机整数（包括n和m）

    Math.floor(Math.random()*(m-n+1))+n
## DOM篇
&emsp;&emsp;DOM，全称“Document Object Model（文档对象模型）”，它是由W3C定义的一个标准。简单总结就是：DOM操作，可以简单理解成“元素操作”。

&emsp;&emsp;DOM节点共有12种类型，常见的只有3种：

（1）元素节点

（2）属性节点

（3）文本节点

&emsp;我们可以使用nodeType属性来判断一个节点的类型。例如：元素节点的nodeType为`1
`,属性节点的nodeType为`2`,
文本节点的nodeType为`3`。
>tips:<br/>（1）一个元素就是一个节点，这个节点称之为“元素节点”。<br/>
（2）属性节点和文本节点看起来像是元素节点的一部分，但实际上，它们是独立的节点，并不属于元素节点。<br/>
（3）只有元素节点才可以拥有子节点，属性节点和文本节点都无法拥有子节点。

一、<b>DOM主要元素操作有：</b>获取元素，创建元素、插入元素、删除元素、复制元素和替换元素。

1、获取元素；准确来说，就是获取“元素节点。

常用的获取方式如下：

| 方式                                     | 说明                                                                                                                                   |
|----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| document.getElementById("id名")         | 通过id来选中元素                                                                                                                            |
| document. getElementsByTagName("标签名")  | 通过标签名来选中元素；getElementsByTagName()方法中“elements”是一个复数，写的时候别漏掉了“s”。这是因为getElementsByTagName()获取的是多个元素（即集合），而getElementById()获取的仅仅是一个元素。 |
| document. getElementsByClassName("类名") | 通过class来选中元素；getElementsByClassName()方法中“elements”是一个复数，跟getElementsByTagName相似，getElementsByClassName()获取的也是一个类数组。                  |
| document.querySelector("选择器")          | 表示选取满足选择条件的第1个元素                                                                                                                     |
| document.querySelectorAll("选择器")       | 表示选取满足条件的所有元素                                                                                                                        |
| document.getElementsByName("name名")    | 通过name属性来获取表单元素                                                                                                                      |
2、创建元素

&emsp;&emsp;在JavaScript中，我们使用createElement()来创建一个元素节点，也可以使用createTextNode()来创建一个文本节点，然后可以将元素节点与文本节点“组装”成为我们平常所看到的“有文本内容的元素”。

&emsp;语法：
```
var e1 = document.createElement("元素名");      //创建元素节点
var txt = document.createTextNode("文本内容");   //创建文本节点
e1.appendChild(txt);                          //把文本节点插入元素节点中
e2.appendChild(e1);                          //把组装好的元素插入已存在的元素中
```
步骤：

① 创建元素节点：createElement()

② 创建文本节点：createTextNode()

③ 把文本节点插入元素节点：appendChild()

④ 把组装好的元素插入到已有元素中：appendChild()

元素插入方式：

| 方式             | 说明                       |
|----------------|--------------------------|
| appendChild()  | 把一个新元素插入到父元素的内部子元素的 末尾   |
| insertBefore() | 将一个新元素插入到父元素中的某一个子元素“之前” |
3、 删除元素；
使用removeChild()方法来删除父元素下的某个子元素。

&emsp;语法：

```
var e1 = document.getElementById("id名");
document.body.removeChild(e1)
```
4、复制元素；使用cloneNode()方法来实现复制元素。

&emsp;语法：

    ele.cloneNode()//参数ele表示被复制的元素
5、替换元素；使用replaceChild()方法来实现替换元素。

&emsp;语法：

    f.replaceChild(new,old);//f表示父元素，new表示新子元素，old表示旧子元素。

二、<b>DOM主要属性操作（对象方法）有：</b>

| 方法                | 说明           |
|-------------------|--------------|
| getAttribute()    | 获取元素的某个属性的值  |
| setAttribute()    | 设置元素的某个属性的值  |
| removeAttribute() | 删除元素的某个属性    |
| hasAttribute()    | 判断元素是否含有某个属性 |
1、getAttribute()方法来获取元素的某个属性的值。

&emsp;语法：
    
    ele.getAttribute("attr")//ele是元素名，attr是属性名
tips :ele.attr也可以获取到attr的值，等价于ele.getAttribute("attr")，但针对自定义的属性，就无法通过ele.attr获取，只能通过ele.getAttribute("attr")。

&emsp;例子：
```
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
    <script>
        window.onload = function () 
        {
            var oBtn = document.getElementById("btn");
            oBtn.onclick = function () 
            {
                //alert(oBtn.data);//undefined
                alert(oBtn.getAttribute("data"));//JavaScript
            };
        }
    </script>
</head>
<body>
    <input id="btn" type="button" value="获取" data="JavaScript"/>
</body>
</html>

```
2、setAttribute()方法来设置元素的某个属性的值。

&emsp;语法：

    ele.setAttribute("attr","值")//ele是元素名，attr是属性名
3、removeAttribute()方法来删除元素的某个属性。

&emsp;语法：

    ele.removeAttribute("attr")
4、hasAttribute()方法来判断元素是否含有某个属性。

&emsp;语法：

    ele.hasAttribute("attr")
tips：hasAttribute()方法返回一个布尔值，如果包含该属性，则返回true。

三、<b>设置CSS（style）属性值</b>

&emsp;&emsp;使用style对象来设置一个CSS属性的值，其实就是在元素的style属性来添加样式，这个设置的是“行内样式”。

&emsp;语法：

    DOM对象.style.css属性名 = "值";
说明：DOM对象指通过document获取的对象，例如： var test = document.getElementById("id名");

css属性名，如：width、height、background-color.....等等。

四、<b>DOM遍历</b>

&emsp;&emsp;DOM遍历，可以简单理解为“查找元素”。举个例子，如果你使用getElementById()等方法获取一个元素，然后又想得到该元素的父元素、子元素，甚至是下一个兄弟元素，这就是DOM遍历。

对于DOM遍历，可以分为以下3种情况:

| 语法                     | 说明           |
|------------------------|--------------|
| DOM对象.parentNode       | 获得某个元素的父元素   |
| DOM对象.childNodes       | 获得父元素中的所有子元素 |
| DOM对象 .previousSibling | 获得兄弟元素       |

五、<b> innerHTML和innerText</b>

&emsp;&emsp;innerHTML获取的是元素内部所有的内容，而innerText获取的仅仅是文本内容。

&emsp;语法：
```
DOM对象.innerHTML=新的HTML;
DOM对象.innerHTML="新文本";
DOM对象.innerText="新文本";
```

## BOM篇
&emsp;&emsp;BOM 全称：Browser Object Model, 浏览器对象模型。

BOM主要如下：

| 属性          | 说明                                                             |
|-------------|----------------------------------------------------------------|
| window对象    | js中的顶级对象，所有定义在全局作用域中的变量、函数都会变成window对象的属性和方法，在调用的时候可以省略window。 |
| frames      | 如果页面中包含框架，则每个框架都拥有自己的 window 对象，并且保存在 frames 集合中。              |
| location对象  | 保存当前文档信息，将URL解析为独立片段                                           |
| screen对象    | 存放着有关显示浏览器屏幕的信息                                                |
| navigator对象 | navigator对象就是判断用户的浏览器以及操作系统                                    |
| history对象   | 保存浏览器的历史记录                                                     |
1、window对象

（1）window对象下的子对象

| window子对象         | 说明        |
|-------------------|-----------|
| window.open()     | 打开新窗口     |
| window.close()    | 关闭当前窗口    |
| window.moveTo()   | 移动当前窗口    |
| window.resizeTo() | 调整当前窗口的尺寸 |
| window.onload()   | 当页面加载时    |
| window.onscroll() | 当页面滚动时    |
| window.onresize() | 页面重新定义大小时 |
（2）window对象常用方法（一般会省略window）

| 方法              | 	说明         |
|-----------------|-------------|
| alert()	        | 提示对话框       |
| confirm()       | 	判断对话框      |
| prompt()        | 	输入对话框      |
| open()          | 	打开窗口       |
| close()         | 	关闭窗口       |
| setTimeout()    | 	开启“一次性”定时器 |
| clearTimeout()  | 关闭“一次性”定时器  |
| setInterval()   | 	开启“重复性”定时器 |
| clearInterval() | 	关闭“重复性”定时器 |

2、frames

&emsp;&emsp;在 frames 集合中，可以通过数值索引（从0开始，从左至右，从上到下）或者框架名称来访问相应的 window 对象。

例子：

每个 window 对象都有一个 name 属性，其中包含框架的名称。
```coffeescript
<frameset>

    <frame src="frame.htm" name="topFrame">

    <frameset cols="50%,50%">

        <frame src="a" name="leftFrame">

        <frame src="b" name="rightFrame">

    </frameset>

</frameset>
```
说明：可以通过 window.frames[0] 或者 window.frames["topFrame"] 来引用上方的框架。

3、location对象

| location的属性       | 说明                          |
|-------------------|-----------------------------|
| location.href     | 返回当前页面完整的URL ,修改这个属性，即跳转新页面 |
| location.hash     | 返回URL中的hash（#号后跟零或多个字符）     |
| location.host     | 返回服务器名称和端口号                 |
| location.port     | 返回服务器端口号                    |
| location.pathname | 返回URL中的目录和文件名               |
| location.hostname | 返回不带端口号的服务器名称               |
| location.protocol | 返回页面使用的协议（http://或https://) |
| location.search   | 返回URL的查询字符串，字符串以问号开头        |
4、screen对象

| screen的属性         | 说明             |
|-------------------|----------------|
| screen.width      | 屏幕宽度，以像素为单位    |
| screen.availWidth | 屏幕的可用宽度，以像素为单位 |
| screen.height     | 屏幕高度，以像素为单位    |
5、navigator对象

| navigator的属性            | 说明                  |
|-------------------------|---------------------|
| navigator.appName       | 浏览器名称               |
| navigator.appVersion    | 浏览器版本               |
| navigator.language      | 浏览器设置的语言            |
| navigator.platform      | 操作系统类型              |
| navigator.userAgent     | 浏览器设定的User-Agent字符串 |
| window.navigator.online | 是否联网                |
6、history对象

| history的属性        | 说明                                             |
|-------------------|------------------------------------------------|
| history.back()    | 与在浏览器点击后退按钮相同                                  |
| history.forward() | 与在浏览器中点击按钮向前相同                                 |
| history.go(参数)    | 前进后退功能，参数如果是1前进一个页面，如果是-1后退一个页面，如果是N则前进或后退N个页面 |
| history.length()  | 保存历史记录的数量                                      |

## 事件处理
&emsp;&emsp;事件一般是用户对页面的一些“小动作”引起的，例如按下鼠标、移动鼠标等，这些都会触发相应的一个事件。

一、<b>JavaScript常见的事件共有以下5种。</b>

（1）鼠标事件

| 事件          | 	说明     |
|-------------|---------|
| onclick	    | 鼠标单击事件  |
| onmouseover | 	鼠标移入事件 |
| onmouseout  | 	鼠标移出事件 |
| onmousedown | 	鼠标按下事件 |
| onmouseup   | 	鼠标松开事件 |
| onmousemove | 	鼠标移动事件 |
（2）键盘事件

| 事件        | 	说明  |
|-----------|------|
| onkeydown | 键盘按下 |
| onkeyup   | 键盘松开 |
（3）表单事件

| 事件             | 	说明                      |
|----------------|--------------------------|
| onfocus/onblur | 获取焦点时触发的事件/失去焦点时触发的事件    |
| onselect       | 选中“单行文本框”或“多行文本框”中的内容时触发 |
| onchange       | 当value改变时触发              |
| onsubmit       | 表单提交时触发                  |
（4）编辑事件

| 事件            | 	说明         |
|---------------|-------------|
| oncopy        | 用来防止页面内容被复制 |
| onselectstart | 用来防止页面内容被选取 |
| oncontextmenu | 用来禁止鼠标右键    |

（5）页面事件

| 事件             | 	说明               |
|----------------|-------------------|
| onload         | 表示文档加载完成后再执行的一个事件 |
| onbeforeunload | 表示离开页面之前触发的一个事件   |
>tips:页面时间是通过windo来调用的，例如： `window.onload = function (){.....}`

<b>在JavaScript中，调用事件的方式有两种:</b>

1、在script标签中调用

&emsp;语法：
```
DOM对象.事件名 = function()
{
    ……
};
```

2、在元素中调用

&emsp;例子：

     <input type="button" onclick="alert('隔壁老陈')" value="弹窗" />

二、<b>事件监听器【addEventListener()】</b>

1、绑定事件

&emsp;通过addEventListener()方法来为一个元素添加事件，称之为“绑定事件”。

&emsp;语法：

    DOM对象.addEventListener(type , fn , false)
>说明：<br/>
&emsp;type是一个字符串，指的是事件类型。例如单击事件用click，鼠标移入用mouseover等。一定要注意，这个事件类型是不需要加上“on”前缀的。<br/>
&emsp;fn是一个函数名，或者一个匿名函数。<br/>
&emsp;false表示事件冒泡阶段调用。

例子：

    DOM对象.addEventListener("click", function () {.....}, false);

2、event对；每一个事件，都有一个对应的event对象
 
例如：
```
DOM对象.addEventListener("click", function (event)
 {alert(event.type);}, false);
```
event对象的属性:

| 属性       | 	说明         |
|----------|-------------|
| type     | 	事件类型       |
| keyCode	 | 键码值         |
| shiftKey | 	是否按下shift键 |
| ctrlKey	 | 是否按下Ctrl键   |
| altKey   | 	是否按下Alt键   |
## this指向
&emsp;&emsp;this指向;简单来说:哪个DOM对象（元素节点）调用了this所在的函数，那么this指向的就是哪个DOM对象。

1、在函数体中，非显式或隐式地简单调用函数时，在严格模式下，函数内的 this 会被绑定到
undefined 上，在非严格模式下则会被绑定到全局对象 window/global 上 。

2、一般使用 new 方法调用构造函数时，构造函数内的 this 会被绑定到新创建的对象上 。

3、一般通过 call/apply/bind 方法显式调用函数时，函数体内的this会被绑定到指定参数的对象
上 。

4、一般通过上下文对象调用函数时，函数体内的this会被绑定到该对象上 。

5、在箭头函数中， this 的指向是由外层（函数或全局）作用域来决定的 。
## 拓展建议
&emsp;&emsp;ES6是 JavaScript 语言的下一代标准; <b>非常重要</b>，前端必学。

ES6重点简单概括：
```
箭头函数()=>{}、拓展运算符...、模板字符串`${}`、结构赋值、promise...等等
```
- [ES6教程](https://wangdoc.com/es6/intro.html)
- [Vue教程](https://v2.cn.vuejs.org/v2/guide)
- [React教程](https://react.docschina.org/tutorial/tutorial.html)
> 笔记小结语：我是隔壁老陈(微信:`CYJ138G`)，一个正在学习前端的小菜鸟，此笔记大部分从教程或者个人总结而来；可能存在知识点错误或者未完善的地方、希望大家能帮忙多修正和完善。后续可能会更新vue和react笔记。
> 也希望大家能分享一下学习经验和心得，让我少走点弯路；谢谢。在此：祝大家前程似锦、未来熠熠生辉。

