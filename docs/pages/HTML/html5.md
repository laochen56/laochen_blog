---
title: html5
date: 2022-08-10 17:20:06
permalink: /pages/f35e04/
categories:
  - pages
  - HTML
tags:
  - HTML
---
## HTML5简介
&emsp;&emsp;HTML5 是 W3C 与 WHATWG 合作的结果,WHATWG 指 Web Hypertext Application Technology Working Group。

&emsp;HTML5的新特性：
 
- 新增全局属性。
- 用于绘画的 canvas 元素。
- 用于媒介回放的 video 和 audio 元素。
- 对本地离线存储的更好的支持。
- 新的特殊内容元素，比如 article、footer、header、nav、section。
- 新的表单控件，比如 calendar、date、time、email、url、search。
 
### HTML5全局属性
1、新属性

| 属性	             | 描述                             |
|-----------------|--------------------------------|
| contenteditable | 	规定是否可编辑元素的内容                  | 
| contextmenu     | 	指定一个元素的上下文菜单。当用户右击该元素，出现上下文菜单 | 
| data - *        | 	用于存储页面的自定义数据                  | 
| draggable       | 	指定某个元素是否可以拖动                  | 
| dropzone        | 	指定是否将数据复制，移动，或链接，或删除          | 
| hidden          | 	hidden 属性规定对元素进行隐藏            | 
| spellcheck      | 	检测元素是否拼写错误                    | 
| translate       | 	指定是否一个元素的值在页面载入时是否需要翻译        | 
例子：

      <img draggable="true">
2、新增的窗口事件属性

| 属性	            | 说明                                 |
|----------------|------------------------------------|
| onafterprint   | 		在打印文档之后运行脚本                      |
| onbeforeprint  | 		在文档打印之前运行脚本                      |
| onbeforeonload | 		在文档加载之前运行                        |
| onblur	(old)	  | 当窗口失去焦点时运行脚本                       |
| onerror        | 		当错误发生时运行脚本                       |
| onfocus(old)		 | 当窗口获得焦点时运行脚本                       |
| onhashchange   | 		当文档改变时运行脚本                       |
| onload	(old)	  | 当文档加载时运行脚本                         |
| onmessage      | 		当触发消息时运行脚本                       |
| onoffline      | 		当文档离线时运行脚本                       |
| ononline       | 		当文档上线时运行脚本                       |
| onpagehide     | 		当窗口隐藏时运行脚本                       |
| onpageshow     | 		当窗口可见时运行脚本                       |
| onpopstate     | 		当窗口历史记录改变时运行脚                    |
| onredo         | 	当文档执行再执行操作（redo）时运行脚本             |
| onresize       | 	当调整窗口大小时运行脚本                      |
| onstorage      | 	当 Web Storage 区域更新时（存数据发生变化时）运行脚本 |
| onundo         | 	当文档执行撤销时运行脚本                      |
| onunload       | 	当用户离开文档时运行脚本                      |

3、表单事件(适用于所有 HTML 元素, 但该HTML元素需在form表单内):

| 属性		                | 说明              |
|---------------------|-----------------|
| onblur	             | 	当元素失去焦点时运行脚本   |
| onchange	           | 	当元素改变时运行脚本     |
| oncontextmenu(New)	 | 	当触发上下文菜单时运行脚本  |
| onfocus	            | 	当元素获得焦点时运行脚本   |
| onformchange(New)	  | 	当表单改变时运行脚本     |
| onforminput(New)	   | 	当表单获得用户输入时运行脚本 |
| oninput(New)	       | 	当元素获得用户输入时运行脚本 |
| oninvalid(New)	     | 	当元素无效时运行脚本     |
| onreset	            | 	当表单重置时运行脚本     |
| onselect	           | 	当选取元素时运行脚本     |
| onsubmit	           | 	当提交表单时运行脚本     |

4、键盘事件

| 属性          | 	说明            |
|-------------|----------------|
| onkeydown	  | 	当按下按键时运行脚本    |
| onkeypress	 | 	当按下并松开按键时运行脚本 |
| onkeyup	    | 	当松开按键时运行脚本    |

5、鼠标事件

