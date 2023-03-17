# SSE (Server-Sent Events)

特点
- 仅从服务器向客户端实现单向实时通信。
- 实现简单，基于HTTP协议。
- 浏览器端有断线重连功能。
- 支持用户自定义消息类型。
- 用来传送文本， 二进制需要编码。

## Web端实现

`EventSource`是服务器推送的一个网络事件接口。一个`EventSource`实例会对HTTP服务开启一个持久化的连接，以`text/event-stream`格式发送事件, 会一直保持开启直到被要求关闭。

与`WebSocket`,不同的是，服务端推送是单向的。数据信息被单向从服务端到客户端分发. 当不需要以消息形式将数据从客户端发送到服务器时，这使它们成为绝佳的选择。例如，对于处理社交媒体状态更新，新闻提要或将数据传递到客户端存储机制（如`IndexedDB`或`Web`存储）之类的，`EventSource`无疑是一个有效方案。

<script setup>
import EventSource from '@/views/web/EventSource.vue';
</script>

<EventSource></EventSource>