---
title: css3
date: 2022-09-01 17:13:00
permalink: /pages/c049ff/
categories:
  - pages
  - CSS
tags:
  - css
---
## CSS3简介
&emsp;&emsp;CSS3相对于CSS2来说，新增了大量属性，不仅可以让页面更加酷炫，最重要的是提高网站的可维护性以及性能速度。其中，CSS3新技术包括以下11个方面。

（1）新选择器

（2）文本样式

（3）颜色样式

（4）边框样式

（5）背景样式

（6）CSS3变形

（7）CSS3过渡

（8）CSS3动画

（9）多列布局

（10）弹性布局

（11）用户界面
### 浏览器兼容
&emsp;浏览器私有前缀

| 私有前缀     | 	对应的浏览器        |
|----------|----------------|
| -webkit- | 	Chrome和Safari |
| -moz-    | 	Firefox       |
| -ms-     | 	IE            |
| -o-      | 	Opera         |
### 新增选择器
1、属性选择器

| 选择器             | 	说明                            |
|-----------------|--------------------------------|
| E[attr^=“xxx”]	 | 选择元素E，其中E元素的attr属性是以xxx开头的任何字符 |
| E[attr$=“xxx”]	 | 选择元素E，其中E元素的attr属性是以xxx结尾的任何字符 |
| E[attr*=“xxx”]	 | 选择元素E，其中E元素的attr属性是包含xxx的任何字符  |
2、伪类选择器

| 选择器              | 	说明                                              |
|------------------|--------------------------------------------------|
| E:first-child    | 	选择父元素下的第一个子元素（该子元素类型为E，以下类同）                    |
| E:last-child     | 	选择父元素下的最后一个子元素                                  |
| E:nth-child(n)	  | 选择父元素下的第n个子元素或奇偶元素，n取值有3种：数字、odd和even，其中n从1开始    |
| E:only-child     | 	选择父元素下唯一的子元素，该父元素只有一个子元素                        |
| E:first-of-type	 | 选择父元素下的第一个E类型的子元素                                |
| E:last-of-type	  | 选择父元素下的最后一个E类型的子元素                               |
| E:nth-of-type(n) | 	选择父元素下的第n个E类型的子元素或奇偶元素，n取值有3种：数字、odd和even，n从1开始 |
| E:only-of-type	  | 选择父元素下唯一的E类型的子元素，该父元素可以有多个子元素                    |
tips：first-child在选择父元素下的子元素时，不仅要区分元素类型，还要求是第一个子元素。

而:first-of-type在选择父元素下的子元素时，只需要区分元素类型，不要求是第一个子元素。

3、UI伪类选择器

| 选择器                    | 	说明                        |
|------------------------|----------------------------|
| :focus                 | 定义元素获取焦点时使用的样式             |
| ::selection            | 页面中被选中文本的样式                |
| :checked               | 定义单选框或复选框被选中时的样式(兼容性差，不常用) |
| :enabled和:disabled     | 定义表单元素“可用和不可用”时的样式         |
| :read-write和:read-only | 定义表单元素“可读写和只读”时的样式         |
### 新增文本样式

| 属性	           | 说明    |
|---------------|-------|
| text-shadow   | 	文本阴影 |
| text-stroke   | 	文本描边 |
| text-overflow | 	文本溢出 |
| word-wrap     | 	强制换行 |
| @font-face	   | 嵌入字体  |
1、text-shadow属性为文本添加阴影效果

&emsp;语法：

     text-shadow:x-offset  y-offset  blur  color;
说明：

x-offset是“水平阴影”，表示阴影的水平偏移距离，单位可以是px、em和百分比等。由于CSS3采用的是W3C坐标系，因此如果值为正，则阴影向右偏移；如果值为负，则阴影向左偏移。

y-offset是“垂直阴影”，表示阴影的垂直偏移距离，单位可以是px、em和百分比等。由于CSS3采用的是W3C坐标系，因此如果值为正，则阴影向下偏移；如果值为负，则阴影向上偏移。

blur是“模糊距离”，表示阴影的模糊程度，单位可以是px、em、百分比等。blur值越大，则阴影越模糊；blur值越小，则阴影越清晰。此外，blur不能为负值。如果不需要阴影模糊效果，可以把blur值设置为0。

color是“阴影颜色”，表示阴影的颜色。

