const {createApp, ref} = Vue

const lancheifrn = createApp({
    setup(){

        //o array de objetos precisa ficar dentro do setup para mudar os valores das propriedades
        // a variável teve que ficar dentro do setup porque ela precisava mudar os valores
        //isto é, ser dinâmica, não apenas acessar seus dados, mas também alterar os dados.
        //para poder ficar mudando os dados de ativo (true e false)
        //o ref é pra dizer que os conteúdo é dinâmico
        
        const lanches = ref([
            //aqui é um array de objetos, objetos com propriedades
            {
                descricao: 'Bolo',
                ativo: false,
                imagem: 'bolo.jpg'
            },
            {
                descricao: 'Tapioca',
                ativo: true,
                imagem: 'tapioca.jpg'
            },
            {
                descricao: 'Bolacha',
                ativo: false,
                imagem: 'bolacha.jpg'
            }
        ])
        function mudarAtivo(item){
            console.log('MUDAR ATIVO');
            lanches.value.forEach(i => {
                i.ativo = false; //coloca todos como false para só um ficar true (o que eu acabar de clicar)
            })
            item.ativo = !item.ativo; //troca o valor booleano da propriedade 'ativo'
        }
        const novoLancheInput = ref('');

        function novoLanche(){
            console.log('Adicinando lanche')
            lanches.value.push({
                descricao: novoLancheInput.value,
                ativo: false,
                imagem: novoLancheInput.value+'.jpg'
            })
        }
       
        return{
            mensagem: ref("Olá, Mundo!!"), //é o getElementById            
            lanches,
            mudarAtivo,
            novoLancheInput,
            novoLanche
        }
    }
})
lancheifrn.component('app-header', AppHeader); //CHAMAR O ARQUIVO JS DO HEADER
lancheifrn.component('app-footer', AppFooter); //CHAMAR O ARQUIVO JS DO HEADER
lancheifrn.mount('#app');
