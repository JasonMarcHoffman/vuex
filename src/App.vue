<template>
  <base-container title="Vuex">

    <div>
      <h5>Favorite Value Counter:</h5>
      <FavoriteValue />
    </div>
    <div>
      <h5>The Counter:</h5>
      <TheCounter />
    </div>
    <button @click="addTen">add 10</button>
    <ChangeCounter />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import TheCounter from './components/TheCounter.vue';

export default {
  components: {
    BaseContainer,
    ChangeCounter,
    FavoriteValue,
    TheCounter
  },
  methods: {
    addTen() {
      // increment is the mutation name in the store!
      // payload in this case is an object
      this.$store.dispatch('increase', { value: 10 });

      // another syntax for committing: 
      // this.$store.commit({
      //   type: 'increase',
      //   value: 10
      // })
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>