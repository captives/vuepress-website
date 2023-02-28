# 下载哔哩哔哩视频

## 获取视频系列地址

```console
list = Array.from(document.querySelectorAll('#multi_page ul li a')).map(a=> ({title: a.title, url: a.href}));
```

## 下载视频

- 访问下载器页面
 https://bilibili.iiilab.com/
- 打开控制台，粘贴方法

```js

//获取
function send(item) {
  return new Promise(async (resolve, reject) => {
    const link = item.url;
    const e = Math.random().toString(10).substring(2);
    const i = tool.cal(link + "@" + e).toString(10);
    console.log("i", i, tool.uc(link), link);
    const response = await fetch("https://bilibili.iiilab.com/media", {
      method: "POST",
      body: JSON.stringify({
        link: tool.encode(link) + "@" + e + "@" + i,
      }),
      headers: {
        "Content-Type": "application/json",
        "accept-patch": tool.uc(link),
        cookie:
          "PHPSESSID=dy5e3pauzg8qr838klo2f6v1guy1odvo; lab0626=1; _ga=GA1.1.2060045415.1668506851; _ga_5FQW6JQQL2=GS1.1.1668506851.1.1.1668507612.0.0.0",
        origin: "https://bilibili.iiilab.com",
        referer: "https://bilibili.iiilab.com/",
        "sec-ch-ua": `"Microsoft Edge";v="107", "Chromium";v="107", "Not=A?Brand";v="24"`,
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "Windows",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.35",
      },
    });
    const { code, data } = await response.json();
    if (code === 200) {
      const result = JSON.parse(tool.decode(data));
      console.log(result);
      if (result.medias.length) {
        item.src = result.medias[0].resource_url;
      }
      resolve(item);
    } else {
      console.log(code, data);
      reject(null);
    }
  });
}

/**
 * 同源文件，可以直接下载
 */
function download(url, name) {
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", name);
  link.setAttribute("target", "_blank");
  document.documentElement.appendChild(link);
  setTimeout(() => {
    link.click();
    link.parentNode?.removeChild(link);
  });
}
/***
 * 非同源资源，需要预下载
 */
function preDownload(url, name) {
  return new Promise((resolve, reject) => {
    var x = new XMLHttpRequest();
    x.open("GET", url, true);
    x.responseType = "blob";
    x.onload = function (e) {
      //会创建一个 DOMString，其中包含一个表示参数中给出的对象的URL。这个 URL 的生命周期和创建它的窗口中的 document 绑定。这个新的URL 对象表示指定的 File 对象或 Blob 对象。
      var url = window.URL.createObjectURL(x.response);
      download(url, name);
      resolve();
    };
    x.onabort = x.onerror = x.ontimeout = function(err){
      console.log('XXXX ---', err);
      reject();
    }
    x.send();
  });
}

var index = 0;
function fetchFile() {
  if (list[index]) {
    send(list[index])
      .then((item) => preDownload(item.src, item.title))
      .then(() => {
        index++;
        fetchFile();
      })
      .catch(() => {
        fetchFile();
      });
  } else {
    console.log("--------------------- end --------------------");
  }
}
```
-  开始下载
```js
fetchFile();
```