<template>
  <button @click="addOne">Add One</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      // increment is the mutation name in the store!
      this.$store.dispatch('increment')
    }
  }
}
</script>

<style>

</style>