# Ubuntu 配置 git

## 常用命令
更新分支树
```sh
git remote update origin --prune
```
查看远程分支
```sh
git branch -a
```
查看本地分支
```sh
git branch
```
创建分支
```sh
git branch develop
```
推送本地分支到远程
```sh
git push origin develop
```
切换分支
```sh
git checkout develop
```
删除本地分支
```sh
git branch –D develop
```
删除远程分支：
```sh
git branch -r -d origin/branch-name
git push origin :branch-name
```
或者
```sh
git branch –r –D origin/develop
git push --delete origin develop
```
## 重命名分支
在git中重命名远程分支，其实就是先删除远程分支，然后重命名本地分支，再重新提交一个远程分支。
例如下面的例子中，我需要把 devel 分支重命名为 develop 分支：
```sh
git branch -m devel develop
git push origin develop
```
## 配置SSH

1.取消git全局配置
```sh
git config --global --unset user.name
git config --global --unset user.email
```

2.查看配置
```sh
git config --list
```

3.本地配置私钥
```sh
cd ~/.ssh
ssh-keygen -t rsa -C "邮箱地址"  	#之后会提示输入文件名，默认id_rsa
```
4.添加ssh key
```sh
ssh-add -K ~/.ssh/id_rsa
```
::: info
查看配置: `ssh-add -l`
删除配置：`ssh-add -D`
:::

5.设置config文件
```sh
cd ~/.ssh/
vim config
```
内容格式：
```
# github
Host github
HostName github.com
PreferredAuthentications publickey
User git
IdentityFile ~/.ssh/id_rsa_github

# gitee
Host gitee
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_gitee
```
::: info
`Host` 		别名（方便记忆）
`HostName` 		IP地址或者域名（可以写假域名，但要在host文件中绑定ip地址）
`IdentityFile` 	对应的私钥,也就是不带.pub 后缀的
`User` 			用户名，有的是邮箱,一般默认情况 git 就可以
`Port` 			默认是22可以不写
:::
6.验证
```sh
ssh -T git@gitee.com
ssh -T git@github.com
```
