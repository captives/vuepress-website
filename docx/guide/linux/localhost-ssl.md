# 开发调试SSL证书-浏览器信任localhost

在实际开发中,需要用到ssl证书, 比如启用摄像头、麦克风和屏幕共享等;

在没有域名,并且更没有泛域名证书的情况下,需要用到https服务,怎么办?

## mkcert 生成localhost证书

- 下载[mkcert-vx.y.z-windows-amd64.exe](https://github.com/FiloSottile/mkcert/releases)

- 创建证书
```
./mkcert.exe example.com "*.example.com" example.test localhost 127.0.0.1
```
就创建了对以下名称有效的新证书
  - example.com
  - *.example.com
  - example.test
  - localhost
  - 127.0.0.1
  
在当前目录下,产生两个`*.pem`文件
```
example.com+3.pem
example.com+3-key.pem
````

- 安装证书
```
./mkcert -install
```

- 证书使用

1. Nginx 配置证书
```
# HTTPS server
server {
    listen 443 ssl;
    server_name localhost;

    ssl	on;
    ssl_certificate D:\\nginx-1.8.1\\conf\\ssl\\seven.uuabc.com+3.pem;
    ssl_certificate_key D:\\nginx-1.8.1\\conf\\ssl\\seven.uuabc.com+3-key.pem;
    ssl_ciphers EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH;
    ssl_protocols TLSv1.1 TLSv1.2;

    # 反向代理
    location /app {
        #允许跨域请求的域，* 代表所有
        add_header 'Access-Control-Allow-Origin' *;
        #允许带上cookie请求
        add_header 'Access-Control-Allow-Credentials' 'true';
        #允许请求的方法，比如 GET/POST/PUT/DELETE
        add_header 'Access-Control-Allow-Methods' *;
        #允许请求的header
        add_header 'Access-Control-Allow-Headers' *;
        
        proxy_pass http://127.0.0.1:8080/app/;
    }

    location / {
        root html;
        index index.html index.htm;
    }
}
```

- 重启Nginx服务
浏览器访问 `https://localhost`地址,证书就可以被信任了。