<template>
    <div>
        <p>{{ dica }}</p>
    </div>
</template>
<script>
    export default{
        name: 'CardSection',
        props: {
            dica: String
        }
    }
</script>

<style scoped>
/* SCOPED: DEFINE O ESCOPO DO CSS PARA APENAS ESTE COMPONENTE */
div{
    background-color: rgb(179, 147, 209);
    padding: 2rem;
    margin: 2rem;
}
</style>