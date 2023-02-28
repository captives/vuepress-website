<template>
    <ParentLayout>
        <template #sidebar>
            <span></span>
        </template>
        <template #page>
            <main class="page-404">
                <div class="theme-default-content">
                    <h1></h1>
                    <Lottie class="lottie" value="/assets/lottie/lf20_rz0hyab1.json"></Lottie>
                    <h6>{{desc}}</h6>
                </div>
            </main>
        </template>
    </ParentLayout>
</template>
<script>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
import Lottie from './../components/Lottie.vue';
let list = [
    "页面找不到，那肯定是丢了呀~~~",
    "可以错过我，不可以错过沿途的风景~~~",
    "莫失望~~, 沿途的风景也很美丽·······"
];

export default {
    name: "404",
    components: { ParentLayout, Lottie },
    computed: {
        desc () {
            return list[Math.floor(Math.random() * list.length)];
        }
    }
};
</script>
<style lang="scss" scoped>
.page {
    &-404 {
        text-align: center;
    }
}
h1 {
    padding: 0;
    min-height: 5rem;
}
.footer {
    padding: 40px 0;
    text-align: center;
}
</style>