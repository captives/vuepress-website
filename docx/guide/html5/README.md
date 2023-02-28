---
home: true
heroText: Web
heroImage: /assets/images/browser_960_720.png
---

## Web API

1. [Intersection Observer API](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)
提供了一种异步检测目标元素与祖先元素或 viewport 相交情况变化的方法。
过去，要检测一个元素是否可见或者两个元素是否相交并不容易，很多解决办法不可靠或性能很差。然而，随着互联网的发展，这种需求却与日俱增，比如，下面这些情况都需要用到相交检测：

2. [Fetch API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)
提供了一个获取资源的接口（包括跨域请求）。任何使用过 XMLHttpRequest 的人都能轻松上手，而且新的 API 提供了更强大和灵活的功能集。

> 获取随机颜色
```js
 "#" + Math.floor(0xFFFFFF * Math.random()).toString(16)
```

<style lang="scss">
    header.hero{
        min-height: 100vh;
    }
</style>