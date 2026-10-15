```vue
<template>
    <article>
        <h2>Sabores de Sorvete</h2>

        <p>
            Descubra uma variedade de sabores deliciosos para todos os gostos.
            Temos opções clássicas, frutadas e cremosas para deixar seu dia
            ainda mais doce!
        </p>

        <h3>Nossos sabores</h3>

        <ul>
            <li>Chocolate</li>
            <li>Morango</li>
            <li>Baunilha</li>
            <li>Cookies</li>
            <li>Manga</li>
            <li>Doce de leite</li>
        </ul>

        <p>
            Escolha seu sabor favorito ou experimente uma combinação diferente!
        </p>
    </article>
</template>

<script>
export default {
    name: 'SaboresView'
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
```