---
title: vue2
date: 2022-09-13 15:26:17
permalink: /pages/ef8617/
categories:
  - pages
  - Vue
tags:
  - Vue
---
Vue (读音 /vjuː/，类似于 view) 是一套用于动态构建用户界面的渐进式JavaScript 框架。
 - 内容来自尚硅谷开源教学课件的总结
### 1.1 官网
1. [英文官网](https://vuejs.org/)
2. [中文官网](https://cn.vuejs.org/)

### 1.2 Vue 周边库 
- vue-cli: vue 脚手架
- vue-resource
- axios
- vue-router: 路由
- vuex: 状态管理
- element-ui: 基于vue 的UI 组件库(PC 端)
    ……

 ### 1.3 模板语法

  html 中包含了一些JS 语法代码，语法分为两种，分别为：
- 插值语法（双大括号表达式）
- 指令（以v-开头）
 
1.3.1. 插值语法
- 功能: 用于解析标签体内容
- 语法:

```
{{xxx}}
```
xxxx 会作为js 表达式解析 
- 说明：不能用在属性节点

1.3.2. 指令语法
- 功能: 解析标签属性、解析标签体内容、绑定事件
- 举例：`v-bind:href = 'xxxx'` ，xxxx 会作为js 表达式被解析
- 说明：在标签属性绑定只能用v-bind 

语法：
  
    v-bind:href ="xxx"// 或简写为 ： 
    
>   特点：数据只能从data 流向页面
     
### 1.4 双向数据绑定
- 语法：
        
      v-mode:value="xxx" //或简写为v-model="xxx"
- 特点：数据不仅能从data 流向页面，还能从页面流向data
### 1.5 MVVM 模型
- M：模型(Model) ：对应data 中的数据
- V：视图(View) ：模板
- VM：视图模型(ViewModel) ： Vue 实例对象
### 1.6 事件v-on
语法:
    
    v-on:xxx="xxx"//或简写为@xxx="xxx"
- 简写不带参数：@xxx="xxx"
- 简写带参数@xxx="xxx(参数)"
- tips:
> 默认事件形参: event

> 隐含属性对象: $event
    
#### 1.6.1 事件修饰符

- .prevent : 阻止事件的默认行为`event.preventDefault()`
- .stop : 停止事件冒泡`event.stopPropagation()`
#### 1.6.2 按键修饰符
- .keycode : 操作的是某个keycode 值的键
- .keyName : 操作的某个按键名的键(少部分)

### 1.7 计算属性-computed
要显示的数据不存在，要通过计算得来。
- 在computed 对象中定义计算属性。
- 在页面中使用{{方法名}}来显示计算的结果。
  
### 1.8 监视属性-watch
- 通过通过vm 对象的$watch()或watch 配置来监视指定的属性
- 当属性变化时, 回调函数自动调用, 在函数内部进行计算

### 1.9 class/style绑定
&emsp;&emsp;专门用来实现动态样式效果的技术

- :class='xxx'
- 表达式是字符串: 'classA'
- 表达式是对象: {classA:isA, classB: isB}
- 表达式是数组: ['classA', 'classB']

例子：

      :style="{ color: activeColor, fontSize: fontSize + 'px' }"

注：其中activeColor/fontSize 是data 属性

### 2.1 条件渲染

2.1.1条件渲染指令
- v-if 与v-else
- v-show

注：1.比较v-if 与v-show ，如果需要频繁切换v-show 较好

2 .当条件不成立时, v-if 的所有子节点不会解析
    

### 2.2 常见vue指令
- v-text : 更新元素的textContent
- v-html : 更新元素的innerHTML
- v-if : 如果为true, 当前标签才会输出到页面
- v-else: 如果为false, 当前标签才会输出到页面
- v-show : 通过控制display 样式来控制显示/隐藏
- v-for : 遍历数组/对象
- v-on : 绑定事件监听, 一般简写为@
- v-bind : 绑定解析表达式, 可以省略v-bind
- v-model : 双向数据绑定
- v-cloak : 防止闪现, 与css 配合: [v-cloak] { display: none }
    1.13.2. 自定义指令
### 2.3 注册指令

- 仅适用vue2
- 注册全局指令
```
    Vue.directive('my-directive', function(el, binding){
    el.innerHTML = binding.value.toupperCase()
    })
```
- 注册局部指令
```
directives : {
'my-directive' : {
bind (el, binding) {
el.innerHTML = binding.value.toupperCase()
}
}
}
```  
- 使用指令

      v-my-directive='xxx'

### 2.4 vue 生命周期分析
1) 初始化显示
* beforeCreate()
* created()
* beforeMount()
* mounted()
2) 更新状态: this.xxx = value
* beforeUpdate()
* updated()
3) 销毁vue 实例: vm.$destory()
* beforeDestory()
* destoryed()
### 2.5 常用的生命周期方法
1. mounted(): 发送ajax 请求, 启动定时器等异步任务
2. beforeDestory(): 做收尾工作, 如: 清除定时器
## Vue 组件化编程
   模块与组件、模块化与组件化

