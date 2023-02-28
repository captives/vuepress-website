<template>
    <div>
        监听 <input type="checkbox" v-model="listened">
    </div>
</template>

<script>
export default {
    name: "WindowEventState",
    data () {
        return {
            listened: false
        }
    },
    methods: {
        changeHandler (e) {
            if (this.listened) {
                var confirmationMessage = "要记得保存！你确定要离开我吗？";
                (e || window.event).returnValue = confirmationMessage; // 兼容 Gecko + IE
                return confirmationMessage; // 兼容 Gecko + Webkit, Safari, Chrome
            }
        }
    },
    mounted () {
        window.addEventListener("beforeunload", this.changeHandler);
    }
}
</script>