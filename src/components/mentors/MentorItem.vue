<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }} / hour</h4>
    <div>
      <span 
        v-for="area in areas" 
        :key="area"
      >
        {{ area }}
      </span>
    </div>
    <div class="actions">
      <router-link
        to="/mentors/c1/contact"
      >
        Contact
      </router-link>
      <router-link
        to="/mentors/c1"
      >
        View Details
      </router-link>
    </div>
  </li>
</template>

<style scoped>
  li {
    margin: 1rem 0;
    border: 1px solid #ffd700;
    border-radius: 5px;
    padding: 1rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h3, h4 {
    margin: 0.5rem 0;
  }
  
  div {
    margin: 0.5rem 0;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
  }
</style>