import Vue from 'vue'
import '@inkline/inkline/dist/inkline.css'
import Inkline from '@inkline/inkline'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import FunctionalCalendar from 'vue-functional-calendar'

// import '@inkline/inkline/src/inkline.scss'
// import * as components from '@inkline/inkline/src/components'

// import VueCarousel from 'vue-carousel'

Vue.config.productionTip = false

// Vue.use(Inkline, { components })
Vue.use(Inkline)
// Vue.use(VueCarousel)
Vue.use(FunctionalCalendar, {
  dayNames: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
