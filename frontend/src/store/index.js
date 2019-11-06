import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

const state = {
  allRoutes: [
    {
      title: "Restrictions",
      link: "restrictions"
    },
    {
      title: "Conditions",
      link: "conditions"
    },
    {
      title: "Restrictions and Conditions",
      link: "resandconds"
    },
    {
      title: "Body Type",
      link: "bodytype"
    },
    {
      title: "Personal Details",
      link: "personaldetails"
    },
    {
      title: "Family Relations",
      link: "familyrelations"
    },
    {
      title: "Nationality",
      link: "nationality"
    },
    {
      title: "Person Information",
      link: "personinformation"
    },
    {
      title: "Businesses",
      link: "businesses"
    },
    {
      title: "Civil Status",
      link: "civilstatus"
    },
    {
      title: "Driver's License Application Form",
      link: "dlaf"
    },
  ],
  tableData: []
}

const getters = {
  apiRoutes: (state) => state.allRoutes,
  allTheData: (state) => state.tableData,
}

const actions = {
  async fetchTable({ commit }, route) {
    var response = await axios.get(`/api/${route}`);
    commit('setTableData', response.data);
  }
}

const mutations = {
  setTableData: (state, data) => state.tableData = data,
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
