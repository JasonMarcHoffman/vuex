<template>
  <h3>{{ counter }}</h3>
</template>

<script>
export default {
  // getting the value of counter from the store with the computed property
  computed: {
    counter() {
      return this.$store.getters.finalCounter
    }
  },  
}
</script>

<style>
  
</style>