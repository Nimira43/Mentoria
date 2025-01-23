<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
  .card {
    border-radius: 5px;
    box-shadow: 0 2px 8px(0, 0, 0, 0.3);
    padding: 1rem;
    margin: 2rem auto;
    max-width: 40rem;
  }
</style>