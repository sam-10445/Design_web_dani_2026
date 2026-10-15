import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SorvetesView from '@/views/SorvetesView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/sorvetes',
    name: 'Sorvetes',
    component: SorvetesView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router