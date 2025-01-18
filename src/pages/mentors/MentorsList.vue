<template>
  <section>
    Filter
  </section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Mentor</router-link>
    </div>
    <ul>
      <li v-for="mentor in filteredMentors" :key="mentor.id">
        {{ mentor.firstName }}
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    computed: {
      filteredMentors() {
        return this.$store.getters['mentors/mentors']
      }
    }
  }

</script>