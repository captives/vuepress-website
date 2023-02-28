---
cover: /assets/images/encryption-960_720.jpg
---
# RSA加密与解密(js-encrypt)

@[toc]

##  第一部分：RSA加密与解密
### 什么是RSA加密

RSA加密算法是一种 非对称加密算法 ，RSA加密使用了"一对"密钥.分别是公钥和私钥,这个公钥和私钥其实就是一组数字! 其二进制位长度可以是1024位或者2048位.长度越长其加密强度越大, 目前为止公之于众的能破解的最大长度为768位密钥,只要高于768位,相对就比较安全.所以目前为止,这种加密算法一直被广泛使用.

#### RSA加密与解密
- 使用公钥加密的数据,利用 私钥进行解密
- 使用私钥加密的数据,利用公钥进行解密

#### RSA秘钥生成方式
Mac系统内置OpenSSL(开源加密库),所以可以直接在终端上使用命令; Windows系统可以使用git命令行工具。

生成私钥，密钥长度为1024bit
```sh
openssl genrsa -out rsa_1024_priv.pem 1024
cat rsa_1024_priv.pem
-----BEGIN RSA PRIVATE KEY-----
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
-----END RSA PRIVATE KEY-----
```
#### 从私钥中提取公钥
```sh
openssl rsa -pubout -in rsa_1024_priv.pem -out rsa_1024_pub.pem
cat rsa_1024_pub.pem
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCuBM0y7oi3o4vfBGZD8l4ie8C6
G9gnQkS1lPOD0khnN3/CJ3XMLqV7JM8dwKvF61LwljPIca/mRczlUyHHsOjitHF3
fWU99YHfIA4gAkIp1FSsFhTGE0rHiyKGIJ7M0apeV72c4bOYzf7P34TNUFANoiv+
ifgJ+6ZavIKt9LJxYQIDAQAB
-----END PUBLIC KEY-----
```

这样就生成了公钥和私钥，也可以利用工具网站在线生成秘钥

## 第二部分：js-encrypt库

jsencrypt就是一个基于rsa加解密的js库
```js
import JSEncrypt from 'jsencrypt';
import CryptoJS from 'crypto-js';
```
<el-row :gutter="30">
    <el-col :span="10">
        <el-input :modelValue="getString(publicKey)">
            <template #prepend>明文 | 公钥：</template>
        </el-input>
        <el-input v-model="source" type="textarea" :autosize="{ minRows: 5, maxRows: 8}"></el-input>
    </el-col>
    <el-col :span="4" style="text-align:center">
        <br/><br/>
        <el-button-group>
            <el-button type="success" @click="encodeHandler">加密 &gt;&gt;</el-button>
            <el-button type="danger" @click="decodeHandler"> &lt;&lt; 解密</el-button>
        </el-button-group>
        <br/><br/>
        <el-button-group>
            <el-button type="primary"  @click="signHandler">签名 &gt;&gt;</el-button>
            <el-button type="warning"  @click="verifyHandler"> &lt;&lt; 验证</el-button>
        </el-button-group>
    </el-col>
    <el-col :span="10">
        <el-input :modelValue="getString(privateKey)">
            <template #prepend>密文 | 私钥：</template>
        </el-input>
        <el-input v-model="target" type="textarea" :autosize="{ minRows: 5, maxRows: 8}"> </el-input>
    </el-col>
</el-row>

