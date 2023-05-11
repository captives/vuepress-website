# CSS 使用笔记
<style lang='scss'>
ul > li{
  list-style:none;
  p:first-child a:first-child {
      display: block;
  }
}
</style>


## CSS 语法

### 语法
CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明。
> selector { declaration1; declaration2; ... declarationN }

属性`property`是您希望设置的样式属性`style attribute`。每个属性有一个值。属性和值被冒号分开。
```css
selector { 
    property: value
}
```

### 分组
你可以使用`(,)`对选择器进行分组。这样，被分组的选择器就可以使用相同的声明。
```css
h1, h2, h3, h4, h5, h6 {
  color: green;
}
```
## CSS 选择器

### 全局选择器
匹配所有元素，使用`(*)`表示；

移除所有属性的内外边距：
```css
* { padding:0; margin:0; };
```

### 元素选择器
以html标签名定义的css样式，如`ul`、`li`、`p`、 `h1`、`div`;
```css
h1,h2,h3, p { color:#eee; };
```

### 派生选择器
通过依据元素在其位置的上下文关系来定义样式，你可以使标记更加简洁。

比方说，你希望列表中的 **strong** 元素变为斜体字，而不是通常的粗体字，可以这样定义一个派生选择器：
```css
li strong {
    font-style: italic;
    font-weight: normal;
}
```
只有`li`元素中的 **strong** 元素的样式为斜体字，无需为 **strong** 元素定义特别的`class`或`id`，代码更加简洁。
```html
<p>
    <strong>我是粗体字，不是斜体字，因为我不在列表当中，所以这个规则对我不起作用</strong>
</p>

<ol>
    <li>
        <strong>我是斜体字。这是因为 strong 元素位于 li 元素内。</strong>
    </li>
    <li>我是正常的字体。</li>
</ol>
```

### id选择器
id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。
id 选择器以 "#" 来定义。

