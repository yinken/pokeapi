<template>
  <div class="tile is-parent">
   <div class="tile is-4 is-child notification" v-bind:key="pokemon.id" v-for="pokemon in pokemons">
    <Pokemon v-bind:pokemon="pokemon"/>
   </div>
  </div>
</template>

<script>
import Pokemon from "./Pokemon";

export default {
  name: "Pokemons",
  components: {
    Pokemon
  },
  props: ["pokemons"]
}
</script>

<style scoped>

</style>


