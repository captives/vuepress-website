# Canvas API

### API 

`CanvasRenderingContext2D`接口提供的 2D 渲染背景用来绘制`<canvas>`元素，为了获得这个接口的对象，需要在 `<canvas>` 上调用`getContext()` ，并提供一个*2d*的参数：

```js
var canvas = document.getElementById("tutorial");
var ctx = canvas.getContext("2d");
```
一旦你得到 2D 渲染背景后，你可以像下面一样绘制：
```js
ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect(10, 10, 55, 50);
```

### 绘制矩形

以下是 3 个绘制矩形位图的方法。

- **[CanvasRenderingContext2D.clearRect()](/zh-CN/docs/Web/API/CanvasRenderingContext2D/clearRect)** 
设置指定矩形区域内（以点`(x, y)`为起点，范围是 `width, height`)所有像素变成透明，并擦除之前绘制的所有内容。

- **CanvasRenderingContext2D.fillRect()**; 
绘制填充矩形，矩形的起点在`(x, y)`位置，矩形的尺寸是`width `和`height` 。

- **CanvasRenderingContext2D.strokeRect()**; 
在 canvas 中，使用当前的绘画样式，描绘一个起点在`(x, y)`、宽度为 *w* 、高度为*h*的矩形。

### 绘制文本

下面是绘制文本的方法。 参见 TextMetrics 对象获取文本属性。

- **CanvasRenderingContext2D.fillText()**; 
在`(x, y)`位置绘制（填充）文本。

- **CanvasRenderingContext2D.strokeText()**; 
在`(x,y)`位置绘制（描边）文本。

- **CanvasRenderingContext2D.measureText()**; 
返回`TextMetrics`对象。

### 线型

下面的方法和属性控制如何绘制线。
- **CanvasRenderingContext2D.lineWidth**; 
线的宽度。默认 1.0

- **CanvasRenderingContext2D.lineCap**; 
线末端的类型。 允许的值： butt (默认), round, square.

- **CanvasRenderingContext2D.lineJoin**;
定义两线相交拐点的类型。允许的值： round, bevel, miter(默认)。

- **CanvasRenderingContext2D.miterLimit**;
斜接面限制比例。默认 10。

- **CanvasRenderingContext2D.getLineDash()**;
返回当前线段样式的数组，数组包含一组数量为偶数的非负数数字。

- **CanvasRenderingContext2D.setLineDash()**;
设置当前的线段样式。

- **CanvasRenderingContext2D.lineDashOffset**;
描述在哪里开始绘制线段。

### 文本样式

下面的属性控制如何设计文本。

- **CanvasRenderingContext2D.font**;
字体设置。 默认值 10px sans-serif

- **CanvasRenderingContext2D.textAlign**;
文本对齐设置。 允许的值： start (默认), end, left, right 或 center.

- **CanvasRenderingContext2D.textBaseline**;
基线对齐设置。 允许的值： top, hanging, middle, alphabetic (默认), ideographic, bottom.

- **CanvasRenderingContext2D.direction**;
文本的方向。 允许的值： ltr, rtl, inherit (默认).

### 填充和描边样式

填充设计用于图形内部的颜色和样式，描边设计用于图形的边线。

- **CanvasRenderingContext2D.fillStyle**;
图形内部的颜色和样式。 默认 #000 (黑色).

- **CanvasRenderingContext2D.strokeStyle**;
图形边线的颜色和样式。 默认 #000 (黑色).

### 渐变和图案

- **CanvasRenderingContext2D.createLinearGradient()**;
创建一个沿着参数坐标指定的线的线性渐变。

- **CanvasRenderingContext2D.createRadialGradient()**;
创建一个沿着参数坐标指定的线的放射性性渐变。

- **CanvasRenderingContext2D.createPattern()**;
使用指定的图片 (a CanvasImageSource)创建图案。通过 repetition 变量指定的方向上重复源图片。此方法返回 CanvasPattern 对象。