下面的两个 id 选择器，第一个可以定义元素的颜色为红色，第二个定义元素的颜色为绿色：
```html
<p id="red">这个段落是红色。</p>
<p id="green">这个段落是绿色。</p>
```
```css
#red {color:red;}
#green {color:green;}
```
:::warning 
注意：id 属性只能在每个 HTML 文档中出现一次。想知道原因吗，请参阅[XHTML:网站重构](https://www.w3school.com.cn/xhtml/xhtml_structural_01.asp)。
:::

### 类选择器
在 CSS 中，类选择器以一个点号`(.)`开头显示：

所有拥有`center`类的`HTML`元素内容均居中。
```css
.center { text-align: center; }
```
:::warning 
注意：类名的第一个字符不能使用数字！它无法在 Mozilla 或 Firefox 中起作用。
:::

### 属性选择器
CSS2支持的属性选择器用一个表达式
> [{属性 | 属性 {= | |= | ~=} 值}]

- `[class="a"]`只能匹配`class="a"`的所有元素。
- `[class^='a']` 只能匹配`class`以`a`开头的所有元素。
- `[class$='a']` 只能匹配`class`以`a`结尾的所有元素。
- `[class*='a']` 匹配`class`包含字符串`a`的所有元素。
- `[class~="a"]`则可以匹配`class="a"、class="a b"`的所有元素。
- `[lang|=en]`则可以匹配`en`或以`en-`开头的所有元素。

假设一个 HTML 文档中有一系列图片，其中每个图片的文件名都形如`figure-1.jpg`和`figure-2.jpg`。
就可以使用以下选择器匹配所有这些图像：
```css
img[src|="figure"] {border: 1px solid gray;}
```

**例子1:**
所有`a`元素，带有`href`的链接，设置为红色：
```css
a[href] {
   color:red;
}
```

还可以根据多个属性进行选择，只需将属性选择器链接在一起即可。
**例子2:**
同时将有 href 和 title 属性的 HTML 超链接的文本设置为红色，可以这样写
```css
a[href][title] {
   color:red;
}
```
根据具体属性值选择

除了选择拥有某些属性的元素，还可以进一步缩小选择范围，只选择有特定属性值的元素。
```css
a[href="http://www.w3school.com.cn/about_us.asp"] {color: red;}
```


CSS3支持的属性选择器用一个表达式:
>[{属性 | 属性 {*= | ^= | $=} 值}]

- `*=`表示模糊匹配
 `[href="163"]`可以匹配`href="163.com"、href="mail.163.com"`等元素；
- `^=`表示以指定字符开头。
 `[href^="/"]`则匹配`href="/a/a.htm"、href="/b"`的元素。
- `=`表示以指定字符结尾;
 [scr=".png"]`则匹配所有png图片，如`src="logo.png"`。

### 后代选择器
后代选择器（descendant selector）又称为**包含选择器**。

因此，h1 em 选择器可以解释为 “作为 h1 元素后代的任何 em 元素”。如果要从左向右读选择器，可以换成以下说法：“包含 em 的所有 h1 会把以下样式应用到该 em”。
```css
h1 em {color:red;}
```
只有`h1`下的所有`em` 设置为红色，其余元素无影响；
::: tip
在后代选择器中，规则左边的选择器一端包括两个或多个用空格分隔的选择器。选择器之间的空格是一种结合符（combinator）。每个空格结合符可以解释为“... 在 ... 找到”、“... 作为 ... 的一部分”、“... 作为 ... 的后代”，但是要求必须从右向左读选择器。
:::

### 子元素选择器 `>`
子元素选择器（Child selectors）只能选择作为某元素子元素的元素。
```css
h1 > strong { 
   color:red;
}
```

### 相邻兄弟选择器 `+`
相邻兄弟选择器（Adjacent sibling selector）可选择紧接在另一元素后的元素，且二者有相同父元素：
```css
h1 + p { margin-top:50px; }

```
可以匹配
```html
<h1>这是标题</h1>
<p>这是段落<p>
```
**例子：**
```html
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </ul>
  <ol>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </ol>
```
```css
li + li { font-weight:bold; }
```
只会把列表中的第二个和第三个列表项变为粗体。第一个列表项不受影响


### 同层全体组合选择器`~`

选择所有跟在`article`后的同层`article`元素，不管它们之间隔了多少其他元素：
```css
article ~ article { 
   border-top: 1px dashed #ccc 
}
```



### 伪类选择器
> selector:pseudo-class { property: value; }

伪类用于定义元素的特殊状态。

**例子1**
链接能够以不同的方式显示：
```css
/* 未访问的链接 */
a:link {
  color: #FF0000;
}

/* 已访问的链接 */
a:visited {
  color: #00FF00;
}

/* 鼠标悬停链接 */
a:hover {
  color: #FF00FF;
}

/* 已选择的链接 */
a:active {
  color: #0000FF;
}
```
:::warning 注意：
1. `a:hover`必须在CSS定义中的`a:link`和`a:visited`之后，才能生效！
2. `a:active`必须在CSS定义中的`a:hover`之后才能生效！
3. 伪类名称对大小写不敏感。
:::

css1支持`:link`、`:visited`、`:active`只提供给`a`标签使用，元素之间互斥；
css2新增：`:hover`、`:focus`，还支持：`:first-child`、`:lang`
:::warning
`:link`、`:visited`、`:active`只提供给`a`标签使用，元素之间互斥；
`:first-child`、`:last-child`是对元素本身状态的描述，而非其它元素；
:::

### 伪元素选择器
> selector::pseudo-element { property: value; }

CSS 伪元素用于设置元素指定部分的样式。
例如，它可用于：
- 设置元素的首字母、首行的样式
- 在元素的内容之前或之后插入内容
```css
p::first-line {
  color: #ff0000;
  font-variant: small-caps;
}
```
:::warning
请注意双冒号表示法 - `::first-line`对比`:first-line`
在 CSS3 中，双冒号取代了伪元素的单冒号表示法。这是 W3C 试图区分伪类和伪元素的尝试。
在 CSS2 和 CSS1 中，伪类和伪元素都使用了单冒号语法。
为了向后兼容，CSS2 和 CSS1 伪元素可接受单冒号语法。
:::

## 伪类
CSS 伪类是添加到选择器的关键字，用于指定所选元素的特殊状态。例如，伪类 :hover 可以用于选择一个按钮，当用户的指针悬停在按钮上时，设置此按钮的样式。

```css
/* 用户的指针悬停在任何button按钮上均可触发 */
button:hover {
  color: blue;
}
```
### 显示状态伪类

- [:fullscreen](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:fullscreen)
匹配当前处于全屏模式的元素。

- [:modal](https://developer.mozilla.org/en-US/docs/Web/CSS/:modal)
匹配处于排除与外部元素的所有交互的状态的元素，直到交互被解除。可以同时选择多个元素，但其中只有一个元素是活动的并且能够接收输入。

- [:picture-in-picture](https://developer.mozilla.org/en-US/docs/Web/CSS/:picture-in-picture)
匹配当前处于画中画模式的元素。

### 输入状态伪类
这些伪类与表单元素相关，可以基于 HTML 属性或交互前后字段的状态来选择元素。

- [:autofill](https://developer.mozilla.org/en-US/docs/Web/CSS/:autofill)
当浏览器自动填充`<input>`时匹配。

- [:enabled](https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled)
匹配任何已启用的元素。如果元素可以被激活（例如被选择、单击、输入文本等），或者能够获得焦点，那么它就是启用的。

- [:disabled](https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled)
匹配任何被禁用的元素。如果一个元素不能被激活（如选择、点击或接受文本输入）或获取焦点，则该元素处于被禁用状态。

- [:read-only](https://developer.mozilla.org/en-US/docs/Web/CSS/:read-only)
匹配元素不可被用户编辑的状态（如锁定的文本输入框）。
::::code-group
:::code-group-item html
```html
<input type="text" value="Type whatever you want here.">
<input type="text" value="This is a read-only field." readonly>
```
:::
:::code-group-item css
```css
input { min-width: 25em; }
input:-moz-read-only { background: cyan; }
input:read-only { background: cyan; }
```
:::
::::

- [:read-write](https://developer.mozilla.org/en-US/docs/Web/CSS/:read-write)
匹配一个元素（例如可输入文本的 input 元素）可以被用户编辑。

- [:placeholder-shown](https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown)
匹配正在显示占位符文本的输入元素。例如，它将匹配`<input>`和`<textarea>`元素中的占位符属性。
::::code-group
:::code-group-item html
```html
<input placeholder="在这里输入一些东西！">
```
:::
:::code-group-item css
```css
input:placeholder-shown {
  border-color: teal;
  color: purple;
  font-style: italic;
}
```
:::
::::

- [:default](https://developer.mozilla.org/en-US/docs/Web/CSS/:default)
匹配一组相关元素中的默认表单元素。
::::code-group
:::code-group-item html
```html
<input type="radio" name="season" id="spring">
<label for="spring">Spring</label>

<input type="radio" name="season" id="summer" checked>
<label for="summer">Summer</label>
```
:::
:::code-group-item css
```css
input:default {
  box-shadow: 0 0 2px 1px coral;
}

input:default + label {
  color: coral;
}
```
:::
::::


- [:checked](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked)
匹配复选框或单选按钮等元素处于启用/选中状态的元素。

- [:indeterminate](https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate)
Matches UI elements when they are in an indeterminate state.
匹配状态不确定的表单元素：
  1. `<input type="checkbox">`元素，其**indeterminate**属性被JavaScript设置为`true`。
  2. `<input type="radio">`元素，表单中拥有相同name值的所有单选按钮都未被选中时。
  3. 处于不确定状态的`<progress>`元素。

- [:blank 【实验中】](https://developer.mozilla.org/en-US/docs/Web/CSS/:blank)
匹配用户输入为空的输入框，如`<input>`和`<textarea>`。

- [:valid](https://developer.mozilla.org/en-US/docs/Web/CSS/:valid)
表示内容验证正确的`<input>`或其他`<form>`元素。这能简单地将校验字段展示为一种能让用户辨别出其输入数据的正确性的样式。
该伪类对于高亮正确字段是很有用的。

- [:invalid](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid)
匹配任何未通过验证的`<form>`、`<fieldset>`、`<input>`或其他表单元素。

- [:in-range](https://developer.mozilla.org/en-US/docs/Web/CSS/:in-range)
适用于具有范围限制的元素。例如：匹配一个`<input>`元素，其当前值处于属性**min**和**max**限定的范围之内

- [:out-of-range](https://developer.mozilla.org/en-US/docs/Web/CSS/:out-of-range)
适用于具有范围限制的元素。例如，当选定的值超出允许的范围时，使用滑块控件。

- [:required](https://developer.mozilla.org/en-US/docs/Web/CSS/:required)
匹配任何设置了`required`属性的`<input>`、`<select>` 或 `<textarea>` 元素。

- [:optional](https://developer.mozilla.org/en-US/docs/Web/CSS/:optional)
匹配任何**未设置**了`required`属性的`<input>`、`<select>` 或 `<textarea>` 元素。

- [:user-invalid](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid)
表示输入不正确的元素，但仅当用户与之交互时。

### 语言伪类

- [:dir()](https://developer.mozilla.org/en-US/docs/Web/CSS/:dir)
方向性伪类基于由文档语言所确定的其方向性来选择元素。

- [:lang()](https://developer.mozilla.org/en-US/docs/Web/CSS/:lang)
基于其内容语言来选择元素。
:::: code-group
:::code-group-item html
```html
<div lang="zh-CN">
  <p>Hello world!</p>
</div>
```
:::
::: code-group-item css
```css
:lang(zh-CN) > p {
  color: red;
}
```
::::

### 位置伪类
这些伪类与链接以及当前文档中的目标元素有关。
- [:any-link](https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link)
匹配作为超链接源锚点的元素，无论是否已被访问(:link or :visited)。

- [:link](https://developer.mozilla.org/en-US/docs/Web/CSS/:link)
匹配尚未访问的链接。

- [:visited](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited)
匹配已访问的链接。

- [:local-link](https://developer.mozilla.org/en-US/docs/Web/CSS/:local-link)
匹配绝对URL与目标URL相同的链接。例如，锚定指向同一页面的链接。

- [:target](https://developer.mozilla.org/en-US/docs/Web/CSS/:target)
匹配作为文档URL目标的元素。

- [:target-within【实验中】](https://developer.mozilla.org/en-US/docs/Web/CSS/:target-within)
匹配作为文档URL的目标的元素，也匹配具有作为文档URL目标的子体的元素。

- [:scope](https://developer.mozilla.org/en-US/docs/Web/CSS/:scope)
表示作为选择器要匹配的参考点的元素。

### 资源状态伪类
这些伪类应用于能够处于被描述为“正在播放”状态的媒体，例如视频。
- [:playing](https://developer.mozilla.org/en-US/docs/Web/CSS/:playing)
表示能够在播放媒体元素时播放的媒体元素

- [:paused](https://developer.mozilla.org/en-US/docs/Web/CSS/:paused)
表示当媒体元素暂停时能够播放的媒体元素

### 时间方面的伪类
这些伪类适用于查看有计时功能的东西，如 WebVTT 字幕轨

- [:current](https://developer.mozilla.org/en-US/docs/Web/CSS/:current)
表示正在显示的元素或元素的祖先。

- [:past](https://developer.mozilla.org/en-US/docs/Web/CSS/:past)
表示一个完全出现在：current元素之前的元素。

- [:future](https://developer.mozilla.org/en-US/docs/Web/CSS/:future)
表示一个完全出现在：`current`元素之后的元素。

### 树结构的伪类

- [:root](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root)
表示文档的根元素。在 HTML 中这通常是 `<html>`元素。

- [:empty](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:empty)
表示除空白字符外没有子元素的元素。

- [:nth-child](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-child)
使用*Aa+B*表示法从同级元素列表中选择元素。
`A`和`B`都必须为整数，并且元素的第一个子元素的下标为**1**。换言之就是，该伪类匹配所有下标在集合`{ An + B; n = 0, 1, 2, ...}` 中的子元素。另外需要特别注意的是，`An` 必须写在`B`的前面，不能写成`B+An`的形式。
```css
tr:nth-child(2n+1) /*表示 HTML 表格中的奇数行。*/

tr:nth-child(odd) /*表示 HTML 表格中的奇数行。*/

tr:nth-child(2n) /*表示 HTML 表格中的偶数行。*/

tr:nth-child(even) /*表示 HTML 表格中的偶数行。*/

span:nth-child(0n+1) /* 表示子元素中第一个且为 span 的元素，与 :first-child 选择器作用相同。*/

span:nth-child(1) /*表示父元素中子元素为第一的并且名字为 span 的标签被选中*/

span:nth-child(-n+3) /* 匹配前三个子元素中的 span 元素。*/
```

- [:nth-last-child](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-last-child)
使用*An+B*表示法从同级元素列表中选择元素，从后往前匹配处于某些位置的元素。

- [:first-child](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first-child)
表示在一组兄弟元素中的第一个元素。

- [:last-child](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:last-child)
表示在一组兄弟元素中的最后一个元素。

- [:only-child](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:only-child)
表示没有任何兄弟元素的元素。这与`:first-child:last-child`或 `:nth-child(1):nth-last-child(1)`相同，但前者具有更小的权重性。

- [:nth-of-type](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-of-type)
匹配相同类型（标签名称）的兄弟元素中的位置来匹配元素。
```css
/* 奇数段 */
p:nth-of-type(2n+1) 
p:nth-of-type(old) 

/* 偶数段 */
p:nth-of-type(2n)
p:nth-of-type(even)

/* 第一段 */
p:nth-of-type(1) 
```

- [:nth-last-of-type](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-last-of-type)
使用*An+B*表示法从元素在相同类型（标签名）的兄弟元素中相对最后一个元素的位置来匹配元素。

- [:first-of-type](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first-of-type)
匹配一组兄弟元素中第一个元素。

- [:last-of-type](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:last-of-type)
匹配一组兄弟元素中的最后一个元素。

- [:only-of-type](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:only-of-type)
匹配任意一个元素，且没有其他相同类型的兄弟元素。

### 用户行为伪类
这些伪类需要用户进行一些交互才能够应用，例如将鼠标指针悬停在元素上。

- [:hover](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover)
用户使用指针设备与元素进行交互时匹配，但不一定激活它。

- [:active](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:active)
匹配被用户激活的元素。它让页面能在浏览器监测到激活时给出反馈。当用鼠标交互时，它代表的是用户按下按键和松开按键之间的时间。

- [:focus](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus)
表示获得焦点的元素（如表单输入）。当用户点击或轻触一个元素或使用键盘的 *Tab* 键选择它时，它会被触发。

- [:focus-visible](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus-visible)
当元素匹配`:focus`伪类并且客户端 *(UA)* 的启发式引擎决定焦点应当可见 (在这种情况下很多浏览器默认显示**焦点框**。) 时，`:focus-visible`伪类将生效。

- [:focus-within](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus-within)
表示当元素或其任意后代元素被聚焦时，将匹配该元素。

### 函数式伪类
这些伪类接受可容错选择器列表作为参数。

- [:is()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:is)
匹配与提供的列表中的任何选择器匹配的任何元素。

- [:not()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not)
接受选择器列表作为它的参数，匹配不符合一组选择器的元素。由于它的作用是防止特定的元素被选中，它也被称为反选伪类 *(negation pseudo-class)*。

- [:where()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:where)
接受选择器列表作为它的参数，将会选择所有能被该选择器列表中任何一条规则选中的元素。

- [:has()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:has)
`:has()`表示一个元素，如果作为参数传递的任何相对选择器在锚定到该元素时，至少匹配一个元素。

  1. `:has()`伪类的优先级计算方法与`:is()`和`:not()`相同。
  2. `:has()`伪类不能被嵌套在另一个`:has()`内。伪元素也不是`:has()`内的有效选择器。虽然`:has()`和伪元素在`:has()`中是无效的选择器，但由于选择器列表是可容错的，它们将只是被忽略。选择器将不会失效。
  3. 如果一个浏览器中不支持 `:has()` 伪类本身，则整个选择器块将失效。


## 伪元素
伪元素是一个附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式。
```css
p::first-line {
  color: red;
}
```
### 常见伪元素
- [::before](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::before)
用来创建一个伪元素，作为已选中元素的第一个子元素。

- [::after](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::after)
用来创建一个伪元素，作为已选中元素的最后一个子元素。

- [::cue](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::cue)
匹配所选元素中的WebVTT提示。这可以用于在 VTT 轨道的媒体中使用字幕和其他线索。

- [::first-letter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-letter)
会选中某*block-level element*（块级元素）第一行的第一个字母，并且文字所处的行之前没有其他内容（如图片和内联的表格）

- [::first-line](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-line)
会选中某*block-level element*（块级元素）的第一行应用样式。第一行的长度取决于很多因素，包括元素宽度，文档宽度和文本的文字大小。

- [::file-selector-button](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::file-selector-button)
仅选中`type="file"`的`<input>` 的按钮。

- [::marker](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::marker)
匹配列表的标记框（通常为一个符号或数字）。它作用在任何设置了`display: list-item`的元素或伪元素上，例如`<li>`和 `<summary>`元素。

- [::part()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::part)
表示在阴影树中任何匹配`part`属性的元素。

- [::selection](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::selection)
应用于文档中被用户高亮的部分（比如使用鼠标或其他选择设备选中的部分）。

- [::slotted()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::slotted)
选定那些被放在`HTML`模板中的元素; 仅仅适用于影子节点树 *Shadow Dom*。并且只会选择实际的元素节点，而不包括文本节点。

### 实验中伪元素
- [::backdrop[实验性]](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::backdrop)
任何处于全屏模式的元素下的即刻渲染的盒子（并且在所有其他在堆中的层级更低的元素之上）。
```css
/* Backdrop 只有通过 dialog.showModal() 打开对话框时会被显示 */
dialog::backdrop {
  background: rgba(255,0,0,.25);
}
```
`::backdrop`不继承任何元素，同时也不被任何元素继承。没有规定什么属性不能应用于该伪元素。
```css
video::backdrop {
  background-color: #448;
}
```
在示例中，backdrop 样式用于将视频全屏显示时的背景颜色改为蓝灰色而不是大多数浏览器默认的黑色。
:::warning 注意
当 backdrop 可见时，上下两部分的暗蓝灰色的信箱效果。这个区域一般是黑色的，但上面的 CSS 语句修改了它的外观。
:::

- [::cue-region[实验性]](https://developer.mozilla.org/en-US/docs/Web/CSS/::cue-region)
匹配所选元素中的 WebVTT 提示。这可用于在具有 VTT 轨道的媒体中设置字幕和其他提示的样式。

- [::placeholder[实验性]](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::placeholder)
选择一个表单元素的占位文本，它允许开发者和设计师自定义占位文本的样式。

- [::grammar-error[实验性]](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::grammar-error)
应用于浏览器标识为语法错误的文本段。

- [::spelling-error[实验性]](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::spelling-error)
表示浏览器标记为不正确拼写的文本段。

- [::target-text[实验性]](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::target-text)
代表了浏览器在支持文本片段技术时所滚动到的文字。它使得作者可以选择高亮一段文字的方式。
要实际查看 CSS 效果，请参考[scroll-to-text 演示](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance)


## 伪类和伪元素的区别
1. 伪类使用单个冒号 `:`，伪元素使用双冒号`::`。
3. 伪类能够根据状态改变元素样式，伪元素只能设置元素特定部分的样式。
4. 伪类不创建DOM树，伪元素可以。
5. 一个选择器中只能使用一个伪元素。但可以使用多个伪类。
6. 伪元素不能匹配任何真实存在的`html`元素。

### 常用CSS伪类:


| 选择器               | 例子                  | 例子描述                                                                                       |
| -------------------- | --------------------- | ---------------------------------------------------------------------------------------------- |
| :root                | root                  | 选择元素的根元素。                                                                             |
| :empty               | p:empty               | 表示除空白字符外没有子元素的元素[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:empty) |
| :first-child         | p:first-child         | 选择作为其父的首个子元素的每个`<p>`元素。                                                      |
| :first-of-type       | p:first-of-type       | 选择作为其父的首个`<p>`元素的每个`<p>`元素。                                                   |
| :lang(language)      | p:lang(it)            | 基于其内容语言来选择元素。[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:lang)        |
| :last-child          | p:last-child          | 选择作为其父的最后一个子元素的每个`<p>`元素。                                                  |
| :last-of-type        | p:last-of-type        | 选择作为其父的最后一个`<p>`元素的每个`<p>`元素。                                               |
| :not(selector)       | p:not(.active)        | 选择每个`<p>`元素不包含`.active`类的元素。                                                     |
| :nth-child(n)        | p:nth-child(2)        | 选择作为其父的第二个子元素的每个`<p>`元素。                                                    |
| :nth-last-child(n)   | p:nth-last-child(2)   | 选择作为父的第二个子元素的每个`<p>`元素，从最后一个子元素计数。                                |
| :nth-last-of-type(n) | p:nth-last-of-type(2) | 选择作为父的第二个`<p>`元素的每个`<p>`元素，从最后一个子元素计数                               |
| :nth-of-type(n)      | p:nth-of-type(2)      | 选择作为其父的第二个`<p>`元素的每个`<p>`元素。                                                 |
| :only-of-type        | p:only-of-type        | 选择作为其父的唯一`<p>`元素的每个`<p>`元素。                                                   |
| :only-child          | p:only-child          | 选择作为其父的唯一子元素的`<p>`元素。                                                          |
| :link                | a:link                | 选择所有未被访问的链接。                                                                       |
| :active              | a:active              | 选择活动的链接。                                                                               |
| :hover               | a:hover               | 选择鼠标悬停其上的链接。                                                                       |
| :visited             | a:visited             | 选择所有已访问的链接。                                                                         |
| :in-range            | input:in-range        | 选择具有指定范围内的值的`<input>`元素。                                                        |
| :invalid             | input:invalid         | 选择所有具有无效值的`<input>`元素。                                                            |
| :optional            | input:optional        | 选择不带 "required" 属性的`<input>`元素。                                                      |
| :out-of-range        | input:out-of-range    | 选择值在指定范围之外的`<input>`元素。                                                          |
| :read-only           | input:read-only       | 选择指定了 "readonly" 属性的`<input>`元素。                                                    |
| :read-write          | input:read-write      | 选择不带 "readonly" 属性的`<input>`元素。                                                      |
| :required            | input:required        | 选择指定了 "required" 属性的`<input>`元素。                                                    |
| :valid               | input:valid           | 选择所有具有有效值的`<input>`元素。                                                            |
| :focus               | input:focus           | 选择获得焦点的`<input>`元素。                                                                  |
| :checked             | input:checked         | 选择每个被选中的`<input>`元素。                                                                |
| :disabled            | input:disabled        | 选择每个被禁用的`<input>`元素。                                                                |
| :enabled             | input:enabled         | 选择每个已启用的`<input>`元素。                                                                |
| :target              | #news:target          | 选择当前活动的 #news 元素（单击包含该锚名称的 URL）。                                          |



### 常用CSS伪元素:

| 选择器         | 例子            | 例子描述                                      |
| -------------- | --------------- | --------------------------------------------- |
| ::after        | p::after        | 在每个`<p>`元素之后插入内容。                 |
| ::before       | p::before       | 在每个`<p>`元素之前插入内容。                 |
| ::first-letter | p::first-letter | 选择每个`<p>`元素的首字母。                   |
| ::first-line   | p::first-line   | 选择每个`<p>`元素的首行，只能应用于块级元素。 |
| ::selection    | p::selection    | 选择用户选择的元素部分。                      |

::: tip
实际上`css3`为了区分两者，已经明确规定了**伪类**用一个冒号来表示，而**伪元素**则用两个冒号来表示。
:::

## 文本样式

### 文本颜色
```css
h1 {
  color: white;			//文本颜色
  background-color: black;	//文本背景色
}
```
### 文本阴影
```css
h1 {
  text-shadow: 2px 2px;		 //水平阴影（2px）和垂直阴影（2px）
  text-shadow: 2px 2px red;	 //水平阴影（2px）和垂直阴影（2px）颜色（红色）
  text-shadow: 2px 2px 5px red;  //水平阴影（2px）和垂直阴影（2px）模糊效果（5px）颜色（红色）
}
```



<hr/>
