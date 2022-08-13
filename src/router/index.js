import { createRouter, createWebHistory } from 'vue-router'
import TenderPage from '../views/Patricipant/TenderPage.vue'
import ComplaintPage from '../views/Complaints/ComplaintPage.vue'
import MainPage from '../views/MainPage/MainPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'main', component: MainPage },
    { path: '/uchasnyky', name: 'tender', component: TenderPage },
    { path: '/oskarzhennya', name: 'complaint', component: ComplaintPage },
  ]
})

export default router;
