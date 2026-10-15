import { createApp } from 'vue'
import App from './App.vue'

import './assets/css/main.css' //importar o css global
import router from './router' //importar o router para adicionar novas páginas

createApp(App).use(router).mount('#app') //crie o App usando Router ...?
