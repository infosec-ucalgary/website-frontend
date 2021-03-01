import Vue from 'vue'
import App from './App.vue'
import './index.css'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false

Vue.use(VModal)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
