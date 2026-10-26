import NoticiasView from "@/view/NoticiasView.vue";
import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
        path: '/',
        name: 'Noticias',
        component: NoticiasView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router