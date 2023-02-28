<template>
  <el-main>
    <el-table :data="list" stripe style="width: 100%">
      <el-table-column prop="label" label="名称"> </el-table-column>
      <el-table-column prop="kind" label="类型"> </el-table-column>
      <el-table-column prop="deviceId" label="Device ID"> </el-table-column>
    </el-table>
    <el-tag v-if="error" class="error" type="danger">{{ error }}</el-tag>
  </el-main>
</template>

<script lang="ts" setup>
import { useDevices } from '@/hooks/webrtc';

const { list, error } = useDevices();

</script>