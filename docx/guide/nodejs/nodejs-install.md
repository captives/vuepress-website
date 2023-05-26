# Nodejs 安装

## 安装
命令行下载
```sh
wget https://nodejs.org/dist/.../node-v4.2.1-linux-x64.tar.gz
```
解压缩文件


```sh
tar –zxvf node-v4.2.1-linux-x64.tar.gz
```

移动副本目录到 /opt/下
```sh
sudo cp -r node-v4.2.1-linux-x64/ /opt/
```
设置全局软连接
```sh
sudo ln -s /opt/node-v4.2.1-linux-x64/bin/node /usr/local/bin/node
sudo ln -s /opt/node-v4.2.1-linux-x64/bin/npm /usr/local/bin/npm
```

查看安装版本号
```sh
node -v
npm -v
npm install 镜像仓库
```
查看镜像仓库

```sh
npm config get registry  #https://registry.npmjs.org/
如果使用npm安装一些包失败，可使用以下三种办法任意一种都能解决问题
```

## 配置
通过 config命令

```sh
npm config set registry https://registry.npm.taobao.org
npm info underscore #查看underscore模块信息
```

命令行指定

```sh
npm --registry https://registry.npm.taobao.org 
```


编辑`~/.npmrc`加入以下内容
windows路径在 `{npm_install_dir}/node_modules/npm/npmrc`
```sh
registry = https://registry.npm.taobao.org
```

## 版本控制

- nvm arch [32|64]：显示节点是否以32位或64位模式运行。指定32或64以覆盖默认体系结构。
- nvm install `<version>` [arch]：该版本可以是node.js版本，也可以是最新的稳定版本的“最新”版本。（可选）指定安装32位还- 是64位版本（默认为系统体系结构）。设置[arch]为“全部”以安装32和64位版本。
- nvm list [available]：列出node.js安装。available在末尾键入以显示可供下载的版本列表。
- nvm on：启用node.js版本管理。
- nvm off：禁用node.js版本管理（不卸载任何内容）。
- nvm proxy [url]：设置用于下载的代理。留[url]空白，以查看当前的代理。设置[url]为“无”以删除代理。
- nvm uninstall `<version>`：卸载特定版本。
- nvm use `<version>` [arch]：切换为使用指定的版本。（可选）指定32/64位体系结构。nvm use `<arch>`将继续使用所选版本，但- 根据提供给的值切换到32/64位模式`<arch>`。
- nvm root `<path>`：设置nvm应在其中存储不同版本的node.js的目录。如果`<path>`未设置，将显示当前根目录。
- nvm version：显示NVM for Windows的当前运行版本。

## 调试

启动
```sh
node –inspect index.js
```
一共有两种打开调试工具的方法，第一种是在*Chrome*浏览器的地址栏，键入`chrome://inspect`或者 `about:inspect`进入, 在*Devices/Target*部分，点击*inspect*链接，就能进入调试工具了。
<hr/>
