import { createApp } from 'vue';

// creating a vuex store
import { createStore } from 'vuex';

import App from './App.vue';

// creating a module to manage the counter
// there can only be one store per app but an app can have many modules
// modules can have state, mutations, actions and getters!
const counterModule = {
  state() {
    return {
      counter: 0,
    }
  },
  mutations: {
    // mutations always have access to state
    increment(state) {
      state.counter = state.counter + 1;
    },
    // payload allows you to pass a value in when the method is called
    // payload can be anything
    increase(state, payload) {
      state.counter = state.counter + payload.value
    },
    //  2. creating a mutation to manage the state with a payload that will set the 
    // value to true or false 
  },
  actions: {
    // actions can have the same name as mutations..
    // actions receive a context object as an argument
    increment(context) {
      setTimeout(function () {
        context.commit('increment')
      }, 2000)
    },
    increase(context, payload) {
      // having a look at the context object
      console.log(context)
      console.log(payload)
      context.commit('increase', payload)
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    // using the finalCounter getter in the normalisedCounter getter
    // use _ to allow it to pass to the next argument
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100
      }
      return finalCounter
    }
  }
};

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
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth
    }
  },
  actions: {
    // 3. create an action for both log in and log out which uses the mutations to 
    // set the isAuth value
    logIn(context) {
      context.commit('setAuth', { isAuth: true })
    },
    logOut(context) {
      context.commit('setAuth', { isAuth: false })
    },
  },
  // getters can get the state and other getters...
  getters: {
    // 4. creating a getter to get the state of the user (logged in or logged out)
    // use this in the UserAuth component to get the value
    userIsAuthenticated(state) {
      return state.isLoggedIn
    },
  }
})

const app = createApp(App);

app.use(store)

app.mount('#app');
