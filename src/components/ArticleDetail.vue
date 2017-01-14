
<template>
	<div class="container">
		<normalNavbar></normalNavbar>

		<div class="loading text-center" v-if="loading">
			加载中。。。
		</div>

		<div class="error" v-if="error">
			{{ error }}
		</div>

		<div class="content" v-if="articleDetail">

			<div class="article-title text-center">
				{{ articleDetail.title }}
			</div>
			<div class="time"><i class="glyphicon glyphicon-time"></i>{{ articleDetail.created_at|transTimeFull }}</div>

			<div class="row author">
				<div class="col-xs-6 text-center">
					<div class="headphoto" :style="{backgroundImage: 'url(' + articleDetail.avator + ')'}"></div>
					<p>作者名</p>
				</div>
				<div class="col-xs-6 text-center">
					<div class="readTime">
						<p>读完本文</p>
						<p>大概需要</p>
						<p class="count">{{ articleDetail.read_time|transMin }}</p>
						<p>分钟</p>
					</div>
				</div>
			</div>

			<div class="articleContent">
				<div v-html="articleDetail.content"></div>
			</div>
		</div>
		
	</div>
</template>
<style scoped>
	.container { margin: 0; padding: 0; }
	nav.top-nav {
		background: #68ccca;
		color: #fff;
		line-height: 40px;

	}
	nav.top-nav li >a {
		color: #fff;
	}
	.navbar {
		margin-bottom: 0;
		border: none;
	}
	.content {
		margin: 15px;
	}
	.article-title { 
		font-size: 18px;
		font-weight: bold; 
	}
	.time { color: #999; margin: 10px 0;}
	.time i { margin-right: 5px;}
	.author { margin: 10px 0; }
	.headphoto {
		margin: 0 auto;
		width: 70px;
		height: 70px;
		background-size: cover;
		border-radius: 100%;
	}
	.author .col-xs-6:first-child{
		border-right: 1px solid #68ccca;
	}
	.readTime {
		border: 1px solid #68ccca;
		height: 98px;
		color: #68ccca;
		font-size: 16px;

	}
	.readTime p { margin-bottom: 0; }
	.readTime .count { color: #333; font-size: 18px}

	.articleContent { text-align: justify; overflow: hidden;}

</style>

<script>
	import NormalNavbar from 'components/NormalNavbar.vue';

	export default {
		components: { 'normalNavbar': NormalNavbar },
		data () {
			return {
				loading: false,
				articleDetail: null,
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

				this.error = this.articleDetail = null;
				this.loading = true;				
				
				// this.$http.get(apiLink + 'article/' + _id + '?expand=description,content,pseudonym,avator,audience,read_time').then((response) => {
				// // 响应成功回调
				// console.log(response.data);
				// this.loading = false;
				// this.articleDetail = response.data;

				// }, (response) => {
				// 	// 响应错误回调
				// 	console.log(response);
				// 	this.error = response.data.msg;

				// });

				this.articleDetail = {"id":2251,"title":"撑起你年末趴体的，只有这8双红鞋。","cover":"http://image.lingqichina.cn/img/cover/20161229/20041482981437.jpg","read_num":252,"zan_num":1,"comment_num":0,"created_at":1482981437,"is_zan":false,"description":"年末了，泥萌是不是都在想着放假？","content":"<header id=\"header\"><p><span style=\"font-size: 16px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span><br/></p></header><p><section id=\"content\" class=\"columns twelve\" role=\"main\"><article class=\"post post-10822 type-post status-publish format-standard has-post-thumbnail hentry category-footwear tag-adidas tag-air-jordan tag-asics tag-nike tag-puma tag-radii\" id=\"post-10822\"><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\t\t\t</p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482979303451941.gif\" title=\"1482979303451941.gif\" alt=\"0-29.gif\"/></p><p>&nbsp;</p><p>一到了年末，各种聚会趴体约不停，潮人们怎么才能让自己脱颖而出（无形装X）呢？</p><p>这时候你们就需要一双亮眼的<strong>红鞋子</strong>了。</p><p>因为<strong>红鞋</strong>真的太酷炫了有没有，而且是无下限穿搭单品。你可以 All Black，也可以一身白，小红鞋都能帮你撑起来，成为全场的焦点，感觉世界都在你脚下。</p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482979316888590.gif\" title=\"1482979316888590.gif\" alt=\"0-1-15.gif\"/></p><p>&nbsp;</p><p>下面，我为你送上8款最适合趴体装X的<strong>小红鞋</strong></p><p>（也祝泥萌新年红红火火）</p><p>&nbsp;</p><p style=\"text-align: center;\"><strong>hold住了，大餐送到</strong></p><p style=\"text-align: center;\">▼</p><p style=\"text-align: center;\"><strong>&nbsp;Red Nike Air Force 1&nbsp;</strong></p><p>首发至今34年，经历了2000多次更新迭代，Air Force 1 \r\n仍然是耐克最具辨识度的标志鞋款之一，这款鞋的基础设计也成为了伟大的经典。此次&nbsp;Red Nike Air Force \r\n1&nbsp;以鲜红的整体色彩示人，鞋身 Swoosh \r\n、鞋舌以及特有的绑带位置均采用麂皮打造，轻盈鞋面与扎实的细节，精细考量与打磨，都完美展现出对鞋款的极致要求。</p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482980783476909.jpg\" title=\"1482980783476909.jpg\" alt=\"640_027.jpg\"/></p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482980790297132.jpg\" title=\"1482980790297132.jpg\" alt=\"640_003.jpg\"/></p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482980796557413.jpg\" title=\"1482980796557413.jpg\" alt=\"640_013.jpg\"/></p><p>&nbsp;</p><p style=\"text-align: center;\"><strong>adidas Yeezy 350 Boost “All Red”&nbsp;</strong></p><p>前段时间美国流行小天王 Chris Brown 私人定制的adidas Yeezy \r\n350&nbsp;Boost“Red”引起热议。这款鞋是由&nbsp;Kanye West 与 adidas Originals 合作打造的，YEEZY BOOST\r\n 350&nbsp;采用了 Primeknit 针织材质搭配上 adidas 最新的 Boost \r\n科技。从图片来看，该鞋不仅以红色贯穿鞋身而且连大底都采用大红颜色，鞋款通红抢眼，视觉冲击力超强，最后搭配黑色细节予以点缀，潮流感顿时爆棚。Yeezy\r\n 350&nbsp;Boost 没有正式发布红配色，喜欢的小伙伴可以自己定制哦。</p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482980825735333.jpg\" title=\"1482980825735333.jpg\" alt=\"640_017.jpg\"/></p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482980835470468.jpg\" title=\"1482980835470468.jpg\" alt=\"640_009.jpg\"/></p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482980842314997.jpg\" title=\"1482980842314997.jpg\" alt=\"640_006.jpg\"/></p><p>&nbsp;</p><p style=\"text-align: center;\"><strong>&nbsp;Radii 夹克红糖果&nbsp;</strong></p><p>来自美国南加州的新兴鞋履品牌 Radii Footwe， 近两年获得了不少年轻人的青睐。Radii 的这款鞋，未来感十足，采用了硫化大底和&nbsp;Cloud 9 鞋垫，有金属扣和可拆卸的顶带，设计还采用了YKK拉链保护踝关节，极具街头感。</p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482981039962457.jpg\" title=\"1482981039962457.jpg\" alt=\"640_020.jpg\"/></p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482981047891089.jpg\" title=\"1482981047891089.jpg\" alt=\"640.jpg\"/></p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482981057974670.jpg\" title=\"1482981057974670.jpg\" alt=\"640_026.jpg\"/></p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482981066429825.jpg\" title=\"1482981066429825.jpg\" alt=\"640_028.jpg\"/></p><p>&nbsp;</p><p style=\"text-align: center;\"><strong>&nbsp;PUMA x Trapstar Suede&nbsp;</strong></p><p>PUMA 与伦敦街头品牌&nbsp;Trapstar&nbsp;合作推出的低帮休闲鞋。鞋款延续经典 Suede 系列的外形和复古翻毛皮材质，Trapstar 元素融入鞋身设计中，鞋面采用透气孔设计，橡胶外底，翻毛皮的鞋面，彰显品牌的尊贵价值。</p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482981200116926.jpg\" title=\"1482981200116926.jpg\" alt=\"640_024.jpg\"/></p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482981205105877.jpg\" title=\"1482981205105877.jpg\" alt=\"640_005.jpg\"/></p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482981213275928.jpg\" title=\"1482981213275928.jpg\" alt=\"640_010.jpg\"/></p><p style=\"text-align: center;\"><br/></p><p style=\"text-align: center;\"><strong>&nbsp;ASICS’ New GEL-Lyte III&nbsp;</strong></p><p>GEL LYTE III&nbsp;是&nbsp;ASICS 最具代表性的复古跑鞋，鞋舌上采用了一体化设计，防止跑步时跑偏，鞋面的材质根据不同情况有不同种，包裹良好，透气极佳，对脚部起到很好的保护作用。</p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482981246167985.jpg\" title=\"1482981246167985.jpg\" alt=\"640_011.jpg\"/></p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482981251784261.jpg\" title=\"1482981251784261.jpg\" alt=\"640_004.jpg\"/></p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482981257807681.jpg\" title=\"1482981257807681.jpg\" alt=\"640_012.jpg\"/></p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482981261250540.jpg\" title=\"1482981261250540.jpg\" alt=\"640_022.jpg\"/></p><p>&nbsp;</p><p style=\"text-align: center;\"><strong>&nbsp;adidas Ultra Boost Uncaged “神秘红”&nbsp;</strong></p><p>adidas Ultra Boost Uncaged 凭借其出众的包裹以及脚感成为了跑鞋领域的佼佼者。此次，全新的 adidas \r\nUltra Boost “Mystery Red” 鞋面以酒红色 Primeknit \r\n织物鞋面呈现，蓝色的暗纹点缀其中，营造出一丝神秘色彩。后跟深蓝色支架与白色 Boost 带来独特的视觉效果。</p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482981274324576.jpg\" title=\"1482981274324576.jpg\" alt=\"640_002.jpg\"/></p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482981279226272.jpg\" title=\"1482981279226272.jpg\" alt=\"640_025.jpg\"/></p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482981285436923.jpg\" title=\"1482981285436923.jpg\" alt=\"640_008.jpg\"/></p><p>&nbsp;</p><p style=\"text-align: center;\"><strong>&nbsp;AIR JORDAN 1 复古“银奖”&nbsp;</strong></p><p>相信大家对 AJ 1 已经了如指掌了，此次全新“银奖”采用了红白优质皮革制成鞋身，金属感十足的耐克标志，再搭配红色鞋带，没错，它绝对是你的装X利器。</p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482981294660862.jpg\" title=\"1482981294660862.jpg\" alt=\"640_007.jpg\"/></p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482981298652052.jpg\" title=\"1482981298652052.jpg\" alt=\"640_018.jpg\"/></p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482981306164190.jpg\" title=\"1482981306164190.jpg\" alt=\"640_016.jpg\"/></p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482981313121040.jpg\" title=\"1482981313121040.jpg\" alt=\"640_029.jpg\"/></p><p>&nbsp;</p><p style=\"text-align: center;\"><strong>&nbsp;adidas’s Tubular &nbsp;Returns 全红配色&nbsp;</strong></p><p>adidas 再次携手著名球鞋店铺&nbsp;size ，在大热鞋款 Tubular Runner 基础上带来一款全红配色。此款 &nbsp;adidas \r\nTubular Runner “All Red” \r\n采用鲜艳而抢眼的红色贯穿整体鞋身，麂皮同网眼面料拼接打造鞋身，舌靴和大底以同样的红色呈现。你要相信它，只要你上脚就一定能收获十足的回头率。</p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482981325308978.jpg\" title=\"1482981325308978.jpg\" alt=\"640_023.jpg\"/></p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482981331853651.jpg\" title=\"1482981331853651.jpg\" alt=\"640_014.jpg\"/></p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482981338644465.jpg\" title=\"1482981338644465.jpg\" alt=\"640_021.jpg\"/></p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482981343453014.jpg\" title=\"1482981343453014.jpg\" alt=\"640_019.jpg\"/></p><p><img src=\"http://image.lingqichina.cn/img/edit/20161229/1482981350280845.jpg\" title=\"1482981350280845.jpg\" alt=\"640_015.jpg\"/></p></article></section></p><p><br/></p>","pseudonym":"Yaco","audience":2,"avator":"","read_time":247};
				this.loading = false;
			}
		}
	}
</script>



