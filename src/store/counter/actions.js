export default {
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
}
