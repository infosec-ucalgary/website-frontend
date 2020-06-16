import Vue from 'vue'
import './assets/css/output.css'
import '@inkline/inkline/dist/inkline.css'
import Inkline from '@inkline/inkline'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Calendar from 'primevue/calendar'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'

Vue.config.productionTip = false

Vue.use(Inkline)

Vue.component('Calendar', Calendar)
Vue.component('DataTable', DataTable)
Vue.component('Column', Column)
Vue.component('ColumnGroup', ColumnGroup)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
