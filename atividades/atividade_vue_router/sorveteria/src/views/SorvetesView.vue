<template>
  <article>
    <h2>Sabores de Sorvetes</h2>
    <ul>
        <li>Chocolate</li>
        <li>Creme</li>
        <li>Morango</li>
        <li>Flocos</li>
        <li>Coco</li>
        <li>Pistache</li>
        <li>Romeu e Julieta</li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'SorvetesView'
}
</script>

<style scoped> /*Lembrar que o "scoped" serve para aplicar o css só a esse arquivo*/
article {
  padding: 20px;
  text-align: center;
}
</style>