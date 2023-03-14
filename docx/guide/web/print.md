# Web打印处理

## 打印
```js
if (typeof window.print === "function") {
    window.print();
} else {
    alert("您的设备不支持打印操作");
}
```

## 监听事件
```js
var beforePrint = function(){
    console.log('beforePrint')
};

var afterPrint = function(){
    console.log('afterPrint')
}

if(window.matchMedia){
    var mediaQueryList = window.matchMedia('print');
    mediaQueryList.addListener(function(mql){
        if(mql.matches){
            beforePrint()
        }else{
            afterPrint();
        }
    });
}
```

## 样式
```css
/**打印时的样式**/
@media print {}{
    h1 {
      color: black;
    }
}

/**正常时的样式**/
@media screen {}{
    h1 {
      color: black;
    }
}
```
