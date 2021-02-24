<template>
  <button @click="inc">Add One</button>
  <!-- we are providing the payload here, as the action requires one in the store -->
  <button @click="increase({value: 11})">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    // addOne() {
    //   // increment is the mutation name in the store!
    //   this.$store.dispatch('increment')
    // }

    // normal method:
    // ...mapActions(['increment', 'increase']),

    // creating your own names for the map action
    ...mapActions({
      inc: 'increment',
      increase: 'increase'
    })
  }
}
</script>

<style>

</style>