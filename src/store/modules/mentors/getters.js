export default {
  mentors(state) {
    return state.mentors
  },
  hasMentors(state) {
    return state.mentors && state.mentors.length > 0
  },
  isMentor(sate, getters, rootState, rootGetters) {
    const mentors = getters.mentors
  }
}