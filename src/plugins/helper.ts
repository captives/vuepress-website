/**
 * 格式化字节大小
 * @param number size 字节数
 * @param string fractionDigits 小数位
 * @return string 格式化后的带单位的大小
 */
export function formatBytes(size: number, fractionDigits = 2) {
    const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB", "BB"];
    let suffix = units[0];

    for (let i = 1; size >= 1024 && i < units.length; i += 1) {
        size /= 1024;
        suffix = units[i];
    }

    const value = size.toFixed(fractionDigits);
    return (parseInt(value, 10) === Number(value) ? parseInt(value, 10) : value) + suffix;
}

export function loadScript(url: string) {
    console.log("insert url", url);
    return new Promise((resolve, reject) => {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        document.body.appendChild(script);
        script.onload = function () {
            resolve(url);
        };
        script.onerror = function (err) {
            reject(err);
        };
    });
}

export function fetch(url: string) {
    let xhr: any = null;
    if ("ActiveXObject" in window) {
        //@ts-ignore;
        xhr = new window.ActiveXObject("Microsoft.XMLHTTP");
    } else if ("XMLHttpRequest" in window) {
        xhr = new window.XMLHttpRequest();
    }

    return new Promise((resolve, reject) => {
        xhr.open("get", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                    resolve(xhr.responseText);
                }
                reject();
            }
        };

        xhr.onerror = (e: ErrorEvent) => {
            console.log("Fetch Error", url, e);
            reject();
        };
        xhr.send();
    });
}

export default {
    formatBytes,
    loadScript,
    appendScript: loadScript,
    fetch,
};
