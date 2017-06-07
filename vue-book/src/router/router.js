import Vue from 'vue'
import VueRouter from 'vue-router'
import {List, Add, Detail} from '../components'

Vue.use(VueRouter); // 初始安装

// 路由规则
let routes = [
    {path: '/list', component: List},
    {path: '/add', component: Add},
    {path: '/detail/:id', name: 'detail', component: Detail},
    {path: '*', redirect:'/list'}
];

// 生成VueRouter实例并导出
export default new VueRouter({routes})