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

</style>
<script>
	
</script>