import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/begin',
        name: 'begin',
        component: () => import('../views/Begin.vue')
    },
    {
        path: '/trivia',
        name: 'trivia',
        component: () => import('../views/Trivia.vue')
    },
    {
        path: '/result',
        name: 'result',
        component: () => import('../views/Result.vue')
    }
];

const router = new VueRouter({
    routes
});

export default router
