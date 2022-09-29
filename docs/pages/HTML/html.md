---
title: html
date: 2022-08-09 09:46:04
permalink: /pages/HTML/
categories:
  - pages
  - HTML
tags:
  - HTML
---
&emsp;&emsp;HTML，全称Hyper Text Markup Language（超文本标记语言）。HTML是一门描述性语言。
  
  语法：
  
    <标签符>内容</标签符>
标签符一般都是成对出现的，包含一个“开始符号”和一个“结束符号”。结束符号只是在开始符号前面多加上了一个斜杠“/”。当浏览器收到HTML文本后，就会解析里面的标签符，然后把标签符对应的功能表达出来。
### HTML 结构
&emsp;HTML的基本结构，一般一个页面是由4个部分组成的。

（1）文档声明：`<!DOCTYPE html>`

（2）html标签对：`<html></html>`

（3）head标签对：`<head></head>`

（4）body标签对：`<body></body>`
## 基本标签
1、title标签；在HTML中，title标签唯一的作用就是定义网页的标题。

2、meta标签；meta标签一般用于定义页面的特殊信息，例如页面关键字、页面描述等。
meta标签有两个重要的属性：name和http-equiv。
- name取值有keywords（网页关键字）、description（网页描述）、author和copyright（版权信息）。
- http-equiv属性只有两个重要作用：定义网页所使用的编码；定义网页自动刷新跳转。

`<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>`

`<meta  http-equiv="refresh" content="6;url=http://www.baidu.com"/>`

3、style标签；用于定义元素的CSS样式

4、script标签；用于定义页面的JavaScript代码，也可以引入外部JavaScript文件。

5、link标签用于引入外部样式文件（CSS文件）。
## 内容标签
1、标题标签：h1、h2、h3、h4、h5、h6。

2、段落标签`<p></p>`。

3、换行标签`<br/>`。

4、文本标签
- 粗体标签：strong、b
- 斜体标签：i、em、cite
- 上标标签：sup
- 下标标签：sub
- 中划线标签：s
- 下划线标签：u
- 大字号标签：big
- 小字号标签：small

5、hr标签；来实现一条水平线，是horizon（水平线）的缩写。 语法：`<hr/>`。

6、div标签；块级标签，通常用来划分HTML结构，从而配合CSS来整体控制某一块的样式。


7、常见自闭合标签：`<meta/>|<link/>|<br/>|<hr/>|<img/>|<input/>`	。

--tips:在HTML中，根据元素的表现形式，可以分为三类。
- 块元素（block）；通常也称块级标签，独占一行，可设宽高。
- 行内元素（inline）；可以与其他行内元素位于同一行，宽高由内容决定，不可设宽高。
- 行内块元素（inline-block）；可以与其他行内元素位于同一行，可设宽高。

  <strong>元素之间可通过diplay:block来转换，详细请看css篇</strong>
---
##  列表
1、有序列表ol；语法：
`<ol><li>列表项</li></ol>`

<strong>ol可设type属性值有：</strong>
- 阿拉伯数字：1、2、3……
- a	小写英文字母：a、b、c……
- A	大写英文字母：A、B、C……
- i	小写罗马数字：i、ii、iii……
- I 大写罗马数字：I、II、III……

例子：
```
        <ol type="a">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Vue.js</li>
        </ol>
```
2、无序列表ul；无序列表的列表项符号是●，不过可以通过type属性来改变其样式，语法和有序的一样。

<strong>ul可设type属性值有：</strong>
- disc	实心圆●（默认值）
- circle	空心圆○
- square	正方形■

例子：
```
    <ul type="circle">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    </ul>
```
3、定义列表dl；dl即definition list（定义列表）；dt即definition term（定义名词）；而dd即definition description（定义描述）。
语法: `<dl>标记</dl> `。
 
例子：
```
    <dl>
        <dt>HTML</dt>
        <dd>结构</dd>
        <dt>JavaScript</dt>
        <dd>行为</dd>
    </dl>
```
## 表格
表格一般会由以下3个部分组成。

语法：
```
<table>
<caption>表格标题</caption>
<tr><td>单元格1</td><td>单元格2</td></tr>
</table>
```
## 图片
图片img标签，只需要掌握它的3个属性：src、alt和title。

语法：

    <img src="" alt="" title="" />
## 超链接
超链接a标签：

语法：

     <a href="链接地址" target="打开方式"></a>

target属性有：

-  _self	默认值，在原来窗口打开链接
-  _blank	在新窗口打开链接
-  _parent	在父窗口打开链接
-  _top	在顶层窗口打开超链接

--tips：超链接还可以做锚点内部链接

例子：
       
     <a href="#内容中的id">锚点链接</a><br />
