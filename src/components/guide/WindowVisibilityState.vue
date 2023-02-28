<template>
    <div>
        监听 <input type="checkbox" v-model="listened">
    </div>
</template>

<script>
export default {
    name: "WindowVisibilityState",
    data () {
        return {
            listened: false
        }
    },
    methods: {
        changeHandler () {
            if (this.listened) {
                if (document.visibilityState == "hidden") {
                    document.title = "选项卡被隐藏";
                } else {
                    document.title = "选项卡被激活";
                }
            }
        }
    },
    mounted () {
        document.addEventListener("visibilitychange", this.changeHandler);
    }
}
</script>