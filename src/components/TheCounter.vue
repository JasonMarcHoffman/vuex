<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  // getting the value of counter from the store with the computed property
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter
    // }
    ...mapGetters(['finalCounter'])
  },  
}
</script>

<style>
  
</style>