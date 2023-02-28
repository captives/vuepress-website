<template>
    <div>
        监听 <input type="checkbox" v-model="listened">
        <ul>
            <li v-for="(item, index) in list" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "WindowStorage",
    data () {
        return {
            listened: false,
            list: []
        }
    },
    mounted () {
        window.addEventListener("storage", (event) => {
            if (this.listened) {
                this.list.push(event.key + ' 键已经从 ' + event.oldValue + ' 改变为 ' + event.newValue + '.');
                console.log("其它页面更新存储", event.key + ' 键已经从 ' + event.oldValue + ' 改变为 ' + event.newValue + '.');
            }
        });
    }
}
</script>