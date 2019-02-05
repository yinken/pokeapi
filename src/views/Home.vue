<template>
  <div class="home">
    <div class="tile is-ancestor">

        <Pokemons v-bind:pokemons="pokemons"/>   

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Pokemons from '@/components/Pokemons.vue';
import HttpRequest from '@/services/HttpRequest';

export default {
  name: 'home',
  components: {
    Pokemons
  },
  data() {
    return {
      pokemons: [],      
    }
  },
  created() {
    //let ids = [1,2,3,4,5,6,7,8,9,10];
    let pokeList = [];
    let i = 200;
    while (i < 300) {
      let data = new HttpRequest();
      data.get('https://pokeapi.co/api/v2/pokemon/'+i+'/')
        .then(res => pokeList.push(res.data))
        .catch(err => console.log(err)); 
        i++;
    }
    this.pokemons = pokeList;      
  }

}
</script>
