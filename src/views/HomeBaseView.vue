<script setup>

import NavBar from '@/components/NavBar.vue'
import { RouterView } from 'vue-router'
import SideBar from '@/components/SideBar.vue'
</script>

<template>
    <div class="app">
        <side-bar />

        <div class="contents-body" style="width: 100%">
            <nav-bar />

            <div class="view">
                <router-view />
            </div>

        </div>
    </div>\
</template>

<style scoped>

</style>