| 属性                 | 		说明                  |
|--------------------|-----------------------|
| onclick	           | 	当单击鼠标时运行脚本           |
| ondblclick	        | 	当双击鼠标时运行脚本           |
| ondrag(New)	       | 	当拖动元素时运行脚本           |
| ondragend(New)	    | 	当拖动操作结束时运行脚本         |
| ondragenter(New)	  | 	当元素被拖动至有效的拖放目标时运行脚本  |
| ondragleave(New)	  | 	当元素离开有效拖放目标时运行脚本     |
| ondragover(New)	   | 	当元素被拖动至有效拖放目标上方时运行脚本 |
| ondragstart(New)	  | 	当拖动操作开始时运行脚本         |
| ondrop(New)	       | 	当被拖动元素正在被拖放时运行脚本     |
| onmousedown	       | 	当按下鼠标按钮时运行脚本         |
| onmousemove	       | 	当鼠标指针移动时运行脚本         |
| onmouseout	        | 	当鼠标指针移出元素时运行脚本       |
| onmouseover	       | 	当鼠标指针移至元素之上时运行脚本     |
| onmouseup	         | 	当松开鼠标按钮时运行脚本         |
| onmousewheel(New)	 | 	当转动鼠标滚轮时运行脚本         |
| onscroll(New)	     | 	当滚动元素的滚动条时运行脚本       |

6、新增多媒体事件

&emsp;&emsp;通过视频（videos），图像（images）或者音频（audio） 触发该事件，多应用于 HTML 媒体元素

比如: `<audio>, <embed>, <img>, <object>和<video>` 。

| 属性	                 | 	说明                             |
|---------------------|---------------------------------|
| onabort(old)	       | 	当发生中止事件时运行脚本                   |
| oncanplay	          | 	当媒介能够开始播放但可能因缓冲而需要停止时运行脚本      |
| oncanplaythrough	   | 	当媒介能够无需因缓冲而停止即可播放至结尾时运行脚本      |
| ondurationchange	   | 	当媒介长度改变时运行脚本                   |
| onemptied	          | 	当媒介资源元素突然为空时（网络错误、加载错误等）运行脚本   |
| onended	            | 	当媒介已抵达结尾时运行脚本                  |
| onerror	            | 	当在元素加载期间发生错误时运行脚本              |
| onloadeddata	       | 	当加载媒介数据时运行脚本                   |
| onloadedmetadata	   | 	当媒介元素的持续时间以及其他媒介数据已加载时运行脚本     |
| onloadstart	        | 	当浏览器开始加载媒介数据时运行脚本              |
| onpause	            | 	当媒介数据暂停时运行脚本                   |
| onplay	             | 	当媒介数据将要开始播放时运行脚本               |
| onplaying	          | 	当媒介数据已开始播放时运行脚本                |
| onprogress	         | 	当浏览器正在取媒介数据时运行脚本               |
| onratechange	       | 	当媒介数据的播放速率改变时运行脚本              |
| onreadystatechange	 | 	当就绪状态（ready-state）改变时运行脚本      |
| onseeked	           | 	当媒介元素的定位属性 [1] 不再为真且定位已结束时运行脚本 |
| onseeking	          | 	当媒介元素的定位属性为真且定位已开始时运行脚本        |
| onstalled	          | 	当取回媒介数据过程中（延迟）存在错误时运行脚本        |
| onsuspend	          | 	当浏览器已在取媒介数据但在取回整个媒介文件之前停止时运行脚本 |
| ontimeupdate	       | 	当媒介改变其播放位置时运行脚本                |
| onvolumechange	     | 	当媒介改变音量亦或当音量被设置为静音时运行脚本        |
| onwaiting	          | 	当媒介已停止播放但打算继续播放时运行脚本           |
### canvas标签
&emsp;&emsp;用于绘制图像。canvas元素本身并没有绘制能力（它仅仅是图形的容器） 您必须使用脚本来完成实际的绘图任务。
getContext() 方法可返回一个对象，该对象提供了用于在画布上绘图的方法和属性。

1、颜色、样式和阴影

| 属性            | 	描述                  |
|---------------|----------------------|
| fillStyle	    | 设置或返回用于填充绘画的颜色、渐变或模式 |
| strokeStyle   | 	设置或返回用于笔触的颜色、渐变或模式  |
| shadowColor   | 	设置或返回用于阴影的颜色        |
| shadowBlur	   | 设置或返回用于阴影的模糊级别       |
| shadowOffsetX | 	设置或返回阴影与形状的水平距离     |
| shadowOffsetY | 	设置或返回阴影与形状的垂直距离     |
2、方法

| 方法                      | 	描述                   |
|-------------------------|-----------------------|
| createLinearGradient()	 | 创建线性渐变（用在画布内容上）       |
| createPattern()         | 	在指定的方向上重复指定的元素       |
| createRadialGradient()  | 	创建放射状/环形的渐变（用在画布内容上） |
| addColorStop()	         | 规定渐变对象中的颜色和停止位置       |
3、线条样式

