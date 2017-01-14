<template>
	<div class="container">
	
	<nav class="navbar navbar-default transform-nav" role="navigation">
		<div class="container">
			<ul class="nav navbar-nav row">
				<li class="col-xs-3">
					<router-link to="/articleList">
						<i class="glyphicon glyphicon-remove"></i>
					</router-link>
				</li>
				<li class="col-xs-6"></li>
				<li class="col-xs-3"></li>
			</ul>
		</div>
	</nav>

		<div class="row title">
			<div class="col-xs-4 text-center">
			<i class="glyphicon glyphicon-list-alt"></i>频道推荐</div>
			<div class="col-xs-4 text-right"></div>
			<div class="col-xs-4 text-center">
			<i class="glyphicon glyphicon-pencil"></i>编辑</div>
		</div>
		<div class="loading text-center " v-if="loading">
			加载中。。。
		</div>

		<div class="error" v-if="error">
			{{ error }}
		</div>
		<ul class="row menuList">
			<li class="col-xs-4 text-center" v-for="item in menu"><span class="menu-item">
				{{item.name}}
			</span></li>	
		</ul>
	</div>
</template>

<style scoped>
	.container { margin: 0; padding: 0; }
	nav.transform-nav {
		background: transparent;
		color: #68ccca;
		line-height: 40px;

	}
	nav.transform-nav li >a {
		color: #68ccca;
	}
	.navbar {
		margin-bottom: 0;
		border-bottom: 1px solid #68ccca;
	}
	.title { font-size: 14px; color: #68ccca; margin-top: 15px;}
	.menuList { list-style: none; padding:0; }
	.menuList li{ margin: 10px 0; }
	.menu-item { background: #fff; padding: 5px 25px;border-radius: 25px; }

</style>
<script>
	export default {
		// components: { 'normalNavbar': NormalNavbar },
		data () {
			return {
				loading: false,
				menu: null,
				error: null
			}
		},
		created () {
			//组件创建完后获取数据，
			//此时 data 已经被 observed 了
			this.fetchData();
		},
		watch: {
			//如果路由有变化，会再次执行该方法
			'$route': 'fetchData'
		},
		methods: {
			fetchData () {
				var _id = this.$route.params.articleId;
				var apiLink = "";

				this.error = this.menu = null;
				this.loading = true;				
				
				// this.$http.get(apiLink + 'sys/channel').then((response) => {
				// // 响应成功回调
				// console.log(response.data);
				// this.loading = false;
				// this.menu = response.data;

				// }, (response) => {
				// 	// 响应错误回调
				// 	console.log(response);
				// 	this.error = response.data.msg;

				// });	

				//模拟调用接口后获得数据		
				this.menu = [{"id":1,"name":"时尚"},{"id":3,"name":"鸡汤"},{"id":5,"name":"搞笑"},{"id":6,"name":"美妆"},{"id":7,"name":"健身"},{"id":8,"name":"职场"},{"id":9,"name":"社会"},{"id":11,"name":"两性"},{"id":12,"name":"娱乐"},{"id":13,"name":"励志"},{"id":14,"name":"影视"},{"id":15,"name":"星座"}];
					
				this.loading = false;	
			}
		}
	}
</script>