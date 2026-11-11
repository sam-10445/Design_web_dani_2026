<template>
  <p>OLÁ INFOWEB!!</p>
  <HeaderSection /> 
  <main>
    <p>lorm</p>
    <p>lorm</p>
    <p>lorm</p>
    <p>lorm</p>
    <p>lorm</p>
    <p>lorm</p>
  </main>
  <FooterSection />
</template>

<script>

import HeaderSection from './components/HeaderSection.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    HeaderSection, FooterSection
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
