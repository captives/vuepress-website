# 绘制图形 drawImage


**drawImage(image: CanvasImageSource, ...)**
`CanvasImageSource`是一个辅助类型，它不是一个接口，也没有对象实现它。

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```


描述下面类型的任何一个对象

- **[CSSImageValue](https://developer.mozilla.org/en-US/docs/Web/API/CSSImageValue)**
:::warning 实验性：
实验中的产品
:::

- **[HTMLImageElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement)**
HTML中常用的标签元素，可以是页面中的DOM`<img>`对象，也可以是内存中创建的IMG`Image`对象。


- SVGImageElement
- HTMLVideoElement
- HTMLCanvasElement
- ImageBitmap
- OffscreenCanvas


## 绘制视频(HTMLVideoElement)

```js
if (context && videoElement instanceof HTMLVideoElement) {
    context.clearRect(0, 0, videoElement.offsetWidth, videoElement.offsetHeight);
    context.drawImage(videoElement, 0, 0, videoElement.offsetWidth, videoElement.offsetHeight);
}
```
:::: code-group
::: code-group-item 示例
<DrawVideo></DrawVideo>
:::
::: code-group-item 源码
@[code](@src/views/canvas/DrawVideo.vue)
:::
::::



<script lang="ts" setup>
    import DrawVideo from '@/views/canvas/DrawVideo.vue';
</script>