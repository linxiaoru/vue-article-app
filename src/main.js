// src/main.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import Recommend from './components/Recommend';
import MainNavbar from './components/MainNavbar';
// import NormalNavbar from './components/NormalNavbar';
import NotFoundComponent from './components/NotFoundComponent';

import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import moment from 'moment/moment.js';

Vue.use(VueRouter);
Vue.use(VueResource);

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