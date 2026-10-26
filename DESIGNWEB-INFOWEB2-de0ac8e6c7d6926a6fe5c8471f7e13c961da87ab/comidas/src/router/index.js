import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import NoticiasView from '@/views/NoticiasView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/noticias',
        name: 'Notícias',
        component: NoticiasView
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router