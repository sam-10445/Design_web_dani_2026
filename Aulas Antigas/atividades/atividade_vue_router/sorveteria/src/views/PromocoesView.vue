<template>
    <article>
        <h2>Promoções</h2>

        <p>
            Sabor que combina com qualquer momento!  
            Confira nossas promoções especiais e aproveite para deixar seu dia ainda mais doce, refrescante e delicioso. 
        </p>

        <!-- 
        <li v-for="item in promocoes" :key="item.id">
            {{ item.titulo }} : {{ item.texto }}
        </li>
            -->

        <div id="painel">
            <div v-for="item in promocoes" :key="item.id">
                <h3>{{ item.titulo }}</h3> <br>
                {{ item.texto }}
            </div>
        </div>

    </article>
</template>
<script setup>

import { ref } from 'vue'

const promocoes = ref([
  { id: 1, titulo: 'Dobradinha Gelada', texto: 'Na compra de um sorvete, o segundo fica por nossa conta! Aproveite para dividir — ou não.' },
  { id: 2, titulo: 'Terça do Sorvete', texto: 'Toda terça é dia de refrescar! Sabores selecionados com preços especiais para deixar seu dia mais gostoso.' },
  { id: 3, titulo: 'Chocolate em Dobro', texto: 'Para os chocólatras de plantão: escolha seu sabor favorito de chocolate e aproveite uma dose extra de sabor!' },
  { id: 4, titulo: 'Festival de Sabores', texto: 'Experimente novos sabores e descubra seu próximo favorito. Uma seleção especial esperando por você.' }
])

</script>

<script>
export default {
    name: 'PromocoesView'
}
</script>

<!--CSS:-->
<style scoped>
article {
    padding: 20px;
    text-align: center;
}

ul {
    display: inline-block;
    text-align: left;
    line-height: 1.8;
}

p {
    max-width: 700px;
    margin: 15px auto;
    line-height: 1.6;
}

#painel {
    display: flex;
    gap: 20px;
}

div{
    background-color: #FFF0F5;
    padding: 20px;
    margin: 100px; 
    border-radius:20px;
    
    margin: auto;
    width: 50%;
}

h3{
    color: #A83F70;
    font-size: 18px;
}
</style>