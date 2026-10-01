const {createApp, ref, watch} = Vue
//preciso adicionar o watch porque ele irá trabalhar com o localstorage

const lancheifrn = createApp({
    setup(){

        const lanchesifrnLS = localStorage.getItem('lanche');
        //cria a variável de lista chamada 'lanches' no localstorage
        //'lanches :P' é o nome da tabela do banco de dados no navegador

        //o array de objetos precisa ficar dentro do setup para mudar os valores das propriedades
        // a variável teve que ficar dentro do setup porque ela precisava mudar os valores
        //isto é, ser dinâmica, não apenas acessar seus dados, mas também alterar os dados.
        //para poder ficar mudando os dados de ativo (true e false)
        //o ref é pra dizer que os conteúdo é dinâmico
        
        const lanches = ref(
            lanchesifrnLS  ? JSON.parse(lanchesifrnLS):
            //lancheifrn existe? Se sim, transfome ele em texto
            //condição ? -> se sim : -> se não 
            //JSON.parse - localstorage só recebe texto, ito é, não recebe objeto
            
            //aqui é um array de objetos, objetos com propriedades
            [{
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

        watch(lanches, () => {
            localStorage.setItem('lanches', JSON.stringify(lanches.value))
        }, {deep: true, immediate: true})
        //watch vai observar mudanças na lista e atualizá-la no localstorage
        //setItem definir a alteração
        //JSON.stringify vai converter para texto, porque o localstrorage não recebe objetos
        //deep: true - ativar a alteração de observação das propriedades dos objetos (verificar se há mudanças, nem que sejam minimas)
        //immediate - para colocar a lista no localstorage assim que eu abro o sistema (caso não exista)

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

/*
PARA COLCOAR OS DADOS NO Local Storage:
Local Storage é o "banco de dados" do navegador

PASSO 1:
    - Adicionar a função watch na criação do Vue
PASSO 2:
    - Criar a variável de lista do localstorage
PASSO 3:
    - Criar o IF na lista inicial
PASSO 4:
    - Definir o watch 
*/

/*
    ATIVIDADE:
    - Adicionar lista de frutas
        * Mostrar os itens na página inicial embaixo dos lanches
        * Formulário de adicionar fruta no adm
    
    - Excluir um item
        * Colocar um símbolo de lixeira em cada card de lanche e chamar a função de excluirLanche()
        * Função pop()
 
    - Editar um item
        * Colocar a informação no furmulário de incluir
        * Mudar a função de incluir para atualizar o item
        
    - Fazer uma página de login para o adm
        * Fazer outra de com nome 'usuário' e propriedades: id, email e senha
        * Mudar a página a index do adm para uma tela de login
        * Página index atual será a segunda... dashboard.html
*/
