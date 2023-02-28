# JavaScript 知识点

::: details 目录
@[toc]
:::

## 基础部分

### js有哪些内置对象？
`String`、`Number`、`Boolean`、`Array`、`Object`、`Math`、`Date`、`RegExp` ....

### js有哪些数据类型

1. 基本类型：String、Number、Boolean、null、undefined、Symbol
2. 引用类型：Object（Array、Map、Function）

Symbol：ES6引入了一种新的原始数据类型`Symbol`，表示独一无二的值，最大的用法是用来定义对象的唯一属性名。
`Symbol`函数栈不能用`new`命令，因为`Symbol`是原始数据类型，不是对象。

```js
var data = {};
for (var i = 0; i < 10; i++) {
    data[Symbol(i)] = i;
}
console.log(data);				//
console.log(Object.keys(data));			//[]

console.log(Reflect.ownKeys(data));		 //[Symbol(0),Symbol(1) ...]
console.log(Object.getOwnPropertySymbols(data)); //[Symbol(0),Symbol(1) ...]

Reflect.ownKeys(data).forEach(key => {
    console.log(key, data[key]); // Symbol(0) 0 ....
})
```
:::warning 注意：
 Symbol 值作为属性名时，该属性是公有属性不是私有属性，可以在类的外部访问。但是不会出现在 `for...in`、 `for...of`的循环中，也不会被`Object.keys()`、`Object.getOwnPropertyNames()` 返回。如果要读取到一个对象的 Symbol 属性，可以通过`Object.getOwnPropertySymbols()`和`Reflect.ownKeys()`取到。[ES6 Symbol API](https://www.runoob.com/w3cnote/es6-symbol.html)
:::

### JavaScript有几种类型的值

1. 栈：原始(基本)数据类型（String、Number、Boolean、null、undefined、Symbol）
2. 堆：引用数据类型（对象、数组、函数）

### 栈和堆的区别

- 堆：动态分配内存，内存大小不一，也不会自动释放
- 栈：自动分配相对固定大小的内存空间，并由系统自动释放
- 基本类型都是存储在栈中，每种类型的数据占用的空间的大小是确定的，并由系统自动分配和释放。内存可以及时回收。
- 引用类型的数据都是存储在堆中。准确说是栈中会存储这些数据的地址指针，并指向堆中的具体数据。

### undefined 和 null 区别
1. `null` 语义表示空值，定义了，但是为空值；空对象指针类型
    + 作为函数的参数，表示该函数的参数不是对象。
    + 作为对象原型链的终点。

2. `undefined` 表示未定义。声明了一个变量未初始化时，得到的就是 `undefined`。
    + 变量被声明了，但没有赋值时，就等于undefined。
    + 调用函数时，应该提供的参数没有提供，该参数就等于undefined。
    + 对象没有赋值的属性，该属性的值为undefined。
    + 函数没有返回值时，默认返回undefined。

3. `null`和`undefined`区别
```js
typeof undefined             // undefined
typeof null                  // object
null === undefined           // false
null == undefined            // true
```

### 对this的理解

1. 单独使用，`this`表示全局对象
2. 在函数中，`this`表示全局对象
3. 在对象的一个函数方法中，`this`表示这个对象
4. 可以通过`apply`、`bind`、`call`来更改函数`this`的指向

::: warning 注意：
this永远指向的是最后调用它的对象，仅当它在对象的一个函数方法中时会有差异
:::


### `if`语句有作用域吗?

只有函数有作用域，`if`是没有作用域的。

但是在`if { }`语句中，使用`const`、`let`他们会有块级作用域。

### 原型链和作用域链的区别

1. 原型链

当访问一个对象的某个属性时，会先在这个对象本身的属性上找，如果没有找到，会去这个属性的`__proto__`属性上找，即这个构造函数的`prototype`；如果还没找到，就会继续在`__proto__`上查找，直到最顶层，找不到即为`undefined`。这样一层一层往上找，彷佛是一条链子串起来，所以叫做原型链。

- 对象 obj --> Object.prototype --> null;
- 函数 fun --> Function.prototype --> Object.prototype --> null
- 数组 arr --> Array.prototype --> Object.prototype --> null

2. 作用域链

变量取值会到创建这个变量的函数的作用域中取值。
如果找不到，就会向上级作用域去查，直到查到全局作用域，这么一个查找过程形成的链条就叫做作用域链。

3. 区别
    + 作用域是对**变量**而言，原型链是对于**对象的属性**而言
    + 作用域链的顶层是`window`，原型链的顶层是`Object`

::: details 示例：写出代码的打印结果
```js
var foo = {};
var F = function(){};

Object.prototype.a = "value a";
Function.prototype.b = "value b";

console.log(foo.a); 	//value a
console.log(foo.b);	//undefined

console.log(F.a);	//value a
console.log(F.b);	//value b
```
:::

### js 判断对象类型(`typeof`、`instanceOf`)区别
1. `typeof` 可以用此来判断 `number`, `string`, `boolean`, `undefined`, `symbol`, `object`, `function`

|类型   |   结果    |
|:--------|:--------|
|String 	|`string` |
|Number	   | `number` |
|Boolean	|`boolean` |
|Undefined|	`undefined` |
|Symbol	   | `symbol` |
|Object	   | `object` |
|function	| `function` |

检测不出`null`和`Array`， `Object`，因为结果都为`object`
::: details 示例
```js
1 "number"
124 string
null "object" //null值表示一个空对象指针
true "boolean"
[1, 2, 3] "object"
new Date() "object"
```
:::

2. `instanceof`

`instanceof`运算符用于检测构造函数的`prototype`属性是否出现在某个实例对象的原型链上,返回值为布尔值；用于检测一个变量是否属于某个对象的实例。

其语法如下所示：
```js
object instanceof constructor
```

`instanceof`主要的实现原理就是只要右边变量的`prototype`在左边变量的原型链上即可。因此，`instanceof`在查找的过程中会遍历左边变量的原型链，直到找到右边变量的`prototype`; 如果查找失败，则会返回`false`.

不能检测出`number`、`boolean`、`string`、`undefined`、`null`、`symbol`类型，所以`instancof`常用于检测复杂类型以及级成关系。
::: details 示例
```js
const f = true;
const h = [1, 2, 3];
const i = new Date();

console.log(f, f instanceof Boolean); //false
console.log(h, h instanceof Array); //true
console.log(i, i instanceof Date); //true
```
:::

代码实现`instanceOf`
::::code-group
:::code-group-item 方法一：
```js
function instanceOf(s, t){
  var p = s;
  while(p){
    if(p === t.prototype){
	return true;
    }
    p = p.__proto__;
  }
 return false;
}
```
:::
::: code-group-item 方法二：
```js
function instanceOf(left, right) {
    let leftVal = Object.getPrototypeOf(left);
    const rightVal = right.prototype;

    while (leftVal !== null) {
        if (leftVal === rightVal)
            return true;
        leftVal = Object.getPrototypeOf(leftVal);
    }
    return false;
}
```
:::
::::

3. `constructor`

`null`、`undefined`没有`construstor`方法，因此`constructor`不能判断`undefined`和`null`。但是`contructor`的指向是可以被改变，所以不安全

```js
console.log([1, 2].constructor === Array) // ture
```

4. `Object.prototype.toString.call`

全类型都可以判断

```js
Object.prototype.toString.call([1, 2]) // [object Array]
```

### 普通函数和箭头函数的区别

1. 普通函数

    + 可以通过bind、call、apply改变this指向
    + 可以使用new

2. 箭头函数
    + 本身没有`this`指向，它的`this`在定义的时候继承自外层第一个普通函数的`this`,被继承的普通函数的`this`指向改变时，箭头函数的this指向也会跟着改变。
    + 箭头函数外层没有普通函数时，`this`指向`window`, 不能通过`bind`、`call`、`apply`改变`this`指向;
    + 使用`new`调用箭头函数会报错，因为箭头函数没有`constructor`;


### `document.write`和`document.innerHTML`的区别
`document.write`将内容写入页面，清空替换掉原来的内容，会导致重绘
`document.innerHTML`将内容写入某个DOM节点，不会重绘页面;


### `bind`、`call`、`apply`的区别
三者均可以更改`this`指向, 可以编写**能够在不同对象上**使用的方法。

1. bind
    - `bind(thisArg, arg...)`方法**创建**一个新的函数，在`bind()`被调用时，这个新函数的`this`被指定为`bind()`的第一个参数，而其余参数将作为新函数的参数，供调用时使用;(例如，`f.bind(obj)`，可以理解为`obj.f()`，这时f函数体内的this自然指向的是obj)。
    - 返回一个原函数的拷贝，并拥有指定的 this 值和初始参数。

```js
var person = {
    name: "Seven",
    fullName: function(city) {
        return this.name + " in " + city;
    }
}

console.log(person.fullName('HZ')); 

var name = "window";

var func = person.fullName.bind(this, 'CH'); //更改指向到Window
console.log(func());
console.log(person.fullName('HZ'));

//Seven in HZ
//window in CH
//Seven in HZ
```

::: details 代码实现bind
```js
Function.prototype.bind1 = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('The bound object needs to be a function');
    }

    const self = this;
    const fNOP = function() {};
    const fBound = function(...fBoundArgs) {
        // 指定this
        // 当作为构造函数时，this 指向实例，此时 this instanceof fBound 结果为 true
        return self.apply(this instanceof fNOP ? this : context, [...args, ...fBoundArgs]);
    }

    //  修改返回函数的 prototype 为绑定函数的 prototype,为了避免直接修改this的原型，所以新建了一个fNOP函数作为中介
    if (this.prototype) {
        fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
}
```
:::

2. `call`
    - 使用`call(thisArg, arg...)`方法，您可以编写**能够在不同对象上**使用的方法。
    - 使用一个指定的`this`对象和给出的参数来调用函数；

```js
var person = {
    firstName:"Seven",
    lastName: "A",
    fullName: function(city) {
        return this.firstName + " " + this.lastName + " at " + city;
    }
}
var person1 = {
    firstName:"Bill",
    lastName: "Gates",
}
var person2 = {
    firstName:"Steve",
    lastName: "Jobs",
}

person.fullName('SH');	// 将返回 "Seven A in SH"
person.fullName.call(person1, "HZ");  // 将返回 "Bill Gates in HZ"
person.fullName.call(person2, "HN");  // 将返回 "Steve Jobs in HN"
```
::: warning 注意：
`thisArg`可以为`null`，`undefined`，此时函数内的`this`指向`Window`。
`thisArg`可以传基本数据类型，原生`call`会自动用`Object()`转换
函数可以有返回值，没有返回值，返回`undefined`
将函数添加到指定对象中，并用delete删除(消除副作用)
:::

::: details 代码实现call
```js
Function.prototype.call1 = function(context, ...args) {
    // 获取第一个参数（注意第一个参数为null或undefined，this指向window），构建对象
    context = context ? Object(context) : window;
    // 将对应函数传入该对象中
    context.fn = this;
    // 获取参数并执行相应函数
    let result = context.fn(...args);
    // 删除该对象中的函数，消除副作用
    delete context.fn;
}
```
:::

3. `apply`
-   使用`apply(thisArg, [])`方法，您可以编写**能够在不同对象上**使用的方法。
- `apply()`方法与`call()`方法非常相似，不同之处：
    - `call()`方法分别接受参数。
    - `apply()`方法接受数组形式的参数。
- 如果要使用数组而不是参数列表，则`apply()`方法非常方便。
:::tip
bind方法可以让函数想什么时候调用就什么时候调用。
apply、call方法只是临时改变了this指向。
:::

::: details 代码实现
```js
Function.prototype.apply1 = function(context, arr) {
    // 获取第一个参数（注意第一个参数为null或undefined，this指向window），构建对象
    context = context ? Object(context) : window;
    
    // 将对应函数传入该对象中
    context.fn = this;

    // 获取参数并执行相应函数
    let result = arr ? context.fn(...arr) : context.fn();
     
    // 删除该对象中的函数，消除副作用
    delete context.fn;

    //返回值
    return result;
}
```
:::


参考[图解JavaScript——代码实现（Object.create()、flat()等十四种代码原理）](https://mp.weixin.qq.com/s?__biz=MzIxMjExNzQxMQ==&mid=2247483892&idx=1&chksm=https://mp.weixin.qq.com/s?__biz=MzIxMjExNzQxMQ==&mid=2247483892&idx=1&sn=049ee4a8dfee3a03e253a13e96ef5f54&chksm=974bb338a03c3a2eba3eb528161be4155f9d7153beefd9f02f07d8e997acd3bcaf5b9f193453&scene=21&scene=21)


### eval()计算函数
`eval(string)`函数计算`JavaScript`字符串，并把它作为脚本代码来执行
- 如果参数是一个表达式，`eval()`函数将执行表达式；
- 如果参数是`Javascript`语句，`eval()`将执行`Javascript`语句；
- 如果执行结果是一个值就返回，不是就返回undefined
- 如果参数不是一个字符串，则直接返回该参数。

特殊情况：
```js
eval("{b:2}") // 返回 2
eval("({b:2})") // 返回对象{b:2}
```

### JS哪些操作会造成内存泄露
内存泄漏是指一块被分配的内存既不能使用，也不能回收，直到浏览器进程结束。[扩展文章](https://www.jianshu.com/p/763ba9562864)
1. 意外的全局变量
2. 闭包
3. 没有清理的dom元素；dom元素赋值给变量，又通过removeChild移除dom元素。但是dom元素的引用还在内存中
4. 被遗忘的定时器或者回调


### 什么是闭包，如何使用它，为什么要使用它？
1. 闭包就是能够读取其它函数内部变量的函数
2. 使用方法：在一个函数内部创建另一个函数
3. 最大用处有两个：读取其他函数的变量值，让这些变量始终保存在内存中
4. 缺点：会引起内存泄漏（引用无法被销毁，一直存在）

### 请解释JSONP的工作原理，以及它为什么不是真正的AJAX
`JSONP`是一种非正式传输协议，允许用户传递一个`callback`给服务端，然后服务端返回数据时会将这个`callback`参数作为函数名来包裹住`JSON`数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。

当GET请求从后台页面返回时，可以返回一段JavaScript代码，这段代码会自动执行，可以用来负责调用后台页面中的一个callback函数。

它们的实质不同: 
- ajax的核心是通过`XMLHttpRequest`获取非本页内容
- jsonp的核心是动态添加script标签调用服务器提供的js脚本
- jsonp只支持get请求，ajax支持get和post请求

### 请解释一下JavaScript的同源策略
同源指**协议**，**域名**，**端口**相同，
同源策略是一种安全协议，指一段脚本只能读取来自同一来源的窗口和文档的属性。


### 介绍暂时性死区
在代码块内，使用let、const命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”

### 两个对象如何比较
思路步骤：
- 1、判断两个类型是否对象
- 2、判断两个对象key的长度是否一致
- 3、判断属性value值的数据类型，根据不同数据类型做比较
    a、是对象，重复这个步骤
    b、是数组，转字符串比较
    c、是基本类型，直接判断

### Promise和Async处理失败的时候有什么区别
1. Promise错误可以在构造体里面被捕获，而async/await返回的是promise,可以通过catch直接捕获错误。
2. await 后接的Promise.reject都必须被捕获，否则会中断执行

### setTimeout(0)和setTimeout(2)之间的区别
定时器表面意思是过指定时间后执行，但是真正的含义是每过指定时间后，会有fn进入事件队列
1. `setTimeout(fn,0)`的含义是，指定某个任务在主线程最早可得的空闲时间执行，意思就是不用再等多少秒了，只要主线程执行栈内的同步任务全部执行完成，栈为空就马上执行
2. `setTimeout(fn,1)` 1毫秒后执行，但是因为要先执行前面的宏任务，所以不一定就是在一毫秒后执行，取决于队列里任务执行的速度

### `for..in`和`object.keys`的区别
1. `Object.keys`不会遍历继承的原型属性
2. `for...in`会遍历继承的原型属性

### 说说你对AMD和Commonjs的理解
两者都是为了实现模块化编程而出现的
1. commonjs
通常被应用于服务器，在服务器端，模块的加载和执行都在本地完成，因此，CommonJS并不要求模块加载的异步化。
核心思想：一个单独文件就是一个模块，通过require方法来同步加载要依赖的模块，然后通过extports或则module.exports来导出需要暴露的接口。
2. AMD
可以实现异步加载依赖模块，预加载，在并行加载js文件同时，还会解析执行该模块。虽然可以并行加载，异步处理，但是加载顺序不一定
3. CMD
懒加载，虽然会一开始就并行加载js文件，但是不会执行，而是在需要的时候才执行。


## 看代码，给结果

### 1. 写出如下代码的打印结果
```js
var name = 'Tom';
(function() {
if (typeof name == 'undefined') {
  var name = 'Jack';
  console.log('Goodbye ' + name);
} else {
  console.log('Hello ' + name);
}
})();

// name undefined
// typeof name undefined
// Goodbye Jack
```
第四行`var`声明的变量没有块作用域，变量会提升到最近的`function`作用域的上层，但此时只是声明了变量，并没有赋值，到实际运行了赋值语句之后才有值，在之前值为`undefined`;
```js
var name = 'Tom';
(function() {
if (typeof name == 'undefined') {
  name = 'Jack';
  console.log('Goodbye ' + name);
} else {
  console.log('Hello ' + name);
}
})();

// Hello Tom
```
1、首先在进入函数作用域当中，获取name属性 
2、在当前作用域没有找到name 
3、通过作用域链找到最外层，得到name属性 
4、执行else的内容，得到Hello Tom


### 2. 输出以下代码运行结果

```js
1 + "1"				// '11'

2 * "2"				// 4
	
[1, 2] + [2, 1]			// '1,22,1'

"a" + + "b"			// 'aNaN'
```

1 + "1"
加性操作符：如果只有一个操作数是字符串，则将另一个操作数转换为字符串，然后再将两个字符串拼接起来
所以值为：“11”

2 * "2"
乘性操作符：如果有一个操作数不是数值，则在后台调用 Number()将其转换为数值

[1, 2] + [2, 1]
Javascript中所有对象基本都是先调用valueOf方法，如果不是数值，再调用toString方法。
所以两个数组对象的toString方法相加，值为："1,22,1"

"a" + + "b"
后边的“+”将作为一元操作符，如果操作数是字符串，将调用Number方法将该操作数转为数值，如果操作数无法转为数值，则为NaN。
所以值为："aNaN"

以上均参考：《Javascript高级程序设计》


### 3. ["1", "2", "3"].map(parseInt) 答案是多少？

```js
arr.map(function(el, index, arr) {
    return el
})
el：遍历过程中的当前项，
index：遍历过程中的当前下标
arr: 原数组

parseInt(str, redix)
str: 要解析的字符串，如果字符第一个数不能被转换，返回NaN。
redix: 基数，介于 2 ~ 36 之间进制数，如果传0，则默认用10计算。num不在区间内，返回NaN
```

`["1", "2", "3"].map(parseInt)`
等价于
`["1", "2", "3"].map((item,index) => parseInt(item, index)); //[1, NaN, NaN]`

## 扩展

### js设计模式
- 单例模式
- 策略模式
- 代理模式
- 迭代器模式
- 发布—订阅模式
- 命令模式
- 组合模式
- 模板方法模式
- 享元模式
- 职责链模式
- 中介者模式
- 装饰者模式
- 状态模式
- 适配器模式
- 外观模式
以上均参考：[《JavaScript中常见的十五种设计模式》](https://www.cnblogs.com/imwtr/p/9451129.html)


### 常见兼容性问题？
- 1、事件对象兼容
> e = e || window.event;
- 2、阻止事件冒泡兼容 

> event.stopPropagation? event.stopPropagation():event.cancelBubble=true;
- 3、阻止默认行为兼容
> evt.preventDefault?evt.preventDefault():evt.returnValue=false;
- 4、事件监听兼容
> addEventListener  ? addEventListener  : attachEvent()
> removeEventListener() ? removeEventListener() : detachEvent()
- 5、事件目标对象兼容
> var src = event.target || event.srcElement;

### JS为什么要区分微任务和宏任务
1、js是单线程的，但是分同步异步
2、微任务和宏任务皆为异步任务，它们都属于一个队列
3、宏任务一般是：script，setTimeout，setInterval、setImmediate
4、微任务：原生Promise
5、遇到微任务，先执行微任务，执行完后如果没有微任务，就执行下一个宏任务，如果有微任务，就按顺序一个一个执行微任务

---
[前端高频手撕算法题36道](https://mp.weixin.qq.com/s?__biz=MzIxMjExNzQxMQ==&mid=2247484353&idx=1&sn=f00f78052b30d16497cbba10bd39bb1d&chksm=974bb10da03c381bca279aaf8a317b98e119d00b5696691f53978d39518a2231c15d4a2ca05e)

<hr/>
