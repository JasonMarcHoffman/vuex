import { createApp } from 'vue';

// creating a vuex store
import { createStore } from 'vuex';

import App from './App.vue';

// only one store per app
// state is a function that manages all the app's data
const store = createStore({
  state() {
    return {
      counter: 0
    };
  },
  // a better way of CHANGING THE STATE
  // mutations have to be synchronous
  mutations: {
    // mutations always have access to state
    increment(state) {
      state.counter = state.counter + 1;
    },
    // payload allows you to pass a value in when the method is called
    // payload can be anything
    increase(state, payload) {
      state.counter = state.counter + payload.value
    }
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
      context.commit('increase', payload)
    }
  },
  // getters get the state and other getters...
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
})

const app = createApp(App);

app.use(store)

app.mount('#app');
