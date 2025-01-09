import { createRouter, createWebHistory } from 'vue-router'

import MentorDetail from './pages/mentors/MentorDetail.vue'
import MentorsList from './pages/mentors/MentorsList.vue'
import MentorRegistration from './pages/mentors/MentorRegistration.vue'
import ContactMentor from './pages/requests/ContactMentor.vue'
import RequestsReceived from './pages/requests/RequestsReceived.vue'
import NotFound from './pages/NotFound.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/mentors'},
    { path: '/mentors', component: null },
    { 
      path: '/mentors/:id', 
      component: null, 
      children: [
        { path: 'contact', component: null }
      ] 
    },
    { path: '/register', component: null },
    { path: '/requests', component: null },
    { path: '/:notFound(.*)', component: null }
  ]
})

export default router