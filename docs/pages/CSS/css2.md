---
title: css2
date: 2022-08-09 09:44:56
permalink: /pages/CSS/
categories:
  - pages
  - CSS
tags:
  - css
---
&emsp;&emsp;CSS，指的是Cascading Style Sheet（层叠样式表），是用来控制网页外观的一门技术。

CSS引入使用共有以下3种方式。

- 外部样式表 语法：`<link rel="stylesheet" type="text/css" href="文件路径" />`。
- 内部样式表 语法：`<style type="text/css">......</style>`。
- 行内样式表 语法：`<div style="属性:属性值;">......</div>`。

- tips：es6 新增@import方式，不过用得非常少，这里就不介绍了。

## css 选择器

1、id选择器；id属性具有唯一性，也就是说在一个页面中相同的id只能出现一次。如果出现了多个相同的id，那么CSS或者JavaScript就无法识别这个id对应的是哪一个元素。

语法：`<div id="idname"></div>`。在style里面用`#idname{属性："属性值"}`控制id样式。

2、class选择器；class，顾名思义，就是“类”，它与C++、Java等编程语言中的“类”相似。我们可以为同一个页面的相同元素或者不同元素设置相同的class，然后使得相同class的元素具有相同的CSS样式。

语法：`<div class="idname"></div>`。在style里面用`.idname{属性："属性值"}`控制class样式。

3、元素选择器；元素选择器通常也称标签选择器。

语法： 在style里面用`标签名{属性："属性值"}`控制标签样式。

4、后代选择器；就是选择元素内部中所有的某一种元素，包括子元素和其他后代元素（如“孙元素”）。

语法：`<div class="father"><span></span><span></span></div>`。在style里面用`.father span{属性："属性值"}`控制后代样式。

5、子代选择器；就是选择元素内部中所有的某一种元素，只包括子元素。

语法：`<div><span></span></div>`。在style里面用`.div>span{属性："属性值"}`控制子代样式。

6、群组选择器；对于群组选择器，两个选择器之间必须要用英文逗号（,）隔开，不然群组选择器就无法生效。

语法：`<div></div><span></span>`。在style里面用`.div,span{属性："属性值"}`控制群组样式。

7、伪类选择器；

## 字体样式

字体CSS属性表

| 属性          | 说明   |
|-------------|------|
| font-family | 字体类型 |
| font-size   | 字体大小 |
| font-weight | 字体粗细 |
| font-style  | 字体风格 |
| color       | 字体颜色 |
tips:除了字体颜色，其他字体属性都是以“font”前缀开头的。其中，font就是“字体”的意思。
- font-family可以指定多种字体。使用多个字体时，将按从左到右的顺序排列，并且以英文逗号（,）隔开。如果我们不定义font-family，浏览器默认字体类型一般是“宋体”。
  
&emsp; 语法：

      font-family: 字体1, 字体2, ... , 字体N;

- font-size属性来定义字体大小。

&emsp; 语法：

    font-size: 像素值;
&emsp;&emsp;tips:font-size属性取值有两种：一种是“关键字”，如small、medium、large等；另外一种是“像素值”，如12px、16px、24px等。
- font-weight属性来定义字体粗细。
 
&emsp;语法：

    font-weight: 取值;

tips:font-weight属性取值有两种：一种是“100~900的数值”；另外一种是“关键字”。

其中，关键字

| normal  | 正常（默认值） |
|---------|---------|
| lighter | 较细      |
| bold    | 较粗      |
| bolder  | 很粗      |
- font-style属性来定义字体效果。
 
 &emsp;语法：

    font-style: 取值;
| font-style | 属性取值     |
|------------|----------|
| normal     | 	正常（默认值） |
| italic     | 	斜体      |
| oblique    | 	斜体      |
- color属性来定义字体颜色。

&emsp;语法：

    color: 颜色值;
tips:color属性取值有两种，一种是“关键字”；另外一种是“16进制RGB值”。除了这两种，其实还有RGBA、HSL等。
## 文本样式
&emsp;文本样式属性表

| 属性              | 说明     |
|-----------------|--------|
| text-indent     | 	首行缩进  |
| text-align      | 	水平对齐  |
| text-decoration | 	文本修饰  |
| text-transform  | 	大小写转换 |
| line-height     | 	行高    |
| letter-spacing  | 	字母间距  |
| word-spacing	   | 词间距    |
- text-indent属性来定义p元素的首行缩进。（也可以用`&nbsp;`来实现首行缩进两个字的空格,但是这种方式冗余代码很多。）