&emsp;例子：
定义多个阴影
     
    text-shadow:0 0 4px red,  0 -5px 4px green,  2px -10px 6px blue;
2、text-stroke属性为文本添加描边效果

&emsp;语法：

    text-stroke:width color;
说明：width边框的宽度，color边框的颜色

3、text-overflow属性来定义文本的溢出样式

&emsp;语法：

    text-overflow:取值;
| 取值        | 	说明                       |
|-----------|---------------------------|
| ellipsis	 | 当文本溢出时，显示省略号，并且隐藏多余的文字    |
| clip	     | 当文本溢出时，不显示省略号，而是将溢出的文字裁切掉 |

例子：
```
overflow:hidden; 
white-space:nowrap;
text-overflow:ellipsis; 
```
4、强行换行

&emsp;语法：
```
word-wrap:取值;

word-break:取值;
```
word-wrap属性取值

| 属性值	       | 说明        |
|------------|-----------|
| normal	    | 自动换行（默认值） |
| break-word | 	强制换行     |
word-break属性取值

| 属性值       | 	说明             |
|-----------|-----------------|
| normal    | 	自动换行（默认值）      |
| break-all | 	允许在单词内换行       |
| keep-all  | 	只能在半角空格或连字符处换行 |
5、@font-face方法来加载服务器端的字体，从而使得所有用户都能正常显示该字体。

&emsp;语法：
```
@font-face
{
font-family: 字体名称;
src:url(文件路径);
}
```
### 新增颜色样式
（1）opacity透明度

&emsp;语法：

    opacity:数值;
说明：
opacity属性取值是一个数值，取值范围为0.0~1.0。其中0.0表示完全透明，1.0表示完全不透明。

（2）RGBA颜色

&emsp;语法：

    rgba(R, G, B, A)
说明：

R，指的是红色值（Red）；G，指的是绿色值（Green）；B，指的是蓝色值（Blue）；A，指的是透明度（Alpha）。

R、G、B这三个可以为整数，取值范围为0~255，也可以为百分比，取值范围为0%~100%。参数A为透明度，跟opacity属性是一样的，取值范围为0.0~1.0。

（3）CSS3渐变

1、线性渐变

&emsp;语法：

    background:linear-gradient(方向, 开始颜色, 结束颜色)
线性渐变的“方向”取值

| 属性值          | 	对应角度    | 	说明            |
|--------------|----------|----------------|
| to top       | 	0deg    | 	从下到上          |
| to bottom    | 	180deg	 | 从上到下（默认值）      |
| to left      | 	270deg	 | 从右到左           |
| to right     | 	90deg   | 	从左到右          |
| to top left  | 	无	      | 从右下角到左上角（斜对角）  |
| to top right | 	无       | 	从左下角到右上角（斜对角） |
2、径向渐变

&emsp;语法：

    background:radial-gradient(position, shape size, start-color, stop-color)
说明：

position用于定义圆心位置。shape size用于定义形状大小，由两部分组成，shape定义形状，size定义大小。start-color和stop-color分别用于定义开始颜色和结束颜色。

其中，position和shape size都是可选参数。如果省略，则表示采用默认值。start-color和stop-color都是必选参数，可以有多个颜色值。

### 新增边框样式
| 属性	           | 说明    |
|---------------|-------|
| border-radius | 	圆角效果 |
| box-shadow    | 	边框阴影 |
| border-colors | 	多色边框 |
| border-image  | 	边框背景 |

1、圆角效果

&emsp;语法：

    border-radius:取值;
说明：border-radius取值：设置1个值，全部圆角；设置2个值，第一个值是左上角和右下角的圆角，第二个值右上角和左下角的圆角，三个以上就左上角、右上角、右下角、左下角”顺时针对应。
2、边框阴影

&emsp;语法：

    box-shadow:x-offset  y-offset  blur  spread  color  style;
说明：

（1）x-offset：定义水平阴影的偏移距离，可以使用负值。由于CSS3采用的是W3C坐标系，因此x-offset取值为正时，向右偏移；取值为负时，向左偏移。

（2）y-offset：定义垂直阴影的偏移距离，可以使用负值。由于CSS3采用的是W3C坐标系，因此y-offset取值为正时，向下偏移；取值为负时，向上偏移。

（3）blur：定义阴影的模糊半径，只能为正值。

（4）spread：定义阴影的大小。

（5）color：定义阴影的颜色。

