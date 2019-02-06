<template>
  <div>
    <div class="evolutions" style="">
      <div class="evolution" v-bind:evolutions="evolutions" style="text-transform: capitalize;">
        <span v-if="pokemon.name == evolutions.species.name" class="is-current">
          <strong>I: {{evolutions.species.name}}</strong>
        </span>
        <span v-else class="is-basic" v-bind:pokemon="pokemon" v-on:mouseover="getPokemon(evolutions.species.name)">
          <router-link :to="{ name: 'pokemon', params: { name: evolutions.species.name }}">I: {{evolutions.species.name}}</router-link>
        </span>      
      </div>
      <div class="evolution" v-bind:evolutions="evolutions" style="text-transform: capitalize;">
        <div v-bind:key="evolution.name" v-for="evolution in evolutions.evolves_to" >
          <div>            
            <span v-if="pokemon.name == evolution.species.name" class="is-current">
              <strong>II: {{evolution.species.name}}</strong>
            </span>
            <span v-else class="is-evolution" v-on:mouseover="getPokemon(evolution.species.name)">
              <router-link :to="{ name: 'pokemon', params: { name: evolution.species.name }}">II: {{evolution.species.name}}</router-link>
            </span>
          </div>
          <div>
            
            <div v-bind:key="sub_evolution.name" v-for="sub_evolution in evolution.evolves_to">
              <span v-if="pokemon.name == sub_evolution.species.name">
                <strong>III: {{sub_evolution.species.name}}</strong>
              </span>
              <span v-else class="is-evolution" v-on:mouseover="getPokemon(sub_evolution.species.name)">
                <router-link :to="{ name: 'pokemon', params: { name: sub_evolution.species.name }}">III: {{sub_evolution.species.name}}</router-link>
              </span>
              <div v-bind:key="sub_sub_evolution.name" v-for="sub_sub_evolution in sub_evolution.evolves_to">
                <span v-if="pokemon.name == sub_sub_evolution.species.name" class="is-current">
                  <strong>IV:&nbsp;{{sub_sub_evolution.species.name}}</strong>                  
                </span>
                <span v-else class="is-evolution" v-on:mouseover="getPokemon(sub_sub_evolution.species.name)">
                  <router-link :to="{ name: 'pokemon', params: { name: sub_sub_evolution.species.name }}">IV:&nbsp;{{sub_sub_evolution.species.name}}</router-link>
                </span>
              </div>              
            </div>
          </div>
        </div>
      </div>    
    </div>

      <EvolutionInfo v-if="info" v-bind:info="info"/>

  </div>  
</template>
<script>
import axios from 'axios';
import EvolutionInfo from './EvolutionInfo'
export default {
  name: 'PokemonEvolution',
  props: ["evolutions","pokemon"],
  components: {
    EvolutionInfo
  },

  data() {
    return {
      info: '',     
    }    
  },
  methods: {
    getPokemon(name) {
      const request = axios(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      request.then(res => this.info = res.data)      
    }
  }
}
</script>
<style lang="sass">
.evolutions 
  display: flex
  flex-direction: row
  width: 100%
  margin: 1rem 0
  justify-content: center
  overflow-y: auto
  padding-left: 8rem
  padding-right: 0rem
  padding-top: .5rem
  padding-bottom: .5rem
  span 
    padding: .25rem
    min-width: 100px
    display: flex
    justify-content: center
    align-items: center
    border-radius: 2px
    margin: .25rem
    border: 1px solid #999
    a 
      text-decoration: none !important
    &.is-evolution, &.is-basic
      background: #999
      color: white
    &.is-current 
      background: transparent
  .evolution
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: flex-start
    &:nth-child(2)
      div 
        display: flex
        flex-direction: row
        &:nth-child(2)
          display: flex
          flex-direction: column
          > div
            width: 100%
            display: flex
            flex-direction: row
            justify-content: flex-start

</style>
