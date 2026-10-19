import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SaboresView from '@/views/SaboresView.vue'
import ContatoView from '@/views/ContatoView.vue'
import PromocoesView from '@/views/PromocoesView.vue'
import SobreNos from '@/views/SobreNos.vue'
import PerguntasFrequentes from '@/views/PerguntasFrequentes.vue'

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
    },
    {
        path: '/contato',
        name: 'Contato',
        component: ContatoView
    },
    {
        path: '/promocoes',
        name: 'Promocoes',
        component: PromocoesView
    },
    {
        path: '/sobrenos',
        name: 'sobrenos',
        component: SobreNos
    },
    {
        path: '/perguntasfrequentes',
        name: 'perguntasfrequentes',
        component: PerguntasFrequentes
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router