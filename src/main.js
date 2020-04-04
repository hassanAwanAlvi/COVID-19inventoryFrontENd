import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import 'bootstrap'
import VueRouter from 'vue-router'
// import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import BeatLoader from 'vue-spinner/src/BeatLoader.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { variables } from './constants/systemConstants'
Vue.component('beat-loader', BeatLoader)
Vue.use(VueAxios, axios)
Vue.use(VueRouter)
// @ts-ignore
Vue.router = router
Vue.axios.defaults.baseURL = variables.defaultURL
Vue.use(BootstrapVue)
Vue.config.productionTip = false
//
// Vue.use(require('@websanova/vue-auth'), {
//   auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
//   http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
//   router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// # sourceMappingURL=main.js.map
