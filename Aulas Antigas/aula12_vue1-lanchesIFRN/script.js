const {createApp, ref} = Vue;
//Vue é o objeto
//createApp e ref são métodos que serão usados na aplicação

const lanches = ['Bolo', 'Tapioca', 'Cuscuz']; 
//variável de lista é definida ANTES de ser chamada no 'return' do Vue

const lancheifrn = createApp({
    //é criação da aplicação
    setup(){
        //função do Composition
        return{//é o retorno dos dados dinâmicos
            mensagem: ref('Olá, Infoweb!'),
            lanches
        }
    }
})
lancheifrn.component('app-header', AppHeader)
//método componente é para criar o componente (bloco de código que reaproveitando)
//app-header é nome da marcação de cabeçalho que eu criei
//AppHeader é a variável lá no arquivo header.js
lancheifrn.mount('#app');