import { createRouter, createWebHistory } from 'vue-router'
import ParticipantPage from '../views/Patricipant/ParticipantPage.vue'
import ComplaintPage from '../views/Complaints/ComplaintPage.vue'
import MainPage from '../views/MainPage/MainPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MainPage },
    { path: '/uchasnyky', component: ParticipantPage },
    { path: '/oskarzhennya', component: ComplaintPage }
  ]
})

export default router
