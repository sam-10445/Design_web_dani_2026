
const {createApp, ref, watch} = Vue
// PRECOSI ADICIONAR O WACTH PORQUE ELE IRÁ TRABALHAR COM O localstorage

const lancheifrn = createApp({
    setup(){ 

        const lanchesifrnLS = localStorage.getItem('lanches');
        // CRIA A VARIÁVEL DE LISTA CHAMADA 'lanches' NO LOCALSTORAGE
        // O ARRAY DE OBJETOS PRECISA FICAR DENTRO DO SETUP 
        // PARA MUDAR OS VALORES DAS PROPRIEDADES

        const lanches = ref(
            lanchesifrnLS ? JSON.parse(lanchesifrnLS):
            // CONDIÇÃO ? SE SIM : SE NÃO 
            // JSON.parse - LOCALSTORAGE SÓ REBECE TEXTO, ISTO É, NÃO RECEBE OBJETO
            // lanches É O NOME DA TABELA DO BANCO DE DADOS DE NEVEGADOR
            [ 
            // AQUI É UMA ARRAY OBJETOS, OBJETOS TEM PROPRIEDADES
            {
                descricao: 'BOLO',
                ativo: true,
                imagem: 'bolo.jpg'
            },
            {
                descricao: 'TAPIOCA',
                ativo: false,
                imagem: 'tapioca.jpg'
            },
            {
                descricao: 'BOLACHA',
                ativo: false,
                imagem:'bolacha.jpg'
            }
        ])

        const frutas = ref(
            [ 
            // AQUI É UMA ARRAY OBJETOS, OBJETOS TEM PROPRIEDADES
            {
                descricao: 'GOIABA',
                ativo: true,
                imagem: 'goiaba.jpg'
            },
            {
                descricao: 'MELANCIA',
                ativo: false,
                imagem: 'melancia.jpg'
            },
            {
                descricao: 'TANGERINA',
                ativo: false,
                imagem:'tangerina.jpg'
            }
        ])

        watch(lanches, () =>{
            localStorage.setItem('lanches', JSON.stringify(lanches.value))
        }, {deep: true, immediate: true})
        // watch - VAI OBSERVAR MUDANÇAS NA LISTA E ATUALIZÁ-LO NO localstorage
        // setItem - DEFINE A ALTERAÇÃO
        // JSON.stringify - VAI CONVERTER PARA TEXTO, PORQUE O localstorage NÃO RECEBE OBJETOS
        // deeep:true - ATIVA A ALTERAÇÃO DE OBSERVAÇÃO DAS PRORIEDADES DOS OBJETOS
        // immediate - PARA COLOCAR NO localstorage SÓ ASSIM QUE EU ABRO O SISTEMA(CASO NÃO EXISTA)
        
        function mudarAtivo(item) {
            lanches.value.forEach(i => {
                i.ativo = false; // COLOCA TODOS FALSE PARA SÓ UM FICAR TRUE
            })
            item.ativo = !item.ativo; // ALTERA/TROCA O VALOR BOOLEANO DA PROPRIEDADE 'ativo'
        }
        // a variável teve que ficar dentro do setup porque ela precisava mudar os valores
        //isto é, ser dinâmica, não apenas acessar seus dados, mas também alterar os dados.
        
        const novoLancheInput = ref('');
        const novafrutaInput = ref('');

        function novoLanche(){
            lanches.value.push({
                descricao: novoLancheInput.value,
                ativo: false,
                imagem: novoLancheInput.value+'.jpg'
            })
        }
        function novofruta(){
            frutas.value.push({
                descricao: novafrutaInput.value,
                ativo: false,
                imagem: novafrutaInput.value+'.jpg'
            })
        }
        return{
            mensagem: ref("Olá, Mundo!!"), //é o getElementById            
            lanches,
            mudarAtivo,
            novoLancheInput,
            novoLanche,
            frutas
        }
    }
})
lancheifrn.component('app-header', AppHeader); //CHAMAR O ARQUIVO JS DO HEADER
lancheifrn.component('app-footer', AppFooter); //CHAMAR O ARQUIVO JS DO HEADER
lancheifrn.mount('#app');


/*  PARA COLOCAR OS DADOS NO LOCALSTORAGE:
    É O 'BACO DE DADOS' DO NAVEGADOR 

    PASSO 1: ADCIONAR A FUNÇÃO WATCH NA CRIAÇÃO DE VUE 

    PASSO 2: CRIAR A VARIÁVEL DE LISTA DO LOCALSTORAGE

    PASSO 3: CRIAR O IF NA LISTA INICIAL

    PASSO 4: DEFINIR O WATCH 
*/


/* 
    - ADICIONAR  LISTA DE FRUTAS
        - MOSTRAR OS ITENS NA PÁGINA INICIAL EMBAIXO DOS LANCHES
        - FORMULÁRIO DE ADICIONAR FRUTA DO ADMIN
        
    - EXCLUIR UM ITEM
        - COLOCAR UM SÍMBOLO DE LIXEIRA EM CADA CARD DE LANCHE E CHAMAR A FUNÇÃO DE excluirLanche()
        - FUNÇÃO pop()

    - EDITAR UM ITEM
        - COLOCAR A INFORMAÇÃO NO FORMULÁRIO DE INCLUIR
        - MUDAR A FUNÇÃO DE INCLUI

    - FAZER UMA PÁGINA LOGIN PARA ADMIN 
        - FAZER OUTRA PÁGINA COM O NOME  'usuarios' E PROPRIEDADES: id, email e senha 
        - MUDAR A PÁGINA INDEX DO ADMIN PARA UMA TELA DE LOGIN
        - PÁGINA INDEX ATUAL SERÁ A SEGUNDA... dashboard.html
    
*/