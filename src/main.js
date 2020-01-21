import Vue from 'vue'
import '@inkline/inkline/dist/inkline.css'
import Inkline from '@inkline/inkline'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCarousel from 'vue-carousel'
import FunctionalCalendar from 'vue-functional-calendar'

Vue.config.productionTip = false

Vue.use(Inkline)
Vue.use(VueCarousel)
Vue.use(FunctionalCalendar, {
  dayNames: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
