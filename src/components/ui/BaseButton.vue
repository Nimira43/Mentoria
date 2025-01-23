<template>
  <button 
    v-if="!link" 
    :class="mode"
  >
    <slot></slot>
  </button>
  <router-link 
    v-else :to="to" 
    :class="mode"
  >
    <slot></slot>
  </router-link>
</template>

<script>
  export default {
    props: {
      mode: {
        type: String,
        required: false,
        default: null
      },
      link: {
        type: Boolean,
        required: false,
        default: false
      },
      to: {
        type: String,
        required: false,
        default: '/'
      }
    }
  }
</script>

<style scoped>
  button, 
  a {
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font-family: inherit;
    font-weight: 500;
    background-color: #012222;
    border: 1px solid #012222;
    text-transform: uppercase;
    color: #ffffee;
    cursor: pointer;
    border-radius: 5px;
    margin-right: 0.5rem;
    display: inline-block;
    transition: all 0.5s ease-in-out;
  }

  a:hover, 
  a:active,
  button:hover, 
  button:active {
    color: #012222;
    background-color: transparent;
    border-color: #012222;
  }

  .flat {
    background-color: transparent;
    color: #012222;
    border: none;
  }
  
  .outline {
    background-color: transparent;
    border-color: #012222;
    color: #012222;
  }

  .flat:hover,
  .flat:active,
  .outline:hover,
  .outline:active {
    background-color: #012222;
    color: #ffffee;
  }


</style>
