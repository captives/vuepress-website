# js跨域资源下载

```js
function downFile(url, callback) {
            console.log("file", url);
            var x = new XMLHttpRequest();
            x.open("GET", url, true);
            x.responseType = "blob";
            x.onload = function (e) {
                console.log("onload", x.response);
                callback(window.URL.createObjectURL(x.response));
            };
            x.send();
        }

        window.run = function (index, node) {
            console.log("run", index, node);
            var url = node.getAttribute("src");
            const link = document.createElement("a");
            link.style.display = "none";
            //url.substring(url.lastIndexOf("/") + 1, url.length)//原文件名
            link.download = [index + 1, url.substring(url.lastIndexOf(".") + 1, url.length)].join(".");
            document.body.appendChild(link);
            console.log(index, url);
            setTimeout(() => {
                downFile(url, (src) => {
                    console.log("src ", src);
                    link.href = src;
                    link.click();
                    link.remove();
                });
            }, index * 500);
        };
```
示例：[站酷](https://www.zcool.com.cn)
```js
document.querySelectorAll(".reveal-work-wrap img").forEach((node, index) => run(index, node));

//复制内容到粘贴板
var input = document.createElement('textarea');
document.documentElement.appendChild(input);
input.value = '粘贴板内容';
input.select();
document.execCommand("copy");
```

<hr/>
