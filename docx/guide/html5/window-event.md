# window 浏览器页面事件

## 浏览器选项卡获取焦点和失去焦点

<WindowVisibilityState></WindowVisibilityState>

```js
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState == "hidden") {
        document.title = "选项卡被隐藏";
    }else{
        document.title = "选项卡被激活";
    }
});
```

## 浏览器选项卡关闭

<WindowEventChange></WindowEventChange>

```js
window.addEventListener("beforeunload", (e) => {
    if (this.listened) {
        var confirmationMessage = "要记得保存！你确定要离开我吗？";
        (e || window.event).returnValue = confirmationMessage; // 兼容 Gecko + IE
        return confirmationMessage; // 兼容 Gecko + Webkit, Safari, Chrome
    }
});
```

## 页面开始打印/打印结束后事件

<WindowBeforePrint></WindowBeforePrint>

```js
window.addEventListener("beforeprint", function (event) {
    console.log('准备打印', event);
});

window.addEventListener("afterprint", function (event) {
    console.log('打印完成/取消', event);
});
```

## 其它页面更改存储触发

<WindowEventStorage></WindowEventStorage>

```js
window.addEventListener("storage", function (event) {
    console.log("其它页面更新存储", event.key + ' 键已经从 ' + event.oldValue + ' 改变为 ' + event.newValue + '.');
});
```