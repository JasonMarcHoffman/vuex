export default {
  // 4. creating a getter to get the state of the user (logged in or logged out)
  // use this in the UserAuth component to get the value
  userIsAuthenticated(state) {
    return state.isLoggedIn
  },
}