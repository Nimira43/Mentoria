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
    background: #012222;
    color: #ffffee;
    border-radius: 5px;
    padding: 0.5rem 1.5rem;
    display: inline-block;
    margin-right: 0.5rem;
  }
  .frontend {
    background-color: #e14c16;
  }
  
  .backend {
    background-color: #0fa4d6;
  }
  
  .career {
    background-color: #0ad425;
  }
</style>