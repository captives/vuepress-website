# Docker 基本入门

## 安装

## 名词解释

- host				宿主机
- image				镜像
- container			容器
- register			仓库
- daemon			守护程序
- client			客户端



## 启动
```sh
sudo service docker start
```

## 权限
### 查看用户组与用户

```sh
vim /etc/group
```
`/etc/group`的内容包括用户组（Group）、用户组口令、GID及该用户组所包含的用户（User），每个用户组一条记录；格式如下：
> group_name:passwd:GID:user_list

其中每条记录分四个字段：
  1. 第一字段：用户组名称；
  2. 第二字段：用户组密码；
  3. 第三字段：GID
  4. 第四字段：用户列表，每个用户之间用,号分割；本字段可以为空；如果字段为空表示用户组为GID的用户名；

### 加入用户组

1.将登陆用户(seven) 加入到docker用户组中

```sh
gpasswd -a seven docker 
```
2.添加当前用户到docker组

```sh
newgrp docker 
```

## 常用命令
- `docker search`				查找镜像
- `docker pull`					获取image镜像
- `docker build`				创建image镜像
- `docker images`				列出image镜像
- `docker rmi`					删除image镜像
- `docker run`					运行container
- `docker ps`					列出container
- `docker rm`					删除container
- `docker cp`					在host和container之间拷贝文件
- `docker commit`				保存改动为新的image
- `docker logs`					日志查询 


1.查看docker信息
```sh
docker info
```

2.查看启动日志
```sh
docker logs <{CONTAINER} | {CONTAINER ID}>
```

3.查看正在运行的docker容器
```sh
docker ps -< l | a >
```

4.停止正在运行的docker容器
```sh
docker stop  <{CONTAINER} | {CONTAINER ID}>
```

5.重启停止的docker容器
```sh
docker start  <{CONTAINER} | {CONTAINER ID}>
```

6.创建容器并映射端口
```sh
docker run -d(后台运行) -p(指定开放端口，默认briage模式) 8080(主机端口):80(容器端口) nginx
```
:::warning 注意：
 [-p] 指定端口、[-P] 自动分配端口
:::

7.检查端口是否开放
```sh
netstat -na | grep 8080
```

8.映射磁盘目录
```sh
docker run -v /disk(宿主目录):/sharedisk(挂载目录) seven/docker_demo(镜像名)
```

9.进入容器
```sh
docker exec -it <{CONTAINER ID} | {NAMES}> bash
docker exec -it <{CONTAINER ID} | {NAMES}> /bin/bash
docker exec -it <{CONTAINER ID} | {NAMES}> sh
docker exec -it <{CONTAINER ID} | {NAMES}> /bin/sh

```

10.获取容器/镜像的元数据
```sh
docker inspect <{CONTAINER ID}>
```

11. 查看移除容器
```sh
docker ps -a
docker rm <{CONTAINER ID}>
```
12. 查看并移除镜像
```sh
docker images
docker rmi <{CONTAINER ID}>
```
13. 从容器内拷贝文件到主机上
```sh
docker cp {CONTAINER ID}:/var/www/html/index.html /disk/nodejs/webrtc 
```

## Dockerfile 语法
- `FROM`					base image
- `RUN`						执行命令
- `ADD`						添加文件（本地或者远程文件）
- `COPY`					拷贝文件（文件或者目录）
- `CMD`						执行命令
- `EXPOSE`					暴露端口
- `WORKDIR`					指定路径
- `MAINTAINER`					维护者
- `ENV`						设定环境变量
- `ENTRYPOINT`					容器入口
- `USER`					指定用户
- `VOLUME`					挂载点(mount point)

### Dockerfile 示例

1.创建nginx服务
```js
FROM ubuntu
MAINTAINER docker_seven
RUN sed -i 's/archive.ubuntu.com/mirrors.ustc.edu.cn/g' /etc/apt/sources.list
RUN apt-get update
RUN apt-get install -y nginx
COPY index.html /var/www/html
#RUN service nginx start
ENTRYPOINT ["/usr/sbin/nginx", "-g", "daemon off;"]
EXPOSE 80
```
1.pm2部署node项目
```js
# 基于最新版的NODE容器创建
FROM keymetrics/pm2:14-alpine
MAINTAINER "author"="seven@kaibo.ai"
MAINTAINER "vendor"="kaibo"

# 复制容器的执行脚本
WORKDIR /opt
COPY package.json package-lock.json ./
RUN npm i --registry https://registry.npm.taobao.org
COPY . ./

# 容器的执行命令
CMD ["pm2-runtime", "start", "index.js"]

# 暴露端口映射
EXPOSE 3000
```
编译并运行
```js
echo 'build images ....'
docker build -t kaibo-record:v1.1 .

echo 'run images ....'
docker run -d -p 3000:3000 --name=kaibo-record kaibo-record:v1.1

echo 'run complete!'
docker ps -a
```

# Docker Compose
Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来配置应用程序需要的所有服务。然后，使用一个命令，就可以从 YML 文件配置中创建并启动所有服务。
## 安装
[Install Docker Compose](https://docs.docker.com/compose/install/)
- [on macOS](https://docs.docker.com/desktop/mac/install/)
- [on Window](https://docs.docker.com/desktop/windows/install/)
- [on Linux]()

## 常用命令
- `build`					本地创建镜像
- `command`				覆盖缺省命令
- `depends_on`			连接容器
- `volumes`				卷
- `image`					pull镜像
- `up`						启动服务
- `stop`					停止服务
- `rm`						删除服务中的各个容器
- `logs`					观察各个容器的日志
- `ps`						列出服务相关的容器

<hr/>
