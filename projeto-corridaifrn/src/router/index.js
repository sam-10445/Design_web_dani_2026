import { createRouter, createWebHistory } from "vue-router";
import OrganizacaoView from "@/views/OrganizacaoView.vue";
import ContatoView from "@/views/ContatoView.vue";

const routes = [
    {
        path: '/organizacao',
        name: 'Organizacao',
        component: OrganizacaoView
    },
    {
        path: '/contato',
        name: 'Contato',
        component: ContatoView
    }

]
const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)
export default router