3.1 模块

1. 理解: 向外提供特定功能的js 程序, 一般就是一个js 文件
2. 为什么: js 文件很多很复杂
3. 作用: 复用js, 简化js 的编写, 提高js 运行效率

3.2 组件

1.理解: 用来实现局部(特定)功能效果的代码集合(html/css/js/image…..)

2.为什么: 一个界面的功能很复杂

3.作用: 复用编码, 简化项目编码, 提高运行效率

3.3模块化

&emsp; &emsp;  当应用中的js 都以模块来编写的, 那这个应用就是一个模块化的应用。 

3.4 组件化

   当应用中的功能都是多组件的方式来编写的, 那这个应用就是一个组件化的应用,。

3.5 非单文件组件

1. 模板编写没有提示
2. 没有构建过程, 无法将ES6 转换成ES5
3. 不支持组件的CSS
4. 真正开发中几乎不用
   2.3. 单文件组件
   2.3.1. 一个.vue 文件的组成(3 个部分)
3.6 模板页面
```
<template>
   页面模板
</template>

```
   
3.7 JS 模块对象
```
<script>
export default {
data() {return {}},
methods: {},
computed: {},
components: {}
}
</script>
```



## 4.1 使用Vue 脚手架
&emsp; &emsp;  Vue 脚手架是Vue 官方提供的标准化开发工具（开发平台）。

- 官方文档: https://cli.vuejs.org/zh/。
- 步骤
   
1、第一步（仅第一次执行）：全局安装@vue/cli。

      npm install -g @vue/cli
2、第二步：切换到你要创建项目的目录，然后使用命令创建项目

       vue create xxxx
   
3、第三步：启动项目

      npm run serve
   
注：
>如出现下载缓慢请配置npm 淘宝镜像：`npm config set registry
      https://registry.npm.taobao.org`

> Vue 脚手架隐藏了所有webpack 相关的配置，若想查看具体的webpakc 配置，
      请执行：`vue inspect > output.js`
    
### 4.1.1 ref
   1.作用：用于给节点打标识
  
   2.读取方式：`this.$refs.xxxxxx props`
### 4.1.2 props 
1.作用：用于父组件给子组件传递数据

2.读取方式一: 
- 指定名称
      `props: ['name', 'age', 'setName']`
- 读取方式二: 指定名称和类型
```
 props: {
      name: String,
      age: Number,
      setNmae: Function
      }
```
     
3.读取方式三: 指定名称/类型/必要性/默认值
```
props: {
      name: {
      type: String,
      required: true,
      default:xxx},
      }
```   

### 5.1 Vue 中的自定义事件
1.绑定事件监听
```
<Header @addTodo="addTodo"/>
或者
<Header ref="header"/>
this.$refs.header.$on('addTodo', this.addTodo)
```
2.触发事件

    this.$emit('addTodo', todo)
### 5.2 全局事件总线

