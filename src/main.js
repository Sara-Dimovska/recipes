import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router'
import VueRouter from 'vue-router'
// import './assets/app.scss'
// import '@mdi/font/css/materialdesignicons.min.css'

Vue.use(Buefy)
Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  Vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
