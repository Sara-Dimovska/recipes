import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
// import './assets/app.scss'
// import '@mdi/font/css/materialdesignicons.min.css'

Vue.use(Buefy)
Vue.use(vuetify)
Vue.config.productionTip = false
sync(store, router)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
