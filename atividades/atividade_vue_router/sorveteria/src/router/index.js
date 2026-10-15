import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SaboresView from '@/views/SaboresView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/sabores',
    name: 'Sabores',
    component: SaboresView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router