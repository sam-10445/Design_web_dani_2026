<template>
  <HeaderSection></HeaderSection>
  <router-view />
  <FooterSection></FooterSection>

  <main>
  </main>
</template>

<script>
import FooterSection from './components/FooterSection.vue';
import HeaderSection from './components/HeaderSection.vue';

export default {
  name: 'App',
  components: {
    HeaderSection,
    FooterSection
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
