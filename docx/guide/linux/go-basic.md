# Go 基本入门

## 环境安装
### 下载

推荐[Go官网](https://golang.org/dl/)，也可以在[Go中文网](https://studygolang.com/dl)找到适合你系统的版本下载

安装后目录说明
Go语言安装之后，Go目录下一共有9个目录与9个文件，如下图：
- api  — 目录，包含所有API列表，方便IDE使用
- bin — 目录，存放编译后的可执行文件
- blog — 目录，
- doc — 目录，帮助文档
- lib — 目录，
- misc — 目录，
- pkg — 目录，存放编译后的包文件。pkg中的文件是Go编译生成的
- src — 目录，存放项目源文件

注：一般，bin和pkg目录可以不创建，go命令会自动创建（如 go install），只需要创建src目录即可。

- Authors — 文件，作者列表，用记事本打开
- CONTRIBUTING.md — 文件，
- CONTRIBUTORS — 文件，
- favicon.ico — 文件，
- LICENSE — 文件，license，用记事本打开
- PATENTS — 文件，
- README.md — 文件，
- robots.txt — 文件，使用robots.txt阻止对网址的访问，[详情查看](https://support.google.com/webmasters/answer/6062608?hl=zh-Hans)
- VERSION — 文件，版本信息，用记事本打开

### 配置Go Proxy
参考七牛云的说明，是最简单的：[七牛云 - Goproxy.cn](https://goproxy.cn/)
只需要在命令行输入：
```sh
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct
```
查看环境变量
```sh
go env
```

### VS Code 安装Go插件
搜索插件`Go`并安装即可，然后VSCode会提示缺少`Go`的工具，由于上面已经配置了GoProxy，因此这里可以在VSCode的提示框中选择全部安装。

### 测试

在$GOPATH对应的目录中创建一个Hello.go
```go
package main

import (
    "fmt"
)

func main() {
    fmt.Println("Hello world, go!")
}
```
命令行执行即可看到输出信息：
```sh
go run Hello.go
```

## 语言基础

> [Go语言基础教程](https://www.runoob.com/go/go-basic-syntax.html)
> [Go语言中文教程](http://c.biancheng.net/golang/intro/)


### import 
#### 默认导入的写法
导入有两种基本格式，即单行导入和多行导入，导入代码效果是一致的。

- 单行导入
```go
import "fmt"
```
- 多行导入
```go
import (
	"fmt"
	"time"
)
```
#### 导入包后自定义引用的包名
文件层级,使用cmd命令`tree /f`查看目录层级：
```html
people
 │  go.mod
 │  main.go
 ├─man
 │    man.go
 └─woman
      woman.go
```
::: details 源代码
main.go
```go
package main

import (
	logger "fmt" //增加别名
	"people/man"
	"people/woman"
)

func main() {
	logger.Println("index main")
	man.Say()
	woman.Say()
}

```
people/man/man.go
```go
package man

import (
	"fmt"
)

func init() {
	fmt.Println("男人出生了")
}

func Say() {
	fmt.Println("我是男人")
}
```
people/woman/woman.go
```go
package woman

import (
	. "fmt"        //（.）开始的包,使用时候,可以省略前缀
	_ "people/man" //匿名导入包（_）前缀；只执行man包中的init,不能调用其他方法
)

func init() {
	Println("女人出生了")
}

func Say() {
	// Say()
	Println("我是女人")
}
```
`go run main.go`输出:
```console
男人出生了
女人出生了
index main
我是男人
我是女人
```
:::

# 学习资料
- [Go 语言教程](http://xueyuan.coder55.com/read/go-senior-learn/go_intro_start)
- [o语言中文文档](https://www.topgoer.cn/docs/golang/)