# ES6 学习笔记

## 符号
- `@`		at
- `|`		or
- `&`		and
- `.`		dot
- `/`		divide, slash
- `\`		backslash
- `-`		dash, minus(减号/负号)
- `+`		plus
- `*`		multiply,asterisk 
- `=`		equal
- `?` 		question mark
- `!` 		exclamation
- `:`		colon
- `...`		ellipsis
- `_`		underline
- `,`		comma
- `^`		caret
- `~`		tilde
- `()`		bracket
- `[]`		square bracket


## 运算符
### 按位取反运算符`~` 

- `~[string | number| null | undefined]`

示例：
```js
~'a'			//0
~null			//0
~undefined		//0
~0				//-1
~~0				//0
~1.555555 		// -1
~-1.555555 		// 1;
```
### 求幂表达式 `**` 
返回基数`base`的指数`exponent`次幂,等价于`Math.pow(base, exponent)`：

- `base**exponent	=== Math.pow(base, exponent)`

```js
2**2		//4
2**3		//8
2**10		//1024

(-3)**2		// 9
(-3)**3		// -27
```


## var/let/const
`var`命令会发生“变量提升”现象，即变量可以在声明之前使用，值为`undefined`。
```js
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
```

如果使用`let`，声明的变量仅在块级作用域`{}`内有效, 且不允许在相同作用域内，重复声明同一个变量。

```js
for (var i = 0; i < 10; i++) {
    setTimeout(()=>{
        console.log('i = ', i);
    });
}

// 9, 9, 9, 9, 9, 9, 9, 9, 9, 9
```

```js
for (let i = 0; i < 10; i++) {
    setTimeout(()=>{
        console.log('i = ', i);
    });
}
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```
`const`是只读常量，一旦赋值，将不能更改；但对象可以更改对象的属性。
```js
const a = 5;
a = 6; //error

const a = { a:1, b:2 };
a = { c:22 };//error
a.a = 3 //a = 3
```

## 对象解构


