<template>
    <article>
        <h2>Contato</h2>

        <p>
            Quer falar com a gente? Entre em contato para tirar dúvidas,
            fazer pedidos ou saber mais sobre nossos sabores!
        </p>

        <h3>Fale conosco</h3>

        <ul>
            <li> Telefone: (84) 99999-9999</li>
            <li> E-mail: contato@sorveteria.com</li>
            <li> Instagram: @sorveteria</li>
            <li> Endereço: Rua das Flores, 123</li>
        </ul>

        <p>
            Será um prazer atender você!
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