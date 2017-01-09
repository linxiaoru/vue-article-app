import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

//一条假数据
const state = {
	totalTime: 0,
	articleList: [
	{
		comment_num:0,
		cover:"http://image.lingqichina.cn/img/cover/20161230/70081483083691.jpg",
		created_at:1483083691,
		id:2279,		
		is_zan:false,
		read_num:92,
		title:"2016，感谢陪伴！2017，请多关照！",
		zan_num:1
	},
	{
		comment_num:0,
		cover:"http://image.lingqichina.cn/img/cover/20161229/20041482981437.jpg",
		created_at:1482981437,
		id:2251,		
		is_zan:false,
		read_num:92,
		title:"撑起你年末趴体的，只有这8双红鞋。",
		zan_num:5
	}
]
};

export default new Vuex.Store({
	state,
	mutations,
	actions
})