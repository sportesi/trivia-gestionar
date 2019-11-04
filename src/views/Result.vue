<template>
    <div class="col-8 text-center text-light">
        <div class="row justify-content-center my-4">
            <div class="col-7 bg-green">
                <h1 class="m-0">¡¡ Felicitaciones !!</h1>
            </div>
        </div>
        <div class="row justify-content-center my-3">
            <div class="col-3 bg-green pt-3">
                obtuviste
                <br>
                <br>
                <h2>{{ score }} puntos</h2>
            </div>
        </div>
        <div class="row justify-content-center mt-5">
            <router-link class="btn btn-lg btn-secondary" to="/">comenzar de nuevo</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Result",
        computed: {
            score() {
                return this.$store.state.score;
            }
        }
    }
</script>

<style scoped>
    .bg-green {
        background-color: #00b8b0;
        border-radius: 5px;
    }
</style>