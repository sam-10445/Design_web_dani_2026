<template>
  <router-view />
  <router-link to="/organizacao">ORGANIZAÇÃO</router-link>
  <router-link to="contato">CONTATO</router-link>
  <CardSection dica="Não testar gel de carboidarto." />
  <CardSection dica="Usar meias de poliamidia."/>
  <CardSection dica="Faça treinos leves antes da corrida."/>
  <CardSection dica="É importante um pré-treino que o seu corpo já conhece."/>
  <CardSection dica="Use um tênis adequada de correr." />
  <CardSection dica="Faça ativação."/>
  <HelloWorld msg="msg do componente no arquivo App.vue."/>
</template>
<!-- INCLUSÃO DA MARCAÇÃO DE COMPONENTE  -->
<script>
import CardSection from './components/CardSection.vue'
/* IMPORTOU O COMPONENTE */
export default {
  name: 'App',
  components: {
    CardSection
    
  } /* CHAMADA DO COMPONENTE */
}
</script>

<style>
#app {
  font-family: 'Times New Roman', Times, serif;
  display: flex;
  flex-wrap: wrap;
}
</style>
