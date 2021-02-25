// creating a vuex store
import { createStore } from 'vuex';

import rootMutations from './mutations.js'
import rootActions from './actions.js'
import rootGetters from './getters.js'
import counterModule from './counter/index.js'

// only one store per app
// state is a function that manages all the app's data
const store = createStore({
  // important to note is that state is local to its module
  // ie isLoggedIn state can not be accessed in numbers / counterModule
  modules: {
    // naming our counter module numbers and adding it to the store
    numbers: counterModule
  },
  state() {
    return {
      // 1. initiating a user as logged out
      isLoggedIn: false
    };
  },
  // a better way of CHANGING THE STATE
  // mutations have to be synchronous
  mutations: rootMutations,
  actions: rootActions,
  // getters can get the state and other getters...
  getters: rootGetters
})

export default store