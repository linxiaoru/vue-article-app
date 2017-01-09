<template>
	<div class="container">
		<ul class=" sub-nav row">
			<li class="col-xs-2"><span>推荐</span></li>
			<li class="col-xs-2"><span>情感</span></li>
			<li class="col-xs-2"><span>星座</span></li>
			<li class="col-xs-2"><span>社会</span></li>
			<li class="col-xs-2"><span>职场</span></li>
			<li class="col-xs-2"><span>美妆</span></li>
		</ul>
		<template v-for="item in articleList">
			<router-link :to="{ name: 'article-detail', params: { articleId: item.id }}">
			<div class="card">
				<div class="card-top row">
					<div class="cube-image content" :style="{backgroundImage: 'url(' + item.cover + ')'}">
						<div class="article-title oneline">{{ item.title }}</div>
					</div>
				</div>
				<div class="card-bottom row">
					<div class="col-xs-8">
						<div class="row">
							<div class="col-xs-4"><i class="glyphicon glyphicon-eye-open"></i>{{ item.read_num }}</div>
							<div class="col-xs-4" @click="stop.zan(item.zan_num)"><i class="glyphicon glyphicon-thumbs-up"></i>{{ item.zan_num}}</div>
							<div class="col-xs-4"><i class="glyphicon glyphicon-edit"></i>{{ item.comment_num }}</div>
						</div>
					</div>
					<div class="col-xs-4"><i class="glyphicon glyphicon-time"></i>{{ item.created_at|transTime }}</div>
				</div>
				</div>			
		</router-link>		
		</template>
		
	</div>
</template>

<style scoped>
	.container { margin: 0; padding: 0; }
	.sub-nav {
		padding: 20px 15px;
		margin: 0;
		list-style: none;
		background: #fff;
	}
	.sub-nav li {
		padding:  0;
	}
	.sub-nav li span {
		padding: 15px 10px;
		border-radius: 100%;
	}
	.sub-nav li span:hover{
		color: #fff;
		background: #68ccca;
	}
	.sub-nav li span:before {
		content: "•";
		color: rgb(104, 204, 202);
		position: absolute;
		left: 0px;
	}
	.card {
		margin: 15px;
		padding: 0 15px;
	}
	.card-top .content { padding-bottom: 60%; }
	.cube-image {
		width: 100%;
		height: 0;
		padding: 0 0 100% 0;
		background: #fff no-repeat center center;
		background-size: cover;
		position: relative;
		display: block;
		box-sizing: border-box;
	}
	.oneline {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.article-title {
		position: absolute;
		width: 100%;
		bottom: 0;
		padding: 10px;
		color: #fff;
		font-size: 16px;
		background: rgba(0,0,0,.7);
		box-sizing: border-box;
	}
	.card-bottom {
		font-size: 12px;
		background: #fff;
		padding: 10px 0;
		height: 44px;
		color: #999;
	}
	.card-bottom i { margin-right: 5px; }
</style>

<script>

	export default{
		computed : {
			articleList () {
            // 从store中取出数据
            return this.$store.state.articleList
        },
       methods: {
       	// zan:function(zan_num){
       	// 	retrun zan_num +=1;
       	// }
       }
    }

}

</script>
