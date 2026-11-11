<template>
    <HeaderSection />
    <router-view />
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'

export default {
    name: 'App',
    components: {
        HeaderSection
    }
}
</script>