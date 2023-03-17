<template>
    <div>
        <el-input :value="publicKey.split('-----')[2]" type="textarea" :autosize="{ minRows: 5, maxRows: 8 }">
            <template #prepend>明文 | 公钥：</template>
        </el-input>
        <el-input v-model="source" type="textarea" :autosize="{ minRows: 5, maxRows: 8 }">
        </el-input>
    </div>

    <div class=" mt-10 mb-10" style="text-align:center">
        <el-button type="success" size="small" @click="encodeHandler">加密 &gt;&gt;</el-button>
        <el-button type="danger" size="small" @click="decodeHandler"> &lt;&lt; 解密</el-button>
        <el-button type="primary" size="small" @click="signHandler">签名 &gt;&gt;</el-button>
        <el-button type="warning" size="small" @click="verifyHandler"> &lt;&lt; 验证</el-button>
    </div>

    <div>
        <el-input :value="privateKey.split('-----')[2]">
            <template #prepend>密文 | 私钥：</template>
        </el-input>
        <el-input v-model="target" type="textarea" :autosize="{ minRows: 5, maxRows: 8 }">
        </el-input>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
// 加密JS库
import JSEncrypt from 'jsencrypt';
import CryptoJS from 'crypto-js';

//公钥
const publicKey =`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCuBM0y7oi3o4vfBGZD8l4ie8C6
G9gnQkS1lPOD0khnN3/CJ3XMLqV7JM8dwKvF61LwljPIca/mRczlUyHHsOjitHF3
fWU99YHfIA4gAkIp1FSsFhTGE0rHiyKGIJ7M0apeV72c4bOYzf7P34TNUFANoiv+
ifgJ+6ZavIKt9LJxYQIDAQAB
-----END PUBLIC KEY-----`;

//私钥
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQCuBM0y7oi3o4vfBGZD8l4ie8C6G9gnQkS1lPOD0khnN3/CJ3XM
LqV7JM8dwKvF61LwljPIca/mRczlUyHHsOjitHF3fWU99YHfIA4gAkIp1FSsFhTG
E0rHiyKGIJ7M0apeV72c4bOYzf7P34TNUFANoiv+ifgJ+6ZavIKt9LJxYQIDAQAB
AoGABH11OfozpuFea4u2g8xOJ3+f8m1jf2fTVAga3Gzhl2A0OLNB89nERVAm0/Kz
u/CdfD2z6lkcm8lzRvuFJJzo9V2e1bNOGl8oWLHhJXbxMubs3zRY0PMQ5kuX83z1
PZSGlEg6AAHBbFz22CDYWBTOPRcOjPYNcd+CEg4ZRTSexK0CQQDgh9Q0lRRP2mpi
ATijB1g8HdMbo5CFVnNG35IWkT1snIIvyFUxbrnxehrpOCeB3WoXcCTIOBhNFMgs
EAd7VH7/AkEAxmia79NkC0d/TjKMONPlteu9FuZ9yQTtZfvwa3AIirneJ09SUqUi
7ZgSHSKSjqoQMewkJjYKEBJ4pqci7tlvnwJBANIbaOE3rAU5fxlsySINymyfACC6
A5AyoLbumVcS3GbZYh3ymn4ifk/QkoQxLw8gMZnzMAhILb1buCE7crTfEeMCQQCP
mZwx4fSxuTCpnyof4zWJwrIbxfzaJgfQXVU33WFBTp88Ikv55u1tuze5AJHEUc/g
4gGT6l7EHSpXq/Y7mwIPAkB6cGpF6VXbXpvBhehkcCQB4t40pjdsAq7rmpKF+Kjh
H1xvpsaf8nVRUiuKVoNAkJaGZ4GspScAlo+2+L9kiGoN
-----END RSA PRIVATE KEY-----`;

const source = ref<string>("Hello Encrypt~!"); //明文
const target = ref<string>('');//密文
// 创建加密对象实例
const encryptor = new JSEncrypt();

const encodeHandler = () => {
    //设置公钥
    encryptor.setPublicKey(publicKey);
    // 对内容进行加密
    const text = encryptor.encrypt(source.value);
    if (typeof (text) == 'boolean') {
        ElMessage({ type: "warning", message: "加密失败~" });
    } else {
        target.value = text;
    }
}

const decodeHandler = () => {
    //设置私钥
    encryptor.setPrivateKey(privateKey);
    // 对内容进行解密
    const token = encryptor.decrypt(target.value);
    if (typeof token === 'string') {
        source.value = token;
    } else {
        ElMessage({ type: "error", message: "密文解码失败~" });
    }
}

const signHandler = () => {
    encryptor.setPrivateKey(privateKey);
    // 使用CryptoJS.SHA256方法对内容进行签名
    const token = encryptor.sign(source.value, CryptoJS.SHA256, "sha256");
    if (typeof token === 'string') {
        target.value = token;
    } else {
        ElMessage({ type: "error", message: "密文签名失败~" });
    }
}

const verifyHandler = () => {
    //设置公钥
    encryptor.setPublicKey(publicKey);
    //验证原文和token是否一致
    const verified = encryptor.verify(source.value, target.value, CryptoJS.SHA256);
    if (verified) {
        ElMessage.success('It works!!!');
    } else {
        ElMessage.warning('Something went wrong....');
    }
}
</script>