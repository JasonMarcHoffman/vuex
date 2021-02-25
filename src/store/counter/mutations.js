export default {
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
}