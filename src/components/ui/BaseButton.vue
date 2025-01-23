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
  button, a {
    text-decoration: none;
    padding: 0.75rem 1,5rem;
    font: inherit;
    background-color: #111;
    border: none;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    margin-right: 0.5rem;
    display: inline-block;
    transition: all 0.5s ease-in-out;
  }

  a:hover, a:active,
  button:hover, button:active {
    background-color: black;
  }

  
</style>
