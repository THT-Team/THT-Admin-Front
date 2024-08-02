<template>
    <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
        <div class="logo" style="height: 24px">
            <img :src="logoURL" alt="Vue" />
            <span class="text"> 환영합니다.</span>
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons">keyboard_double_arrow_right</span>
            </button>
        </div>

        <h3>Menu</h3>
        <div class="menu">
            <router-link to="/" class="button" @click="$store.commit('setPageName', 'Home')">
                <span class="material-icons">home</span>
                <span class="text">Home</span>
            </router-link>

            <router-link to="/users-list" class="button" @click="$store.commit('setPageName', '회원 목록')">
                <span class="material-icons">description</span>
                <span class="text">회원 목록</span>
            </router-link>

            <router-link to="/team" class="button" @click="$store.commit('setPageName', '신고 / 차단/ 탈퇴')">
                <span class="material-icons">group</span>
                <span class="text">신고 / 차단/ 탈퇴</span>
            </router-link>

            <router-link to="/contact" class="button" @click="$store.commit('setPageName', 'Contact')">
                <span class="material-icons">email</span>
                <span class="text">Contact</span>
            </router-link>

        </div>


    </aside>
</template>

<script setup>
import { ref } from 'vue'
import logoURL from '../assets/falling_logo.png'

const is_expanded = ref(localStorage.getItem('is_expanded') === 'true')

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
    localStorage.setItem('is_expanded', is_expanded.value)
}
</script>

<style lang="scss" scoped>
@import "../assets/css/SideBar.scss";

</style>