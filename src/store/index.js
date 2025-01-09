import { createStore } from 'vuex/dist/vuex.mjs'

import mentorsModule from './modules/mentors/index.js'

const store = createStore ({
  modules: {
    mentors: mentorsModule
  }
})

export default store