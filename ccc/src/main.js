import Vue from 'vue';
import "lib-flexible";
import 'src/components';
import App from './App.vue';
import router from "./router";
import { Toast } from 'vant';
import  VConsole  from  'vconsole';
new VConsole();
Vue.prototype.$Toast = Toast;
new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
