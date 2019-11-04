<template>
    <div class="col-8">
        <div class="col-12 text-light" v-if="!showLoader">
            <div class="row align-items-center my-4">
                <div class="col-12 bg-green text-center py-2">
                    <h3 class="m-0">{{ questions[step].q }}</h3>
                </div>
            </div>
            <div class="row align-items-center justify-content-around my-3">
                <div class="col-5 bg-green p-2" @click="answer(questions[step].o[0].c, questions[step])">
                    <h3 class="m-0">{{ questions[step].o[0].n }}. {{ questions[step].o[0].a }}</h3>
                </div>
                <div class="col-5 bg-green p-2" @click="answer(questions[step].o[1].c, questions[step])">
                    <h3 class="m-0">{{ questions[step].o[1].n }}. {{ questions[step].o[1].a }}</h3>
                </div>
            </div>
            <div class="row align-items-center justify-content-around my-3">
                <div class="col-5 bg-green p-2" @click="answer(questions[step].o[2].c, questions[step])">
                    <h3 class="m-0">{{ questions[step].o[2].n }}. {{ questions[step].o[2].a }}</h3>
                </div>
                <div class="col-5 bg-green p-2" @click="answer(questions[step].o[3].c, questions[step])">
                    <h3 class="m-0">{{ questions[step].o[3].n }}. {{ questions[step].o[3].a }}</h3>
                </div>
            </div>
        </div>

        <div class="col-12 text-center py-5 my-5" v-if="showLoader">
            <img src="../assets/images/loader10.gif" alt="">
        </div>
    </div>
</template>

<script>
    import questions from "../questions";
    import Axios from "axios";

    export default {
        name: "Trivia",
        data() {
            return {
                questions,
                step: 0,
                correctAnswerCount: 0,
                correctAnswers: [],
                showLoader: false
            }
        },
        methods: {
            async answer(correct, answer) {
                this.correctAnswerCount += correct;

                if (correct) {
                    this.correctAnswers.push(answer);
                }

                if (this.step < questions.length - 1) {
                    this.step++
                } else {
                    this.showLoader = true;

                    await this.$store.dispatch('setQuestions', this.correctAnswers);
                    await this.$store.dispatch('setScore', this.correctAnswerCount * 10);

                    let config = {headers: {"x-api-key": "2R8DzMEQVm955DFWXdman2hkgOkf4JBS9C8lniJ8"}};
                    let url = "https://emlpq4bzyd.execute-api.us-west-2.amazonaws.com/default/trivia-register";
                    let data = this.$store.getters.getFinalData;

                    await Axios.post(url, data, config);

                    return await this.$router.push({name: 'result'})
                }
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