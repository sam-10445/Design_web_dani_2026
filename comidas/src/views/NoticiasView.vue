<template>
    <article class="pagina-promocoes">
        <h2>Promoções</h2>

        <p class="descricao">
            Sabor que combina com qualquer momento!
            Confira nossas promoções especiais e aproveite
            para deixar seu dia ainda mais doce, refrescante e delicioso.
        </p>

        <div id="painel">
            <div
                class="promocao"
                v-for="item in promocoes"
                :key="item.id"
            >
                <h3>{{ item.titulo }}</h3>
                <p>{{ item.texto }}</p>
            </div>
        </div>
    </article>
</template>

<script setup>

import { ref } from 'vue'

const promocoes = ref([
  { id: 1, titulo: 'Hambúguer Artesanal', texto: 'Hambúrguer Artesanal por apenas R$ 24,99'},
  { id: 2, titulo: 'Pizza', texto: 'Pizza de Calabresa por apenas R$ 39,99' },
  { id: 3, titulo: 'Açaí', texto: 'Açaí com acompanhamento por apenas R$ 11,99' },
  { id: 4, titulo: 'Batata Frita', texto: 'Batata Frita por apenas R$ 9,99' }
])

</script>

<script>
export default {
    name: 'NoticiasView'
}
</script>