&emsp;语法：

    text-indent: 像素值;
- text-align属性来控制文本在水平方向上的对齐方式。

&emsp;语法：

     text-align: 取值;
text-align属性取值

| 属性值	    | 说明       |
|---------|----------|
| left	   | 左对齐（默认值） |
| center	 | 居中对齐     |
| right	  | 右对齐      |
- text-decoration属性来定义文本的修饰效果
  
&emsp;语法：

     text-decoration: 取值;
&emsp;text-decoration属性取值

| 属性值          | 	说明             |
|--------------|-----------------|
| none         | 	去除所有的划线效果（默认值） |
| underline    | 	下划线            |
| line-through | 	中划线            |
| overline	    | 顶划线             |
- text-transform属性来将文本进行大小写转换。text-transform属性是针对英文而言，因为中文不存在大小写之分。

&emsp;语法：

| none	       | 无转换（默认值）         |
|-------------|------------------|
| uppercase	  | 转换为大写            |
| lowercase	  | 转换为小写            |
| capitalize	 | 只将每个英文单词首字母转换为大写 |

- line-height属性来控制一行文本的高度。

&emsp;语法：

    line-height: 像素值;
- letter-spacing属性来两个字之间的距离。

&emsp;语法：

    letter-spacing: 像素值;
- word-spacing属性来定义两个单词之间的距离。

&emsp;语法：

    word-spacing: 像素值;
## 边框样式
&emsp;边框样式属性

| 属性	          | 说明     |
|--------------|--------|
| border-width | 	边框的宽度 |
| border-style | 	边框的外观 |
| border-color | 	边框的颜色 |
- border-width属性用于定义边框的宽度，取值是一个像素值。
- border-style属性用于定义边框的外观。

&emsp;border-style属性取值

| 属性值	    | 说明  |
|---------|-----|
| none	   | 无样式 |
| dashed	 | 虚线  |
| solid	  | 实线  |
- border-color属性用于定义边框的颜色，取值可以是“关键字”或“16进制RGB值”。

tips:一个元素的边框可以设（上、下、左、右）；上边框border-top、下边框border-bottom、左边框border-left、右边框border-right。
每个边框还可以设独立的样式。

例子：
```
border-top-width: 1px;
border-top-style: solid;
border-top-color: red;
```
还可以简写为：`border-top: 1px solid red;`
## 列表样式
&emsp;列表样式属性

| 属性值	             | 说明      |
|------------------|---------|
| list-style-type  | 定义列表项符号 |
| list-style-image | 定义列表项图片 |

1、对于列表，无论是有序列表还是无序列表，我们都是使用list-style-type属性来定义列表项符号。

&emsp;语法：

    list-style-type: 取值;
- list-style-type属性是针对ol或者ul元素的，而不是li元素。
  
ol的list-style-type属性取值

| 属性值	         | 说明                |
|--------------|-------------------|
| decimal	     | 阿拉伯数字：1、2、3…（默认值） |
| lower-roman	 | 小写罗马数字：i、ii、iii…  |
| upper-roman  | 	大写罗马数字：I、II、III… |
| lower-alpha	 | 小写英文字母：a、b、c…     |
| upper-alpha	 | 大写英文字母：A、B、C…     |
ul的list-style-type属性取值

| 属性值    | 	说明       |
|--------|-----------|
| disc	  | 实心圆●（默认值） |
| circle | 	空心圆○     |
| square | 	正方形■     |
2、去除列表项符号`list-style-type: none;`。

3、list-style-image属性来定义列表项图片，也就是使用图片来代替列表项符号。

&emsp;语法：

    list-style-image: url(图片路径);
## 表格样式
&emsp;表格样式属性

| 属性值             | 	说明    |
|-----------------|--------|
| caption-side    | 表格标题位置 |
| border-collapse | 表格边框合并 |
| border-spacing  | 表格边框间距 |
- caption-side属性来定义表格标题的位置。

&emsp;语法：

    caption-side: 取值;
&emsp;caption-side属性取值

| 属性值	    | 说明         |
|---------|------------|
| top	    | 标题在顶部（默认值） |
| bottom	 | 标题在底部      |
- border-collapse属性来去除单元格之间的空隙，也就是将两条边框合并为一条。

