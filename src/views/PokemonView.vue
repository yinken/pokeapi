<template>
  <div class="pokemon">
    <div class="tile is-ancestor">
      <div class="tile is-parent is-4">
        <div class="tile is-child">
          <Pokemon v-if="pokemon" v-bind:key="pokemon.id" v-bind:pokemon="pokemon"/>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Pokemon from '@/components/Pokemon.vue';
import axios from 'axios';

export default {
  name: 'pokemon',
  props: ["name"],
  components: {
    Pokemon
  },
  data() {
    return {
      pokemon: [],      
    }
  },
  created() {
      const request = axios(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.name}/`)
      request.then(res => this.pokemon = res.data)        
  }
}
</script>
