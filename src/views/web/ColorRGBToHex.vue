<template>
    <el-card class="mt-20 box-card">
        <template #header>
            <div :style="{ backgroundColor: value, height: '50px' }">
            </div>
        </template>
        <el-form ref="form" :model="form" label-width="40px" class="mt-10">
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="R">
                        <el-input-number v-model="form.R" :min="0" :max="255"> </el-input-number>
                    </el-form-item>
                </el-col>

                <el-col :span="8">
                    <el-form-item label="G">
                        <el-input-number v-model="form.G" :min="0" :max="255"> </el-input-number>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="B">
                        <el-input-number v-model="form.B" :min="0" :max="255"> </el-input-number>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="RGB">
                        <el-input v-model="rgb"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="Hex">
                        <el-input :value="value"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="Hex">
                        <el-input :value="hex"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </el-card>
</template>
<script>
import {rgb2hex} from "@/utils/ColorConvert";
export default {
    name: "ColorRGBToHex",
    data() {
        return {
            form: {
                R: 0,
                G: 0,
                B: 0,
            },
        };
    },
    computed: {
        rgb: {
            set(value) {
                let list = value.split(",");
                if (list.length < 3) {
                    list = [0, 0, 0];
                }

                this.form.R = Number(list[0].toString().trim()) || 0;
                this.form.G = Number(list[1].toString().trim()) || 0;
                this.form.B = Number(list[2].toString().trim()) || 0;
            },
            get() {
                return [this.form.R, this.form.G, this.form.B].join(", ");
            },
        },
        value() {
            return rgb2hex("RGB(" + this.rgb + ")").toUpperCase();
        },
        hex() {
            return this.value.replace("#", "0x");
        },
    },
};
</script>