<template>
    <el-alert :title="prefix" type="error">
        {{dateString}}
    </el-alert>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    name: "DateString",
    props: {
        value: [String, Number, Date, null]
    },
    computed: {
        dateString() {
            return new Date(this.value).toLocaleString();
        }
    }
})
//@ts-ignore;
export default class LocalDateString extends Vue {
    private prefix: string = "本地时间：";
}
</script>