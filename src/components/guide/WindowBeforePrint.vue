<template>
    <div>
        监听 <input type="checkbox" v-model="listened">
    </div>
</template>

<script>
export default {
    name: "WindowBeforePrint",
    data () {
        return {
            listened: false
        }
    },
    mounted () {
        window.addEventListener("beforeprint", (event) => {
            if (this.listened) {
                document.title = "打印开始，准备点什么";
            }
            console.log('beforeprint', event);
        });

        window.addEventListener("afterprint", (event) => {
            if (this.listened) {
                document.title = "打印完成，做点什么";
            }
            console.log('打印完成', event);
        });
    }
}
</script>