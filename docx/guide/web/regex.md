# 常用正则表达语句

## 高亮段落内关键字

```js
const reg = new RegExp(`(${keyword})`, 'ig');
const html = str.replace(reg, "<span style='color:#F43874;'>$1</span>");
```
