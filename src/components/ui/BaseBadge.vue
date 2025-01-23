<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
  export default {
    props: ['type', 'title'],
    computed: {
      text() {
        return this.title.toUpperCase()
      }
    }
  }
</script>

<style scoped>
  .badge {
    background: purple;
    color: white;
    border-radius: 5px;
    padding: 0.5rem 1.5rem;
    display: inline-block;
    margin-right: 0.5rem;
  }
  .frontend {
    background-color: green;
    color: white;
  }
  
  .backend {
    background-color: darkgreen;
    color: white;
  }
  
  .career {
    background-color: violet;
    color: white;
  }
</style>