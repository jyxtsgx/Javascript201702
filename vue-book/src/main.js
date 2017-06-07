import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
// import Router from './router/router' 注入时 => router: Router
import router from './router/router'
import VueResource from 'vue-resource'

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App),
  // router: Router// 将VueRouter实例注入到vue跟实例中
    router // router:router
});

