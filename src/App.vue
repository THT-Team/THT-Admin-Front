<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/falling_logo.png" width="125" height="125" />

      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/grid-system">About</router-link>
      </nav>


  </header>

  <router-view />
</template>

<style lang="scss">

</style>
