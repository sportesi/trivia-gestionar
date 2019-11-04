import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: null,
        questions: null,
        score: 0
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setQuestions(state, questions) {
            state.questions = questions;
        },
        setScore(state, score) {
            state.score = score
        }
    },
    actions: {
        setUser(context, n) {
            context.commit('setUser', n);
        },
        setQuestions(context, n) {
            context.commit('setQuestions', n);
        },
        setScore(context, n) {
            context.commit('setScore', n);
        }
    },
    getters: {
        getFinalData(state) {
            return {
                email: state.user.email,
                phone: state.user.phone,
                name: state.user.name,
                questions: state.questions,
                score: state.score
            }
        }
    }
});

export default store
