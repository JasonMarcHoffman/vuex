export default {
  // 3. create an action for both log in and log out which uses the mutations to 
  // set the isAuth value
  logIn(context) {
    context.commit('setAuth', { isAuth: true })
  },
  logOut(context) {
    context.commit('setAuth', { isAuth: false })
  },
}