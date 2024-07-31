<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/falling_logo.png" width="125" height="125" />

      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/grid-system">About</RouterLink>
      </nav>


  </header>

  <RouterView />
</template>

<style scoped>
</style>
