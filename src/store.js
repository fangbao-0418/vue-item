import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  collectDelIsOpen: false,
}

const mutations = {
  collectDel(state){
  	state.collectDelIsOpen = !state.collectDelIsOpen;
  }
}

const actions = {
   
}


const getters = {
  
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})