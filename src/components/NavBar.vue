<template>
    <div class="nav">
        <div class="title">
            <h4>{{ title }}</h4>
            <h5>[ {{ $store.state.pageName }} ]</h5>
        </div>

        <div class="flex"></div>

        <div class="menu">
            <router-link to="/logout" class="button">
                <span class="material-icons">logout</span><br>
                <span class="text">logout</span>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

let title = 'Falling'

</script>

<style scoped>

.nav {
    padding: 1rem;
    margin: 0.5rem;
    width: 100%;
    height: var(--navbar-height );
    .flex {
        flex: 1 1 0;
    }

}
</style>