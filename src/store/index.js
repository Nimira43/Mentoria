import { createStore } from 'vuex/dist/vuex.mjs'

import mentorsModule from './modules/mentors/index.js'

const store = createStore ({
  modules: {
    mentors: mentorsModule
  },
  state() {
    return {
      userId: 'c3' // hard-coded for now
    }
  },
  getters: {
    userId(state) {
      return state.userId
    }
  }
})

export default store