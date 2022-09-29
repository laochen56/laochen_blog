(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{332:function(t,v,_){"use strict";_.r(v);var e=_(0),a=Object(e.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("  CSS，指的是Cascading Style Sheet（层叠样式表），是用来控制网页外观的一门技术。")]),t._v(" "),v("p",[t._v("CSS引入使用共有以下3种方式。")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("外部样式表 语法："),v("code",[t._v('<link rel="stylesheet" type="text/css" href="文件路径" />')]),t._v("。")])]),t._v(" "),v("li",[v("p",[t._v("内部样式表 语法："),v("code",[t._v('<style type="text/css">......</style>')]),t._v("。")])]),t._v(" "),v("li",[v("p",[t._v("行内样式表 语法："),v("code",[t._v('<div style="属性:属性值;">......</div>')]),t._v("。")])]),t._v(" "),v("li",[v("p",[t._v("tips：es6 新增@import方式，不过用得非常少，这里就不介绍了。")])])]),t._v(" "),v("h2",{attrs:{id:"css-选择器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#css-选择器"}},[t._v("#")]),t._v(" css 选择器")]),t._v(" "),v("p",[t._v("1、id选择器；id属性具有唯一性，也就是说在一个页面中相同的id只能出现一次。如果出现了多个相同的id，那么CSS或者JavaScript就无法识别这个id对应的是哪一个元素。")]),t._v(" "),v("p",[t._v("语法："),v("code",[t._v('<div id="idname"></div>')]),t._v("。在style里面用"),v("code",[t._v('#idname{属性："属性值"}')]),t._v("控制id样式。")]),t._v(" "),v("p",[t._v("2、class选择器；class，顾名思义，就是“类”，它与C++、Java等编程语言中的“类”相似。我们可以为同一个页面的相同元素或者不同元素设置相同的class，然后使得相同class的元素具有相同的CSS样式。")]),t._v(" "),v("p",[t._v("语法："),v("code",[t._v('<div class="idname"></div>')]),t._v("。在style里面用"),v("code",[t._v('.idname{属性："属性值"}')]),t._v("控制class样式。")]),t._v(" "),v("p",[t._v("3、元素选择器；元素选择器通常也称标签选择器。")]),t._v(" "),v("p",[t._v("语法： 在style里面用"),v("code",[t._v('标签名{属性："属性值"}')]),t._v("控制标签样式。")]),t._v(" "),v("p",[t._v("4、后代选择器；就是选择元素内部中所有的某一种元素，包括子元素和其他后代元素（如“孙元素”）。")]),t._v(" "),v("p",[t._v("语法："),v("code",[t._v('<div class="father"><span></span><span></span></div>')]),t._v("。在style里面用"),v("code",[t._v('.father span{属性："属性值"}')]),t._v("控制后代样式。")]),t._v(" "),v("p",[t._v("5、子代选择器；就是选择元素内部中所有的某一种元素，只包括子元素。")]),t._v(" "),v("p",[t._v("语法："),v("code",[t._v("<div><span></span></div>")]),t._v("。在style里面用"),v("code",[t._v('.div>span{属性："属性值"}')]),t._v("控制子代样式。")]),t._v(" "),v("p",[t._v("6、群组选择器；对于群组选择器，两个选择器之间必须要用英文逗号（,）隔开，不然群组选择器就无法生效。")]),t._v(" "),v("p",[t._v("语法："),v("code",[t._v("<div></div><span></span>")]),t._v("。在style里面用"),v("code",[t._v('.div,span{属性："属性值"}')]),t._v("控制群组样式。")]),t._v(" "),v("p",[t._v("7、伪类选择器；")]),t._v(" "),v("h2",{attrs:{id:"字体样式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#字体样式"}},[t._v("#")]),t._v(" 字体样式")]),t._v(" "),v("p",[t._v("字体CSS属性表")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("font-family")]),t._v(" "),v("td",[t._v("字体类型")])]),t._v(" "),v("tr",[v("td",[t._v("font-size")]),t._v(" "),v("td",[t._v("字体大小")])]),t._v(" "),v("tr",[v("td",[t._v("font-weight")]),t._v(" "),v("td",[t._v("字体粗细")])]),t._v(" "),v("tr",[v("td",[t._v("font-style")]),t._v(" "),v("td",[t._v("字体风格")])]),t._v(" "),v("tr",[v("td",[t._v("color")]),t._v(" "),v("td",[t._v("字体颜色")])])])]),t._v(" "),v("p",[t._v("tips:除了字体颜色，其他字体属性都是以“font”前缀开头的。其中，font就是“字体”的意思。")]),t._v(" "),v("ul",[v("li",[t._v("font-family可以指定多种字体。使用多个字体时，将按从左到右的顺序排列，并且以英文逗号（,）隔开。如果我们不定义font-family，浏览器默认字体类型一般是“宋体”。")])]),t._v(" "),v("p",[t._v("  语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("  font-family: 字体1, 字体2, ... , 字体N;\n")])])]),v("ul",[v("li",[t._v("font-size属性来定义字体大小。")])]),t._v(" "),v("p",[t._v("  语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("font-size: 像素值;\n")])])]),v("p",[t._v("  tips:font-size属性取值有两种：一种是“关键字”，如small、medium、large等；另外一种是“像素值”，如12px、16px、24px等。")]),t._v(" "),v("ul",[v("li",[t._v("font-weight属性来定义字体粗细。")])]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("font-weight: 取值;\n")])])]),v("p",[t._v("tips:font-weight属性取值有两种：一种是“100~900的数值”；另外一种是“关键字”。")]),t._v(" "),v("p",[t._v("其中，关键字")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("normal")]),t._v(" "),v("th",[t._v("正常（默认值）")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("lighter")]),t._v(" "),v("td",[t._v("较细")])]),t._v(" "),v("tr",[v("td",[t._v("bold")]),t._v(" "),v("td",[t._v("较粗")])]),t._v(" "),v("tr",[v("td",[t._v("bolder")]),t._v(" "),v("td",[t._v("很粗")])])])]),t._v(" "),v("ul",[v("li",[t._v("font-style属性来定义字体效果。")])]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("font-style: 取值;\n")])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("font-style")]),t._v(" "),v("th",[t._v("属性取值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("normal")]),t._v(" "),v("td",[t._v("正常（默认值）")])]),t._v(" "),v("tr",[v("td",[t._v("italic")]),t._v(" "),v("td",[t._v("斜体")])]),t._v(" "),v("tr",[v("td",[t._v("oblique")]),t._v(" "),v("td",[t._v("斜体")])])])]),t._v(" "),v("ul",[v("li",[t._v("color属性来定义字体颜色。")])]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("color: 颜色值;\n")])])]),v("p",[t._v("tips:color属性取值有两种，一种是“关键字”；另外一种是“16进制RGB值”。除了这两种，其实还有RGBA、HSL等。")]),t._v(" "),v("h2",{attrs:{id:"文本样式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文本样式"}},[t._v("#")]),t._v(" 文本样式")]),t._v(" "),v("p",[t._v(" 文本样式属性表")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("text-indent")]),t._v(" "),v("td",[t._v("首行缩进")])]),t._v(" "),v("tr",[v("td",[t._v("text-align")]),t._v(" "),v("td",[t._v("水平对齐")])]),t._v(" "),v("tr",[v("td",[t._v("text-decoration")]),t._v(" "),v("td",[t._v("文本修饰")])]),t._v(" "),v("tr",[v("td",[t._v("text-transform")]),t._v(" "),v("td",[t._v("大小写转换")])]),t._v(" "),v("tr",[v("td",[t._v("line-height")]),t._v(" "),v("td",[t._v("行高")])]),t._v(" "),v("tr",[v("td",[t._v("letter-spacing")]),t._v(" "),v("td",[t._v("字母间距")])]),t._v(" "),v("tr",[v("td",[t._v("word-spacing")]),t._v(" "),v("td",[t._v("词间距")])])])]),t._v(" "),v("ul",[v("li",[t._v("text-indent属性来定义p元素的首行缩进。（也可以用"),v("code",[t._v("&nbsp;")]),t._v("来实现首行缩进两个字的空格,但是这种方式冗余代码很多。）")])]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("text-indent: 像素值;\n")])])]),v("ul",[v("li",[t._v("text-align属性来控制文本在水平方向上的对齐方式。")])]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v(" text-align: 取值;\n")])])]),v("p",[t._v("text-align属性取值")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性值")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("left")]),t._v(" "),v("td",[t._v("左对齐（默认值）")])]),t._v(" "),v("tr",[v("td",[t._v("center")]),t._v(" "),v("td",[t._v("居中对齐")])]),t._v(" "),v("tr",[v("td",[t._v("right")]),t._v(" "),v("td",[t._v("右对齐")])])])]),t._v(" "),v("ul",[v("li",[t._v("text-decoration属性来定义文本的修饰效果")])]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v(" text-decoration: 取值;\n")])])]),v("p",[t._v(" text-decoration属性取值")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性值")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("none")]),t._v(" "),v("td",[t._v("去除所有的划线效果（默认值）")])]),t._v(" "),v("tr",[v("td",[t._v("underline")]),t._v(" "),v("td",[t._v("下划线")])]),t._v(" "),v("tr",[v("td",[t._v("line-through")]),t._v(" "),v("td",[t._v("中划线")])]),t._v(" "),v("tr",[v("td",[t._v("overline")]),t._v(" "),v("td",[t._v("顶划线")])])])]),t._v(" "),v("ul",[v("li",[t._v("text-transform属性来将文本进行大小写转换。text-transform属性是针对英文而言，因为中文不存在大小写之分。")])]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("none")]),t._v(" "),v("th",[t._v("无转换（默认值）")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("uppercase")]),t._v(" "),v("td",[t._v("转换为大写")])]),t._v(" "),v("tr",[v("td",[t._v("lowercase")]),t._v(" "),v("td",[t._v("转换为小写")])]),t._v(" "),v("tr",[v("td",[t._v("capitalize")]),t._v(" "),v("td",[t._v("只将每个英文单词首字母转换为大写")])])])]),t._v(" "),v("ul",[v("li",[t._v("line-height属性来控制一行文本的高度。")])]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("line-height: 像素值;\n")])])]),v("ul",[v("li",[t._v("letter-spacing属性来两个字之间的距离。")])]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("letter-spacing: 像素值;\n")])])]),v("ul",[v("li",[t._v("word-spacing属性来定义两个单词之间的距离。")])]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("word-spacing: 像素值;\n")])])]),v("h2",{attrs:{id:"边框样式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#边框样式"}},[t._v("#")]),t._v(" 边框样式")]),t._v(" "),v("p",[t._v(" 边框样式属性")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("border-width")]),t._v(" "),v("td",[t._v("边框的宽度")])]),t._v(" "),v("tr",[v("td",[t._v("border-style")]),t._v(" "),v("td",[t._v("边框的外观")])]),t._v(" "),v("tr",[v("td",[t._v("border-color")]),t._v(" "),v("td",[t._v("边框的颜色")])])])]),t._v(" "),v("ul",[v("li",[t._v("border-width属性用于定义边框的宽度，取值是一个像素值。")]),t._v(" "),v("li",[t._v("border-style属性用于定义边框的外观。")])]),t._v(" "),v("p",[t._v(" border-style属性取值")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性值")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("none")]),t._v(" "),v("td",[t._v("无样式")])]),t._v(" "),v("tr",[v("td",[t._v("dashed")]),t._v(" "),v("td",[t._v("虚线")])]),t._v(" "),v("tr",[v("td",[t._v("solid")]),t._v(" "),v("td",[t._v("实线")])])])]),t._v(" "),v("ul",[v("li",[t._v("border-color属性用于定义边框的颜色，取值可以是“关键字”或“16进制RGB值”。")])]),t._v(" "),v("p",[t._v("tips:一个元素的边框可以设（上、下、左、右）；上边框border-top、下边框border-bottom、左边框border-left、右边框border-right。\n每个边框还可以设独立的样式。")]),t._v(" "),v("p",[t._v("例子：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("border-top-width: 1px;\nborder-top-style: solid;\nborder-top-color: red;\n")])])]),v("p",[t._v("还可以简写为："),v("code",[t._v("border-top: 1px solid red;")])]),t._v(" "),v("h2",{attrs:{id:"列表样式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#列表样式"}},[t._v("#")]),t._v(" 列表样式")]),t._v(" "),v("p",[t._v(" 列表样式属性")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性值")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("list-style-type")]),t._v(" "),v("td",[t._v("定义列表项符号")])]),t._v(" "),v("tr",[v("td",[t._v("list-style-image")]),t._v(" "),v("td",[t._v("定义列表项图片")])])])]),t._v(" "),v("p",[t._v("1、对于列表，无论是有序列表还是无序列表，我们都是使用list-style-type属性来定义列表项符号。")]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("list-style-type: 取值;\n")])])]),v("ul",[v("li",[t._v("list-style-type属性是针对ol或者ul元素的，而不是li元素。")])]),t._v(" "),v("p",[t._v("ol的list-style-type属性取值")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性值")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("decimal")]),t._v(" "),v("td",[t._v("阿拉伯数字：1、2、3…（默认值）")])]),t._v(" "),v("tr",[v("td",[t._v("lower-roman")]),t._v(" "),v("td",[t._v("小写罗马数字：i、ii、iii…")])]),t._v(" "),v("tr",[v("td",[t._v("upper-roman")]),t._v(" "),v("td",[t._v("大写罗马数字：I、II、III…")])]),t._v(" "),v("tr",[v("td",[t._v("lower-alpha")]),t._v(" "),v("td",[t._v("小写英文字母：a、b、c…")])]),t._v(" "),v("tr",[v("td",[t._v("upper-alpha")]),t._v(" "),v("td",[t._v("大写英文字母：A、B、C…")])])])]),t._v(" "),v("p",[t._v("ul的list-style-type属性取值")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性值")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("disc")]),t._v(" "),v("td",[t._v("实心圆●（默认值）")])]),t._v(" "),v("tr",[v("td",[t._v("circle")]),t._v(" "),v("td",[t._v("空心圆○")])]),t._v(" "),v("tr",[v("td",[t._v("square")]),t._v(" "),v("td",[t._v("正方形■")])])])]),t._v(" "),v("p",[t._v("2、去除列表项符号"),v("code",[t._v("list-style-type: none;")]),t._v("。")]),t._v(" "),v("p",[t._v("3、list-style-image属性来定义列表项图片，也就是使用图片来代替列表项符号。")]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("list-style-image: url(图片路径);\n")])])]),v("h2",{attrs:{id:"表格样式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#表格样式"}},[t._v("#")]),t._v(" 表格样式")]),t._v(" "),v("p",[t._v(" 表格样式属性")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性值")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("caption-side")]),t._v(" "),v("td",[t._v("表格标题位置")])]),t._v(" "),v("tr",[v("td",[t._v("border-collapse")]),t._v(" "),v("td",[t._v("表格边框合并")])]),t._v(" "),v("tr",[v("td",[t._v("border-spacing")]),t._v(" "),v("td",[t._v("表格边框间距")])])])]),t._v(" "),v("ul",[v("li",[t._v("caption-side属性来定义表格标题的位置。")])]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("caption-side: 取值;\n")])])]),v("p",[t._v(" caption-side属性取值")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性值")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("top")]),t._v(" "),v("td",[t._v("标题在顶部（默认值）")])]),t._v(" "),v("tr",[v("td",[t._v("bottom")]),t._v(" "),v("td",[t._v("标题在底部")])])])]),t._v(" "),v("ul",[v("li",[t._v("border-collapse属性来去除单元格之间的空隙，也就是将两条边框合并为一条。")])]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v(" border-collapse: 取值;\n")])])]),v("p",[t._v(" border-collapse属性取值")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性值")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("separate")]),t._v(" "),v("td",[t._v("边框分开，有空隙（默认值）")])]),t._v(" "),v("tr",[v("td",[t._v("collapse")]),t._v(" "),v("td",[t._v("边框合并，无空隙")])])])]),t._v(" "),v("p",[t._v(" html例子：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("  <table>\n        <caption>表格标题</caption>\n        \x3c!--表头--\x3e\n        <thead>\n            <tr>\n                <th>表头单元格1</th>\n                <th>表头单元格2</th>\n            </tr>\n        </thead>\n        \x3c!--表身--\x3e\n        <tbody>\n            <tr>\n                <td>表行单元格1</td>\n                <td>表行单元格2</td>\n            </tr>\n            <tr>\n                <td>表行单元格3</td>\n                <td>表行单元格4</td>\n            </tr>\n        </tbody>\n        \x3c!--表脚--\x3e\n        <tfoot>\n            <tr>\n                <td>表行单元格5</td>\n                <td>表行单元格6</td>\n            </tr>\n        </tfoot>\n    </table>\n")])])]),v("ul",[v("li",[t._v("border-spacing属性来定义表格边框间距。")])]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("border-spacing: 像素值; \n")])])]),v("h2",{attrs:{id:"图片样式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#图片样式"}},[t._v("#")]),t._v(" 图片样式")]),t._v(" "),v("p",[t._v(" 图片样式属性")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性值")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("width/height")]),t._v(" "),v("td",[t._v("宽/高")])]),t._v(" "),v("tr",[v("td",[t._v("border")]),t._v(" "),v("td",[t._v("图片边框")])]),t._v(" "),v("tr",[v("td",[t._v("text-align")]),t._v(" "),v("td",[t._v("图片水平对齐方式")])]),t._v(" "),v("tr",[v("td",[t._v("vertical-align")]),t._v(" "),v("td",[t._v("图片垂直对齐方式")])])])]),t._v(" "),v("ul",[v("li",[t._v("width和height这两个属性来定义图片的大小（也就是宽度和高度）。")])]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("width: 像素值;\nheight: 像素值;\n")])])]),v("ul",[v("li",[t._v("border 和上面的语法一样，只不过这里是用来定义图片的而已。")])]),t._v(" "),v("p",[t._v("例子：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("border: 1px solid red;\n")])])]),v("ul",[v("li",[t._v("text-align属性来定义图片水平对齐方式。")])]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("text-align: 取值;\n")])])]),v("p",[t._v(" text-align属性取值")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性值")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("left")]),t._v(" "),v("td",[t._v("左对齐（默认值）")])]),t._v(" "),v("tr",[v("td",[t._v("center")]),t._v(" "),v("td",[t._v("居中对齐")])]),t._v(" "),v("tr",[v("td",[t._v("right")]),t._v(" "),v("td",[t._v("右对齐")])])])]),t._v(" "),v("ul",[v("li",[t._v("vertical-align来定义图片的垂直对齐方式。")])]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("vertical-align: 取值;\n")])])]),v("p",[t._v(" vertical-align属性取值")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性值")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("top")]),t._v(" "),v("td",[t._v("顶部对齐")])]),t._v(" "),v("tr",[v("td",[t._v("middle")]),t._v(" "),v("td",[t._v("中部对齐")])]),t._v(" "),v("tr",[v("td",[t._v("baseline")]),t._v(" "),v("td",[t._v("基线对齐")])]),t._v(" "),v("tr",[v("td",[t._v("bottom")]),t._v(" "),v("td",[t._v("底部对齐")])])])]),t._v(" "),v("h2",{attrs:{id:"背景样式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#背景样式"}},[t._v("#")]),t._v(" 背景样式")]),t._v(" "),v("p",[t._v(" 背景样式属性")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("background-image")]),t._v(" "),v("td",[t._v("定义背景图片地址")])]),t._v(" "),v("tr",[v("td",[t._v("background-repeat")]),t._v(" "),v("td",[t._v("定义背景图片重复，例如横向重复、纵向重复")])]),t._v(" "),v("tr",[v("td",[t._v("background-position")]),t._v(" "),v("td",[t._v("定义背景图片位置")])]),t._v(" "),v("tr",[v("td",[t._v("background-attachment")]),t._v(" "),v("td",[t._v("定义背景图片固定")])])])]),t._v(" "),v("ul",[v("li",[t._v("background-color属性来定义元素的背景颜色。")])]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("background-color: 颜色值;\n")])])]),v("p",[t._v("tips：颜色值有两种，一种是“关键字”，另外一种是“16进制RGB值”。其中关键字指的是颜色的英文名称，如red、green、blue等。而16进制RGB值指的是类似“#FBE9D0”形式的值。")]),t._v(" "),v("ul",[v("li",[t._v("background-image属性来为元素定义背景图片。")])]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("background-image: url(图片路径);\n")])])]),v("p",[t._v("tips：跟引入图片（即img标签）一样，引入背景图片也需要给出图片路径才可以显示。")]),t._v(" "),v("ul",[v("li",[t._v("background-repeat属性来定义背景图片的重复方式。")])]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("background-repeat: 取值;\n")])])]),v("p",[t._v(" background-repeat属性取值")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性值")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("repeat")]),t._v(" "),v("td",[t._v("在水平方向和垂直方向上同时平铺（默认值）")])]),t._v(" "),v("tr",[v("td",[t._v("repeat-x")]),t._v(" "),v("td",[t._v("只在水平方向（x轴）上平铺")])]),t._v(" "),v("tr",[v("td",[t._v("repeat-y")]),t._v(" "),v("td",[t._v("只在垂直方向（y轴）上平铺")])]),t._v(" "),v("tr",[v("td",[t._v("no-repeat")]),t._v(" "),v("td",[t._v("不平铺")])])])]),t._v(" "),v("ul",[v("li",[t._v("background-position属性来定义背景图片的位置。")])]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("background-position: 像素值/关键字;\n")])])]),v("p",[t._v("tips：当background-position属性取值为“像素值”时，要同时设置水平方向和垂直方向的数值。例如："),v("code",[t._v("background-position: 水平距离 垂直距离;")])]),t._v(" "),v("p",[t._v("  当background-position属性取值为“关键字”时，也要同时设置水平方向和垂直方向的值，只不过这两个值使用关键字来代替而已。")]),t._v(" "),v("p",[t._v("  background-position属性的关键字取值")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性值")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("top left")]),t._v(" "),v("td",[t._v("左上")])]),t._v(" "),v("tr",[v("td",[t._v("top center")]),t._v(" "),v("td",[t._v("靠上居中")])]),t._v(" "),v("tr",[v("td",[t._v("top right")]),t._v(" "),v("td",[t._v("右上")])]),t._v(" "),v("tr",[v("td",[t._v("center left")]),t._v(" "),v("td",[t._v("居中靠左")])]),t._v(" "),v("tr",[v("td",[t._v("center center")]),t._v(" "),v("td",[t._v("正中")])]),t._v(" "),v("tr",[v("td",[t._v("center right")]),t._v(" "),v("td",[t._v("居中靠右")])]),t._v(" "),v("tr",[v("td",[t._v("bottom left")]),t._v(" "),v("td",[t._v("左下")])]),t._v(" "),v("tr",[v("td",[t._v("bottom center")]),t._v(" "),v("td",[t._v("靠下居中")])]),t._v(" "),v("tr",[v("td",[t._v("bottom right")]),t._v(" "),v("td",[t._v("右下")])])])]),t._v(" "),v("ul",[v("li",[t._v("background-attachment属性来定义背景图片是随元素一起滚动还是固定不动。")])]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("background-attachment: 取值;\n")])])]),v("p",[t._v(" background-attachment属性取值")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性值")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("scroll")]),t._v(" "),v("td",[t._v("随元素一起滚动（默认值）")])]),t._v(" "),v("tr",[v("td",[t._v("fixed")]),t._v(" "),v("td",[t._v("固定不动")])])])]),t._v(" "),v("h2",{attrs:{id:"超链接伪类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#超链接伪类"}},[t._v("#")]),t._v(" 超链接伪类")]),t._v(" "),v("p",[t._v(" 在CSS中，我们可以使用“超链接伪类”来定义超链接在鼠标点击的不同时期的样式。")]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("a:link{…}\na:visited{…}\na:hover{…}\na:active{…}\n")])])]),v("p",[t._v("tips:如果一次性定义4个伪类的话，必须按照“link、visited、hover、active”的顺序进行，不然浏览器可能无法正常显示这4种样式。")]),t._v(" "),v("h2",{attrs:{id:"浏览器鼠标样式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器鼠标样式"}},[t._v("#")]),t._v(" 浏览器鼠标样式")]),t._v(" "),v("p",[t._v(" 在CSS中，我们可以使用cursor属性来定义鼠标样式。")]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("cursor: 取值;\n")])])]),v("p",[t._v("cursor属性取值在实际开发中我们一般只会用到3个：default、pointer和text，其他的很少用得上。\ntips：除了使用浏览器自带的鼠标样式，我们还可以使用cursor属性来自定义鼠标样式。")]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("cursor: url(图片地址), 属性值;\n")])])]),v("h2",{attrs:{id:"盒子模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#盒子模型"}},[t._v("#")]),t._v(" 盒子模型")]),t._v(" "),v("p",[t._v(" 每个元素都可以看成一个盒子，盒子模型是由四个属性组成的：content（内容）、padding（内边距）、margin（外边距）和border（边框）。")]),t._v(" "),v("p",[t._v(" 盒子模型组成部分说明")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("content")]),t._v(" "),v("td",[t._v("内容，可以是文本或图片")])]),t._v(" "),v("tr",[v("td",[t._v("padding")]),t._v(" "),v("td",[t._v("内边距，用于定义内容与边框之间的距离")])]),t._v(" "),v("tr",[v("td",[t._v("margin")]),t._v(" "),v("td",[t._v("外边距，用于定义当前元素与其他元素之间的距离")])]),t._v(" "),v("tr",[v("td",[t._v("border")]),t._v(" "),v("td",[t._v("边框，用于定义元素的边框")])])])]),t._v(" "),v("h2",{attrs:{id:"浮动布局"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浮动布局"}},[t._v("#")]),t._v(" 浮动布局")]),t._v(" "),v("p",[t._v(" 可以用float属性来实现文字环绕图片的效果。")]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("float: 取值;\n")])])]),v("p",[t._v("float属性取值只有2个，非常简单；如下：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性值")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("left")]),t._v(" "),v("td",[t._v("元素向左浮动")])]),t._v(" "),v("tr",[v("td",[t._v("right")]),t._v(" "),v("td",[t._v("元素向右浮动")])])])]),t._v(" "),v("p",[t._v("tips：浮动会影响周围元素，并且还会引发很多预想不到的问题。在CSS中，我们可以使用clear属性来清除浮动带来的影响。")]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("clear: 取值;\n")])])]),v("p",[t._v(" clear属性取值")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性值")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("left")]),t._v(" "),v("td",[t._v("清除左浮动")])]),t._v(" "),v("tr",[v("td",[t._v("right")]),t._v(" "),v("td",[t._v("清除右浮动")])]),t._v(" "),v("tr",[v("td",[t._v("both")]),t._v(" "),v("td",[t._v("同时清除左浮动和右浮动")])])])]),t._v(" "),v("h2",{attrs:{id:"定位布局"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#定位布局"}},[t._v("#")]),t._v(" 定位布局")]),t._v(" "),v("p",[t._v(" 定位布局共有4种方式，这4种方式都是通过position属性来实现的。")]),t._v(" "),v("p",[t._v(" 语法：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v(" position: 取值;\n")])])]),v("p",[t._v(" position属性取值")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性值")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("static")]),t._v(" "),v("td",[t._v("静态定位（默认值）")])]),t._v(" "),v("tr",[v("td",[t._v("fixed")]),t._v(" "),v("td",[t._v("固定定位")])]),t._v(" "),v("tr",[v("td",[t._v("relative")]),t._v(" "),v("td",[t._v("相对定位")])]),t._v(" "),v("tr",[v("td",[t._v("absolute")]),t._v(" "),v("td",[t._v("绝对定位")])])])]),t._v(" "),v("ul",[v("li",[t._v("固定定位，指的是被固定的元素不会随着滚动条的拖动而改变位置。")])]),t._v(" "),v("p",[t._v("tips:固定定位；position:fixed;是结合top、bottom、left和right这4个属性一起使用的。其中，position:fixed使得元素成为固定定位元素，接着使用top、bottom、left和right这4个属性来设置元素相对浏览器的位置。")]),t._v(" "),v("ul",[v("li",[t._v("相对定位，指的是该元素的位置是相对于它的原始位置计算而来的。")])]),t._v(" "),v("p",[t._v("tips：相对定位；position:relative;也是结合top、bottom、left和right这4个属性一起使用的，其中，position:relative;使得元素成为相对定位元素，接着使用top、bottom、left和right这4个属性来设置元素相对原始的位置。")]),t._v(" "),v("ul",[v("li",[t._v("绝对定位；给一个元素加上绝对定位，那么这个元素就完全脱离文档流了，绝对定位元素的前面或后面的元素会认为这个元素并不存在，此时这个元素浮于其他元素上面，已经完全独立出来了。")])]),t._v(" "),v("p",[t._v("tips：绝对定位；position:absolute;是结合top、bottom、left和right这4个属性一起使用的，其中position:absolute使得元素成为绝对定位元素，接着使用top、bottom、left和right这4个属性来设置元素相对浏览器的位置。")]),t._v(" "),v("p",[t._v("trick："),v("b",[t._v("一般相对定位和绝对定位搭配起来使用的最广泛；例如：把一盒子居中，可以给父盒子加相对定位，子盒子加绝对定位，也就是所谓的"),v("code",[t._v("子绝父相")]),t._v("。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);