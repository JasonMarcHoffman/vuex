import counterMutations from './mutations'
import counterActions from './actions'
import counterGetters from './getters'
// creating a module to manage the counter
// there can only be one store per app but an app can have many modules
// modules can have state, mutations, actions and getters!
export default {
  state() {
    return {
      counter: 0,
    }
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters
};

