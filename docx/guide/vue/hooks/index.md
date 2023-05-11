# 常用钩子合集

## 定时器useTimer

```js
export function useTimer(callback: Function, delay: number) {
    let beforeTime = Date.now();
    let tid = 0;
    const loopFunction = () => {
        if (Math.floor((Date.now() - beforeTime) / delay) > 1) {
            console.warn("校时", Date.now(), beforeTime, Math.floor((Date.now() - beforeTime) / delay));
            stop();
            start();
        } else {
            beforeTime = Date.now();
            callback && callback(tid);
        }
    }

    const start = () => {
        beforeTime = Date.now();
        tid = Number(setInterval(loopFunction, delay));
        loopFunction();
    }

    const stop = (_tid?: any) => {
        if (!!_tid) {
            clearInterval(_tid);
        } else {
            !!tid && clearInterval(tid);
        }
    }
    return { start, stop, tid }
}
```

## 字节格式化

```js
/**
 * 格式化字节大小
 * @param number size 字节数
 * @param string fractionDigits 小数位
 * @return string 格式化后的带单位的大小
 */
export function formatBytes(size: number, fractionDigits: number = 2): string {
    const units = Array('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB', 'BB');
    let suffix: string = units[0];

    for (let i = 1; size >= 2 ** 10 && i < units.length; i++) {
        size /= 2 ** 10;
        suffix = units[i];
    }

    const value = size.toFixed(fractionDigits);
    return ((~~value) === Number(value) ? (~~value) : value) + suffix;
}
```