<template>
  <button @click="logIn" v-if="!isAuth">Log In</button>
  <button @click="logOut" v-if="isAuth">Log Out</button>
</template>

<script>
export default {
  methods: {
    logIn() {
      this.$store.dispatch('logIn')
    },
    logOut() {
      this.$store.dispatch('logOut')
    },
  },
  // to get access to the getters
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated
    }
  }
}
</script>