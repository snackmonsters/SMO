import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registerEmail: ''
  },
  getters: {
    getRegisterEmail: state => {
      return state.registerEmail
    },
    setRegisterEmail ({commit}, email) {
      commit('setRegisterEmail', email)
    }
  },
  mutations: {
    setRegisterEmail (state, email) {
      state.registerEmail = email
    }
  }
})
