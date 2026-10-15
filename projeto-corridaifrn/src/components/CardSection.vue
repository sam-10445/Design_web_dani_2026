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
/* scoped
    Define o escopo do css apenas este componente 
*/
div{
    background-color: pink;
    padding: 2rem;
    margin: 2rem;
}
</style>