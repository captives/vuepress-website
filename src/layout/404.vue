<template>
    <div class="detail">
        <h1>404</h1>
        <p class="desc">查看的内容不存在, 即将跳转到首页.....</p>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { open } from '@/router';
export default defineComponent({
    name: "404",
    mounted() {
        setTimeout(() => {
            open({ path: "/" }, "_self", true);
        }, 3000);
    }
})
</script>
<style lang="scss" scoped>
.detail {
    font-size: 20px;
    text-align: center;

    h1 {
        font-size: 2cm;
    }
}
</style>