import Vue from 'vue'
import App from './App.vue'
import Routers from "./router/index";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: Routers
}).$mount('#app')