&emsp;语法：

     border-collapse: 取值;
&emsp;border-collapse属性取值

| 属性值	     | 说明             |
|----------|----------------|
| separate | 	边框分开，有空隙（默认值） |
| collapse | 	边框合并，无空隙      |

&emsp;html例子：
```
  <table>
        <caption>表格标题</caption>
        <!--表头-->
        <thead>
            <tr>
                <th>表头单元格1</th>
                <th>表头单元格2</th>
            </tr>
        </thead>
        <!--表身-->
        <tbody>
            <tr>
                <td>表行单元格1</td>
                <td>表行单元格2</td>
            </tr>
            <tr>
                <td>表行单元格3</td>
                <td>表行单元格4</td>
            </tr>
        </tbody>
        <!--表脚-->
        <tfoot>
            <tr>
                <td>表行单元格5</td>
                <td>表行单元格6</td>
            </tr>
        </tfoot>
    </table>
  ```
- border-spacing属性来定义表格边框间距。

&emsp;语法：

    border-spacing: 像素值; 
## 图片样式
&emsp;图片样式属性

| 属性值	           | 说明       |
|----------------|----------|
| width/height   | 宽/高      |
| border         | 图片边框     |
| text-align     | 图片水平对齐方式 |
| vertical-align | 图片垂直对齐方式 |
- width和height这两个属性来定义图片的大小（也就是宽度和高度）。

&emsp;语法：
```
width: 像素值;
height: 像素值;
```
- border 和上面的语法一样，只不过这里是用来定义图片的而已。

例子：

    border: 1px solid red;

- text-align属性来定义图片水平对齐方式。

&emsp;语法：

    text-align: 取值;
&emsp;text-align属性取值

| 属性值     | 	说明       |
|---------|-----------|
| left    | 	左对齐（默认值） |
| center	 | 居中对齐      |
| right	  | 右对齐       |
- vertical-align来定义图片的垂直对齐方式。

&emsp;语法：

    vertical-align: 取值;
&emsp;vertical-align属性取值

| 属性值	     | 说明    |
|----------|-------|
| top      | 	顶部对齐 |
| middle	  | 中部对齐  |
| baseline | 	基线对齐 |
| bottom   | 	底部对齐 |
## 背景样式
&emsp;背景样式属性

| 属性	                    | 说明                    |
|------------------------|-----------------------|
| background-image       | 	定义背景图片地址             |
 | background-repeat      | 	定义背景图片重复，例如横向重复、纵向重复 |
| background-position    | 	定义背景图片位置             |
| background-attachment	 | 定义背景图片固定              |
- background-color属性来定义元素的背景颜色。

&emsp;语法：

    background-color: 颜色值;
tips：颜色值有两种，一种是“关键字”，另外一种是“16进制RGB值”。其中关键字指的是颜色的英文名称，如red、green、blue等。而16进制RGB值指的是类似“#FBE9D0”形式的值。
- background-image属性来为元素定义背景图片。

&emsp;语法：

    background-image: url(图片路径);
tips：跟引入图片（即img标签）一样，引入背景图片也需要给出图片路径才可以显示。
- background-repeat属性来定义背景图片的重复方式。

&emsp;语法：
      
    background-repeat: 取值;
&emsp;background-repeat属性取值

| 属性值        | 	说明                   |
|------------|-----------------------|
| repeat     | 	在水平方向和垂直方向上同时平铺（默认值） |
| repeat-x   | 	只在水平方向（x轴）上平铺        |
| repeat-y   | 	只在垂直方向（y轴）上平铺        |
| no-repeat	 | 不平铺                   |
- background-position属性来定义背景图片的位置。

&emsp;语法：

    background-position: 像素值/关键字;
tips：当background-position属性取值为“像素值”时，要同时设置水平方向和垂直方向的数值。例如：`background-position: 水平距离 垂直距离;`

&emsp;&emsp;当background-position属性取值为“关键字”时，也要同时设置水平方向和垂直方向的值，只不过这两个值使用关键字来代替而已。

&emsp;&emsp;background-position属性的关键字取值

