# CSS 使用笔记

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
后代选择器（descendant selector）又称为包含选择器。

因此，h1 em 选择器可以解释为 “作为 h1 元素后代的任何 em 元素”。如果要从左向右读选择器，可以换成以下说法：“包含 em 的所有 h1 会把以下样式应用到该 em”。
```css
h1 em {color:red;}
```
只有`h1`下的所有`em` 设置为红色，其余元素无影响；
:::info
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

## 伪类和伪元素的区别

最根本区别在于：**它们是否创造了新的元素。**（伪元素会创建新元素）

**所有CSS伪类:**


| 选择器                | 例子                   | 例子描述                                    |
| -------------------- | --------------------- | ------------------------------------------ |
| :active              | a:active              | 选择活动的链接。                                                 |
| :checked             | input:checked         | 选择每个被选中的`<input>`元素。                                  |
| :disabled            | input:disabled        | 选择每个被禁用的`<input>`元素。                                  |
| :empty               | p:empty               | 选择没有子元素的每个`<p>`元素。                                  |
| :enabled             | input:enabled         | 选择每个已启用的`<input>`元素。                                  |
| :first-child         | p:first-child         | 选择作为其父的首个子元素的每个`<p>`元素。                        |
| :first-of-type       | p:first-of-type       | 选择作为其父的首个`<p>`元素的每个`<p>`元素。                     |
| :focus               | input:focus           | 选择获得焦点的`<input>`元素。                                    |
| :hover               | a:hover               | 选择鼠标悬停其上的链接。                                         |
| :in-range            | input:in-range        | 选择具有指定范围内的值的`<input>`元素。                          |
| :invalid             | input:invalid         | 选择所有具有无效值的`<input>`元素。                              |
| :lang(language)      | p:lang(it)            | 选择每个 lang 属性值以 "it" 开头的`<p>`元素。                    |
| :last-child          | p:last-child          | 选择作为其父的最后一个子元素的每个`<p>`元素。                    |
| :last-of-type        | p:last-of-type        | 选择作为其父的最后一个`<p>`元素的每个`<p>`元素。                 |
| :link                | a:link                | 选择所有未被访问的链接。                                         |
| :not(selector)       | :not(p)               | 选择每个非`<p>`元素的元素。                                      |
| :nth-child(n)        | p:nth-child(2)        | 选择作为其父的第二个子元素的每个`<p>`元素。                      |
| :nth-last-child(n)   | p:nth-last-child(2)   | 选择作为父的第二个子元素的每个`<p>`元素，从最后一个子元素计数。  |
| :nth-last-of-type(n) | p:nth-last-of-type(2) | 选择作为父的第二个`<p>`元素的每个`<p>`元素，从最后一个子元素计数 |
| :nth-of-type(n)      | p:nth-of-type(2)      | 选择作为其父的第二个`<p>`元素的每个`<p>`元素。                   |
| :only-of-type        | p:only-of-type        | 选择作为其父的唯一`<p>`元素的每个`<p>`元素。                     |
| :only-child          | p:only-child          | 选择作为其父的唯一子元素的`<p>`元素。                            |
| :optional            | input:optional        | 选择不带 "required" 属性的`<input>`元素。                        |
| :out-of-range        | input:out-of-range    | 选择值在指定范围之外的`<input>`元素。                            |
| :read-only           | input:read-only       | 选择指定了 "readonly" 属性的`<input>`元素。                      |
| :read-write          | input:read-write      | 选择不带 "readonly" 属性的`<input>`元素。                        |
| :required            | input:required        | 选择指定了 "required" 属性的`<input>`元素。                      |
| :root                | root                  | 选择元素的根元素。                                               |
| :target              | #news:target          | 选择当前活动的 #news 元素（单击包含该锚名称的 URL）。            |
| :valid               | input:valid           | 选择所有具有有效值的`<input>`元素。                              |
| :visited             | a:visited             | 选择所有已访问的链接。                                           |


**所有 CSS 伪元素:**

| 选择器          | 例子             | 例子描述                                      |
| -------------- | --------------- | -------------------------------------------- |
| ::after        | p::after        | 在每个`<p>`元素之后插入内容。                    |
| ::before       | p::before       | 在每个`<p>`元素之前插入内容。                    |
| ::first-letter | p::first-letter | 选择每个`<p>`元素的首字母。                      |
| ::first-line   | p::first-line   | 选择每个`<p>`元素的首行，只能应用于块级元素。       |
| ::selection    | p::selection    | 选择用户选择的元素部分。                         |

:::info
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
