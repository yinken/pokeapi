<template>
  <div class="tile is-child">
    <article class="card">
      <div class="card-header">        
        <div class="card-header-icon"><span class="icon is-large"><img v-bind:src="test.sprites.front_shiny"/></span></div>
        <div class="card-header-title" style="text-transform: capitalize;">{{ test.name }}</div>
        <div class="card-header-icon"><button class="button">Show</button></div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Test',
  props: ["test"]
}
</script>
