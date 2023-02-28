<template>
    <div>
       <b> {{msg}} </b>
        <slot></slot>
    </div>
</template>
<script setup>
const msg = "这是全局自定义组件" + (new Date().toLocaleDateString())
</script>