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
###### main.js 将会作为入口文件，而 App.vue 将会作为应用的初始化组件。先看下目录结构再分别来完善一下这两个文件
```
├── main.js
├── App.vue
├── components
│   ├── ArticleDetail.vue
│   ├── ArticleList.vue
│   ├── MainNavbar.vue
│   ├── NormalNavbar.vue
│   ├── NotFoundComponent.vue
│   ├── Recommend.vue
│   └── ArticleList.vue
└── store
    ├── index.js         
    ├── actions.js      
    ├── mutations.js    
```
###### 下面是main.js
```
//首先分别引入要用的资源与组件
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import Recommend from './components/Recommend';
import MainNavbar from './components/MainNavbar';
import NotFoundComponent from './components/NotFoundComponent';

import store from './store';
import 'bootstrap/dist/css/bootstrap.css'; 
import moment from 'moment/moment.js';    //一个时间转换插件,安装命令 npm i moment --save

Vue.use(VueRouter);
Vue.use(VueResource);

//vue.js中允许使用过滤器来进行文本格式化，以下三个主要是利用 moment.js 格式化时间的哈
Vue.filter('transTime', function (value) {
    return moment.unix(value).format('YYYY-MM-DD');
});
Vue.filter('transTimeFull', function (value) {
    return moment.unix(value).format('YYYY-MM-DD HH:mm:ss');
});
Vue.filter('transMin', function (seconds) {
   seconds = seconds || 180;
    return Math.ceil(seconds/60);
});

//这一块是路由，路由的一些写法用法就要具体参考vue-router的文档了，这里就不细说了哈
const routes = [{
  path : '/',
  components : {
    default: ArticleList,
    mainNavbar:MainNavbar
  }
},{
  path : '/articleList',
  components: {
    default: ArticleList,
    mainNavbar: MainNavbar
  }
},{
	path: '/article-detail/:articleId',
  name: 'article-detail',
	component: ArticleDetail,
  },{
  path: '/recommend',
  component : Recommend,
  
  }];

const router = new VueRouter({
  // mode: 'history',
  routes
});

/* eslint-disable no-new */
// 实例化我们的Vue
var app = new Vue({
  el: '#app',
  router,
  store,
  ...App,
});
```

######上面就是 main.js 文件啦，下面是 App.vue
```
<template>
  <div id="wrapper">
    <router-view name="mainNavbar"></router-view> /*这个是一个顶栏，具体看之后的MainNavbr.vue*/
    <transition :name="transitionName">     /*这里具体用到过渡效果，可以查看文档来学习具体用法,这里我给他绑定了一个名字，这是为了设定路由过渡效果用的*/
    	<router-view></router-view>
    </transition>
  </div>
</template>

<style>
	img{ width: 100%; }
	.slide-up-enter-active {
		transition: all .3s ease;
	}
	.slide-up-enter, .slide-up-leave-active {
		transform: translateY(310px);
	}
</style>

<script>
	export default {
		data(){
			return {transitionName: ''}
		},
/*这里使用 watch 来监测路由的，如果路由指向'/recommend' 那就使用 'slide-up' 的过渡效果，如果不是的话就不绑定效果*/
		watch: {
			'$route' (to, from) {
				if(to.path == '/recommend') {
					this.transitionName = 'slide-up'
				}else{
					this.transitionName = ''
				}
			}
		}
	}
</script>
```

###### 内容写得其实不够详细，但是看注释应该能看得明白，有时间了再细细按步骤写。上面初始化之后，其实就是分别建好要用的一些组件，然后再是拿数据，处理数据驱动页面变化啊之类的。


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
