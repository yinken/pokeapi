<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/pokemon">Pokemon</router-link>
    </div>
    <section class="section">
      <router-view/>
    </section>    
  </div>
</template>

<style lang="sass">
  @import "~bulma/css/bulma.css";
  .card-header-title
    flex-direction: column
    justify-content: center
    align-items: flex-start
  .icon 
    &.is-large 
      height: 5rem
      width: 5rem  

  .tile 
    &.is-parent
      flex-direction: row
      flex-wrap: wrap
  
  
</style>
