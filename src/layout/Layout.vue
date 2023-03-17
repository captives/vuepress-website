<!-- 框架视图 -->
<template>
    <!-- <Auth> -->
        <!-- <Sidebar :list="list"></Sidebar> -->
        <!-- <el-container direction="vertical" v-cloak> -->
        <router-view name="header"></router-view>
        <!-- <el-main class="content" :class="[$route.meta.class]"> -->
        <router-view></router-view>
        <!-- </el-main> -->
        <!-- </el-container> -->
    <!-- </Auth> -->
</template>
<script lang="ts" setup>
import Auth from './Auth.vue';
// import Sidebar from '@/components/Sidebar.vue';
// import { navData } from '@/config';
// const list: Array<any> = navData;
</script>
<style lang="scss" scoped>
.content {
    padding: var(--page-padding);
    padding-top: 10px;

    ::v-deep(.el-main) {
        padding: 0;
    }

    &.el-card {
        padding: 0;
        margin: var(--page-padding);
        margin-top: calc(var(--page-padding) - 10px);
        overflow: auto;
    }
}
</style>