| 属性          | 	描述                  |
|-------------|----------------------|
| lineCap	    | 设置或返回线条的结束端点样式       |
| lineJoin	   | 设置或返回两条线相交时，所创建的拐角类型 |
| lineWidth	  | 设置或返回当前的线条宽度         |
| miterLimit	 | 设置或返回最大斜接长度          |
4、矩形

| 方法           | 	描述             |
|--------------|-----------------|
| rect()       | 创建矩形            |
| fillRect()	  | 绘制"被填充"的矩形      |
| strokeRect() | 	绘制矩形（无填充）      |
| clearRect()  | 	在给定的矩形内清除指定的像素 |
5、路径

| 方法                  | 	描述                                |
|---------------------|------------------------------------|
| fill()	             | 填充当前绘图（路径）                         |
| stroke()            | 	绘制已定义的路径                          |
| beginPath()         | 	起始一条路径，或重置当前路径                    |
| moveTo()            | 	把路径移动到画布中的指定点，不创建线条               |
| closePath()         | 	创建从当前点回到起始点的路径                    |
| lineTo()            | 	添加一个新点，然后在画布中创建从该点到最后指定点的线条       |
| clip()	             | 从原始画布剪切任意形状和尺寸的区域                  |
| quadraticCurveTo()	 | 创建二次贝塞尔曲线                          |
| bezierCurveTo()     | 	创建三次贝塞尔曲线                         |
| arc()               | 	创建弧/曲线（用于创建圆形或部分圆）                |
| arcTo()             | 	创建两切线之间的弧/曲线                      |
| isPointInPath()     | 	如果指定的点位于当前路径中，则返回 true，否则返回 false |

6、转换

| 方法             | 	描述                            |
|----------------|--------------------------------|
| scale()        | 	缩放当前绘图至更大或更小                  |
| rotate()       | 	旋转当前绘图                        |
| translate()    | 	重新映射画布上的 (0,0) 位置             |
| transform()    | 	替换绘图的当前转换矩阵                   |
| setTransform() | 	将当前转换重置为单位矩阵。然后运行 transform() |

7、文本

| 属性            | 	描述                   |
|---------------|-----------------------|
| font          | 	设置或返回文本内容的当前字体属性     |
| textAlign     | 	设置或返回文本内容的当前对齐方式     |
| textBaseline  | 	设置或返回在绘制文本时使用的当前文本基线 |
| fillText()    | 	在画布上绘制"被填充的"文本       |
| strokeText()  | 	在画布上绘制文本（无填充）        |
| measureText() | 	返回包含指定文本宽度的对象        |

8、其他

| 方法          | 	描述             |
|-------------|-----------------|
| drawImage() | 	向画布上绘制图像、画布或视频 |
| save()      | 	保存当前环境的状态      |
| restore()   | 	返回之前保存过的路径状态和属 |

例子：
```
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();
```


### 新多媒体元素

|标签	|描述|
|---|---|
|audio|	定义音频内容|
|video|	定义视频（video 或者 movie）|
|source|	定义多媒体资源 video 和 audio|
|embed|	定义嵌入的内容，比如插件|
|track|	为诸如 video 和 audio 元素之类的媒介规定外部文本轨道|

### 新的语义和结构元素

|标签| 说明                                   |
|---|--------------------------------------|
|article| 	定义页面独立的内容区域                         |
|aside| 	定义页面的侧边栏内容                          |
|bdi| 	允许您设置一段文本，使其脱离其父元素的文本方向设置           |
|command| 	定义命令按钮，比如单选按钮、复选框或按钮                |
|details| 	用于描述文档或文档某个部分的细节                    |
|dialog| 	定义对话框，比如提示框                         |
|summary| 	标签包含 details 元素的标题                  |
|figure| 	规定独立的流内容（图像、图表、照片、代码等等）             |
|figcaption	| 定义 figure 元素的标题                      |
|footer	| 定义 section 或 document 的页脚            |
|header| 	定义了文档的头部区域                          
|mark| 	定义带有记号的文本                           |
|meter| 	定义度量衡。仅用于已知最大和最小值的度量                |
|nav| 	定义导航链接的部分                           |
|progress| 	定义任何类型的任务的进度                        |
|ruby	| 定义 ruby 注释（中文注音或字符）                  |
|rt | 定义字符（中文注音或字符）的解释或发音                  |
|rp| 在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容 |
|section| 	定义文档中的节（section、区段）                 |
|time| 	定义日期或时间                             |
|wbr| 	规定在文本中的何处适合添加换行符                    |

## 更多待完善......