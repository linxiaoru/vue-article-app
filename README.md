#####自己写的一个小项目，还有要完善的地方，具体的过程会慢慢记录下来的
##### 本文主要是记录下我使用 vue 构建这样一个文章阅读小应用的具体经过吧，能力有限，有些问题可能表述不正确，望指教。
```
1.用 vue-cli 快速创建项目
``` 

 

### 步骤一,安装 vue-cli，创建webpack项目 
```
npm i -g vue-cli
vue init wepack vue-article-app
```
### 步骤二，下载相关依赖项
```
cd vue-article-app
npm i
npm run dev     //运行项目， webpack会编译项目文件，启动服务器，然后我们在 http://localhost:8080/ 中就能看到一个欢迎页
```
###### 在命令行中键入 Ctrl+C 先停掉服务，继续安装需要应用到的一些资源

```
npm i vue-router --save       //路由
npm i vue-resource --save     //XHR请求
npm i bootstrap --save        //bootstrap作为UI库
//上面的三个依赖项也可以使用一个命令行就搞定 npm i vue-router vue-resource bootstrap --save
```
######这样需要用到的就都准备好了，接下来就是编码了
### 步骤三，初始化
######未完待续。。。


# vue-article-app

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
