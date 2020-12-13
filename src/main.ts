import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// @ts-ignore
import store from './store'
import router from './router'

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

new Vue({
  store: store,
  router: router,
  render: (h) => h(App),
}).$mount('#app');
