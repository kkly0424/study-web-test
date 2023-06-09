import Vue from 'vue'
import Vuex from 'vuex'
import aside from './modules/aside'
import home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    aside,
    home
  }
})
