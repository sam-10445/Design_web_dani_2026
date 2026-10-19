<template>
    <article>
        <h2>Sobre Nós</h2>

        <h3>Nossa História</h3>
        <p>
            Tudo começou com uma vontade simples: transformar momentos comuns em momentos mais doces. Assim nasceu a nossa sorveteria, feita para reunir pessoas, sabores e boas lembranças em cada colherada.
        </p>

        <h3>Nosso Propósito</h3>
        <p>
            Mais do que oferecer sorvetes, queremos criar momentos de alegria. Seja em um encontro com amigos, em um passeio em família ou naquele dia em que você simplesmente merece um sorvete.
        </p>

        <h3>Nosso Jeito de Fazer</h3>
        <p>
            Cada sabor é preparado com cuidado, buscando sempre combinar ingredientes de qualidade com muito sabor. Do primeiro ingrediente à última colherada, cada detalhe importa.
        </p>

        <h3>O Que Nos Torna Especiais</h3>

        <ul>
            <li> Ingredientes selecionados</li>
            <li> Sabores irresistíveis</li>
            <li> Feito com carinho</li>
            <li> Variedade para todos os gostos</li>
            <li> Momentos que ficam na memória</li>
        </ul>
        
        <p>
            “Porque alguns dos melhores momentos da vida merecem uma colherada de sorvete.”
        </p>
    </article>
</template>

<script>
export default {
    name: 'ContatoView'
}
</script>

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

h3 {
    margin-top: 30px;
}
</style>