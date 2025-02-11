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

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Libre Caslon Text', serif;
  }

  .logo {
    font-family: 'Great Vibes', cursive;
    font-weight: lighter;
    font-size: 2.5rem;
    letter-spacing: 2px;
  }

  p {
    font-weight: 500;
    font-size: 18px;
  }
</style>
