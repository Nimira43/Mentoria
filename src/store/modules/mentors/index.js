import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Stanley',
          lastName: 'Kubrick',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Stanley and I've work in Web Development for the last 10 years. With my experience I'm sure I'll be able to guide you in your career.",
          hourlyRate: 42
        },
        {
          id: 'c2',
          firstName: 'Alex',
          lastName: 'Cox',
          areas: ['backend', 'career'],
          description:
            "I'm  Alex and have worked on large scale backend projects for multi-national companies like Sony and Ford. I'd love the opportunity to help you progress in your field.",
          hourlyRate: 36
        }
      ]
    }
  },
  mutations,
  actions,
  getters
}