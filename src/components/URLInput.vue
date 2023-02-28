<template>
  <el-input v-model="text"
            placeholder="请输入内容"
            clearable
            v-bind="$attrs">
    <template #prepend>
      <el-select v-if="list.length"
                 v-model="selectValue"
                 placeholder="请选择"
                 @change="changeHandler">
        <el-option v-for="item in list"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value"></el-option>
      </el-select>
      <span v-else>URL：</span>
    </template>
    <template #append>
      <el-button type="success"
                 :icon="Position"
                 @click="requestURL">
      </el-button>
    </template>
  </el-input>
</template>
<script lang="ts" setup>
import { toRefs, ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus'
import { Position } from '@element-plus/icons-vue';

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void,
  (e: "change", value: string): void
}>();

const props = withDefaults(defineProps<{
  modelValue?: string,
  list: Array<any>,
}>(), {
  modelValue: "",
  list: () => []
});
const { modelValue, list } = toRefs(props);
const text = ref(modelValue.value);
const selectValue = ref();

const changeHandler = (event) => {
  text.value = selectValue.value;
}
const requestURL = () => {
  if (text.value) {
    emit("update:modelValue", text.value);
    emit("change", selectValue.value);
  } else {
    ElMessage({ type: "warning", message: "请输入内容" });
  }
}

onMounted(() => {
  if (list.value.length) {
    text.value = list.value[0].value;
    selectValue.value = text.value;
    emit("update:modelValue", text.value);
  }
});
</script>

<style lang="scss" scoped>
.el-input {
  ::v-deep(.el-input-group__append) {
    color: #fff;
    font-size: 18px;
    background-color: #409eff;
    border-color: #409eff;

    &:hover {
      background: #66b1ff;
      border-color: #66b1ff;
    }
  }

  .el-select {
    width: 200px;
  }
}
</style>