<script>
export default {
    name: "JSEncrypt",
    data () {
        return {
            publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCuBM0y7oi3o4vfBGZD8l4ie8C6
G9gnQkS1lPOD0khnN3/CJ3XMLqV7JM8dwKvF61LwljPIca/mRczlUyHHsOjitHF3
fWU99YHfIA4gAkIp1FSsFhTGE0rHiyKGIJ7M0apeV72c4bOYzf7P34TNUFANoiv+
ifgJ+6ZavIKt9LJxYQIDAQAB
-----END PUBLIC KEY-----`, //公钥
            privateKey: `-----BEGIN RSA PRIVATE KEY-----
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
-----END RSA PRIVATE KEY-----`, //私钥
            source: "Hello Encrypt~!", //明文
            target: "",//密文
        }
    },
    computed:{
        getString(){
            return (_value) => {
                return _value.split("-----")[2];
            }
        }
    },
    methods: {
        encodeHandler () {
            // 创建加密对象实例
            var encryptor = new JSEncrypt()
            //设置公钥
            encryptor.setPublicKey(this.publicKey);
            // 对内容进行加密
            let text = encryptor.encrypt(this.source);
            if (typeof (text) == 'boolean') {
                this.$message({ type: "warning", message: "加密失败~" });
            } else {
                this.target = text;
            }
        },
        decodeHandler () {
            // 创建加密对象实例
            var encryptor = new JSEncrypt()
            //设置私钥
            encryptor.setPrivateKey(this.privateKey);
            // 对内容进行解密
            this.source = encryptor.decrypt(this.target);
            if (!this.source) {
                this.$message({ type: "error", message: "密文解码失败~" });
            }
        },
        signHandler () {
            // 创建加密对象实例
            var encryptor = new JSEncrypt()
            encryptor.setPrivateKey(this.privateKey);
            // 使用CryptoJS.SHA256方法对内容进行签名
            let token = encryptor.sign(this.source, CryptoJS.SHA256, "sha256");
            this.target = token;
        },
        verifyHandler () {
            // 创建加密对象实例
            var encryptor = new JSEncrypt()
            //设置公钥
            encryptor.setPublicKey(this.publicKey);
            //验证原文和token是否一致
            let verified = encryptor.verify(this.source, this.target, CryptoJS.SHA256);
            if (verified) {
                this.$message.success('It works!!!');
            } else {
                this.$message.warning('Something went wrong....');
            }
        },
    },
    mounted() {
        // 加密JS库
        // import JSEncrypt from 'jsencrypt';
        // import CryptoJS from 'crypto-js';
        Promise.all([
            this.loadScript('https://travistidwell.com/jsencrypt/bin/jsencrypt.min.js'),
            this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js')
        ])
    },
}
</script>

### 例一：转换加密文本

1. 加密
```js
// 创建加密对象实例
var encryptor = new JSEncrypt()
//设置公钥
encryptor.setPublicKey(this.publicKey);
// 对内容进行加密
let text = encryptor.encrypt(this.source);
if (typeof (text) == 'boolean') {
    this.$message({ type: "warning", message: "加密失败~" });
} else {
    this.target = text;
}
```
2. 解密
```js
// 创建加密对象实例
var encryptor = new JSEncrypt()
//设置私钥
encryptor.setPrivateKey(this.privateKey);
// 对内容进行解密
this.source = encryptor.decrypt(this.target);
if (!this.source) {
    this.$message({ type: "error", message: "密文解码失败~" });
}
```

:::tip 应用场景
在用户注册或登录的时候，用<b>公钥</b>对密码进行加密，再去传给后台，后台用<b>私钥</b>对加密的内容进行解密，然后进行密码校验或者保存到数据库。
:::


 ### 例二：签名和验证
 1. 签名
 ```js
// 创建加密对象实例
var encryptor = new JSEncrypt()
encryptor.setPrivateKey(this.privateKey);
// 使用CryptoJS.SHA256方法对内容进行签名
let token = encryptor.sign(this.source, CryptoJS.SHA256, "sha256");
this.target = token;
 ```
2. 验证
```js
 // 创建加密对象实例
var encryptor = new JSEncrypt()
//设置公钥
encryptor.setPublicKey(this.publicKey);
//验证原文和token是否一致
let verified = encryptor.verify(this.source, this.target, CryptoJS.SHA256);
if (verified) {
    this.$message.success('It works!!!');
} else {
    this.$message.warning('Something went wrong....');
}
```