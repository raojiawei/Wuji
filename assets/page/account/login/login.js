/*
* 登录
*/
import Vue from 'vue'
import login from './login.vue'
import store from "stores/index"


const app = new Vue({
	store,	
	...login
})

app.$mount('#wrap')