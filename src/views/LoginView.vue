<template>
    <div class="login-box">
        <div class="title-logo">
            <h2 id="title1">FALLING ADMIN</h2>
            <h2 id="title2"> LOGIN</h2>
        </div>
        <div class="login-form">
            <b-form-input v-model="id" placeholder="ID" class="mb-3"></b-form-input>
            <b-form-input v-model="password" placeholder="password" class="mb-3"></b-form-input>

            <div class="login-button">
                <b-button variant="success" @click="$store.dispatch('getAccountInfo')"> 로그인</b-button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30rem;
    width: 50rem;
    margin: 120px auto;

    border-radius: 8px;
    border: gray 1px solid;

    .title-logo {
        display: inline-flex;
        padding: 1rem;

        #title1, #title2 {
            padding: 0.5rem;
            font-weight: bold;
        }

        #title2 {
            color: #64748b
        }
    }

    .login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40%;
        padding: 1rem;
    }

    .login-button {
        display: flex;
        justify-content: center;
        width: 100%;
    }
}

</style>