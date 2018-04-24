import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    number: 0
  },
  modules: {
  },
  mutations: {
    setNumber: function (state, number) {
      state.number = number
    },
    incNumber: function (state, inc) {
      state.number += inc
    }
  },
  actions: {
    getNumber: function () {
      return this.state.number
    }
  },
  strict: debug
})