- Vue 原型对象上包含事件处理的方法
1) $on(eventName, listener): 绑定自定义事件监听
2) $emit(eventName, data): 分发自定义事件
3) $off(eventName): 解绑自定义事件监听
4) $once(eventName, listener): 绑定事件监听, 但只能处理一次
- 所有组件实例对象的原型对象的原型对象就是Vue 的原型对象
1) 所有组件对象都能看到Vue 原型对象上的属性和方法
2) Vue.prototype.$bus = new Vue(), 所有的组件对象都能看到$bus 这个属性
对象
- 全局事件总线
1) 包含事件处理相关方法的对象(只有一个)
2) 所有的组件都可以得到
- 指定事件总线对象
```
new Vue({
beforeCreate () { // 尽量早的执行挂载全局事件总线对象的操作
Vue.prototype.$globalEventBus = this
},
}).$mount('#root')
```
总线操作步骤

1、绑定事件

    this.$globalEventBus.$on('deleteTodo', this.deleteTodo)
2、分发事件

    this.$globalEventBus.$emit('deleteTodo', this.index)
3、解绑事件
    
    this.$globalEventBus.$off('deleteTodo')

### 5.3 消息订阅与发布
&emsp;&emsp;这种方式的思想与全局事件总线很相似,
它包含以下操作:

(1) 订阅消息--对应绑定事件监听

(2) 发布消息--分发事件

(3) 取消消息订阅--解绑事件监听

实现消息订阅与发布需要引入一个的第三方实现库: PubSubJS

&emsp;&emsp;使用PubSubJS

1、[在线文档](https://github.com/mroderick/PubSubJS) 

2、下载: npm install -S pubsub-js

3、相关语法

(1) import PubSub from 'pubsub-js' // 引入

(2) PubSub.subscribe(‘msgName’, functon(msgName, data){ })

(3) PubSub.publish(‘msgName’, data): 发布消息, 触发订阅的回调函数调用

(4) PubSub.unsubscribe(token): 取消消息的订阅


### 5.4 slot 插槽

&emsp;&emsp;父组件向子组件传递带数据的标签，当一个组件有不确定的结构时, 就需要使用
slot 技术，注意：插槽内容是在父组件中编译后, 再传递给子组件的。

插槽分类
- 默认插槽
- 命名插槽
- 作用域插槽

### 5.5 vuex
&emsp;&emsp;专门在Vue 中实现集中式状态（数据）管理的一个Vue 插件，对vue 应
用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方
式，且适用于任意组件间通信。

1、[Github 地址](https://github.com/vuejs/vuex) 

2、什么时候使用Vuex
- 多个组件依赖于同一状态
- 来自不同组件的行为需要变更同一状态


### 5.6 路由 vue-router
&emsp;&emsp;路由 vue-router是vue 的一个插件库，专门用来实现SPA 应用

1、SPA 应用
- 单页Web 应用（single page web application，SPA）。
- 整个应用只有一个完整的页面。
- 点击页面中的导航链接不会刷新页面，只会做页面的局部更新。
- 数据需要通过ajax 请求获取。

2、路由分类
- 后端路由：
1) 理解：value 是function, 用于处理客户端提交的请求。
2) 工作过程：服务器接收到一个请求时, 根据请求路径找到匹配的函数
来处理请求, 返回响应数据。
- 前端路由：
1) 理解：value 是component，用于展示页面内容。
2) 工作过程：当浏览器的路径改变时, 对应的组件就会显示。

编写使用路由的步骤：
1. 定义路由组件
2. 注册路由
3. 使用路由

>嵌套（多级）路由 

>路由传参

>编程式路由导航

相关API：
1. this.$router.push(path): 相当于点击路由链接(可以返回到当前路由界面)
2. this.$router.replace(path): 用新路由替换当前路由(不可以返回到当前路由界面)
3. this.$router.back(): 请求(返回)上一个记录路由
4. this.$router.go(-1): 请求(返回)上一个记录路由
5. this.$router.go(1): 请求下一个记录路由
