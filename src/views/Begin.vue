<template>
    <div class="col-6">
        <div class="col-12 text-center" v-if="!showLoader">
            <div class="col">
                <h3>Ingresá tus datos para comenzar la trivia</h3>
            </div>
            <form @submit="register">
                <div class="form-row py-1">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Nombre" required v-model="name">
                    </div>
                </div>
                <div class="form-row py-1">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Teléfono" required v-model="phone">
                    </div>
                </div>
                <div class="form-row py-1">
                    <div class="col">
                        <input type="email" class="form-control" placeholder="Email" required v-model="email">
                    </div>
                </div>
                <div class="form-row py-3 px-1">
                    <button class="btn btn-block">
                        comenzar
                    </button>
                </div>
            </form>
        </div>
        <div class="col-12 text-center py-5 my-5" v-if="showLoader">
            <img src="../assets/images/loader10.gif" alt="">
        </div>
    </div>
</template>

<script>
    import Axios from "axios";

    export default {
        name: "Begin",
        data() {
            return {
                email: "",
                phone: "",
                name: "",
                showLoader: false
            }
        },
        methods: {
            async register() {
                this.showLoader = true;
                let data = {email: this.email, phone: this.phone, name: this.name};
                let config = {headers: {"x-api-key": "2R8DzMEQVm955DFWXdman2hkgOkf4JBS9C8lniJ8"}};
                let url = "https://emlpq4bzyd.execute-api.us-west-2.amazonaws.com/default/trivia-register";

                await Axios.post(url, data, config);

                await this.$store.dispatch('setUser', data);

                return await this.$router.push({name: 'trivia'})
            }
        }
    }
</script>

<style scoped>
    input {
        background-color: #00b8b0;
        color: white;
        font-size: 1.5rem;
        border: 0;
    }

    ::placeholder {
        color: white;
    }

    .btn {
        background-color: #00b8b0;
        box-shadow: 4px 4px 6px -3px black;
        color: white;
        font-size: 2rem;
        padding: 0.2rem 2rem 0 2rem;
        line-height: 1;
    }
</style>