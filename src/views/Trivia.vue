<template>
    <div class="col-8">
        <div class="col-12 text-light" v-if="!showLoader">
            <div class="row align-items-center my-4">
                <div class="col-12 bg-green text-center py-2">
                    <h3 class="m-0">{{ questions[step].q }}</h3>
                </div>
            </div>
            <div class="row align-items-center justify-content-around my-3">
                <TriviaOption :option="questions[step].o[0]" :result="showResult"
                              @click.native="answer(questions[step], 0)"/>
                <TriviaOption :option="questions[step].o[1]" :result="showResult"
                              @click.native="answer(questions[step], 1)"/>
            </div>
            <div class="row align-items-center justify-content-around my-3">
                <TriviaOption :option="questions[step].o[2]" :result="showResult"
                              @click.native="answer(questions[step], 2)"/>
                <TriviaOption :option="questions[step].o[3]" :result="showResult"
                              @click.native="answer(questions[step], 3)"/>
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
    import TriviaOption from "../components/TriviaOption";

    export default {
        name: "Trivia",
        components: {
            TriviaOption
        },
        data() {
            return {
                questions: questions.getRandom(10),
                step: 0,
                correctAnswerCount: 0,
                correctAnswers: [],
                showLoader: false,
                showResult: false
            }
        },
        methods: {
            async answer(answer, i) {
                let correct = answer.o[i].c;
                this.correctAnswerCount += correct;

                if (correct) {
                    this.correctAnswers.push(answer);
                }

                if (this.step < this.questions.length - 1) {
                    setTimeout(() => this.step++, 2000);
                    this.showResult = true;
                    setTimeout(() => this.showResult = false, 1998);
                } else {
                    setTimeout(() => this.showLoader = true, 2000);
                    this.showResult = true;

                    await this.$store.dispatch('setQuestions', this.correctAnswers);
                    await this.$store.dispatch('setScore', this.correctAnswerCount * 10);

                    let config = {headers: {"x-api-key": "2R8DzMEQVm955DFWXdman2hkgOkf4JBS9C8lniJ8"}};
                    let url = "https://emlpq4bzyd.execute-api.us-west-2.amazonaws.com/default/trivia-register";
                    let data = this.$store.getters.getFinalData;

                    await Axios.post(url, data, config);

                    setTimeout(() => this.showResult = false, 1998);
                    setTimeout(() => this.$router.push({name: 'result'}), 2000);
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