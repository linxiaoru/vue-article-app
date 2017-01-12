#####�Լ�д��һ��С��Ŀ������Ҫ���Ƶĵط�������Ĺ��̻�������¼������
##### ������Ҫ�Ǽ�¼����ʹ�� vue ��������һ�������Ķ�СӦ�õľ��徭���ɣ��������ޣ���Щ������ܱ�������ȷ����ָ�̡�
```
1.�� vue-cli ���ٴ�����Ŀ
``` 

 

### ����һ,��װ vue-cli������webpack��Ŀ 
```
npm i -g vue-cli
vue init wepack vue-article-app
```
### ��������������������
```
cd vue-article-app
npm i
npm run dev     //������Ŀ�� webpack�������Ŀ�ļ���������������Ȼ�������� http://localhost:8080/ �о��ܿ���һ����ӭҳ
```
###### ���������м��� Ctrl+C ��ͣ�����񣬼�����װ��ҪӦ�õ���һЩ��Դ

```
npm i vue-router --save       //·��
npm i vue-resource --save     //XHR����
npm i bootstrap --save        //bootstrap��ΪUI��
//���������������Ҳ����ʹ��һ�������о͸㶨 npm i vue-router vue-resource bootstrap --save
```
######������Ҫ�õ��ľͶ�׼�����ˣ����������Ǳ�����
### ����������ʼ��
###### main.js ������Ϊ����ļ����� App.vue ������ΪӦ�õĳ�ʼ��������ȿ���Ŀ¼�ṹ�ٷֱ�������һ���������ļ�
```
������ main.js
������ App.vue
������ components
��   ������ ArticleDetail.vue
��   ������ ArticleList.vue
��   ������ MainNavbar.vue
��   ������ NormalNavbar.vue
��   ������ NotFoundComponent.vue
��   ������ Recommend.vue
��   ������ ArticleList.vue
������ store
    ������ index.js         
    ������ actions.js      
    ������ mutations.js    
```
###### ������main.js
```
//���ȷֱ�����Ҫ�õ���Դ�����
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
import moment from 'moment/moment.js';    //һ��ʱ��ת�����,��װ���� npm i moment --save

Vue.use(VueRouter);
Vue.use(VueResource);

//vue.js������ʹ�ù������������ı���ʽ��������������Ҫ������ moment.js ��ʽ��ʱ��Ĺ�
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

//��һ����·�ɣ�·�ɵ�һЩд���÷���Ҫ����ο�vue-router���ĵ��ˣ�����Ͳ�ϸ˵�˹�
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
// ʵ�������ǵ�Vue
var app = new Vue({
  el: '#app',
  router,
  store,
  ...App,
});
```

######������� main.js �ļ����������� App.vue
```
<template>
  <div id="wrapper">
    <router-view name="mainNavbar"></router-view> /*�����һ�����������忴֮���MainNavbr.vue*/
    <transition :name="transitionName">     /*��������õ�����Ч�������Բ鿴�ĵ���ѧϰ�����÷�,�����Ҹ�������һ�����֣�����Ϊ���趨·�ɹ���Ч���õ�*/
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
/*����ʹ�� watch �����·�ɵģ����·��ָ��'/recommend' �Ǿ�ʹ�� 'slide-up' �Ĺ���Ч����������ǵĻ��Ͳ���Ч��*/
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

###### ����д����ʵ������ϸ�����ǿ�ע��Ӧ���ܿ������ף���ʱ������ϸϸ������д�������ʼ��֮����ʵ���Ƿֱ𽨺�Ҫ�õ�һЩ�����Ȼ�����������ݣ�������������ҳ��仯��֮��ġ�


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
