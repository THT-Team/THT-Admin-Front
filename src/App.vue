<template>

    <div class="app">
        <side-bar />

        <div class="contents-body" style="width: 100%">
            <nav-bar />

            <div class="view">
                <router-view />
            </div>

        </div>


    </div>


</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBar from '@/components/SideBar.vue'
import NavBar from '@/components/NavBar.vue'

</script>

<style lang="scss">
</style>
