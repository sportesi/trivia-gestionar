<template>
    <div class="col-5 text-center">
        <img src="../assets/images/Edificios-01.png" alt="edificios" class="img-edificios">
        <router-link class="btn btn-lg text-uppercase" to="/begin">comenzar</router-link>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    .btn {
        background-color: #00b8b0;
        box-shadow: 4px 4px 6px -3px black;
        color: white;
        font-size: 45px;
        padding: 0.2rem 2rem 0 2rem;
        line-height: 1;
    }

    .img-edificios {
        width: 100%;
    }
</style>