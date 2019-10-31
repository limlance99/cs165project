import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  forms: []
}

const getters = {
  allForms: (state) => state.forms,
}

const actions = {
  getDLAFs({ commit }) {
    axios.get(
      `/api/dlaf`
    ).then(response => {
      commit("setForms", response.data.data)
    })
  }
}

const mutations = {
  setForms: (state, forms) => state.forms = forms
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