（6）style：定义是外阴影还是内阴影。

个方向阴影独立样式

&emsp;语法：

    box-shadow:左阴影, 上阴影, 下阴影, 右阴影;
## 动画效果
### 变形（transform）

&emsp;语法：

    transform:方法
| 方法          | 	说明 |
|-------------|-----|
| translate() | 	平移 |
| scale()     | 	缩放 |
| skew()      | 	倾斜 |
| rotate()    | 	旋转 |
### 过渡（transition）

&emsp;语法：

    transition: 过渡属性 过渡时间 过渡方式 延迟时间
transition的子属性

| 属性                         | 	说明            |
|----------------------------|----------------|
| transition-property        | 	对元素的哪一个属性进行操作 |
| transition-duration        | 	过渡的持续时间       |
| transition-timing-function | 	过渡的速率方式       |
| transition-delay           | 	过渡的延迟时间（可选参数） |
1、过渡属性

&emsp;语法：

    transition-property: 取值;
说明：
transition-property属性取值是“CSS属性”。
2、过渡时间

&emsp;语法：

    transition-duration: 时间;
说明：
transition-duration属性取值是一个时间，单位为秒（s），可以取小数。
3、过渡方式

&emsp;语法：

    transition-timing-function: 取值;
| 取值	          | 说明	             |
|--------------|-----------------|
| ease         | 	默认值，由快到慢，逐渐变慢  |
| linear       | 	匀速             |
| ease-in      | 	速度越来越快（即渐显效果）  |
| ease-out     | 	速度越来越慢（即渐隐效果）  |
| ease-in-out	 | 先加速后减速（即渐显渐隐效果） |
4、延迟时间

&emsp;语法：

    transition-delay: 时间;
说明：
transition-delay属性取值是一个时间，单位为秒（s），可以是小数，默认值为0s。

例子：

    transition:all 1s linear 0s;
### 动画（animation）
&emsp;语法：

    animation: 动画名称 持续时间 动画方式 延迟时间 动画次数 动画方向;
animation的子属性

| 属性                        | 	说明             |
|---------------------------|-----------------|
| animation-name            | 	对哪一个CSS属性进行操作  |
| animation-duration        | 	动画的持续时间        |
| animation-timing-function | 	动画的速率方式        |
| animation-delay           | 	动画的延迟时间        |
| animation-iteration-count | 	动画的播放次数        |
| animation-direction       | 	动画的播放方向，正向还是反向 |
animation的使用

（1）定义动画

&emsp;语法：
```
@keyframes 动画名
{
0%{}
……
100%{}
}
```
（2）调用动画

&emsp;语法：

    animation-name: 动画名;
说明：animation-name调用的动画名需要和@keyframes规则定义的动画名完全一致（区分大小写）
## 多列布局

| 属性值	          | 说明         |
|---------------|------------|
| column-count	 | 列数         |
| column-width  | 	每一列的宽度    |
| column-gap    | 	两列之间的距离   |
| column-rule   | 	两列之间的边框样式 |
| column-span   | 	定义跨列样式    |
## flex布局

| 属性	             | 说明                                    |
|-----------------|---------------------------------------|
| flex-grow       | 	定义子元素的放大比例                           |
| flex-shrink     | 	定义子元素的缩小比例                           |
| flex-basis	     | 定义子元素的宽度                              |
| flex	           | flex-grow、flex-shrink、flex-basis的复合属性 |
| flex-direction  | 	定义子元素的排列方向                           |
| flex-wrap       | 	定义子元素是单行显示，还是多行显示                    |
| flex-flow       | 	flex-direction、flex-wrap的复合属性        |
| order           | 	定义子元素的排列顺序                           |
| justify-content | 	定义子元素在“横轴”上的对齐方式                     |
| align-items     | 	定义子元素在“纵轴”上的对齐方式                     |
## 滤镜效果
&emsp;语法：

    filter: 取值;

| 取值            | 	说明     |
|---------------|---------|
| brightness()  | 	亮度     |
| grayscale()   | 	灰度     |
| sepia()       | 	复古     |
| invert()      | 	反色     |
| hue-rotate()  | 	旋转（色相） |
| drop-shadow() | 	阴影     |
| opacity()     | 	透明度    |
| blur()        | 	模糊度    |
| contrast()    | 	对比度    |
| saturate()    | 	饱和度    |
## 更多待完善......