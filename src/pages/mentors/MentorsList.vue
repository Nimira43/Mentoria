<template>
  <section>
    <mentor-filter @change-filter="setFilters"></mentor-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button 
          v-if="!isMentor"
          link to="/register"
        >
          Register as Mentor
        </base-button>
      </div>
      <ul v-if="hasMentors">
        <mentor-item
          v-for="mentor in filteredMentors"
          :key="mentor.id"
          :id="mentor.id" 
          :first-name="mentor.firstName"
          :last-name="mentor.lastName"
          :rate="mentor.hourlyRate"  
          :areas="mentor.areas"
        ></mentor-item>
      </ul>
      <h3 v-else>No Mentors Found</h3>
    </base-card>  
  </section>
</template>

<script>
import MentorItem from '../../components/mentors/MentorItem.vue'
import MentorFilter from '../../components/mentors/MentorFilter.vue';  
import BaseButton from '../../components/ui/BaseButton.vue'

export default {
  components: {
    MentorItem,
    MentorFilter,
    BaseButton
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },
  computed: { 
    isMentor() {
      return this.$store.getters['mentors/isMentor']
    },
    filteredMentors() {
      const mentors = this.$store.getters['mentors/mentors']
      return mentors.filter(mentor => {
        if (this.activeFilters.frontend && mentor.areas.includes('frontend')) {
          return true
        } 
        if (this.activeFilters.backend && mentor.areas.includes('backend')) {
          return true
        } 
        if (this.activeFilters.career && mentor.areas.includes('career')) {
          return true
        }
        return false 
      })
    },
    hasMentors() {
      return this.$store.getters['mentors/hasMentors']
    }
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters
    }
  }
}
</script>


<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .controls {
    display: flex;
    justify-content: space-between;
  }
</style>