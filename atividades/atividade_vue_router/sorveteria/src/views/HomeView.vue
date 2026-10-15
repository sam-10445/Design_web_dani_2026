<template>
    <article>
        <h2>Bem-vindo à nossa Sorveteria!</h2>

        <p>
            Aqui você encontra sorvetes deliciosos, cremosos e feitos para
            deixar qualquer momento mais especial.
        </p>

        <h3>O que você encontra aqui</h3>

        <ul>
            <li> Diversos sabores de sorvete</li>
            <li> Opções para todos os gostos</li>
            <li> Combinações deliciosas</li>
            <li> Um ambiente agradável</li>
        </ul>

        <p>
            Explore nosso site e descubra tudo o que temos para oferecer!
        </p>
    </article>
</template>

<script>
export default {
    name: 'HomeView'
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