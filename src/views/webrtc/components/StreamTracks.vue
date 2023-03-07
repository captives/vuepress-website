<template>
  <el-table :data="tableData"
            stripe>
    <el-table-column label="媒体流ID">
      <el-table-column label="名称">
        <template #default="{ row }">
          {{ row.label.substr(0, 8) }}...
        </template>
      </el-table-column>
    </el-table-column>

    <el-table-column :label="value && value.id">
      <el-table-column prop="kind"
                       label="类型"></el-table-column>
      <el-table-column label="id">
        <template #default="{ row }">
          {{ row.id.substr(0, 8) }}...
        </template>
      </el-table-column>
      <el-table-column label="state">
        <template #default="{ row }">{{ row.readyState }}</template>
      </el-table-column>
      <el-table-column label="enabled">
        <template #default="{ row }">{{ row.enabled }}</template>
      </el-table-column>
      <el-table-column label="muted">
        <template #default="{ row }">{{ row.muted }}</template>
      </el-table-column>
      <el-table-column v-if="edited"
                       label="操作">
        <template #default="{ row }">
          <el-tooltip class="item"
                      effect="dark"
                      content="移除轨道"
                      placement="left">
            <el-link class="el-icon-minus"
                     @click="removeTrack(scope.row)"></el-link>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column type="expand">
        <template #default="{ row }">
          <el-main class="table-expand">
            <h4>Base:</h4>
            <el-row>
              <el-col :span="12">label: {{ row.label }}</el-col>
              <el-col :span="12">ID: {{ row.id }}</el-col>
            </el-row>
            <h4>Constraints:</h4>
            <el-row>
              <el-col v-for="(item, key) in row.getConstraints()"
                      :key="key"
                      :span="12">{{ key }} :
                {{ item }}</el-col>
            </el-row>
            <h4>Settings:</h4>
            <el-row>
              <el-col v-for="(item, key) in row.getSettings()"
                      :key="key"
                      :span="12">{{ key }} :
                {{ item }}</el-col>
            </el-row>
            <h4>Capabilities:</h4>
            <el-row>
              <el-col v-for="(item, key) in row.getCapabilities()"
                      :key="key"
                      :span="12">{{ key }} :
                {{ item }}</el-col>
            </el-row>
          </el-main>
        </template>
      </el-table-column>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: "StreamTracks",
  props: {
    value: {
      type: MediaStream,
      default: null,
    },
    edited: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      id: null,
      tableData: [],
    };
  },
  watch: {
    value (stream) {
      this.id = stream.id;
      this.tableData = [];
      this.tableData = this.tableData.concat(
        stream.getVideoTracks(),
        stream.getAudioTracks()
      );
    },
  },
  methods: {
    removeTrack (track) {
      if (this.value)
      {
        track.stop();
        this.value.removeTrack(track);
        console.log("remove track id", track.label, track.id);
        this.$emit("input", this.value);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.el-table {
  ::v-deep(.el-table__expanded-cell) {
    padding: 0px 20px;

    &:hover {
      background: #eee !important;
    }

    h4 {
      margin-top: 5;
      margin-bottom: 10px;
    }

    .el-col-12 {
      overflow-wrap: break-word;
      padding-left: 20px;
    }
  }
}
</style>
