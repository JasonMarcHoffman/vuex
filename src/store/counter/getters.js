export default {
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