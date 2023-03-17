<template>
    <div class="p-20">
        <span>服务器时间: <b>{{ time }}</b></span>
        <span class="ml-40">通知消息：<b>{{ notice }}</b></span>
        <el-button v-if="connected" class="ml-40" type="danger" @click="stopHandler">关闭</el-button>
        <el-button v-else class="ml-40" type="primary" @click="getTimeHandler">订阅</el-button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const time = ref<string>('---');
const notice = ref<string>('---');
const connected = ref<boolean>(false);
let eventSource: EventSource;

const getTimeHandler = () => {
    if (eventSource && eventSource.readyState === 1) {
        stopHandler();
    }

    eventSource = new EventSource('http://localhost:2010/time');
    eventSource.addEventListener('open', () => {
        console.log('event source 已经连接');
        connected.value = true;
    });

    eventSource.addEventListener('error', (err) => {
        console.log('error', err);
        connected.value = false;
    });

    //通用消息
    eventSource.addEventListener('message', ({ data }: any) => {
        time.value = JSON.parse(data);
    });

    //自定义消息事件
    eventSource.addEventListener('notice', ({ data }: any) => {
        notice.value = JSON.parse(data);
    });
}

const stopHandler = () => {
    if (eventSource) {
        // 如果存在，则关闭连接，并且设置 readyState 属性为 CLOSED。
        // 如果连接已经被关闭，此方法不会再进行任何操作。
        eventSource.close();
        time.value = "----";
        notice.value = "----";
        connected.value = false;
    }
}
</script>
