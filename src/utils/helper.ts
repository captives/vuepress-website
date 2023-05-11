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


export function loadScriptContent(url: string) {
    console.log('insert url', url);
    return new Promise((resolve) => {
        var xhr = new XMLHttpRequest;
        xhr.open('get', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                    resolve(xhr.responseText);
                }
            }
        };
        xhr.send(null);
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


export const fileToBlob = (file: File, callback: (data: string | Blob | ArrayBuffer | null) => void) => {
    let blob: string | Blob | ArrayBuffer | null = null;
    let reader = new FileReader();
    reader.addEventListener('load', (e: ProgressEvent<FileReader>) => {
        if (e.target?.result && typeof e.target?.result === 'object') {
            blob = new Blob([e.target.result], { type: file.type });
        } else {
            blob = e.target?.result || null;
        }
        callback(blob);
    });
    reader.readAsArrayBuffer(file);
}

export const fileToBase64 = (file: File, callback: (data: string | ArrayBuffer | null) => void) => {
    let reader = new FileReader();
    reader.addEventListener('load', (e) => {
        callback(reader.result);
    })
    reader.readAsDataURL(file);
}

export const downloadFile = (url: string, fileName: string, callback: () => void) => {
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url + "?v" + Date.now();
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        document.body.removeChild(a);
        callback && callback();
    }, 100);
}

/**
 * base 64位图转blob
 * @param base64 
 * @returns 
 */
export const base64ToBlob = (base64: string) => {
    var byteCharacters = window.atob(base64.replace(/^data:image\/(png|jpeg|jpg);base64,/, ""));
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: undefined });
}

/**
 * 下载base64位图
 * @param base64 
 * @param name 文件名
 * @param callback 下载后回调
 */
export const downloadbase64Image = (base64: string, name: string = 'image.jpg', callback: () => void) => {
    const blob = base64ToBlob(base64);
    downloadFile(URL.createObjectURL(blob), name, callback);
};

export default {
    formatBytes,
    loadScript,
    appendScript: loadScript,
    fetch,
    fileToBlob,
    fileToBase64,
    base64ToBlob,
    downloadFile,
    downloadbase64Image
};

// P1: 获取页面的存储数据
// data = JSON.stringify({localStorage, sessionStorage});

// P2: 恢复页面的存储数据
// login = JSON.parse(data);
// for(store in login){
//     for(key in login[store]){
//         window[store].setItem(key, login[store][key]);
//     }
// }
