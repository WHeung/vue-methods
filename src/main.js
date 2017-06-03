import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import types from 'types'

Vue.config.productionTip = false

Vue.prototype.$types = types

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