| 属性值           | 	说明   |
|---------------|-------|
| top left      | 	左上   |
| top center    | 	靠上居中 |
| top right     | 	右上   |
| center left   | 	居中靠左 |
| center center | 	正中   |
| center right  | 	居中靠右 |
| bottom left	  | 左下    |
| bottom center | 	靠下居中 |
| bottom right	 | 右下    |
- background-attachment属性来定义背景图片是随元素一起滚动还是固定不动。

&emsp;语法：

    background-attachment: 取值;
&emsp;background-attachment属性取值

| 属性值    | 	说明           |
|--------|---------------|
| scroll | 	随元素一起滚动（默认值） |
| fixed  | 	固定不动         |

## 超链接伪类
&emsp;在CSS中，我们可以使用“超链接伪类”来定义超链接在鼠标点击的不同时期的样式。

&emsp;语法：
```
a:link{…}
a:visited{…}
a:hover{…}
a:active{…}
```
tips:如果一次性定义4个伪类的话，必须按照“link、visited、hover、active”的顺序进行，不然浏览器可能无法正常显示这4种样式。
## 浏览器鼠标样式
&emsp;在CSS中，我们可以使用cursor属性来定义鼠标样式。

&emsp;语法：

    cursor: 取值;
cursor属性取值在实际开发中我们一般只会用到3个：default、pointer和text，其他的很少用得上。
tips：除了使用浏览器自带的鼠标样式，我们还可以使用cursor属性来自定义鼠标样式。

&emsp;语法：

    cursor: url(图片地址), 属性值;
## 盒子模型
&emsp;每个元素都可以看成一个盒子，盒子模型是由四个属性组成的：content（内容）、padding（内边距）、margin（外边距）和border（边框）。

&emsp;盒子模型组成部分说明

| 属性	      | 说明                      |
|----------|-------------------------|
| content	 | 内容，可以是文本或图片             |
| padding	 | 内边距，用于定义内容与边框之间的距离      |
| margin   | 	外边距，用于定义当前元素与其他元素之间的距离 |
| border	  | 边框，用于定义元素的边框            |

## 浮动布局
&emsp;可以用float属性来实现文字环绕图片的效果。

&emsp;语法：

    float: 取值;
float属性取值只有2个，非常简单；如下：

| 属性值    | 	说明     |
|--------|---------|
| left   | 	元素向左浮动 |
| right	 | 元素向右浮动  |
tips：浮动会影响周围元素，并且还会引发很多预想不到的问题。在CSS中，我们可以使用clear属性来清除浮动带来的影响。

&emsp;语法：

    clear: 取值;
&emsp;clear属性取值

| 属性值    | 	说明          |
|--------|--------------|
| left	  | 清除左浮动        |
| right	 | 清除右浮动        |
| both   | 	同时清除左浮动和右浮动 |
## 定位布局
&emsp;定位布局共有4种方式，这4种方式都是通过position属性来实现的。

&emsp;语法：

     position: 取值;
&emsp;position属性取值

| 属性值	     | 说明         |
|----------|------------|
| static   | 	静态定位（默认值） |
| fixed	   | 固定定位       |
| relative | 	相对定位      |
| absolute | 	绝对定位      |
- 固定定位，指的是被固定的元素不会随着滚动条的拖动而改变位置。

tips:固定定位；position:fixed;是结合top、bottom、left和right这4个属性一起使用的。其中，position:fixed使得元素成为固定定位元素，接着使用top、bottom、left和right这4个属性来设置元素相对浏览器的位置。
- 相对定位，指的是该元素的位置是相对于它的原始位置计算而来的。

tips：相对定位；position:relative;也是结合top、bottom、left和right这4个属性一起使用的，其中，position:relative;使得元素成为相对定位元素，接着使用top、bottom、left和right这4个属性来设置元素相对原始的位置。

- 绝对定位；给一个元素加上绝对定位，那么这个元素就完全脱离文档流了，绝对定位元素的前面或后面的元素会认为这个元素并不存在，此时这个元素浮于其他元素上面，已经完全独立出来了。

tips：绝对定位；position:absolute;是结合top、bottom、left和right这4个属性一起使用的，其中position:absolute使得元素成为绝对定位元素，接着使用top、bottom、left和right这4个属性来设置元素相对浏览器的位置。

trick：<b>一般相对定位和绝对定位搭配起来使用的最广泛；例如：把一盒子居中，可以给父盒子加相对定位，子盒子加绝对定位，也就是所谓的`子绝父相`。</b>