### 阴影

- **CanvasRenderingContext2D.shadowBlur**;
描述模糊效果。 默认 0

- **CanvasRenderingContext2D.shadowColor**;
阴影的颜色。 默认 fully-transparent black.

- **CanvasRenderingContext2D.shadowOffsetX**;
阴影水平方向的偏移量。 默认 0.

- **CanvasRenderingContext2D.shadowOffsetY**;
阴影垂直方向的偏移量。 默认 0.

### 路径

下面的方法用来操作对象的路径。

- **CanvasRenderingContext2D.beginPath()**;
清空子路径列表开始一个新的路径。当你想创建一个新的路径时，调用此方法。

- **CanvasRenderingContext2D.closePath()**;
使笔点返回到当前子路径的起始点。它尝试从当前点到起始点绘制一条直线。如果图形已经是封闭的或者只有一个点，那么此方法不会做任何操作。

- **CanvasRenderingContext2D.moveTo()**;
将一个新的子路径的起始点移动到(x，y)坐标。

- **CanvasRenderingContext2D.lineTo()**;
使用直线连接子路径的最后的点到 x,y 坐标。

- **CanvasRenderingContext2D.bezierCurveTo()**;
添加一个 3 次贝赛尔曲线路径。该方法需要三个点。 第一、第二个点是控制点，第三个点是结束点。起始点是当前路径的最后一个点，绘制贝赛尔曲线前，可以通过调用 moveTo() 进行修改。

- **CanvasRenderingContext2D.quadraticCurveTo()**;
添加一个 2 次贝赛尔曲线路径。

- **CanvasRenderingContext2D.arc()**;
绘制一段圆弧路径， 圆弧路径的圆心在`(x, y)`位置，半径为 r ，根据 anticlockwise （默认为顺时针）指定的方向从 startAngle 开始绘制，到 endAngle 结束。

- **CanvasRenderingContext2D.arcTo()**;
根据控制点和半径绘制圆弧路径，使用当前的描点(前一个 moveTo 或 lineTo 等函数的止点)。根据当前描点与给定的控制点 1 连接的直线，和控制点 1 与控制点 2 连接的直线，作为使用指定半径的圆的 切线，画出两条切线之间的弧线路径。

- **CanvasRenderingContext2D.ellipse()**;
添加一个椭圆路径，椭圆的圆心在（x,y）位置，半径分别是 radiusX 和 radiusY ，按照 anticlockwise （默认顺时针）指定的方向，从 startAngle 开始绘制，到 endAngle 结束。
CanvasRenderingContext2D.rect()
创建一个矩形路径，矩形的起点位置是`(x, y)`，尺寸为`width `和`height`。

### 绘制路径

- **CanvasRenderingContext2D.fill()**;
使用当前的样式填充子路径。

- **CanvasRenderingContext2D.stroke()**;
使用当前的样式描边子路径。

- **CanvasRenderingContext2D.drawFocusIfNeeded()**;
如果给定的元素获取了焦点，那么此方法会在当前的路径绘制一个焦点。

- **CanvasRenderingContext2D.scrollPathIntoView()**;
将当前或给定的路径滚动到窗口。

- **CanvasRenderingContext2D.clip()**;
从当前路径创建一个剪切路径。在 clip() 调用之后，绘制的所有信息只会出现在剪切路径内部。例如： 参见 Canvas 教程中的 剪切路径 。

- **CanvasRenderingContext2D.isPointInPath()**;
判断当前路径是否包含检测点。

- **CanvasRenderingContext2D.isPointInStroke()**;
判断检测点是否在路径的描边线上。

### 变换

在 CanvasRenderingContext2D 渲染背景中的对象会有一个当前的变换矩阵，一些方法可以对其进行控制。当创建当前的默认路径，绘制文本、图形和 Path2D 对象的时候，会应用此变换矩阵。下面列出的方法保持历史和兼容性的原因，是为了 SVGMatrix 对象现在能够应用于大部分 API ，将来会被替换。

