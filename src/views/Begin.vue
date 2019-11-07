<template>
    <div class="col-6">
        <div class="col-12 text-center" v-if="!showLoader">
            <div class="col">
                <h3>Ingresá tus datos para comenzar la trivia</h3>
            </div>
            <form @submit="register">
                <div class="form-row py-1">
                    <div class="col">
                        <input type="text" id="name" class="form-control" placeholder="Nombre" required
                               v-model="name" @focus="onInputFocus" @input="onInputChange">
                    </div>
                </div>
                <div class="form-row py-1">
                    <div class="col">
                        <input type="text" id="phone" class="form-control" placeholder="Teléfono" required
                               v-model="phone" @focus="onInputFocus" @input="onInputChange">
                    </div>
                </div>
                <div class="form-row py-1">
                    <div class="col">
                        <input type="email" id="email" class="form-control" placeholder="Email"
                               @focus="onInputFocus" @input="onInputChange" required v-model="email">
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
        <div class="simple-keyboard" v-if="!showLoader"></div>
    </div>
</template>

<script>
    import Axios from "axios";
    import Keyboard from "simple-keyboard";
    import "simple-keyboard/build/css/index.css";

    export default {
        name: "Begin",
        data() {
            return {
                email: "",
                phone: "",
                name: "",
                showLoader: false,
                selectedInput: "",
                selectedModel: "",
                keyboard: null
            }
        },
        mounted() {
            this.keyboard = new Keyboard({
                onChange: input => this.onChange(input),
                onKeyPress: button => this.onKeyPress(button)
            });
        },
        methods: {
            onInputFocus(event) {
                this.selectedInput = `#${event.target.id}`;
                this.selectedModel = event.target.id;

                this.keyboard.setOptions({
                    inputName: event.target.id
                });
            },

            onInputChange(event) {
                this.keyboard.setInput(event.target.value, event.target.id);
            },

            onChange(input) {
                document.querySelector(this.selectedInput || ".input").value = input;
                this[this.selectedModel] = input
            },

            onKeyPress(button) {
                if (button === "{lock}" || button === "{shift}") this.handleShiftButton();
            },

            handleShiftButton() {
                let currentLayout = this.keyboard.options.layoutName;
                let shiftToggle = currentLayout === "default" ? "shift" : "default";

                this.keyboard.setOptions({
                    layoutName: shiftToggle
                });
            },

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