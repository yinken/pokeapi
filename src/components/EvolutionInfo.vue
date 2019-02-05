<template>
  <div class="evolution-info" v-if="info"> 
    <div class="card-header">
      <div class="card-header-icon">
        <figure class="icon is-large"><img v-bind:src="info.sprites.front_shiny"/> </figure>
      </div>
      <div class="card-header-title" style="text-transform: capitalize;">
          <p class="title is-size-5">{{ info.name }}</p>
          <p class="subtitle is-size-6">
            <strong>XP:</strong> {{ info.base_experience }} - 
            <strong>Height: </strong>{{ info.height}}
          </p>
        </div>
    </div>
  </div> 
</template>
<script>
export default {
  name: 'EvolutionInfo',
  props: ["info"]
}
</script>

<style lang="sass">
  .evolution-info
    margin: 0 -1.5rem -1.5rem -1.5rem
    border-top: 1px solid #ccc
    background: #ececec
    transition: all ease-in-out .5s
</style>
