import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

const localTestURL = ""

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
  businessList: []
}

const getters = {
  apiRoutes: (state) => state.allRoutes,
  ListofBusinesses: (state) => state.businessList,
}

const actions = {
  async fetchTable({ commit }, route) {
    var response = await axios.get(`${localTestURL}/api/${route}`);
    if (route == "businesses") {
      commit('setBusinesses', response.data.data);
    }
  },
  async postBusiness({ commit }, data) {
    var business = {
      businessname: data.businessname.trim(),
      businessno: data.businessno.trim(),
      businessadd: data.businessadd.trim(),
    }
    try {
      var response = await axios.post(`${localTestURL}/api/businesses`, business);
      commit("addBusiness", response.data);
      return 500;
    } catch(err) {
      if (err.response.status == 409) {
        return 409;
      }
    }
  },
  async deleteBusiness({ commit }, businessname) {
    businessname = businessname.trim();
    var response = await axios.delete(`${localTestURL}/api/businesses/${businessname}`)
    console.log(response.data)
    commit("deleteBusiness", response.data.businessname)
  }
}

const mutations = {
  setBusinesses: (state, data) => state.businessList = data,
  addBusiness: (state, data) => state.businessList.push(data),
  deleteBusiness: (state, name) => state.businessList = state.businessList.filter(x => x.businessname != name),
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
