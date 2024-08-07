<template>
    <div class="nav">
        <div class="title">
            <h4>{{ title }}</h4>
        </div>

        <div class="flex"></div>

        <div class="menu">
            <b-button variant="light" size="sm" class="button" @click="$store.dispatch('logout')">
                <span class="material-icons">logout</span><br>
                <span class="text">logout</span>
            </b-button>
        </div>
    </div>
</template>

<script setup>

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