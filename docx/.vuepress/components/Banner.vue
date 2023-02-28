<template>
    <div class="banner">
        <slot>横幅广告</slot>
    </div>
</template>
<script setup>
</script>

<style lang="scss" scoped>
.banner {
    position: fixed;
    z-index: 1000;
    top: 0;
    width: 100%;
    background: var(--c-brand);
    text-align: center;
    height: 60px;
    line-height: 60px;
    color: #FFF;

    ~ ::v-deep(.theme-container) {
        margin-top: 60px;

        .sidebar {
            top: 60px;
        }

        .page {
            padding-top:0;
            // banner 出现时候的样式
        }
    }
}
</style>