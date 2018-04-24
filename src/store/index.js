import Vue from 'vue'
import Vuex from 'vuex'
import cliente from './modules/cliente'
import producto from './modules/producto'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cliente,
    producto
  },
  strict: debug
})