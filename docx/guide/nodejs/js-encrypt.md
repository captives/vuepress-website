# RSA加密与解密

<script lang="ts" setup>
import JSEncrypt from '@/views/nodejs/JSEncrypt.vue';
</script>

## 什么是RSA加密

RSA加密算法是一种 非对称加密算法 ，RSA加密使用了"一对"密钥.分别是公钥和私钥,这个公钥和私钥其实就是一组数字! 其二进制位长度可以是1024位或者2048位.长度越长其加密强度越大, 目前为止公之于众的能破解的最大长度为768位密钥,只要高于768位,相对就比较安全.所以目前为止,这种加密算法一直被广泛使用.

## RSA加密与解密

- 使用**公钥**加密的数据,利用**私钥**进行解密。
- 使用**私钥**加密的数据,利用**公钥**进行解密。

## RSA秘钥生成方式

Mac系统内置OpenSSL(开源加密库),所以可以直接在终端上使用命令; Windows系统可以使用git命令行工具。

生成私钥，密钥长度为1024bit
```sh
~ openssl genrsa -out rsa_1024_priv.pem 1024
~ cat rsa_1024_priv.pem
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

从私钥中提取公钥
```sh
~ openssl rsa -pubout -in rsa_1024_priv.pem -out rsa_1024_pub.pem
~ cat rsa_1024_pub.pem
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCuBM0y7oi3o4vfBGZD8l4ie8C6
G9gnQkS1lPOD0khnN3/CJ3XMLqV7JM8dwKvF61LwljPIca/mRczlUyHHsOjitHF3
fWU99YHfIA4gAkIp1FSsFhTGE0rHiyKGIJ7M0apeV72c4bOYzf7P34TNUFANoiv+
ifgJ+6ZavIKt9LJxYQIDAQAB
-----END PUBLIC KEY-----
```
这样就生成了公钥和私钥，也可以利用[工具网站](http://tools.jb51.net/password/rsa_encode)在线生成秘钥


## jsEncrypt

- 1. 安装依赖

```sh
~ npm i jsencrypt
```
- 2. 使用
```js
// Sign with the private key...
var sign = new JSEncrypt();
sign.setPrivateKey($('#privkey').val());
var signature = sign.sign($('#input').val(), CryptoJS.SHA256, "sha256");

// Verify with the public key...
var verify = new JSEncrypt();
verify.setPublicKey($('#pubkey').val());
var verified = verify.verify($('#input').val(), signature, CryptoJS.SHA256);

// Now a simple check to see if the round-trip worked.
if (verified) {
  alert('It works!!!');
} else {
  alert('Something went wrong....');
}
```
- 3. 示例

<JSEncrypt></JSEncrypt>

:::tip 应用场景
在用户注册或登录的时候，用公钥对密码进行加密，再去传给后台，后台用私钥对加密的内容进行解密，然后进行密码校验或者保存到数据库。
:::

:::details 查看源码
@[code](@src/views/nodejs/JSEncrypt.vue)
:::