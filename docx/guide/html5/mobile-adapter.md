# 移动端适配处理

```js
function Adapter (config) {
    this.config = config;
    return this;
}

Adapter.prototype = {
    // TODO: 根据适配策略适配屏幕
    reset: function () {
        var baseline =
            this.config &&
                this.config.baseline &&
                !isNaN(this.config.baseline) ?
                this.config.baseline :
                750;
        // 策略1: 小于750动态计算缩放，大于750页面不再放大
        var logicFontSize = (Math.min(document.documentElement.clientWidth, baseline) / baseline) * 100;
        
        document.documentElement.style.fontSize = logicFontSize + 'px';

        // 缩放补偿
        var actualFontSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
        var scaleRate = logicFontSize / actualFontSize;
        if (scaleRate === 1) {
            return;
        }
        document.documentElement.style.fontSize = logicFontSize * scaleRate + 'px';
    }
};

/*
 * 通过ADAPTER_CONF设置屏幕基准
 * window.ADAPTER_CONF = {
 *      baseline: 750
 * };
 */
window.Adapter = new Adapter(window.ADAPTER_CONF || {});

window.Adapter.reset();

window.onload = function () {
    window.Adapter.reset();
};

window.onresize = function () {
    window.Adapter.reset();
};
```