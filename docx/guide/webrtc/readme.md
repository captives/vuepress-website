# WebRTC 媒体服务

# 获取设备列表



## WebRTC录制 
### MediaRecorder
`MediaRecorder`是 *MediaStream Recording API*提供的用来进行媒体轻松录制的接口, 他需要通过调用 `MediaRecorder()`构造方法进行实例化.
```js
var mediaRecorder = new MediaRecorder(stream[, options]);
```
创建一个新的MediaRecorder对象,对指定的MediaStream 对象进行录制,支持的配置项包括设置容器的MIME 类型 (例如"video/webm" 或者 "video/mp4")和音频及视频的码率或者二者同用一个码率。MediaStream将要录制的流. 它可以是来自于使用
`navigator.mediaDevices.getUserMedia()`创建的流或者来自于 `<audio>`, `<video>` 以及 `<canvas>` DOM元素.

检查是否支持指定编码
```js
var options = { mimeType: 'video/webm;codecs=h264' };
if (!MediaRecorder.isTypeSupported(options.mimeType)) {
    console.log(options.mimeType + ' is not Supported');
    options = { mimeType: 'video/webm;codecs=vp9' };

    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.log(options.mimeType + ' is not Supported');
        options = { mimeType: 'video/webm;codecs=vp8' };

        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
            console.log(options.mimeType + ' is not Supported');
            options = { mimeType: 'video/webm' };

            if (!MediaRecorder.isTypeSupported(options.mimeType)) {
                console.log(options.mimeType + ' is not Supported');
                options = { mimeType: '' };
            }
        }
    }
}
```
创建录制对象
```js
try {
    console.log('Recorder', options);
    this.mediaRecorder = new MediaRecorder(stream, options);
} catch (e) {
    alert('Exception while creating MediaRecorder: ' + e + '. mimeType: ' + options.mimeType);
}

console.log('Created MediaRecorder', this.mediaRecorder, 'with options', options);
this.mediaRecorder.onstart = (event) => {
    this.recording = true;
    //......
};

this.mediaRecorder.onstop = (event) => {
    this.recording = false;
    //......
    console.log('Recorder stopped: ', event);
};

this.mediaRecorder.ondataavailable = (event) => {
    //......
};

this.mediaRecorder.onerror = event => {
    this.error = event;
}

this.mediaRecorder.start(200); // 数据收集200ms
console.log('MediaRecorder started', this.mediaRecorder);
```

停止录制
```js
if (this.mediaRecorder && this.recording) {
    this.mediaRecorder.stop();
}
```
### FileReader
FileReader对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。[查看更多](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader)
```js
var reader = new FileReader();
```
读取MediaRecorder缓冲区数据发送到服务器
```js
this.mediaRecorder.ondataavailable = (event) => {
    if (event.data && event.data.size > 0) {
        const reader = new FileReader();
        reader.onerror = error => {
            console.error('媒体流转换Binary数据失败', error);
        }

        reader.onloadend = () => {
            ws.send({
                event: "REC_BLOB",
                blob: reader.result,
                uid: "user.id"
            });
        }

        reader.readAsBinaryString(event.data);
    }
};  
```
### fs.createWriteStream
```js
fs.createWriteStream(path[, options])
```
创建一个写入的文件流, 如果 options 是字符串，则它指定字符编码。
接收客户端发送的缓冲数据, 进行写入文件
```js
const stream = streams[ws.uid];
switch (json.event) {
    case "register":
        console.log('received: %s', message);
        ws.uid = Date.now();
        ws.fileName = [json.name, "_", ws.uid, ".webm"].join('');
        break;
    case "START_REC_BLOB":
        const _path = path.join(__dirname, ws.fileName);
        streams[ws.uid] = fs.createWriteStream(_path, 'binary');
        break;
    case "REC_BLOB":
        if (stream) {
            console.debug('Writing ' + json.blob.length + ' bytes to ' + stream.path)
            stream.write(json.blob, 'binary');
        }
        break;
    case "STOP_REC_BLOB":
        if (stream) {
            setTimeout(() => {
                console.debug('录制已经停止', stream.path);
                stream.end();
            }, 1000);
        }
        break;
};
```