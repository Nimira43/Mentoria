<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
  import TheHeader from './components/layout/TheHeader.vue'
  
  export default {
    components: {
      TheHeader
    }
  }
</script>


<style>
  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Cormorant Garamond', serif;
  }

  body {
    margin: 0;
  }

  .logo {
    font-family: 'Great Vibes', cursive;
    font-weight: lighter;
    font-size: 2.8rem;
    letter-spacing: 1px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Libre Caslon Text', serif;
  }
</style>
