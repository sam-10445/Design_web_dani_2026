const {createApp, ref} = Vue;
// Vue é o objeto
// createApp e ref são métodos que serão usados na aplicação

const lanches = ['Bolo', 'Tapioca', 'Cuscuz'];
// variável de lista é definida antes de ser chamada no 'return' do 
        
const mais_lanches = ['Bolacha', 'Banana', 'Biscoito'];

const lancheifrn = createApp({
// é criação da aplicação
    setup(){
    // função do Composition
        return{ // é o retorno dados dinâmicos
            mensagem: ref("Olá InfoWeb"),
            lanches, 
            mais_lanches
        }
    }
}) 
lancheifrn.component('app-header', AppHeader);
lancheifrn.component('app-footer', AppFooter);
// método componente é para criar o componente (bloco de código que será reaproveitado)
// app-header
lancheifrn.mount('#app')
