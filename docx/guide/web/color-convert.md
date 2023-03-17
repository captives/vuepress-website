# JavaScript 色彩转换

JavaScript颜色转换的核心就是进制间的转换。RGB格式其实就是十进制表示法，所以，十六进制颜色与RGB颜色的转换就是十六进制与十进制之间的转换。

十六进制转换为十进制相对容易些，核心代码如下示例：`parseInt("0xFF")`，其结果就是255，`0x`就表明当前是16进制，由于 **parseInt** 后面无参数，默认就是转换为10进制了。

十进制转换为16进制，核心代码如下：
```js 
var num=255;
num.toString(16);
```
其结果是`FF`。`16`表示数值转换为16进制字符串。

<script lang="ts" setup>
import { rgb2hex, hex2rgb } from "@/utils/ColorConvert";
import ColorRGBToHex from "@/views/web/ColorRGBToHex.vue";
import ColorHexToRGB from "@/views/web/ColorHexToRGB.vue";

</script>    

## RGB颜色转换为十六进制

<ColorRGBToHex></ColorRGBToHex>

:::details 源码
{{rgb2hex.toString()}}
:::

## 十六进制颜色转换为RGB

<ColorHexToRGB></ColorHexToRGB>

:::details 源码
{{hex2rgb.toString()}}
:::
