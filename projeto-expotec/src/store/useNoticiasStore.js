import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { noticiasLista } from '@/data/noticiasLista'


export const useNoticiasStore = defineStore('noticias',() => {
    //Define e exporta a store usando o formato Setup Store
    //'noticias' é o identificador único da store dentro do pinia

    const STORAGE_KEY = 'noticias_expotec'
    //cria a chave no localstorage

    const carregarNoticias = () => {
        const noticiasSalvas  = localStorage.getItem(STORAGE_KEY)
        //recupera se tiver algo no storage

        if( noticiasSalvas ){ //verifica se tem algum dado no navegador
            try {
                return JSON.parse(noticiasSalvas)
            } catch (e){
                console.error("erro ao ler as notícias")
            }
        }
        return noticiasLista //caso não tenha nada no localstorage, pega a lista mesmo
    }
    const noticias = ref(carregarNoticias()) //declara a variável de estado como reativa e chama a função carregarNoticias

    function removerNoticia(id){
        const indice = noticias.value.findIndex(j=> j.id === id)
        noticias.value.splice(indice, 1)
    }

    //watch é o observador de mudanças
    watch( 
        //garante a persistência (capacidade de manter as informações salvas) automática dos dados
        () => noticias.value, //referência do valor que será monitorado
        (novasNoticias) => { //essa função será executada sempre que o houver alteração
            localStorage.setItem(STORAGE_KEY, JSON.stringify(novasNoticias)) //grava no localstorage
        },
        {deep: true} //observação profunda, se muda um valor de uma propriedade do objeto, modificará também
    )


    return {
        noticias //variável que poderá ser acessada por outras páginas, por exemplo NoticiasView
    }


})