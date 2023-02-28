<template>
    <div class="lottie" ref="lottieDiv"></div>
</template>
<script>
// 更多资源下载 lottiefiles.com/
import lottie from "lottie-web";
export default {
    name: "lottie",
    props: {
        value: { type: String },
    },
    watch: {
        value (val) {
            this.load(val);
        },
    },
    methods: {
        load (val) {
            lottie.destroy();
            lottie.loadAnimation({
                container: this.$refs.lottieDiv,
                renderer: "svg",
                loop: true,
                autoplay: true,
                path: this.$withBase(val),
            });
        }
    },
    mounted () {
        this.load(this.value);
    },
};
</script>
<style lang="scss" scoped>
.lottie {
    display: inline-block;
    width: 300px;
    height: 300px;
}
</style>
