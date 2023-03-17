<template>
 <el-card class="mt-20 box-card">
        <template #header>
            <div :style="{ backgroundColor: '#' + hex, height: '50px' }">
            </div>
        </template>

        <el-form ref="form" :model="form" label-width="40px">
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="Hex">
                        <el-input v-model="hex" @input="valueChangeHandler">
                            <template slot="prepend"># | 0x</template>
                        </el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="8">
                    <el-form-item label="RGB">
                        <el-input :value="rgb"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="R">
                        <el-input :value="form.R"> </el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="8">
                    <el-form-item label="G">
                        <el-input :value="form.G"> </el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="8">
                    <el-form-item label="B">
                        <el-input :value="form.B"> </el-input>
                    </el-form-item>
                </el-col>


            </el-row>
        </el-form>
    </el-card>
</template>
<script>
import {hex2rgb} from "@/utils/ColorConvert";
export default {
    name: "ColorHexToRGB",
    data() {
        return {
            hex: "000000",
            value: "",
            form: {
                R: 0,
                G: 0,
                B: 0,
            },
        };
    },
    computed: {
        rgb() {
            return [this.form.R, this.form.G, this.form.B].join(", ");
        },
    },
    methods: {
        valueChangeHandler() {
            const value = hex2rgb("#" + this.hex);
            if (value instanceof Array) {
                this.form.R = value[0];
                this.form.G = value[1];
                this.form.B = value[2];
            } else {
                this.form.R = "-";
                this.form.G = "-";
                this.form.B = "-";
            }
        },
    },
};
</script>