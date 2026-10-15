<template>
  <HeaderSection /> <!--incluir o novo componente-->
  <router-view /> <!--incluindo novas páginas-->
  
  <main>
    
  </main>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'; //incluir o novo componente

export default {
  name: 'App',
  components: {
    HeaderSection //incluir o novo componente
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
