<script setup>
    import { useNoticiasStore } from '@/store/useNoticiasStore';
    const noticiasStore = useNoticiasStore()
</script>

<template>
    <h2>NOTÍCIAS</h2>
    <div v-for="noticia in noticiasStore.noticias" :key="noticia.id">
        <p> {{noticia.titulo}}</p>
        <button @click="noticiasStore.removerNoticia(noticia.id)">remover</button>
    </div>
    
</template>