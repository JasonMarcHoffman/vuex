<template>
  <h3>{{ counter }}</h3>
  <p>....we want to do more that what the counter component is doing</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.normalizedCounter
    }
  }  
}
</script>

<style>
  
</style>