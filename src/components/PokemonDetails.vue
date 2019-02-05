<template>
<div>
  <div v-if="details.name" class="card-content">
    <div v-bind:name="details">
      <div v-bind:flavorText="flavorText">{{flavorText}}</div>      
        <PokemonEvolutions v-if="evolutions" v-bind:evolutions="evoChain" v-bind:pokemon="pokemon"/>
    </div>
  </div>
  <div class="card-footer">
    <div class="card-footer-item">
      <button v-bind:pokemon="pokemon" class="button" @click="getDetails(pokemon.id)">Get Details</button>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import PokemonEvolutions from './PokemonEvolutions';

export default {
  name: 'PokemonDetails',
  props: ["pokemon"],
  data() {    
    return {
     details: '',
     flavorText: '',
     evolutions: ''
    }
  },
  components: {
    PokemonEvolutions
  },
  methods: {
    getDetails(id) {
      const request = axios(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
        request.then(res => this.details = res.data)      
        request.then(res => this.flavorText = this.findFlavorText('en',res.data.flavor_text_entries))
        request.then(res => this.getEvolutionChain(res.data.evolution_chain.url))

      
    },
    getEvolutionChain(url) {
      const request = axios(url);
      request.then(res => this.evoChain = res.data.chain)
      request.then(res => this.evolutions = this.findEvolutions(res.data.chain))
        
    }, 
    findFlavorText(lang,obj) {
      let flavorText = obj.filter(entry => entry.language.name == lang)
      flavorText = flavorText[Math.floor(Math.random() * flavorText.length)];
      return flavorText.flavor_text
    },
    findEvolutions(obj) {
      let evolutions = {}
      obj.evolves_to.forEach(function(evolution){
        let species = evolution
        evolutions = {...evolutions,species}
      })
      return evolutions
    }
  }
}
</script>

