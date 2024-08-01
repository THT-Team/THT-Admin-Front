<template>

    <div class="app">
        <side-bar />
    </div>

    <div class="main">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/grid-system">About</router-link>
    </div>

    <router-view />

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBar from '@/components/SideBar.vue'

</script>

<style lang="scss">
</style>
