// src/App.vue

<template>
  <div id="wrapper">
    <router-view name="mainNavbar"></router-view>

    <transition :name="transitionName">
    	<router-view></router-view>
    </transition>

  </div>
</template>

<style>
	img{ width: 100%; }
	.slide-up-enter-active {
		transition: all .3s ease;
	}
	/*.slide-up-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}*/
	.slide-up-enter, .slide-up-leave-active {
		transform: translateY(310px);
	}

</style>

<script>
	export default {
		data(){
			return {transitionName: ''}
		},
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

