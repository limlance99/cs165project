import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

const localTestURL = "http://localhost:1323"

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
  businessList: [],
  peopleList: []
}

const getters = {
  apiRoutes: (state) => state.allRoutes,
  ListofBusinesses: (state) => state.businessList,
  ListofBusinessNames: (state) => {
    var names = [];
    for (let i = 0; i < state.businessList.length; i++) {
      names.push(state.businessList[i].businessname)
    }
    return names;
  },
  ListofPeople: (state) => state.peopleList,
}

const actions = {
  async fetchTable({ commit }, route) {
    var response = await axios.get(`${localTestURL}/api/${route}`);
    if (route == "businesses") {
      commit('setBusinesses', response.data.data);
    } else if (route == "people") {
      commit('setPeople', response.data);
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
  async putBusiness({commit}, data) {
    var response = await axios.put(`${localTestURL}/api/businesses`, data);
    commit("updateBusiness", response.data)
  },
  async deleteBusiness({ commit }, businessname) {
    businessname = businessname.trim();
    var response = await axios.delete(`${localTestURL}/api/businesses/${businessname}`)
    console.log(response.data)
    commit("deleteBusiness", response.data.businessname)
  },
}

const mutations = {
  setBusinesses: (state, data) => state.businessList = data,
  setPeople: (state, data) => state.peopleList = data,
  addBusiness: (state, data) => {

    for (let i = 0; i < state.businessList.length; i++) {
      if (state.businessList[i].businessname.toLowerCase() > data.businessname.toLowerCase()) {
        state.businessList.splice(i, 0, data);
        break;
      }
    }
  },
  updateBusiness: (state, data) => {
    for (let i = 0; i < state.businessList.length; i++) {
      if (state.businessList[i].businessname == data.businessname) {
        state.businessList[i].businessno = data.businessno;
        state.businessList[i].businessadd = data.businessadd;
        break;
      } 
    }
  },
  deleteBusiness: (state, name) => state.businessList = state.businessList.filter(x => x.businessname != name),
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
