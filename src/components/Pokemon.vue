<template>

    <article class="card pokemon">
      <div class="card-header">        
        <div class="card-header-icon"><span class="icon is-large"><img v-bind:src="pokemon.sprites.front_shiny"/></span></div>
        <div class="card-header-title" style="text-transform: capitalize;">
          <p class="title is-size-5">{{ pokemon.name }}</p>
          <p class="subtitle is-size-6">
            <strong>XP:</strong> {{ pokemon.base_experience }} - 
            <strong>Height: </strong>{{ pokemon.height}}            
          </p>
        </div>
        <div class="card-header-icon">
          <div class="tags are-small">
              <span class="tag is-primary" v-bind:key="type.slot" v-for="type in pokemon.types">{{type.type.name}}</span>
          </div>
        </div>
      </div>
      <PokemonDetails v-bind:pokemon="pokemon" v-bind:details="details" />
    </article>

</template>

<script>

import PokemonDetails from './PokemonDetails';
export default {
  name: 'Pokemon',
  props: ["pokemon","details"],   
  components: {
    PokemonDetails
  },
  methods: {}
}
</script>
<style lang="sass">
  .pokemon 
    .tag
      text-transform: capitalize
</style>
