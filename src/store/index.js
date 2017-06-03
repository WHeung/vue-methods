import Vue from 'vue'
import Vuex from 'vuex'
import globalModule from './modules/global'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    global: globalModule
  }
})

export default store
