import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
  namespaced: true,
  state() {
    return {
      mentors: [
        {
          id: 'c1',
          firstName: 'Stanley',
          lastName: 'Kubrick',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Stanley and I've worked in Web Development for the last 10 years. With my experience I'm sure I'll be able to guide you in your career.",
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
        },
        {
          id: 'c3',
          firstName: 'David',
          lastName: 'Lynch',
          areas: ['frontend', 'career'],
          description:
            "I'm David, specialising in frontend development and career coaching. Having a deep understanding of career development strategies I'm eager to guide you in advancing your career while mastering frontend technologies.",
          hourlyRate: 38
        },
        {
          id: 'c4',
          firstName: 'Stephanie',
          lastName: 'Lucas',
          areas: ['frontend', 'backend'],
          description:
            "I'm Stephanie.I've worked with cutting-edge technologies and delivered successful projects for global companies. I'm excited to share my expertise and help you achieve your goals in both frontend and backend development.",
          hourlyRate: 45
        }
      ]
    }
  },
  mutations,
  actions,
  getters
}