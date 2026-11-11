import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css' //improtando o css global
import router from './router' //importando as rotas/páginas (router)

createApp(App).use(router).mount('#app')
