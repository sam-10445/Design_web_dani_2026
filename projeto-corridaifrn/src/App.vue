<template>
  
  <router-view />
  <router-link to="/organizacao">Organização</router-link>
  <router-link to="/contato">Contato</router-link>


  <HelloWorld msg="A variável msg do componente HelloWorld do arquivo App.vue"/>
  <!-- inclusão da marcação de componente -->
  <CardSection dica="Não testar gel de cabelo" />
  <CardSection dica="Usar meia de paliamida."/>
  <CardSection dica="Faça treinos lever antes da prova"/>
  <CardSection dica="É importante um pré-treino que seu corpo"/>
  <CardSection dica="Leve água"/>
  <CardSection dica="Use um tênis adequado de corrida"/>
</template>

<script>
import CardSection from './components/CardSection.vue';
import HelloWorld from './components/HelloWorld.vue'
/*importou o componente*/

export default {
  name: 'App',
  components: {
    HelloWorld, CardSection
  } /*chamada do componente*/
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-wrap: wrap;
}
</style>