- **CanvasRenderingContext2D.currentTransform**;
当前的变换矩阵 ( SVGMatrix 对象)。

- **CanvasRenderingContext2D.rotate()**;
在变换矩阵中增加旋转，角度变量表示一个顺时针旋转角度并且用弧度表示。

- **CanvasRenderingContext2D.scale()**;
根据 x 水平方向和 y 垂直方向，为 canvas 单位添加缩放变换。

- **CanvasRenderingContext2D.translate()**;
通过在网格中移动 canvas 和 canvas 原点 x 水平方向、原点 y 垂直方向，添加平移变换

- **CanvasRenderingContext2D.transform()**;
使用方法参数描述的矩阵多次叠加当前的变换矩阵。

- **CanvasRenderingContext2D.setTransform()**;
重新设置当前的变换为单位矩阵，并使用同样的变量调用 transform() 方法。

- **CanvasRenderingContext2D.resetTransform()**;
使用单位矩阵重新设置当前的变换。

### 合成

- **CanvasRenderingContext2D.globalAlpha**;
在合成到 canvas 之前，设置图形和图像透明度的值。默认 1.0 (不透明)。

- **CanvasRenderingContext2D.globalCompositeOperation**;
通过 globalAlpha 应用，设置如何在已经存在的位图上绘制图形和图像。
绘制图像

- **[CanvasRenderingContext2D.drawImage()](./draw-image.html)**;
绘制指定的图片。该方法有多种格式，提供了很大的使用灵活性。

### 像素控制
参见 ImageData 对象。

- **CanvasRenderingContext2D.createImageData()**;
使用指定的尺寸，创建一个新的、空白的 ImageData 对象。所有的像素在新对象中都是透明的。

- **CanvasRenderingContext2D.getImageData()**;
返回一个 ImageData 对象，用来描述 canvas 区域隐含的像素数据，这个区域通过矩形表示，起始点为 (sx, sy)、宽为 sw、高为 sh。

- **CanvasRenderingContext2D.putImageData()**;
将数据从已有的 ImageData 绘制到位图上。 如果提供了脏矩形，只能绘制矩形的像素。

### 图像平滑

- **CanvasRenderingContext2D.imageSmoothingEnabled**;
图像平滑的方式；如果禁用，缩放时，图像不会被平滑处理。

### canvas 状态

CanvasRenderingContext2D 渲染环境包含了多种绘图的样式状态（属性有线的样式、填充样式、阴影样式、文本样式）。下面的方法会帮助你使用这些状态：

- **CanvasRenderingContext2D.save()**;
使用栈保存当前的绘画样式状态，你可以使用 restore() 恢复任何改变。

- **CanvasRenderingContext2D.restore()**;
恢复到最近的绘制样式状态，此状态是通过 save() 保存到”状态栈“中最新的元素。

- **CanvasRenderingContext2D.canvas**;
对 HTMLCanvasElement 只读的反向引用。如果和`<canvas>` 元素没有联系，可能为 null。
点击区域

- **CanvasRenderingContext2D.addHitRegion()**;
给 canvas 添加点击区域。

- **CanvasRenderingContext2D.removeHitRegion()**;
从 canvas 中删除指定 id 的点击区域。

- **CanvasRenderingContext2D.clearHitRegions()**;
从 canvas 中删除所有的点击区域。

## 内部的 APIs (chrome-context 特有的)

- **CanvasRenderingContext2D.asyncDrawXULElement()**;
在 canvas 内渲染一个 XUL 元素的区域。

- **CanvasRenderingContext2D.drawWindow()**;
在 canvas 内渲染一个窗口的区域。窗口可视区的内容被渲染，忽略窗口的剪切和滚动。

- **CanvasRenderingContext2D.demote()**;
这个方法会引起当前的上下文使用后端的硬件加速作为软件的备选方案。所有的状态都会被保留。

## 样例一
