<template>
  <div>
    <div class="evolutions" style="">
      <div class="evolution" v-bind:evolutions="evolutions" style="text-transform: capitalize;">
        <span v-if="pokemon.name == evolutions.species.name" class="is-current">
          <strong>{{evolutions.species.name}}</strong>
        </span>
        <span v-else class="is-basic">
          <a v-bind:pokemon="pokemon" v-on:mouseover="getPokemon(evolutions.species.name)">{{evolutions.species.name}}</a>
        </span>      
      </div>
      <div class="evolution" v-bind:evolutions="evolutions" style="text-transform: capitalize;">
        <div v-bind:key="evolution.name" v-for="evolution in evolutions.evolves_to" >
          <div>
            <span v-if="pokemon.name == evolution.species.name" class="is-current">
              <strong>{{evolution.species.name}}</strong>
            </span>
            <span v-else class="is-evolution">
              <a v-on:mouseover="getPokemon(evolution.species.name)">{{evolution.species.name}}</a>
            </span>
          </div>
          <div>
            <div v-bind:key="sub_evolution.name" v-for="sub_evolution in evolution.evolves_to">
              <span v-if="pokemon.name == sub_evolution.species.name">
                <strong>{{sub_evolution.species.name}}</strong>
              </span>
              <span v-else class="is-evolution">
                <a v-on:mouseover="getPokemon(sub_evolution.species.name)">{{sub_evolution.species.name}}</a>
              </span>
              <div v-bind:key="sub_sub_evolution.name" v-for="sub_sub_evolution in sub_evolution.evolves_to">
                <span v-if="pokemon.name == sub_sub_evolution.species.name" class="is-current">
                  <strong>{{sub_sub_evolution.species.name}}</strong>                  
                </span>
                <span v-else class="is-evolution">
                  <a v-on:mouseover="getPokemon(sub_sub_evolution.species.name)">{{sub_sub_evolution.species.name}}</a>                  
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
<style lang="sass" scoped>
.evolutions 
  display: flex
  flex-direction: row
  width: 100%
  margin: 1rem 0
  justify-content: center
  span 
    padding: .25rem
    height: 25px
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
    //flex-basis: 25%
    justify-content: flex-start
    align-items: flex-start
    &:nth-child(2)
      //flex-basis: 33%

      div 
        display: flex
        flex-direction: row
        //flex-basis: 50%

        &:nth-child(2)
          display: flex
          flex-direction: column
          > div
            width: 100%
            display: flex
            flex-direction: row
            justify-content: flex-start






</style>
